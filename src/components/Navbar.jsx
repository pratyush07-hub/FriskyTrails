import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Arrow from '../assets/arrow.svg'
import Admodal from "../components/Admodal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAdmodal, setShowAdmodal] = useState(false);
    // Toggle function
    const toggleAdmodal = () => setShowAdmodal(!showAdmodal);
    const toggleModal = () => setShowModal(!showModal);


  return (
    <div className="flex justify-center">
      <div className="h-[10vh] w-[90vw] bg-[rgb(255,255,255)] flex justify-around items-center rounded-full p-5">
        <div className="flex justify-center items-center">
          <img className="h-26 w-26" src="/logo.PNG" alt="" />
          <h1 className="text-4xl font-semibold">FriskyTrails</h1>
        </div>
        <div className="flex gap-10 p-10">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        
          <button
            onClick={toggleAdmodal}
            className="flex justify-center items-center cursor-pointer"
          >
            Adventures
          </button>
          {showAdmodal && <Admodal onClose={() => setShowAdmodal(false)} />} 
          {/* jab showmodal true hoga tab hi Modal open hoga */}
          <button
            onClick={toggleModal}
            className="flex justify-center items-center cursor-pointer"
          >
            Services
            <img
              className="w-5 h-5 object-cover"
              src={Arrow}
              alt="arrow"
            />
          </button>
          {showModal && <Modal onClose={() => setShowModal(false)} />} 
          {/* jab showmodal true hoga tab hi Modal open hoga */}
          <Link to="/blog">Blog</Link>
        </div>
        <div className="flex">
          <Link to="/contact">
            <button className="bg-white border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-8 py-4">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
