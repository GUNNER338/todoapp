"use client"
import { deleteTask, getTaskOfUser } from '@/services/taskServices'
import React, { useContext, useEffect, useState } from 'react'
import UserContext from '@/context/userContext'
import Tasks from "./Tasks";
import { toast } from 'react-toastify';

const ShowTasks = () => {
    const [tasks, setTasks] = useState([])
    const context=useContext(UserContext)
    async function loadTasks(userId){
        try{
          const tasks=await getTaskOfUser(userId)
          setTasks([...tasks].reverse())
          console.log(tasks)
        }catch(error){
          console.log(error)
        }  
        }

    useEffect(() => {
        if (context.user) {     
            loadTasks(context.user._id);
        }
    }, [context.user])
    

    async function deleteTaskParent(tasksId) {
      try {
        const result = await deleteTask(tasksId);
        console.log(result);
        const newTasks = tasks.filter((item) => item._id != tasksId);
        setTasks(newTasks);
        toast.success("Your task is deleted ");
      } catch (error) {
        console.log(error);
        toast.error("Error in deleting task !!");
      }
    }
  return (
    <>
    <div className='container grid grid-cols-12 mt-3'>
    <div className='col-span-6 col-start-4'>
        <h1 className='text-3xl text-center'>Your Tasks ({tasks.length})</h1>
        {tasks.map((tasks)=>(
            <Tasks tasks={tasks} key={tasks._id} deleteTaskParent={deleteTaskParent} />
        ))}
    </div>
    </div>
    </>
  )
}

export default ShowTasks