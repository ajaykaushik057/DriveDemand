import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact";
import Host from "./components/Host/Host";
import Home from "./components/Home/Home";
import LoginPage from "./components/Login/LoginPage";
import Signup from "./components/SignUp/SignUp";
import Location from "./components/Location/Location";
import CarRental from "./components/Rental/CarRental";
import AvailableCars from "./components/AvailableCars/AvailableCars";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/host" element={<Host />} /> 
        <Route path="/location" element={<Location />} /> 
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/register" element={<Signup />} /> 
      </Routes>
      {/* <CarRental/> */}
    </div>
  );
}

export default App;


