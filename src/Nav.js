import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import About from './About'
import Homee from './Homee'
export default function Nav() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/Homee" element={<Homee />} />
        <Route path="/About" element={<About />} />
    </Routes>
    </BrowserRouter> 
    
  );
}
