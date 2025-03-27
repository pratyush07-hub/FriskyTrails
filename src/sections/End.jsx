import React from "react";
import Smallbox from "./Smallbox";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";

const End = () => {
  return (
    <>
      <div className="h-[85vh] w-full bg-[rgb(10,3,34)] relative flex justify-center items-center">
        {/* Grid Container */}
        <div className="grid grid-cols-3 border-y-1 mt-14 border-gray-500 place-items-center">
          {/* 3 Boxes to Fit the Grid */}
          <div className="h-[70vh] w-[26vw]">
            <div className="flex mr-40 mt-20 justify-center items-center">
              <div>
                <img
                  className="h-20 w-20 bg-white rounded-full"
                  src="/logo.PNG"
                  alt=""
                />
              </div>
              &nbsp;
              <h1 className="text-3xl font-bold text-white">FriskyTrails</h1>
            </div>
            <h3 className="text-gray-400 font-semibold w-[18vw] mt-8 ml-4">
              Uttarapan Market Complex, G15, Hill Cart Rd, opposite of Biswadeep
              Cinema Hall, Ward 1, Patiram Jote, Siliguri, West Bengal 734001
            </h3>
            <div className="email">
              <h3 className="text-gray-400 font-bold ml-4 mt-4">
                <a href="tel:+917501516714">+91-75015 16714</a>
              </h3>

              <h3 className="text-gray-400 font-bold ml-4 mt-2">
                <a href="mailto:friskytrails@gmail.com">
                  friskytrails@gmail.com
                </a>
              </h3>
            </div>
            <div className="images flex ml-4 mt-6 items-center gap-4">
              <a href="https://www.facebook.com/friskytrails/" target="_blank">
                <img
                  className="w-8 h-8 object-cover bg-white rounded-lg"
                  src={Facebook}
                  alt=""
                />
              </a>

              <a href="https://x.com/frisky_trails" target="_blank">
                <img
                  className="w-8 h-8 object-cover bg-white rounded-lg"
                  src={Twitter}
                  alt=""
                />
              </a>

              <a
                href="https://www.linkedin.com/company/friskytrails/"
                target="_blank"
              >
                <img
                  className="w-8 h-8 object-cover bg-white rounded-lg"
                  src={Linkedin}
                  alt=""
                />
              </a>

              <a href="https://www.instagram.com/friskytrails/" target="_blank">
                <img
                  className="w-8 h-8 object-cover bg-white rounded-lg"
                  src={Instagram}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="h-[70vh] w-[28vw]">
            <div className="grid grid-cols-2 mt-24">
              <div className="h-[40vh] w-[14vw]">
                <h1 className="text-white text-3xl mt-1.5 font-semibold">
                  Short Links
                </h1>
                <div className="mt-8">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="gray"
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-gray-400 font-semibold">About Us</h3>
                  </div>
                  <div className="flex mt-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="gray"
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-gray-400 font-semibold">Adventures</h3>
                  </div>
                  <div className="flex mt-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="gray"
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-gray-400 font-semibold">Services</h3>
                  </div>
                  <div className="flex mt-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="gray"
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-gray-400 font-semibold">Reviews</h3>
                  </div>
                </div>
              </div>
              <div className="h-[40vh] w-[14vw]">
                <h1 className="text-white text-3xl mt-1.5 font-semibold">
                  Quick Links
                </h1>
                <div className="mt-8 ml-2">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="gray"
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-gray-400 font-semibold">Contact Us</h3>
                  </div>
                  <div className="flex mt-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="gray"
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-gray-400 font-semibold">Blogs</h3>
                  </div>
                  <div className="flex mt-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="gray"
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-gray-400 font-semibold">Hiring</h3>
                  </div>
                  <div className="flex mt-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="gray"
                    >
                      <path
                        d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h3 className="text-gray-400 font-semibold">
                      Partner with Us
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[70vh] w-[26vw]">
            <h1 className="mt-25.5 ml-4 text-white text-3xl font-semibold">
              Travel Destinations
            </h1>
            <div className="mt-8 ml-6 grid grid-cols-3 w-[19vw] h-[38vh]">
              <Smallbox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default End;
