import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Header from './components/Header'
import End from './sections/End'
import Last from './components/Last'
import '/src/styles/Class.css';
import Holidays from './ServicesPages/Holidays'


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/services/holidays' element={<Holidays />} />
      </Routes>
      <End />
      <Last />
    </>
  )
}

export default App
