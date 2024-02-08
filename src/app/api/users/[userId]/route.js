import { NextResponse } from "next/server";
import { User } from "@/models/user";

export async function GET(request, {params}) {
    const {userId} =params;
    const user=await User.findById(userId).select("-password")
    return NextResponse.json(user);
}


export async function DELETE(request,{params}){
    const {userId}=params;
    try {
        await User.deleteOne({
            _id:userId,
        })
        return NextResponse.json({
            message:"user deleted",
            success:true,
        })
    } catch (error) {
        return NextResponse.json({
            message:"Error in deleting User!!",
            success:false,
        })
    }
}

export async function PUT(request,{params}){
    const {userId}=params
    const {name,password,about}=await request.json()

    try {
        const user=await User.findById(userId).select("-password");
        user.name=name;
        user.password=password;
        user.about=about;
        
        const updatedUser=await user.save();
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({
            message:"there is an error in updation",
            success:false,
        })
    }
}