import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Popupform";

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

  // bg-[url('/images/frontimage.jpg')]
  return (
    <div>
      <div className="main bg-[url('/images/frontimage.jpg')] absolute inset-0 z-0 bg-cover">
        <div className="min-h-screen w-full">
          <div className="masker flex flex-col md:flex-row">
            <div className="h-auto md:h-screen w-full lg:w-[50%] pt-50 lg:pt-60 xl:pt-48 px-4 md:px-18 lg:px-26">
              <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl text-center lg:text-left text-white font-bold tracking-tighter w-full md:w-[80vw] lg:w-[46vw] xl:w-[40vw]">
                Turning Every Journey Into An Adventure
              </h1>
              <h4 className="pt-4 md:pt-6 text-base md:text-xl text-center lg:text-left text-white w-full md:w-[80vw] lg:w-[40vw]">
                Expertly crafted adventures for unforgettable journeys.
                FriskyTrails—taking you beyond the ordinary!
              </h4>
              <div className="buttons flex flex-col md:justify-center lg:justify-normal md:flex-row lg:flex-col xl:flex-row gap-4 pt-6 md:pt-10 px-4 md:px-8 lg:px-0">
                <button
                  onClick={toggleForm}
                  className="w-full md:w-auto bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 border font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white px-6 md:px-18 py-4 md:py-6"
                >
                  Plan Now
                </button>

                {showForm && <Form onClose={() => setShowForm(false)} />}

                <Link to="/about" className="w-full md:w-auto">
                  <button className="w-full md:w-auto bg-white border font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white text-black px-6 md:px-12 lg:px-25 xl:px-13 py-4 md:py-6">
                    Our Offerings
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-[50%] hidden md:block">
              {/* <div className="img">
                <img className="pr-16" src="/images/homeimage.avif" alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
