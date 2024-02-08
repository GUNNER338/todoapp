"use client";
import { signUp } from "@/services/userService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const  SignUpPage = () => {
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    about:"",
  });

  const doSignUp= async(event)=>{
    event.preventDefault()
    if (data.name.trim()=='' || data.name==null) {
      toast.error("Name is Required!!",{
        position:"bottom-right",
        theme:'dark',
      })
      return;
    }

    // form submit
    try {
      const result= await signUp(data)
      console.log(result)
      toast.success("User is Registered!!",{
        position:"bottom-right",
        theme:"dark",
      })
      setData({
        name:"",
        email:"",
        password:"",
        about:"",
      });
    } catch (error) {
      console.log(error.response.data.message);
      toast.error("SignUp Error!! "+ error.response.data.message,{
        position:"bottom-right",
        theme: "dark",
      })
    }
  }
  const resetForm=()=>{
    setData({
      name:"",
      email:"",
      password:"",
      about:"",
    })
  }
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <h1 className="text-5xl font-bold text-center mt-1 ">Signup here</h1>
          <form action="#!" className="mt-3" onSubmit={doSignUp}>
            {/* name */}
            <div className="mt-1 ">
              <label
                htmlFor="user_name"
                className="block text-lg font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-3 rounded-full bg-gray-800 focus:ring-gray-500 border-gray-600"
                placeholder="Enter Here"
                id="user_name"
                name="user_name"
                onChange={(event)=>{setData({
                  ...data,
                  name: event.target.value,
                })}}
                value={data.name}
              />
            </div>
            {/* email */}
            <div className="mt-1 ">
              <label
                htmlFor="user_email"
                className="block text-lg font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-full bg-gray-800 focus:ring-gray-500 border-gray-600"
                placeholder="Enter Here"
                id="user_email"
                name="user_email"
                onChange={(event)=>{setData({
                  ...data,
                  email: event.target.value,
                })}}
                value={data.email}
              />
            </div>
            {/* password */}
            <div className="mt-1 ">
              <label
                htmlFor="user_password"
                className="block text-lg font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-full bg-gray-800 focus:ring-gray-500 border-gray-600"
                placeholder="Enter Here"
                id="user_password"
                name="user_password"
                onChange={(event)=>{setData({
                  ...data,
                  password: event.target.value,
                })}}
                value={data.password}
              />
            </div>
            {/* about */}
            <div className="mt-3 ">
              <label
                htmlFor="user_about"
                className="block text-lg font-medium mb-2"
              >
                About
              </label>
              <textarea
                className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-500 border-gray-600"
                placeholder="Enter Here"
                id="user_about"
                rows={8}
                name="user_about"
                onChange={(event)=>{setData({
                  ...data,
                  about: event.target.value,
                })}}
                value={data.about}
                >
              </textarea>
            </div>
            <div className="mt-4 flex justify-center">
              <button type="submit" className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                Sign Up!
              </button>
              <button onClick={resetForm} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                  Reset!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
