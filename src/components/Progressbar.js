import React, { useEffect, useState } from 'react'

const Progressbar = () => {

const [value,setValue]=useState(0)

useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((prevValue) =>
        (prevValue < 100 ? prevValue + 1 : prevValue)
       );
       console.log(value)
    }, 50);
  
  
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"7px"}}>
       
       <h1>Progress Bar</h1>


       <div style={{backgroundColor:"whitesmoke",width:"500px",border:"1px solid gray",borderRadius:'10px',height:"25px",position:"relative",overflow:"hidden"}}>

     
        <span style={{display:"flex",justifyContent:"center",alignItems:"center",zIndex:"5",position:"absolute",left:"46%",color:value<=50?"black":"white"}}>{value}%</span>
        <div style={{backgroundColor:"green",width:`${value}%`,height:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0"}} />
       </div>
       
  {value < 100 ? <p>Loading...</p> : <p>Completed...</p>}




       </div>
   
  )
}

export default Progressbar