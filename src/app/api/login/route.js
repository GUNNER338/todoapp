import { NextResponse } from "next/server";
import { User } from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connectDb } from "@/helper/db";
connectDb();
export async function POST(request) {
    const{email,password}=await request.json();
    try {
    // try to validate whether the u ser who entered is gunuine or not 
        const user=await User.findOne({email: email})
        if (user==null) {
            throw new Error("User not found !!")
        }
        // 2. Password check 
        const matched=bcrypt.compareSync(password,user.password)
        if (!matched) {
            throw new Error("Password not Matched !")
        }

        // 3. Generate Token
        const token=jwt.sign({
            _id:user._id,
            name:user.name,
        },process.env.JWT_KEY)

        // 4. Create NextResponse --cookie
        const response=NextResponse.json({
            message:"Login Successfully",
            success:true,
            user: user,
        })
        response.cookies.set("authToken",token,{
            expiresIn:"1d",
            httpOnly:true,
        })
        console.log(user)
        console.log(token)
        return response;
} catch (error) {
    return NextResponse.json({
        message:error.message,
        success:false,
    },{
        status:500,
    })
}
}