import React from "react";
import Call from '../assets/calling.svg'
import Email from '../assets/email.svg'

const Knowus = () => {
  return (
    <>
      <div className="pl-20 w-[42vw]">
        <h4 className="text-orange-600 text-xl font-semibold">
          Get To Know Us
        </h4>
        <h1 className="text-6xl pt-2 font-semibold tracking-tighter">
          {" "}
          Contact Us, Start Your Adventure!
        </h1>
        <p className="pt-6">
        Our expert support team is always prepared to help you with any queries or concerns, providing quick and tailored solutions to suit your needs.
        </p>
        <div className="border-amber-600 mt-8 border 1 rounded-3xl h-[40vh] w-[36vw]">
          <div className="flex gap-2 pl-10 pt-10 items-center">
            <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
              <img className="h-[20px] w-[20px] object-contain invert" src={Call} alt="" />
            </div>
            <div>
              <h3 className="text-gray-600">Phone No:</h3>
              <h2 className="text-lg font-semibold text-orange-500 cursor-pointer">+91-75015 16714</h2>
            </div>
            <div className="round ml-4 flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
              <img className="h-[20px] w-[20px] object-contain invert" src={Email} alt="" />
            </div>
            <div>
              <h3 className="text-gray-600">Email Address:</h3>
              <h2 className="text-lg font-semibold text-orange-500 cursor-pointer">friskytrails@gmail.com</h2>
            </div>
          </div>
          <h1 className="text-3xl pl-10 pt-6 font-semibold tracking-tighter">20+ Expert Team member</h1>
          <div className="pl-10 pt-10 flex relative">
            <div className=" absolute left-10 h-[60px] w-[60px] bg-amber-100 hover:scale-110 hover:z-10 rounded-full"></div>
            <div className=" absolute left-20 h-[60px] w-[60px] bg-amber-200 hover:scale-110 hover:z-10 rounded-full"></div>
            <div className=" absolute left-30 h-[60px] w-[60px] bg-amber-300 hover:scale-110 hover:z-10 rounded-full"></div>
            <div className=" absolute left-40 h-[60px] w-[60px] bg-amber-400 hover:scale-110 hover:z-10 rounded-full"></div>
            <div className=" absolute left-50 h-[60px] w-[60px] bg-amber-500 hover:scale-110 hover:z-10 rounded-full"></div>
            <div className=" absolute left-60 h-[60px] w-[60px] bg-amber-600 hover:scale-110 hover:z-10 rounded-full"></div>
            <div className=" absolute left-70 h-[60px] w-[60px] bg-amber-700 hover:scale-110 hover:z-10 rounded-full"></div>
            <div className=" absolute left-80 h-[60px] w-[60px] bg-amber-800 hover:scale-110 hover:z-10 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Knowus;
