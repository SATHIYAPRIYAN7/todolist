
import React from "react";

import "./App.css"

import PropCointainer from "./components/PropCointainer";
import Navbar from "./components/Navbar";
import QuoteCardList from "./components/QuoteCardList";
import Educationplanner from "./Educationplanner.js";
import Bankofreact from "./components/Bankofreact.js";
import PasswordGenerator from "./components/PasswordGenerator.js";
import RestaurantCardList from "./components/RestaurantCardList.js";
import Progressbar from "./components/Progressbar.js";
import Hotel from "./components/Hotel.js";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


function App() {
  
  
  return (
    <div >

      <BrowserRouter>
            <Navbar/>
       <Routes>
           <Route path="/" element={<Hotel/>} />
           <Route path="/quote" element={<QuoteCardList/>} />
           <Route path="/restaurant" element={<RestaurantCardList/>} />

       </Routes>
   
   
  </BrowserRouter>
  </div>
  )
}

export default App;
