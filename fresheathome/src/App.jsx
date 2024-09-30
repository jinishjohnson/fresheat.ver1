// Suggested code may be subject to a license. Learn more: ~LicenseLog:1766420452.
import React from 'react';
import './App.css'
// import Navbar from './components/Navbar/navbar';
import Home from './components/Homepage/home';
import Signup from './components/Homepage/signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/navbar" element={<Navbar />} /> */}
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* Add other routes here */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
