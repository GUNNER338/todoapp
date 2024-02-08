import mongoose, { Schema } from 'mongoose';

const UserSachema=new Schema({
    name:String,
    email:{
        type:String,
        unique : true,
        required:[true,"Email required"],
    },
    password:{
        type:String,
        required:[true,"Password required"]
    },
    about:String,
});

export const User=mongoose.models.users||mongoose.model("users",UserSachema);