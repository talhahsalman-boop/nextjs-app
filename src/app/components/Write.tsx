"use client"
import React, { useEffect, useState } from 'react'
const Write = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

      const handleSubmit = ()=>{
             
      }
    return (
    <>
      <div className="AddStudents flex w-[95vw] justify-center items-center ">
        <div className="card  bg-gray-50 w-[30vw] flex items-center p-20 rounded-2xl">
        <div className="input-fields flex gap-4 flex-col">
            <label htmlFor="name">Student Name</label>
            <input type="text" name="name" id="name" placeholder='Name' className='w-[19vw] h-12 p-4 rounded-xl border border-gray-300 outline-0' onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Email Address' className='w-[19vw] h-12 p-4 rounded-xl border border-gray-300 outline-0' onChange={(e)=>setEmail(e.target.value)}/>
            <button className='bg-blue-600 text-white w-[10vw] h-10 font-bold rounded-xl self-center mt-4' onClick={handleSubmit}>Add Student</button>
        </div>
        </div>
      </div>
    </>
  )
}

export default Write
