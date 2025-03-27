import React from "react";
import Contactform from "../components/Contactform";
import Call from "../assets/calling.svg";
import Email from "../assets/email.svg";
import Location from "../assets/location.avif";
import Knowus from "../components/Knowus";

const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <h1 className="font-bold text-8xl tracking-tight text-center mt-30">
          Contact Us
        </h1>
        <div className="w-[60vw] mx-auto flex justify-center">
          <p className="text-center mt-8 text-xl text-gray-600">
            FriskyTrails is one of the leading travel platforms for adventure
            enthusiasts and explorers who seek to experience the thrill of
            travel and discover the beauty of incredible destinations.
          </p>
        </div>
        <div className="h-screen flex pt-26">
          <div className="h-[85vh] w-[50%] pl-10">
            <Knowus />
          </div>
          <div className="h-[85vh] w-[50%] pr-10">
            <h1 className="font-semibold tracking-tight flex justify-center pt-10 text-4xl">
              Looking for any help?
            </h1>
            <Contactform />
          </div>
        </div>
        <div className="h-screen w-full">
          <h4 className="font-semibold text-xl text-center pt-20 text-orange-500">
            Our Location
          </h4>
          <h1 className="text-6xl font-bold text-center pt-2">
            Office Across The India
          </h1>
          <div className="flex">
            
            <div className="pl-30 pt-26 w-[50%]">
            
              <img
                className="h-[45vh] w-[35vw]"
                src="/images/office.webp"
                alt=""
              />
            </div>
            
            <div className="flex flex-col gap-2 pt-10 pl-20">
              <h1 className="text-5xl font-bold pt-20">Siliguri Office</h1>
              <div className="flex items-center pt-8 gap-4">
                <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
                  <img
                    className="h-[20px] w-[20px] object-contain invert"
                    src={Call}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-600 cursor-pointer">
                    +91-75015 16714
                  </h2>
                </div>
              </div>
              <div className="flex pt-4 items-center gap-4">
                <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
                  <img
                    className="h-[20px] w-[20px] object-contain invert"
                    src={Email}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-600 cursor-pointer">
                  friskytrails@gmail.com
                  </h2>
                </div>
              </div>
              <div className="flex pt-4 gap-4">
                <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(248,159,124)] text-xl to-amber-300 border-orange-500 h-[40px] w-[40px] rounded-full">
                  <img
                    className="h-[20px] w-[20px] object-contain"
                    src={Location}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-gray-600 cursor-pointer w-[32vw]">
                  Uttarapan Market Complex, G15, Hill Cart Rd, opposite of Biswadeep Cinema Hall, Ward 1, Patiram Jote, Siliguri, West Bengal 734001
                  </h2>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
