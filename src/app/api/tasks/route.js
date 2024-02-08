import {NextResponse} from 'next/server'
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { connectDb } from '@/helper/db';
import jwt from "jsonwebtoken"
connectDb();
//get all the tasks
export async function GET(request){
try {
    const tasks=await Task.find()
    return NextResponse.json(tasks);
} catch (error) {
    console.log(error)
    return getResponseMessage("Error in getting data!!",404, false)
}
}
 

//To create all the task 
export async function POST(request){
const {title, content , userId, status}=await request.json();

//fetching logged in user id
const authToken=request.cookies.get("authToken")?.value;
    // console.log(authToken)
    const data= jwt.verify(authToken,process.env.JWT_KEY)
    // console.log(data)

try {
    const task= new Task({
        title,
        content,
        userId:data._id,
        status,
    })
    const createdTask=await task.save()
    return NextResponse.json(createdTask,{
        status:201,
    })
} catch (error) {
    console.log(error)
    return getResponseMessage("Error in creating task",500,false)
    }}

  

//To 