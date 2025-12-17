import { useState, useEffect } from "react";
import Jointeam from "../components/Jointeam";
import Form from "../components/Popupform";
import Arrow from "../assets/rightarrow.svg";
import Choose from "../sections/Choose";
import Promise from "../sections/Promise";
import { useNavigate } from "react-router-dom";
import FortImage from "/images/fort.webp";

const About = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showJointeam, setShowJointeam] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);
  const toggleJointeam = () => setShowJointeam((prev) => !prev);

  const handleScroll = () => {
    setShowForm(false);
    setShowJointeam(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen mt-23 md:mt-28 lg:mt-30 xl:mt-28 w-full">
      {/* HERO */}
      <div
        className="hidden lg:block"
        style={{
          height: "620px",
          backgroundImage: `url('/about.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white text-8xl text-center pt-110 font-bold">
          Explore India With Us
        </h1>
      </div>

      <div
        className="block lg:hidden"
        style={{
          height: "320px",
          backgroundImage: `url(${FortImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white text-3xl text-center pt-60 font-bold">
          Explore India With Us
        </h1>
      </div>

      {/* WHY SECTION */}
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold mt-4 md:mt-24 text-[rgb(255,99,33)] text-center">
          Why FriskyTrails?
        </h1>
        <div className="w-full md:w-[70vw] mx-auto flex justify-center px-4">
          <p className="text-center mt-2 md:mt-8 text-base md:text-xl text-gray-600">
            <b>
              At FriskyTrails, we believe that travel isn't just about
              reaching a destination—
            </b>
            it's about the thrill of the journey, the experiences that shape
            us, and the stories we create along the way. Whether you're an
            adrenaline junkie, a nature lover, or someone looking to escape
            the ordinary, we bring you 100+ adventure activities and 500+ tour
            packages across 200+ breathtaking locations in India.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center pb-6 md:pb-10 gap-4 md:gap-10 px-4">
          {/* OPEN FORM BUTTON */}
          <button
            onClick={toggleForm}
            className="w-full sm:w-auto bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 mt-4 md:mt-8 border border-transparent flex items-center justify-center gap-1 font-semibold rounded-full active:scale-95 transition-all duration-300 hover:brightness-110 text-white px-6 md:px-8 py-3 md:py-4 shadow-lg"
          >
            Our Packages
            <img
              className="w-4 h-4 md:w-5 md:h-5 invert"
              src={Arrow}
              alt="Arrow"
            />
          </button>

          {/* RESPONSIVE FORM MODAL */}
          {showForm && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-3"
              onClick={() => setShowForm(false)} // backdrop click close
            >
              <div
                className="w-full max-w-[92vw] sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto border border-gray-100"
                onClick={(e) => e.stopPropagation()} // stop bubbling
              >
                {/* HEADER */}
                <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 bg-white rounded-t-2xl border-b border-gray-100">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                    Plan Your Adventure
                  </h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-150 text-gray-500 hover:text-gray-900"
                    aria-label="Close"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* FORM CONTENT */}
                <div className="px-4 py-4 md:px-6 md:py-5">
                  {/* Form component ke andar fields ko full width + good spacing do */}
                  <Form onClose={() => setShowForm(false)} />
                </div>
              </div>
            </div>
          )}

          {/* CALL BUTTON */}
          <button className="w-full sm:w-auto bg-white mt-2 md:mt-8 border-2 border-[rgb(255,99,33)] font-semibold rounded-full active:scale-95 transition-all duration-300 hover:bg-[rgb(255,99,33)] hover:text-white px-6 md:px-8 py-3 md:py-4 shadow-lg">
            <a
              href="tel:+917501516714"
              className="flex items-center justify-center gap-2"
            >
              +91-75015 16714
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884C2.36 3.59 4.27 2 6.586 2h.908c.845 0 1.598.52 1.874 1.312l.722 2.108a1.75 1.75 0 01-.45 1.79L8.27 8.58c.545 1.04 1.414 1.909 2.454 2.454l1.37-1.37a1.75 1.75 0 011.79-.45l2.108.722A2 2 0 0118 11.914v.908C18 15.73 16.41 17.64 14.116 17.997c-2.742.457-5.52-.288-7.59-2.358-2.07-2.07-2.815-4.848-2.358-7.59z" />
              </svg>
            </a>
          </button>
        </div>
      </div>

      <Promise />
      <Choose />

      {/* CAREER SECTION (single responsive block) */}
      <div className="px-4 pb-12 md:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-12 md:mt-24 text-center">
          Let's Redefine Adventure,{" "}
          <span className="text-[rgb(255,99,33)] font-bold">
            TOGETHER!
          </span>
        </h1>
        <div className="w-full md:w-[80vw] xl:w-[60vw] mx-auto flex justify-center">
          <p className="text-center mt-4 md:mt-8 text-base md:text-xl text-gray-600 leading-relaxed">
            FriskyTrails isn't just a career opportunity—it's a launchpad
            for bold ideas, passionate individuals, and limitless growth.
            We thrive in a fast-paced, dynamic culture where creativity
            meets adventure. If you're ready to unlock your potential,
            make an impact, and embark on an exciting professional journey,
            this is your calling! Your adventure with FriskyTrails starts
            now! 🚀
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pb-6 md:pb-10">
          <button
            onClick={() => navigate("/hiring")}
            className="w-full sm:w-auto bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 border-2 border-transparent font-semibold rounded-full active:scale-95 transition-all duration-300 hover:brightness-110 text-white px-8 md:px-12 py-3 md:py-4 shadow-xl text-lg md:text-xl"
          >
            Join Our Team!
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
