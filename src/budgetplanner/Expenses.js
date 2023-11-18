import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TiDelete } from "react-icons/ti";

function Expenses({ expenses, setExpenses }) {
  const newUuid = uuidv4();

  function handleClick(id) {
    // Filter out the expense with the given id
    const filtered = expenses.filter((eve) => eve.id !== id);
    setExpenses(filtered);
    
  }

  return (
    <div className='mb-10'>
      

      <div>
        {expenses.map((e) => {
          return (
            <div key={e.id} className='flex justify-between border-2 border-black mt-1 mx-2'>
              <span className='pl-3 py-2 text-lg'>{e.name}</span>
              <div className='flex justify-center items-center'>
                <span className='pr-3 text-lg'>{e.price} </span>
                <TiDelete className='mr-2 text-xl' onClick={() => handleClick(e.id)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Expenses;
