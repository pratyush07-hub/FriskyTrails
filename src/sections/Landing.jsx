import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Popupform"

const Landing = () => {
  const [showForm, setShowForm] = useState(false);
  // Toggle function
  const toggleForm = () => setShowForm(!showForm);
  // Function to close modals on scroll
    const handleScroll = () => {
      setShowForm(false);
      
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div>
      <div className="main bg-[url('/images/frontimage.png')] bg-cover ">
        <div className="h-screen  w-full">
          <div className="masker flex">
            <div className="h-screen w-[50%] mt-34 px-26">
              <h1 className="text-8xl text-white font-bold tracking-tighter w-[40vw]">
                Turning Every Journey Into An Adventure
              </h1>
              <h4 className="mt-10 text-xl text-black w-[26vw]">
                Expertly crafted adventures for unforgettable journeys.
                FriskyTrails—taking you beyond the ordinary!
              </h4>
              <div className="buttons flex gap-4 mt-14">
                <button onClick={toggleForm} className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white px-12 py-6">
                  Plan Now
                </button>
                {showForm && <Form onClose={() => setShowForm(false)} />}
                <Link to="/about">
                <button className="bg-white border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-8 py-6">
                  Our Offerings
                </button>
                </Link>
              </div>
            </div>
            <div className="w-[50%] mt-2">
              {/* <div className="img">
                <img className="pr-16" src="/images/homeimage.avif" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
