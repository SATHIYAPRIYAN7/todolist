import React, { useEffect, useState } from 'react'
import { FaBluetooth } from 'react-icons/fa'
import { Navigate } from 'react-router-dom';

function Home() {
    const [text,setText]=useState("");
    const[count,setCount]=useState(0)
    const[words,setWords]=useState(0)
    

    function handleUpper(){
        const upper=text.toUpperCase();
        setText(upper);
    }
    function handleLower(){
        const lower=text.toLowerCase();
        setText(lower);
    }

    function handleSpace(){
        const space=text.replace(/\s{2,}/g, ' ').trim() ;

        setText(space)
    }
        let num;
    useEffect(()=>{
        const count1=text.replace(/\s{2,}/g, ' ').trim();
           num=count1.length
          setCount(num);
             if(text.length>1){
          let arr=text.split(" ");
          setWords(arr.length)
        }else{
            setWords(0)
        }
    },[text])
    
    
  return (
    <div className='mt-20'>
        <h1 className='text-center text-4xl font-bold'>TextUtils - Word Counter, Charecter Counter, Remove Extra Space</h1>
       <div className='w-4/5 m-auto '>
        <div className='flex flex-col mt-10'>
            <label className='text-xl font-bold' htmlFor='util'>Enter Your Text Here:</label>
            <textarea id='util'rows={10} value={text} className='p-3 border-2 rounded-lg' onChange={(e)=> setText(e.target.value)}></textarea>
        </div>
        <div>
            <button className='px-5 py-2 bg-blue-400 rounded-md mt-3 text-white' onClick={handleUpper}>Convert Uppercase</button>
            <button className='px-5 mx-3 py-2 bg-blue-400 rounded-md mt-3 text-white' onClick={handleLower}>Convert Lowercase</button>
            <button className='px-5 py-2 bg-red-400 rounded-md mt-3 text-white'onClick={()=>setText("")}>Clear Text</button>
            <button className='px-5 py-2 mx-3 bg-green-400 rounded-md mt-3 text-white' onClick={()=>  navigator.clipboard.writeText(text)}>Copy To Clipboard</button>
            <button className='px-5 py-2 bg-blue-400 rounded-md mt-3 text-white'onClick={handleSpace}>Remove extra spaces</button>
        </div>

        <div className='my-10'>
            <h1 className='text-xl font-bold mb-2'>Summary of your Text</h1>
            <p>Number of Words :{words}</p>
            <p>Number of Characters:{count}</p>
        </div>
    </div>
    </div>
  )
}

export default Home