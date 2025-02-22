import React from "react";

const End = () => {
  return (
    <>
      <div className="h-[80vh] w-full mt-20 bg-[rgb(10,3,34)] flex justify-center items-center">
        {/* Grid Container */}
        <div className="grid grid-cols-3 border-y-1 border-gray-500 place-items-center">
          {/* 3 Boxes to Fit the Grid */}
          <div className="h-[70vh] w-[26vw]">
            <div className="flex mr-40 mt-20 justify-center items-center">
              <div>
                <img
                  className="h-20 w-20 bg-white rounded-full"
                  src="logo.PNG"
                  alt=""
                />
              </div>
              &nbsp;
              <h1 className="text-3xl font-bold text-white">FriskyTrails</h1>
            </div>
            <h3 className="text-gray-400 font-semibold w-[18vw] mt-8 ml-4">
              7298 The Westheimer Road, Dubai United Arab Emirates
            </h3>
            <div className="email">
              <h3 className="text-gray-400 font-bold ml-4 mt-4">
                +91-75015 16714
              </h3>
              <a href="https://www.facebook.com/friskytrails/" target="_blank">
                <h3 className="text-gray-400 font-bold ml-4 mt-2">
                  friskytrails@gmail.com
                </h3>
              </a>
            </div>
            <div className="images flex ml-4 mt-6 items-center gap-4">
              <a href="https://www.facebook.com/friskytrails/" target="_blank">
                <img
                  className="w-8 h-8 object-cover bg-white rounded-lg"
                  src="./src/assets/facebook.svg"
                  alt=""
                />
              </a>

              <a href="https://x.com/frisky_trails" target="_blank">
                <img
                  className="w-8 h-8 object-cover bg-white rounded-lg"
                  src="./src/assets/twitter.svg"
                  alt=""
                />
              </a>

              <a
                href="https://www.linkedin.com/company/friskytrails/"
                target="_blank"
              >
                <img
                  className="w-8 h-8 object-cover bg-white rounded-lg"
                  src="./src/assets/linkedin.svg"
                  alt=""
                />
              </a>

              <a href="https://www.instagram.com/friskytrails/" target="_blank">
                <img
                  className="w-8 h-8 object-cover bg-white rounded-lg"
                  src="./src/assets/instagram.svg"
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
                  <h3 className="text-gray-400 font-semibold">Team Members</h3>
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
                  <h3 className="text-gray-400 font-semibold">Tour Plans</h3>
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
                  <h3 className="text-gray-400 font-semibold">Pricing Plan</h3>
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
                  <h3 className="text-gray-400 font-semibold">Destnation</h3>
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
                  <h3 className="text-gray-400 font-semibold">FAQ Questions</h3>
                </div>
                      </div>
              </div>
              
            </div>
          </div>
          <div className="h-[70vh] w-[26vw]">
            <h1 className="mt-25.5 ml-4 text-white text-3xl font-semibold">Instagram Post</h1>
            <div className="mt-8 ml-2 grid grid-cols-3 w-[25vw] h-[30vh]">
                <div className="img h-[13vh] w-[7vw] rounded-lg bg-red-400"></div>
                <div className="img h-[13vh] w-[7vw] rounded-lg bg-red-400"></div>
                <div className="img h-[13vh] w-[7vw] rounded-lg bg-red-400"></div>
                <div className="img h-[13vh] w-[7vw] rounded-lg bg-red-400"></div>
                <div className="img h-[13vh] w-[7vw] rounded-lg bg-red-400"></div>
                <div className="img h-[13vh] w-[7vw] rounded-lg bg-red-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default End;
