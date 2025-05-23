import React from "react";
import Facebook from "../assets/facebook.svg";
import Linkedin from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";
import Email from "../assets/email.svg";
import Call from "../assets/calling.svg";

const Header = () => {
  return (
    <div className="h-[6vh] relative z-10 w-full mt-4">
      <div className="flex justify-between">
        <div className="email flex justify-center items-center gap-4 ml-28">
          <div className="flex justify-center items-center gap-1">
            <img className="w-5 h-5 object-cover" src={Email} alt="" />
            <h3 className="text-black">
              <a href="mailto:friskytrails@gmail.com">friskytrails@gmail.com</a>
            </h3>
          </div>
          <div className="border-1 h-full border-black"></div>{" "}
          {/* Vertical Line */}
          <div className="number flex justify-center items-center">
            <img className="w-5 h-5 object-cover" src={Call} alt="" />
            <h3 className="text-black">
              <a href="tel:+917501516714">+91-75015 16714</a>
            </h3>
          </div>
        </div>
        <div className="images flex justify-center items-center gap-4 mr-28">
          <h3 className="text-black">Follow Us On:</h3>
          <a href="https://www.facebook.com/friskytrails/" target="_blank">
            <img className="w-5 h-5 object-cover" src={Facebook} alt="" />
          </a>
          <div className="border-1 h-full border-black"></div>{" "}
          {/* Vertical Line */}
          <a href="https://x.com/frisky_trails" target="_blank">
            <img className="w-5 h-5 object-cover" src={Twitter} alt="" />
          </a>
          <div className="border-1 h-full border-black"></div>{" "}
          {/* Vertical Line */}
          <a
            href="https://www.linkedin.com/company/friskytrails/"
            target="_blank"
          >
            <img className="w-5 h-5 object-cover" src={Linkedin} alt="" />
          </a>
          <div className="border-1 h-full border-black"></div>{" "}
          {/* Vertical Line */}
          <a href="https://www.instagram.com/friskytrails/" target="_blank">
            <img className="w-5 h-5 object-cover" src={Instagram} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
