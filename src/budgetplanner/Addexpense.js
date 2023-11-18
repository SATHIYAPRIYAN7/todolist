import React from 'react'

function Form({nam,setName,price,setPrice,saveClick}) {

  
  return (
    <div className='mt-5 '>
    
        <h1 className='text-center text-2xl font-semibold'>ADD EXPENSES</h1>
        
        <div>
            <div className='flex flex-col px-3 mb-4'>
                <label className='font-semibold' htmlFor='name'>Name</label>
                <input className='border-2 border-black rounded-md pl-3 py-2' id='name' type='text' value={nam} onChange={(e)=>setName(e.target.value)}></input>
            </div>

            <div className='flex flex-col px-3 mb-4'>
                <label className='font-semibold' htmlFor='price'>Price</label>
                <input className='border-2 border-black rounded-md pl-3 py-2' id='price' value={price} type='number' onChange={(e)=>setPrice(e.target.value)}></input>
            </div>
            <div className='flex justify-center'><button className='text-lg bg-blue-500 text px-12 py-2 rounded-md text-white' onClick={saveClick}>Save</button>
            </div>
            
        </div>
    </div>
  )
}

export default Form