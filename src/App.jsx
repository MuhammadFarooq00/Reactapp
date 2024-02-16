// import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Website/Home';
import About from './Website/About';
import Contact from './Website/Contact';
import Service from './Website/Service';
import Navbar from './Navbar';
import Footer from './Website/footer';
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About change1="Welcome to our About page of" change2 = "ContactUS"/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Service' element={<Service/>} />
        {/* <Route path={redirect} element = {<Home/>} /> */}
        <Route element={<Navigate replace to="/" />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
