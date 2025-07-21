import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Arrow from "../assets/arrow.svg";
import Admodal from "../components/Admodal";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAdmodal, setShowAdmodal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleAdmodal = () => setShowAdmodal(!showAdmodal);
  const toggleModal = () => setShowModal(!showModal);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleScroll = () => {
    setShowModal(false);
    setShowAdmodal(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center relative z-10 w-full">
      <div className="h-auto lg:h-[10vh] w-full md:w-[90vw] bg-[rgb(255,255,255)] flex flex-col lg:flex-row justify-between items-center md:rounded-2xl lg:rounded-full md:p-2 lg:p-4 px-4">
        {/* Logo and Hamburger */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <img
              className="h-14 w-14 lg:h-20 lg:w-20 object-contain"
              src="/logo.PNG"
              alt="FriskyTrails Logo"
            />
            <h1 className="text-xl lg:text-4xl font-semibold whitespace-nowrap">
              FriskyTrails
            </h1>
          </div>
          {/* Hamburger Button - visible below lg */}
          <button onClick={toggleMenu} className="lg:hidden p-2">
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black mb-1.5"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center w-full lg:w-auto gap-4 lg:gap-6 xl:gap-10 py-4 lg:py-0`}
        >
          <Link to="/" className="text-lg lg:text-base hover:text-amber-400">
            Home
          </Link>
          <Link to="/about" className="text-lg lg:text-base hover:text-amber-400">
            About
          </Link>
          <button
            onClick={toggleAdmodal}
            className="flex items-center text-lg lg:text-base hover:text-amber-400"
          >
            Adventures
            <img className="w-4 h-4 ml-1" src={Arrow} alt="arrow" />
          </button>
          {showAdmodal && <Admodal onClose={() => setShowAdmodal(false)} />}

          <button
            onClick={toggleModal}
            className="flex items-center text-lg lg:text-base hover:text-amber-400"
          >
            Services
            <img className="w-4 h-4 ml-1" src={Arrow} alt="arrow" />
          </button>
          {showModal && <Modal onClose={() => setShowModal(false)} />}

          <Link to="/blog" className="text-lg lg:text-base hover:text-amber-400">
            Blog
          </Link>
        </div>

        {/* Contact Button */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex w-full lg:w-auto justify-center lg:justify-end mt-4 lg:mt-0`}
        >
          <Link to="/contact">
            <button className="bg-white border border-black font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-6 lg:px-8 py-2 lg:py-3 w-full lg:w-auto">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
