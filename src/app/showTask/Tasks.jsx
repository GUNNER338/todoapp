import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

const Task = ({ tasks,deleteTaskParent }) => {
    const {user}=useContext(UserContext);
    function deleteTask(taskId) {
      deleteTaskParent(taskId);
    }
  return (
    <div className={` bg-opacity-20 backdrop-filter backdrop-blur-md p-5 rounded-md  mt-4  ${tasks.status == "completed" ? "bg-green-600" : "bg-gray-100"}`} >
      <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold">{tasks.title}</h1>
        <span onClick={()=>{deleteTask(tasks._id)}}>
        <RxCross1 className="shadow-xl text-2xl cursor-pointer"  />
        </span>
      </div>
        <p className="text-gray-400 font-normal">{tasks.content}</p>
        <div className="flex justify-between mt-3">
        <p className="text-left"><span>Status: {tasks.status}</span></p>
        <p className="text-right"><span>Author: {user.name}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Task;
