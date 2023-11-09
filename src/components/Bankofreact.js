import React, { useEffect, useState } from 'react'



function Bankofreact() {

  
 
   const [home,setHome]=useState(1000);
   const [down,setDown]=useState(0);
   const [loan,setLoan]=useState(0);
   const [int,setInt]=useState(2);
   const[month,setMonth]=useState(0)

   useEffect(()=>{
    console.log(home)
    setDown(home*0.2);
   },[home])

   useEffect(()=>{
    console.log()
    setLoan(home-down)
   },[down])

  

  return (
    <div>
         <div style={{backgroundColor:"blue",height:"60px",display:"flex",alignItems:"center",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <h1 style={{marginLeft:"20px",fontSize:"24px",fontWeight:"bold",color:"white"}}>Bank of React</h1>
         </div>

         <div style={{margin:"20px 20px",maxWidth:"800px"}}>

          <div >
            <h1>Home Value</h1>
            <h1>$ {home}</h1>
            <input type='range' min="1000" max="10000" step="100" value={home} style={{width:'100%'}} onChange={(e)=>setHome(e.target.value) }></input>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <p style={{fontSize:"14px"}}>$1000</p>
              <p style={{fontSize:"14px"}}>$10000</p>
            </div>
         </div>

         <div style={{margin:"20px 0px"}}>
            <h1>Down Payment</h1>
            <h1>$ {down}</h1>
            <input type='range' min="0" max={home} step="100" value={down} style={{width:'100%'}} onChange={(e)=> setDown(e.target.value)}></input>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <p style={{fontSize:"14px"}}>$0</p>
              <p style={{fontSize:"14px"}}>${home}</p>
            </div>
         </div>

         <div>
            <h1>Loan Amount</h1>
            <h1>$ {loan}</h1>
            <input type='range' min="0" max="10000" step="100" style={{width:'100%'}} value={loan} onChange={(e)=> setLoan(e.target.value)}></input>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <p style={{fontSize:"14px"}}>$0</p>
              <p style={{fontSize:"14px"}}>$10000</p>
            </div>
         </div>

         <div style={{margin:"20px 0px"}}>
            <h1>Interest Rate</h1>
            <h1>% {int}</h1>
            <input type='range' min="2" max="18" step="1" value={int} style={{width:'100%'}} onChange={(e)=> setInt(e.target.value)}></input>
            <div style={{display:"flex",justifyContent:"space-between"}}>
              <p style={{fontSize:"14px"}}>%2</p>
              <p style={{fontSize:"14px"}}>%18</p>
            </div>
         </div>

         <div>
         <label htmlFor="cars">Tenur</label>
         <select name="cars" style={{width:"100%",padding:"15px 10px",border:"2px solid black",borderRadius:"10px"}} id="cars" onChange={(e)=>{
          console.log(e.target.value)
         }}>
  <option value="5">5 years</option>
  <option value="10">10 years</option>
  <option value="15">15 years</option>
  <option value="20">20 years</option>
</select>
         </div>


         </div>

         <div>
           
          </div>

        
    </div>
  )
}

export default Bankofreact