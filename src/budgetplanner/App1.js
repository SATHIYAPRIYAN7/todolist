import React, { useState } from 'react'
import Budget from './Budget'
import { Form } from 'react-router-dom'
import Addexpense from './Addexpense'
import Expenses from './Expenses'
import { v4 as uuidv4 } from 'uuid';


function App1() {
    const newUuid = uuidv4();

    const [nam, setName] = useState("");
    const [price, setPrice] = useState("");
    const [expenses, setExpenses] = useState([])

  
    function saveClick() {
        if(nam && price){
        setExpenses(prevExpenses => [
          ...prevExpenses,
          { id: uuidv4(), name: nam, price: price }
        ]);
      
        
       
        setName("")
        setPrice("");}else{
            alert("please enter a name and price")
        }
      }

       
    
    return (
        <div style={{ maxWidth: "800px", margin: "auto" }}>
            <h1 className='text-center text-3xl font-bold mt-4'>MY BUDGET PLANNER</h1>

            <div className='mt-6'>
                <Budget expenses={expenses} />
            </div>
            <div>
                <Addexpense nam={nam} setName={setName} price={price} setPrice={setPrice} saveClick={saveClick} />
            </div>
            <div>
            <h1 className='text-center mt-4 text-xl font-semibold'>EXPENSES</h1>
                {expenses.length > 0 ? (
                    <Expenses expenses={expenses} setExpenses={setExpenses} />
                ) : (
                    <p className='text-center'>No Items available</p>
                )}
            </div>
        </div>
    )
}

export default App1