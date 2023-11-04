
import React from "react";

import "./App.css"

import PropCointainer from "./components/PropCointainer";
import Navbar from "./components/Navbar";
import QuoteCardList from "./components/QuoteCardList";


function App() {

  
 
  
  return (
    <div style={{maxWidth:"1000px",margin:"auto",minHeight:"100vh"}} >

    <Navbar /> 
    <QuoteCardList />
    </div>
  );
}

export default App;
