import React from "react";
import Right from "../assets/right.svg";
import Share from "../assets/share.svg";

const Productpage = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="w-[80%] m-auto">
          <div className="flex items-center pt-6">
            <h3 className="font-semibold">Home</h3>
            <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
            <h3 className="font-semibold">Destination</h3>
            <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
            <h3 className="font-semibold text-gray-600">Chennai</h3>
          </div>
          <h1 className="text-3xl tracking-tighter font-bold pt-4">
            Big Bus Paris Hop-On Hop-Off Tour with Optional River Cruise
          </h1>

          <div className="flex justify-between">
            <div className="email flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1">
                <h3 className="text-gray-500">⭐⭐⭐⭐⭐ Reviews</h3>
              </div>
              <div className="border-1 h-full border-gray-400"></div>{" "}
              {/* Vertical Line */}
              <div className="number flex justify-center items-center">
                <h3 className="text-gray-500">Chennai, Tamil Nadu</h3>
              </div>
            </div>
            <button className="py-2 flex items-center gap-2 px-6 font-semibold text-white active:scale-95 transition-all duration-300 bg-[rgb(233,99,33)] rounded-3xl">
                <img className="invert h-5 w-5" src={Share} alt="" />
              Share
            </button>
          </div>
        </div>

        <div className="h-screen w-full pt-4">
        <div className="grid grid-cols-3 h-[70vh] w-[80vw] rounded-lg bg-white m-auto">
          {/* Left Column */}
          <div className="mx-auto">
            <div className="h-[33vh] w-[26vw] mt-2 mb-3 rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/kashmir.webp')",
                }}
              ></div>
              
            </div>
            <div className="h-[33vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/kerala.webp')",
                }}
              ></div>
              
            </div>
          </div>

          {/* Middle Column */}
          <div className="m-auto">
            <div className="h-[68vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/thailand.png')",
                }}
              ></div>
              
            </div>
          </div>

          {/* Right Column */}
          <div className="mx-auto">
            <div className="h-[33vh] w-[26vw] mt-2 mb-3 rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/bali.png')",
                }}
              ></div>
              
            </div>
            <div className="h-[33vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/malaysia.png')",
                }}
              ></div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Productpage;
