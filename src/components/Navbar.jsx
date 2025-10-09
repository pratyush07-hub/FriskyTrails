import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import Admodal from "../components/Admodal";
import LoginModal from "./LoginModal";
import { logoutUser, getCurrentUser } from "../api/user.api";
import Arrow from "../assets/arrow.svg";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAdmodal, setShowAdmodal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [storedFirstName, setStoredFirstName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showAdventures, setShowAdventures] = useState(false);

  const toggleAdmodal = () => setShowAdmodal(!showAdmodal);
  const toggleModal = () => setShowModal(!showModal);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Mutually exclusive toggles
  const toggleServices = () => {
    setShowServices((prev) => {
      if (!prev) setShowAdventures(false);
      return !prev;
    });
  };

  const toggleAdventures = () => {
    setShowAdventures((prev) => {
      if (!prev) setShowServices(false);
      return !prev;
    });
  };

  const handleScroll = () => {
    setShowModal(false);
    setShowAdmodal(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".relative")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    checkAuthStatus();

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await getCurrentUser();
      if (response.success) {
        setIsLoggedIn(true);
        setStoredFirstName(response.data.user.firstName || "");
      } else {
        setIsLoggedIn(false);
        setStoredFirstName("");
      }
    } catch (error) {
      setIsLoggedIn(false);
      setStoredFirstName("");
      console.log("User not logged in or token invalid." + error.message);
    }
  };

  const handleLoginClose = () => {
    setShowLogin(false);
    checkAuthStatus();
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      setStoredFirstName("");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Something went wrong during logout.");
    }
  };

  return (
    <div className="flex top-10 fixed justify-center z-80 w-full">
      <div className="h-auto lg:h-[10vh] w-full bg-white flex flex-col lg:flex-row justify-between items-center md:p-2 lg:p-4 px-4">
        {/* Logo and Hamburger */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <img
              className="h-14 w-14 lg:h-20 lg:w-20 object-contain"
              src="/logo.PNG"
              alt="FriskyTrails Logo"
            />
            <h1 className="text-xl lg:text-3xl font-semibold whitespace-nowrap">
              FriskyTrails
            </h1>
          </div>
          <button onClick={toggleMenu} className="lg:hidden p-2 z-80 relative">
            {isMenuOpen ? (
              <span className="text-2xl font-bold">✕</span>
            ) : (
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
            )}
          </button>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/40 z-80" onClick={toggleMenu}></div>
        )}

        {/* Mobile Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-lg z-80 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col h-full justify-between pb-16">
            {/* TOP PART */}
            <div className="flex flex-col gap-6 text-lg font-medium">
              <button
                onClick={toggleMenu}
                className="text-2xl font-bold self-end mb-2"
              >
                ✕
              </button>

              {isLoggedIn && (
                <div className="flex items-center gap-2 text-gray-800 font-semibold">
                  <img src="/images/sword.png" className="h-5 w-5" />
                  Hi, {storedFirstName}
                </div>
              )}

              <Link to="/" onClick={toggleMenu} className="hover:text-amber-500">
                Home
              </Link>
              <Link to="/about" onClick={toggleMenu} className="hover:text-amber-500">
                About
              </Link>

              {/* Services Toggle Section */}
              <button
                onClick={toggleServices}
                className="flex items-center justify-between hover:text-amber-500"
              >
                <span>Services</span>
                <img
                  src={Arrow}
                  alt="arrow"
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    showServices ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {showServices && (
                <div className="flex flex-col gap-2 pl-4 text-base">
                  <Link to="/services/holidays" onClick={toggleMenu} className="hover:text-amber-500">Holidays</Link>
                  <Link to="/services/activities" onClick={toggleMenu} className="hover:text-amber-500">Activities</Link>
                  <Link to="/services/hotels" onClick={toggleMenu} className="hover:text-amber-500">Hotels</Link>
                  <Link to="/services/transport" onClick={toggleMenu} className="hover:text-amber-500">Cab Service</Link>
                  <Link to="/services/flights" onClick={toggleMenu} className="hover:text-amber-500">Flights</Link>
                  <Link to="/services/rail-tickets" onClick={toggleMenu} className="hover:text-amber-500">Rail Tickets</Link>
                  <Link to="/services/bus-tickets" onClick={toggleMenu} className="hover:text-amber-500">Bus Tickets</Link>
                </div>
              )}

              {/* Adventures */}
              <button
                onClick={toggleAdventures}
                className="flex items-center justify-between hover:text-amber-500"
              >
                <span>Adventures</span>
                <img
                  src={Arrow}
                  alt="arrow"
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    showAdventures ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {showAdventures && (
                <div className="flex flex-col gap-2 pl-4 text-base">
                  <h2 className="text-amber-500 font-bold">Aerial Activities</h2>
                  <Link to="/services/aerial/paragliding" onClick={toggleMenu} className="hover:text-amber-500">Paragliding</Link>
                  <Link to="/services/aerial/paramotoring" onClick={toggleMenu} className="hover:text-amber-500">Paramotoring</Link>
                  <Link to="/services/aerial/hot-air-balloon" onClick={toggleMenu} className="hover:text-amber-500">Hot Air Balloon</Link>
                  <Link to="/services/aerial/hummerchute-ride" onClick={toggleMenu} className="hover:text-amber-500">Hummerchute Ride</Link>
                  <Link to="/services/aerial/skydiving" onClick={toggleMenu} className="hover:text-amber-500">Skydiving</Link>

                  <h2 className="text-amber-500 font-bold">Water Activities</h2>
                  <Link to="/services/water/scuba-diving" onClick={toggleMenu} className="hover:text-amber-500">Scuba Diving</Link>
                  <Link to="/services/water/kayaking" onClick={toggleMenu} className="hover:text-amber-500">Kayaking</Link>
                  <Link to="/services/water/boating" onClick={toggleMenu} className="hover:text-amber-500">Boating</Link>
                  <Link to="/services/water/flyboarding" onClick={toggleMenu} className="hover:text-amber-500">Flyboarding</Link>
                  <Link to="/services/water/surfing" onClick={toggleMenu} className="hover:text-amber-500">Surfing</Link>

                  <h2 className="text-amber-500 font-bold">Land Activities</h2>
                  <Link to="/services/land/trekking" onClick={toggleMenu} className="hover:text-amber-500">Trekking</Link>
                  <Link to="/services/land/camping" onClick={toggleMenu} className="hover:text-amber-500">Camping</Link>
                  <Link to="/services/land/bungee-jumping" onClick={toggleMenu} className="hover:text-amber-500">Bungee Jumping</Link>
                  <Link to="/services/land/bike-trips" onClick={toggleMenu} className="hover:text-amber-500">Bike Trips</Link>
                  <Link to="/services/land/atv-ride" onClick={toggleMenu} className="hover:text-amber-500">ATV Ride</Link>
                </div>
              )}

              <Link to="/blog" onClick={toggleMenu} className="hover:text-amber-500">
                Blog
              </Link>
              <Link to="/contact" onClick={toggleMenu} className="hover:text-amber-500">
                Contact Us
              </Link>
            </div>

            {/* BOTTOM PART */}
            <div>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="mt-4 w-full bg-black text-white px-6 py-2 rounded-full hover:bg-yellow-500 transition-all"
                >
                  Logout
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setShowLogin(true)}
                    className="mt-4 w-full bg-black text-white px-6 py-2 rounded-full hover:bg-amber-500 transition-all"
                  >
                    Login
                  </button>
                  {showLogin && <LoginModal onClose={handleLoginClose} />}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          <Link to="/" className="text-base hover:text-amber-400">Home</Link>
          <Link to="/about" className="text-base hover:text-amber-400">About</Link>
          <button onClick={toggleAdmodal} className="flex items-center text-base hover:text-amber-400">
            Adventures <img className="w-4 h-4 ml-1" src={Arrow} alt="arrow" />
          </button>
          {showAdmodal && <Admodal onClose={() => setShowAdmodal(false)} />}
          <button onClick={toggleModal} className="flex items-center text-base hover:text-amber-400">
            Services <img className="w-4 h-4 ml-1" src={Arrow} alt="arrow" />
          </button>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
          <Link to="/blog" className="text-base hover:text-amber-400">Blog</Link>
          <Link to="/contact" className="text-base hover:text-amber-400">Contact Us</Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex">
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown((prev) => !prev)}
                className="flex items-center gap-2 text-md font-medium text-gray-700 hover:text-black"
              >
                <img src="/images/sword.png" className="h-5 w-5" />
                Hi, {storedFirstName}
                <FaChevronDown className="text-xs" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow z-50">
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => setShowLogin(true)}
                className="bg-white border border-black font-semibold rounded-md active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-6 py-2"
              >
                Login
              </button>
              {showLogin && <LoginModal onClose={handleLoginClose} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
