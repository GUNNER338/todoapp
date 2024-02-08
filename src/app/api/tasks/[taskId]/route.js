import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";
//To get single  Task 
export async function GET(request,{params}){
const {taskId}=params;
try {
    const task=await Task.findById(taskId)
    return NextResponse.json(task)
} catch (error) {
    console.log(error)
    return getResponseMessage("Error in getting task !!",404, false)
}
}


export async function POST(request){
    
}
export async function PUT(request,{params}){
    try {
        
        const {taskId}=params;
        const {title,content,status}=await request.json();
        let task=await Task.findById(taskId)
        task.title=title,
        task.content=content,
        task.status=status
        const updatedTask=await task.save();
        return NextResponse.json(updatedTask)
    } catch (error) {
        
    }
}
export async function DELETE(request,{params}){
    const {taskId}=params;
    try {
        await Task.deleteOne({
            _id:taskId,
        })
        return NextResponse.json({
            message:"task deleted",
            success:true,
        })
    } catch (error) {
        return getResponseMessage("error in deleting",403,false)
    }
}