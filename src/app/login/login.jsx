"use client"
import UserContext from '@/context/userContext'
import { login } from '@/services/userService'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify'


const Login = () => {
    const router=useRouter()
    const context=useContext(UserContext);
    const [loginData, setloginData] = useState({
        email:'',
        password:'',
    })

    const resetBtn=()=>{
      setloginData({
        email:"",
        password:"",
      })
    }
    const loginFormSubmitted= async(event)=>{
        event.preventDefault()
        console.log(loginData)
        if (loginData.email.trim()==='' || loginData.password.trim()==="") {
          toast.info("Invalid Data Entry!!",{
            position:"bottom-right",
            theme:'dark',
        })
        return;
        }
        
        try {
          const result=await login(loginData)
          console.log(result)
          toast.success("Logged In");
          // redirect
          context.setUser(result.user)
          router.push("/profile/user")

        } catch (error) {
          console.log(error)
          toast.error(error.response.data.message,{
            position:"bottom-right",
            theme:"dark",
            pauseOnHover:false,
          })
        }
    };
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5 ">
        <div className="py-5">
          <h1 className="text-5xl font-bold text-center mt-16 ">Login here</h1>
          <form action="#!" className="mt-3" onSubmit={loginFormSubmitted}>
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
                onChange={(event)=>{setloginData({
                    ...loginData,
                    email: event.target.value,
                  })}}
                  value={loginData.email}
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
                onChange={(event)=>{setloginData({
                    ...loginData,
                    password: event.target.value,
                  })}}
                  value={loginData.password}
                />
            </div>
            <div className="mt-8 flex justify-center">
              <button type="submit" className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                Login!
              </button>
              <button onClick={resetBtn} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">
                  Reset!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Login