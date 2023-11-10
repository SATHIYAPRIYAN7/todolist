import React, { useState } from 'react'

function PasswordGenerator() {

    const [password, setPassword] = useState('');
   const [passwordLength,setPasswordLength]=useState(8);
   const [includeUppercase, setIncludeUppercase] = useState(true);
   const [includeNumbers, setIncludeNumbers] = useState(true);
   const [includeSymbols, setIncludeSymbols] = useState(true);

   const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        newPassword += chars.charAt(randomIndex);
    }
    setPassword(newPassword);
}


  return (
    <div style={{backgroundColor:"black",color:"white",maxWidth:"500px",margin:"auto",border:"1px solid white",borderRadius:"10px"}}>

<h1 style={{color:"white",textAlign:"center",padding:"20px",fontWeight:"bolder",fontSize:"30px"}}>Password Generator</h1>


<div style={{margin:"20px 0px"}}>

<div style={{display:"flex",justifyContent:"space-between"}}>
    <p style={{marginLeft:"5px"}}>Length</p>
    <p style={{marginRight:"5px"}}>{passwordLength}</p>
</div>
<input style={{color:"white",width:"490px",marginLeft:"5px"}} type='range' min={8} max={16} value={passwordLength} onChange={(e)=> setPasswordLength(e.target.value)}></input>
</div>

<div style={{display:"flex",justifyContent:"space-between",color:"white",width:"490px",marginLeft:"5px",border:"1px solid gray",marginBottom:"15px",marginRight:"10px"}}>
<label style={{padding:"10px"}}  > Include Uppercase: </label> 
<input type = "checkbox"
        checked = {
            includeUppercase
        } style={{ paddingRight:"5px",marginRight:"10px"}}
        onChange = {
            () => setIncludeUppercase(!includeUppercase)
        }
        />
        
</div>


<div style={{display:"flex",justifyContent:"space-between",color:"white",width:"490px",marginLeft:"5px",border:"1px solid gray",border:"1px solid gray",marginBottom:"15px"}}>

<label style={{padding:"10px"}} > Include Numbers: </label> 

<input type = "checkbox" style={{padding:"10px"}} 
        checked = {includeNumbers} style={{ paddingRight:"5px",marginRight:"10px"}}
        onChange = {
            () => setIncludeNumbers(!includeNumbers)
        }
        /> 



</div>



<div style={{display:"flex",justifyContent:"space-between",color:"white",width:"490px",marginLeft:"5px",border:"1px solid gray",marginBottom:"15px"}}>
<label htmlFor="check1" style={{padding:"10px"}} > Include Symbols: </label> 

<input type = "checkbox" id='check1' name="check1"
        checked = {
            includeSymbols
        }  style={{ paddingRight:"5px",marginRight:"10px"}}
        onChange = {
            () => setIncludeSymbols(!includeSymbols)
        }
        /> 


</div>


< button style={{backgroundColor:"Blue",padding:"10px",borderRadius:"10px",marginLeft:"5px",marginTop:"20px",marginBottom:"20px", width:"490px", fontWeight:"bold",border:"1px solid white"}}
        onClick = {
            generatePassword
        } >
        Generate Password </button>



<div style={{display:"flex",justifyContent:"center",marginBottom:"20px",marginLeft:"-10px"}}>

        <h1 style={{marginRight:"20px",fontSize:"25px",marginBottom:"20px",color:"yellow"}}><span style={{fontSize:"18px"}}>Generated Password:</span> {
            password
        } </h1>

<button style={{marginBottom:"20px"}} onClick = {
            () => {
                navigator.clipboard.writeText(password);
            }
        } >
        <svg class = "h-8 w-8 text-red-500"
        viewBox = "0 0 24 24"
        fill = "none"
        stroke = "currentColor"
        stroke-width = "2"
        strok-linecap = "round"
        stroke-linejoin = "round" > < rect x = "9"
        y = "9"
        width = "13"
        height = "13"
        rx = "2"
        ry = "2" /> < path d = "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /> </svg> </button>
</div>










    </div>
  )
}

export default PasswordGenerator