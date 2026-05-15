"use client"
import React from 'react'
import { useGetStudentsQuery } from '../features/studentSlice'
import Link from 'next/link'

const Read = () => {
    const { data:students, isSuccess , isError , error , isLoading} = useGetStudentsQuery()
  return (
    <>
     <div className="cards grid grid-cols-4 w-[96vw] gap-5 ml-5 ">
    {isSuccess && students?.map((student)=>( 
        <div className="card bg-gray-100  h-[20vh] rounded-xl flex flex-col justify-center items-center"  key = {student.id}>
    <div className="row">    
        {isLoading && <span>loading...</span>} 
        {isError && <span>Somwthing went wrong</span>} 
    </div>
        <div className="card-Name font-bold text-[19px]">{student.studentName}</div>
        <div className="card-Email text-gray-500">{student.studentEmail}</div>
        <div className="links flex gap-3 text-blue-600">
        <Link href="#" className=' underline'>Card Link</Link>
        <Link href="#" className=' underline'>Another Link</Link>
        </div>
        </div>
        )
    )}
     </div>
    </>
  )
}

export default Read
