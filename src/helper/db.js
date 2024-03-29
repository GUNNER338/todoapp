import { mongoose } from "mongoose";
import {User} from "../models/user";

const config={
    isConnected: 0,
}
export const connectDb=async()=>{
    if(config.isConnected){
        return
    }
try {
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:'work_manager',
        });

        console.log("db connected")
        console.log(connection)
        // console.log(connection);
        config.isConnected=connection.readyState;

        //testing and creating new user
        // const uuser=new User({
        //     name:"Test",
        //     email:"4324@gmail.com",
        //     password:"testpasasowrd",
        //     about:"This is testing"
        // })

        // await uuser.save();
} catch (error) {
    console.log("failed to connect with database")
    console.log(error)
}
};