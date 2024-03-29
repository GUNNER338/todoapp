import { connectDb } from "@/helper/db"
import { User } from "@/models/user";
import {NextResponse} from "next/server"
import bcrypt from "bcrypt"
connectDb();
export async function GET(request){
    let users=[]
    try {
        users=await User.find().select("-password")
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message:"failed to get users",
            success: false,
        })
    }
        return NextResponse.json(users);
}

export async function POST(request) {
    const{name,email,password,about}=await request.json()
    const user=new User({
        name,
        email,
        password,
        about,
    })

try {
    user.password=await bcrypt.hash(user.password,
        parseInt(process.env.BCRYPT_SALT))
    const createdUser=await user.save();

    const response=NextResponse.json(user,{
        status:201,
    });

    return response;
} catch (error) {
    return NextResponse.json({
        message:"failed to create user !!",
        status:false,
    },
    {
        status:500,
    })
}
}