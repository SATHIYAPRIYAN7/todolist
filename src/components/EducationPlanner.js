
import React, { useState } from "react";

const EducationPlanner = () => {

    const [arr, setarr] = useState([])
    const [text, setText] = useState("");
    const [hour, sethour] = useState(0);

    const savedSubjects = JSON.parse(localStorage.getItem('arr1')) || [];
  if (savedSubjects.length > 0 && arr.length === 0) {
    setarr(savedSubjects);}
  
 
    function handleChange(event){
      setText(event.target.value);
      
    }

    function hourChange(e){
     sethour(e.target.value);
    }

  function handleClick(){
    if(text && hour>0){

      let updates=[...arr,{text:text,hour:hour}]
      setarr(updates)
      setText("");
      sethour(0)
      localStorage.setItem('arr1', JSON.stringify(updates));
    
  }
    
  }


  function deleteItem(e){

    let updates=[...arr];

  
  updates.splice(e,1);

    setarr(updates)
    localStorage.setItem('arr1', JSON.stringify(updates));

  }


function decrease(e){

  let upadates =[...arr];
  if(upadates[e].hour>0){upadates[e].hour=parseInt(upadates[e].hour)-1;
  }
  setarr(upadates);
  
  localStorage.setItem('arr1', JSON.stringify(upadates));
}

  

  console.log(arr);


  return (
    <div style={{maxWidth:"1600px",margin:"auto",minHeight:"100vh"}} >
       

    <h1>To do list</h1>
    <div>
     <input type="text" placeholder="enter a text" onChange={handleChange} value={text}></input>
     <input type="number" placeholder="hours" onChange={hourChange} value={hour}></input>
     <button onClick={handleClick}>Add</button>
    </div>
 <div>

 </div>

 {arr.map((e,index)=>{
    return <div><h4>{e.text}<span style={{marginLeft:"20px"}}>{e.hour}</span></h4>
    <button onClick={()=> deleteItem(index)}>Delete</button> <button onClick={()=>decrease(index)}>-</button></div>;    
 })}
</div>
  )
}

export default EducationPlanner