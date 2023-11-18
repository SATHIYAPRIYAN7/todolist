import React from 'react'

function Budget({expenses}) {
    const reduced=expenses.reduce((total,val)=>{
        let value=parseInt(val.price)
      return total+=value;
    },0)

    console.log(reduced)

    let bgval = reduced > 2000 ? 'bg-red-300' : 'bg-slate-300';

  return (
    <div className='flex sm:justify-between justify-center items-center ml-3 mr-3 flex-wrap'>
        <div className='border-2 bg-slate-300 rounded-md'>
            <p className='px-10 py-4'>Budget:Rs.2000</p>
        </div>
        <div className={`border-2 ${bgval} rounded-md`}>
            <p className='px-10 py-4'>Remaining:Rs.{2000-reduced}</p>
        </div>
        <div className='border-2 bg-slate-300 rounded-md'>
            <p className='px-10 py-4'>Spent:Rs.{reduced}</p>
        </div>
    </div>
  )
}

export default Budget