import { useState, useRef, useEffect } from "react";
import Jointeam from "../components/Jointeam";

const Hiring = () => {
  const [showJointeam, setShowJointeam] = useState(false);
  const formRef = useRef(null);

  // Close modal when clicking outside
  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      setShowJointeam(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openings = [
    "Software Engineer / Senior Software Engineer",
    "Graphic Designer",
    "Social Media",
    "Frontend Developer",
    "Travel Executive / Travel Consultant",
  ];

  return (
    <div className="min-h-screen mt-23 md:mt-28 lg:mt-30 xl:mt-28 w-full">
      {/* Banner */}
      <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh]">
        <img
          src="/images/hiring.png"
          alt="Hiring Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-6 md:mt-12 text-center px-4">
        Let's Redefine Adventure,{" "}
        <span className="text-[rgb(255,99,33)] font-bold">TOGETHER!</span>
      </h1>

      {/* Subtext */}
      <div className="w-full md:w-[80%] lg:w-[70%] mx-auto">
        <p className="text-center mt-4 md:mt-8 text-sm sm:text-base md:text-lg text-gray-600 px-4">
          FriskyTrails isn't just a career opportunity—it's a launchpad for bold
          ideas, passionate individuals, and limitless growth. We thrive in a
          fast-paced, dynamic culture where creativity meets adventure. If you're
          ready to unlock your potential, make an impact, and embark on an exciting
          professional journey, this is your calling! Click the button tailored just
          for you—whether you're drawn to marketing, sales, tech, or beyond. Your
          adventure with FriskyTrails starts now! 🚀
        </p>
      </div>

      {/* Current Openings */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-8 md:mt-12 mb-4 md:mb-10 text-center">
        Current Openings
      </h1>

      {/* Opening Cards */}
      <div className="flex flex-col gap-4 px-4 pb-10">
        {openings.map((opening, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row border rounded-xl border-gray-300 w-full md:w-[90%] lg:w-[70%] mx-auto justify-between items-center md:items-start"
          >
            <div className="text-lg sm:text-xl md:text-2xl font-semibold px-4 md:px-6 py-4 md:py-6 text-center md:text-left">
              {opening}
            </div>
            <div className="px-4 md:px-6 pb-4 md:pb-6 mt-4 w-full md:w-auto flex justify-center items-center relative">
              <button
                onClick={() => setShowJointeam(true)}
                className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 text-white rounded-lg px-4 sm:px-5 py-2 sm:py-3 font-semibold active:scale-95 transition duration-200"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Jointeam Modal */}
      {showJointeam && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div
            ref={formRef}
            className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowJointeam(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 font-bold text-lg"
            >
              ✕
            </button>

            {/* Jointeam Form */}
            <Jointeam onClose={() => setShowJointeam(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hiring;
