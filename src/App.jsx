import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog"; // Ensure Blog.js exists
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import End from "./sections/End";
import Last from "./components/Last";
import "/src/styles/Class.css";
import Holidays from "./ServicesPages/Holidays";
import Newblog from "./Blogpages/Newblog";
import Scrolltotop from "./components/Scrolltotop";
import Productpage from "./Productpage/Productpage";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Scrolltotop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/holidays" element={<Holidays />} />
        <Route path="/blog/newblog" element={<Newblog />} />  
        <Route path="/tours" element={<Productpage />} />  
      </Routes>
      <End />
      <Last />
    </>
  );
};

export default App;
