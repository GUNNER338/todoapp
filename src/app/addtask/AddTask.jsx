"use client";
import React, { useState } from 'react'
import { addTask } from '@/services/taskServices';
import { toast } from 'react-toastify';


const AddTask = () => {
  const [task, setTask] = useState({
    title:"",
    content:"",
    status:"none",
    //temporary solutions
    userId:"",
  })
  
  const handleAddTask=async(event)=>{
    event.preventDefault();
    console.log(task);
    try {
      const result= await addTask(task)
      console.log(result)
      toast.success("You Successfully added your task",{
        position:"bottom-right",
        theme:'dark',
      })

      setTask({
        title:"",
        content:"",
        status:"none",
      })
    } catch (error) {
      console.log(error)
      toast.error("Error 404",{
        position:"bottom-right",
        theme:'dark',
      })
    }
  };
  return (
    <div className='grid grid-cols-12 justify-center'>
      <div className='col-span-6 col-start-4 p-5 shadow-sm'>
        <h1 className='text-5xl flex justify-center font-bold mb-3'>Add Task Component</h1>
        <form action="#" onSubmit={handleAddTask}>
          <div className='mt-4'>
            <label htmlFor="#!" className='text-xl'>Title</label>
            <input type="text" className='w-full p-3 rounded-full bg-gray-800 focus:ring-gray-500 border-gray-600' id='task_title' name='task_title' onChange={(event)=>{
              setTask({
                ...task,
                title:event.target.value,
              })
            }} 
            value={task.title}/>
          </div>

          <div className='mt-4'>
            <label htmlFor="#" className='text-xl'>Content</label>
            <textarea type="text" className='w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-500 border-gray-600' rows={5} id='task_content'  name='task_content' onChange={(event)=>{
              setTask({
                ...task,
                content:event.target.value,
              })
            }} 
            value={task.content}/>
          </div>
          <div className='mt-4' htmlFor='task_status'>
            <label htmlFor="task_status" className='block text-xl font-medium mb-2'>
              Status
            </label>
            <select id="task_status" className='w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-500 border-gray-600' name='task_content' onChange={(event)=>{
              setTask({
                ...task, 
                status:event.target.value,
              })
            }} 
            value={task.status}>
              <option value="none"  disabled>Select your Option</option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
              </select>
          </div>
          <div className='mt-4 flex justify-center'>
          <button className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add Task</button>
          <button className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTask