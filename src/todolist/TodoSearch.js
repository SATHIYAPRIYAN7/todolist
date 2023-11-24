import React from 'react'
import { IoSearchCircleSharp } from "react-icons/io5";

function TodoSearch() {
  return (
    <div className='border-2 mt-3 w-11/12 border-gray-400 mb-4 flex justify-between items-center '>
    <input className='w-80  border-none outline-none  pl-2' type='text' placeholder='search'/><button><IoSearchCircleSharp  className='text-3xl ' /></button>
    </div>
  )
}

export default TodoSearch