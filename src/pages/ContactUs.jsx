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
        <h1 className="font-bold text-4xl md:text-8xl tracking-tight text-center mt-16 md:mt-30">
          Contact Us
        </h1>
        <div className="w-full md:w-[60vw] mx-auto flex justify-center">
          <p className="text-center mt-4 md:mt-8 text-base md:text-xl text-gray-600">
            FriskyTrails is one of the leading travel platforms for adventure
            enthusiasts and explorers who seek to experience the thrill of
            travel and discover the beauty of incredible destinations.
          </p>
        </div>
        <div className="h-auto md:h-screen flex flex-col md:flex-row pt-16 md:pt-26">
          <div className="h-auto md:h-[85vh] w-full md:w-[50%] pl-4 md:pl-10">
            <Knowus />
          </div>
          <div className="h-auto md:h-[85vh] w-full md:w-[50%] pr-4 md:pr-10">
            <h1 className="font-semibold tracking-tight flex justify-center pt-6 md:pt-10 text-3xl md:text-4xl">
              Looking for any help?
            </h1>
            <Contactform />
          </div>
        </div>
        <div className="h-auto md:h-screen w-full">
          <h4 className="font-semibold text-lg md:text-xl text-center pt-10 md:pt-20 text-orange-500">
            Our Location
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold text-center pt-2">
            Office In India
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="pl-4 md:pl-30 pt-16 md:pt-26 w-full md:w-[50%]">
              <img
                className="h-auto md:h-[45vh] w-full md:w-[35vw]"
                src="/images/office.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 pt-6 md:pt-10 pl-4 md:pl-20">
              <h1 className="text-3xl md:text-5xl font-bold pt-10 md:pt-20">Siliguri Office</h1>
              <div className="flex items-center pt-4 md:pt-8 gap-4">
                <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
                  <img
                    className="h-[20px] w-[20px] object-contain invert"
                    src={Call}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-600 cursor-pointer">
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
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-600 cursor-pointer">
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
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-600 cursor-pointer w-full md:w-[32vw]">
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
