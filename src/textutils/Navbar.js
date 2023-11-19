import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between px-5 items-center'>
        <div className='flex gap-4 items-center ml-4'>
            <h1 className='text-2xl text-blue-400 font-bold mr-3'>TextUtils</h1>
            <p>Home</p>
            <p>About Us</p>
            <p>Contact</p>
        </div>
        
    </div>
  )
}

export default Navbar