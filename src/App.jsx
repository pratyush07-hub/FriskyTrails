import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Header from './components/Header'


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </>
  )
}

export default App
