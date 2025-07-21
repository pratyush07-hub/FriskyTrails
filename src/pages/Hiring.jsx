import React, { useState, useEffect } from "react";
import Jointeam from "../components/Jointeam";

const Hiring = () => {
  const [showForm, setShowForm] = useState(false);
  const [showJointeam, setShowJointeam] = useState(false);
  // Toggle function
  const toggleForm = () => setShowForm(!showForm);
  const toggleJointeam = () => setShowJointeam(!showJointeam);
  // Function to close modals on scroll
  const handleScroll = () => {
    setShowForm(false);
    setShowJointeam(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    {
        Openings: "Software Engineer/ Senior Software Engineer",    
    },
    {
        Openings: "Graphic Designer",    
    },
    {
        Openings: "Social Media",    
    },
    {
        Openings: "Frontend Developer",    
    },
    {
        Openings: "Travel Executive/travel Consultant",    
    },
  ]
  return (
    <>
      <div className="min-h-screen w-full">
      <div className="w-full h-100">
  <img
    src="/images/hiring.png"
    alt="Hiring Banner"
    className="w-full h-full object-fill object-center"
  />
</div>

        <h1 className="text-3xl md:text-4xl font-semibold mt-8 md:mt-12 text-center">
          Let's Redefine Adventure,{" "}
          <span className="text-4xl text-[rgb(255,99,33)] font-bold">
            TOGETHER!
          </span>
        </h1>
        <div className="w-full md:w-[70vw] mx-auto flex justify-center">
          <p className="text-center mt-4 md:mt-8 text-base md:text-xl text-gray-600">
            FriskyTrails isn't just a career opportunity—it's a launchpad for
            bold ideas, passionate individuals, and limitless growth. We thrive
            in a fast-paced, dynamic culture where creativity meets adventure.
            If you're ready to unlock your potential, make an impact, and embark
            on an exciting professional journey, this is your calling! Click the
            button tailored just for you—whether you're drawn to marketing,
            sales, tech, or beyond. Your adventure with FriskyTrails starts now!
            🚀
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mt-8 md:mt-12 mb-6 md:mb-10 text-center">
          Current openings
        </h1>
        <div className="h-auto md:h-[80vh]">
        {data.map((item,index) => (
        <div key={index} className="flex flex-col md:flex-row border w-full md:w-[70vw] m-auto border-gray-300 items-center justify-between">
          <div className="text-2xl md:text-3xl font-semibold px-4 md:px-10 py-4 md:py-6">
            {item.Openings}
          </div>
          <div className="px-10 py-6">
            <button
              onClick={toggleJointeam}
              className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 border-1 flex gap-1 font-semibold rounded-lg active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white px-4 md:px-6 py-2 md:py-3"
            >
              Apply Now
            </button>
            {showJointeam && (
              <Jointeam onClose={() => setShowJointeam(false)} />
            )}
          </div>
        </div>
        ))}
        </div>
      </div>
    </>
  );
};

export default Hiring;
