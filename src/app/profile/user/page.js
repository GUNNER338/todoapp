// components/UserProfile.js
"use client"
import React, {useContext} from 'react';
import UserContext from "@/context/userContext";
const UserProfile = () => {
  const context=useContext(UserContext)
  console.log(context)
  return (
    <div className='flex items-center justify-center mt-64'>


    <div className="bg-gray-100 w-96  p-8 rounded-lg shadow-md ">
      
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
        {
          context.user && (
            <>
            <h1 className='uppercase'>{context.user.name}</h1>
            </>
          )
        }
      </h2>
      <p className="text-gray-600 text-center">{
        context.user && (
          <>
            <h1>{context.user.about}</h1>
            </>
          )
        }</p>
      <div className="mt-4">
        <p className="text-gray-700 flex">
          <span className="font-semibold">Email: </span> {
          context.user && (
            <>
            <h1>{context.user.email}</h1>
            </>
          )
        }
        </p>
        {/* Add more user details as needed */}
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
