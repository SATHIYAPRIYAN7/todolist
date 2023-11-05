
import React from "react";

import "./App.css"

import PropCointainer from "./components/PropCointainer";
import Navbar from "./components/Navbar";
import QuoteCardList from "./components/QuoteCardList";
import Educationplanner from "./Educationplanner.js";


function App() {

  
 
  
  return (
    <div style={{maxWidth:"1600px",margin:"auto",minHeight:"100vh"}} >

      <Educationplanner />
    </div>
  );
}

export default App;
