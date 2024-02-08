"use client";

import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CustomNavbar = () => {
  const context=useContext(UserContext)
  console.log(context)
  const router=useRouter();

  async function doLogout(){
    try {
      const result=await logout()
      console.log(result)
      context.setUser(undefined)
      router.push("/")
    } catch (error) {
      toast.error("Logout Error",{
        theme:"dark",
        pauseOnHover:false,
      })
    }
  }
  return (
    <>
      <nav className="bg-blue-600 h-16 py-5 px-5 flex justify-between items-center">
        <div>
          <h1>
            <Link href="/">Set Your Task</Link>
          </h1>
        </div>
        <div>
          <ul className="flex space-x-5">
            {
              context.user && (
                <>
                <li>
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/addtask" className="hover:text-blue-300">
                Add Task
              </Link>
            </li>
            <li>
              <Link href="/showTask " className="hover:text-blue-300">
                Show Task{" "}
              </Link>
            </li>
                </>
              )
            }
          </ul>
        </div>
        <div className="">
          <ul className="flex space-x-4">
            {context.user && (
              <>
              <li>
              <Link href="/login" className="hover:text-blue-300 font-bold uppercase">{context.user.name}</Link>
            </li>
            <li>
              <Link href="/signup" onClick={doLogout} className="hover:text-blue-300">Logout</Link>
            </li>
              </>
              )
            }
            {!context.user && (
              <>
              <li>
              <Link href="/login"  className="hover:text-blue-300">Login</Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-blue-300">Signup</Link>
            </li>
              </>
              )
            }
          </ul>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;
