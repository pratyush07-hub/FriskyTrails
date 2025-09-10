import Smallbox from "./Smallbox";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";

const End = () => {
  return (
    <>
      {/* Laptop View (xl and above only) */}
      <div className="hidden xl:block">
        <div className="h-[85vh] w-full bg-[rgb(10,3,34)] relative flex justify-center items-center">
          <div className="grid grid-cols-3 border-y-1 mt-14 border-gray-500 place-items-center">
            <div className="h-[70vh] w-[26vw]">
              <div className="flex mr-40 mt-20 justify-center items-center">
                <img
                  className="h-20 w-20 bg-white rounded-full"
                  src="/logo.PNG"
                  alt=""
                />
                &nbsp;
                <h1 className="text-3xl font-bold text-white">FriskyTrails</h1>
              </div>
              <h3 className="text-gray-400 font-semibold w-[18vw] mt-8 ml-4">
                Uttarapan Market Complex, G15, Hill Cart Rd, opposite of Biswadeep Cinema Hall, Ward 1, Patiram Jote, Siliguri, West Bengal 734001
              </h3>
              <div className="email">
                <h3 className="text-gray-400 font-bold ml-4 mt-4">
                  <a href="tel:+917501516714">+91-75015 16714</a>
                </h3>
                <h3 className="text-gray-400 font-bold ml-4 mt-2">
                  <a href="mailto:friskytrails@gmail.com">friskytrails@gmail.com</a>
                </h3>
              </div>
              <div className="images flex ml-4 mt-6 items-center gap-4">
                <a href="https://www.facebook.com/friskytrails/" target="_blank" rel="noopener noreferrer">
                  <img className="w-8 h-8 object-cover bg-white rounded-lg" src={Facebook} alt="" />
                </a>
                <a href="https://x.com/frisky_trails" target="_blank" rel="noopener noreferrer">
                  <img className="w-8 h-8 object-cover bg-white rounded-lg" src={Twitter} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/friskytrails/" target="_blank" rel="noopener noreferrer">
                  <img className="w-8 h-8 object-cover bg-white rounded-lg" src={Linkedin} alt="" />
                </a>
                <a href="https://www.instagram.com/friskytrails/" target="_blank" rel="noopener noreferrer">
                  <img className="w-8 h-8 object-cover bg-white rounded-lg" src={Instagram} alt="" />
                </a>
              </div>
            </div>

            <div className="h-[70vh] w-[28vw]">
              <div className="grid grid-cols-2 mt-24">
                <div className="h-[40vh] w-[14vw]">
                  <h1 className="text-white text-3xl mt-1.5 font-semibold">Short Links</h1>
                  <div className="mt-8">
                    {[
                      { text: "About Us", path: "/about" },
                      { text: "Adventures", path: "/adventures" },
                      { text: "Services", path: "/services/holidays" },
                      { text: "Reviews", path: "/reviews" }
                    ].map((item, i) => (
                      <div key={i} className="flex mt-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="gray">
                          <path d="M9 6C9 6 15 10.4189 15 12C15 13.5812 9 18 9 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link to={item.path}>
                          <h3 className="text-gray-400 font-semibold ml-1 hover:text-white">{item.text}</h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-[40vh] w-[14vw] ml-10">
                  <h1 className="text-white text-3xl mt-1.5 font-semibold">Quick Links</h1>
                  <div className="mt-8 ml-2">
                    {[
                      { text: "Contact Us", path: "/contact" },
                      { text: "Blogs", path: "/blog" },
                      { text: "Hiring", path: "/hiring" },
                      { text: "Partner with Us", path: "/partner" }
                    ].map((item, i) => (
                      <div key={i} className="flex mt-4 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="gray">
                          <path d="M9 6C9 6 15 10.4189 15 12C15 13.5812 9 18 9 18" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Link to={item.path}>
                          <h3 className="text-gray-400 font-semibold ml-1 hover:text-white">{item.text}</h3>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[70vh] w-[26vw]">
              <h1 className="mt-25.5 ml-18 text-white text-3xl font-semibold">Travel Destinations</h1>
              <div className="mt-8 ml-20 grid grid-cols-3 w-[19vw] h-[38vh]">
                <Smallbox />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & 1024px View (No Toggle) */}
      <div className="xl:hidden h-auto w-full bg-[rgb(10,3,34)] px-4 py-4">
        <div className="mb-6">
          <h1 className="text-white text-2xl font-semibold md:ml-20">Travel Destinations</h1>
          <div className="grid grid-cols-3 mt-2 w-[80vw] mx-auto">
            <Smallbox />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-white text-2xl font-semibold md:ml-20">Short Links</h1>
          <div className="flex justify-center items-center mt-2">
            <div className="mr-14 flex flex-col gap-4">
              <Link to="/about"><h3 className="text-gray-400 font-semibold">About Us</h3></Link>
              <Link to="/about"><h3 className="text-gray-400 font-semibold">Adventures</h3></Link>
            </div>
            <div className="mr-10 flex flex-col gap-4">
              <Link to="/services/holidays"><h3 className="text-gray-400 font-semibold">Services</h3></Link>
              <Link to="#"><h3 className="text-gray-400 font-semibold">Reviews</h3></Link>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-white text-2xl font-semibold md:ml-20">Quick Links</h1>
          <div className="flex justify-center items-center mt-2 gap-12">
            <div className="flex flex-col gap-4">
              <Link to="/contact"><h3 className="text-gray-400 font-semibold">Contact Us</h3></Link>
              <Link to="/blog"><h3 className="text-gray-400 font-semibold">Blogs</h3></Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/hiring"><h3 className="text-gray-400 font-semibold">Hiring</h3></Link>
              <Link to="#"><h3 className="text-gray-400 font-semibold">Partner With Us</h3></Link>
            </div>
          </div>
        </div>

        <div>
          <div className="flex mt-8 justify-center items-center">
            <img className="h-10 w-10 bg-white rounded-full" src="/logo.PNG" alt="" />
            &nbsp;
            <h1 className="text-2xl font-bold text-white">FriskyTrails</h1>
          </div>
          <h3 className="text-gray-400 font-semibold mt-2 text-center">
            Uttarapan Market Complex, G15, Hill Cart Rd, opposite of Biswadeep Cinema Hall, Ward 1, Patiram Jote, Siliguri, West Bengal 734001
          </h3>
          <div className="email mt-2 md:flex md:mb-2 md:justify-center md:gap-10">
            <h3 className="text-gray-400 font-bold text-center">
              <a href="mailto:friskytrails@gmail.com">friskytrails@gmail.com</a>
            </h3>
            <h3 className="text-gray-400 font-bold text-center">
              <a href="tel:+917501516714">+91-75015 16714</a>
            </h3>
          </div>
          <div className="images mt-4 flex justify-center items-center gap-4">
            <a href="https://www.facebook.com/friskytrails/" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 object-cover bg-white rounded-lg" src={Facebook} alt="" />
            </a>
            <a href="https://x.com/frisky_trails" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 object-cover bg-white rounded-lg" src={Twitter} alt="" />
            </a>
            <a href="https://www.linkedin.com/company/friskytrails/" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 object-cover bg-white rounded-lg" src={Linkedin} alt="" />
            </a>
            <a href="https://www.instagram.com/friskytrails/" target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 object-cover bg-white rounded-lg" src={Instagram} alt="" />
            </a>
          </div>
        </div>
        <div className="bg-white mt-2 h-0.5 w-full"></div>
      </div>
    </>
  );
};

export default End;
