import { Link } from "react-router-dom";

import Trolly from "../assets/trolly.svg";
import Mountain from "../assets/mountain.avif";
import Compass from "../assets/compass.svg";
import Tree from "../assets/tree.svg";
import Map from "../assets/map.svg";
import Cric from "../assets/cric.svg";

const About = () => {
  return (
    <>
      <div className="hidden xl:block about">
        <div className="h-[90vh] relative z-10 w-full flex">
          <div className="w-[25%] flex items-start">
            <div className="masker mt-10">
              <div className="flex flex-col gap-6">
                <div className="box h-[14vh] w-[18vw] ml-28 flex items-center border-1 border-gray-200 rounded-lg gap-8 pl-10">
                  <img src={Trolly} alt="trolly" />
                  <div>
                    <h1 className="text-2xl font-semibold">213+</h1>
                    <span className="text-gray-500">Tours Packages</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] ml-28 flex items-center border-1 border-gray-200 rounded-lg gap-8 pl-10">
                  <img
                    className="h-14 w-14 object-cover"
                    src={Mountain}
                    alt="mountain"
                  />
                  <div>
                    <h1 className="text-2xl font-semibold">89+</h1>
                    <span className="text-gray-500">Adventure Activities</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] ml-28 flex items-center border-1 border-gray-200 rounded-lg gap-8 pl-10">
                  <img src={Compass} alt="compass" />
                  <div>
                    <h1 className="text-2xl font-semibold">400+</h1>
                    <span className="text-gray-500">Travel Guides</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] ml-28 flex items-center border-1 border-gray-200 rounded-lg gap-8 pl-10">
                  <img src={Tree} alt="tree" />
                  <div>
                    <h1 className="text-2xl font-semibold">200+</h1>
                    <span className="text-gray-500">Tour Destination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] pl-20 flex items-start">
            <div className="mt-20">
              <img
                className="w-[900px] object-cover h-[560px]"
                src="/images/Girl.webp"
                alt=""
              />
            </div>
          </div>
          <div className="w-[43%] flex items-start">
            <div className="mt-14 ml-6">
              <h3 className="text-[rgb(255,99,33)] font-semibold text-xl">
                About Us
              </h3>
              <h1 className="text-6xl mt-2 leading-none font-semibold tracking-tighter w-[30vw]">
                Discover India's Hidden Wonders
              </h1>
              <div className="flex gap-4">
                <div className="box h-[14vh] w-[18vw] mt-8 flex items-center rounded-lg gap-8">
                  <img src={Map} alt="map" />
                  <div className="">
                    <span className="text-xl">
                      No Booking Fee Best Price Guarantee
                    </span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] mt-8 flex items-center rounded-lg gap-8">
                  <img src={Cric} alt="cric" />
                  <div className="">
                    <span className="text-xl">24/7 Customer Support</span>
                  </div>
                </div>
              </div>
              <h4 className="mt-4 text-[rgb(102,102,102)] w-[33vw]">
                FriskyTrails is the ultimate travel partner for adventure
                seekers, offering thrilling experiences across India’s most
                breathtaking destinations.
              </h4>
              <Link to="/services/holidays">
                <button className="bg-white mt-8 border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-8 py-5">
                  Explore Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="xl:hidden about">
        <div className="h-[80vh] relative z-10 w-full">
          <div className="w-full flex items-start">
            <div className="w-[80vw] mx-auto mt-8">
              <h3 className="text-[rgb(255,99,33)] font-bold text-2xl">
                About Us
              </h3>
              <h1 className="text-4xl md:text-6xl mt-2 leading-none font-semibold tracking-tighter w-[80vw]">
                Discover India's Hidden Wonders
              </h1>
            </div>
          </div>
          <div className="h-auto w-full flex flex-col md:flex-row mt-10">
            <div className="w-full md:w-[50%] h-[62vh] flex">
              <img
                className="w-auto mx-auto md:ml-20 md:mt-2 object-cover h-[500px] md:h-[640px]"
                src="/images/Girlmobile.png"
                alt=""
              />
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col ml-28 gap-6">
                <div className="box h-[14vh] w-[18vw] flex items-center border-1 border-gray-200 rounded-lg gap-8">
                  <img src={Trolly} alt="trolly" />
                  <div>
                    <h1 className="text-2xl font-semibold">213+</h1>
                    <span className="text-gray-500">Tours Packages</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] flex items-center border-1 border-gray-200 rounded-lg gap-8">
                  <img
                    className="h-14 w-14 object-cover"
                    src={Mountain}
                    alt="mountain"
                  />
                  <div>
                    <h1 className="text-2xl font-semibold">89+</h1>
                    <span className="text-gray-500">Adventure Activities</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] flex items-center border-1 border-gray-200 rounded-lg gap-8">
                  <img src={Compass} alt="compass" />
                  <div>
                    <h1 className="text-2xl font-semibold">400+</h1>
                    <span className="text-gray-500">Travel Guides</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] flex items-center border-1 border-gray-200 rounded-lg gap-8">
                  <img src={Tree} alt="tree" />
                  <div>
                    <h1 className="text-2xl font-semibold">200+</h1>
                    <span className="text-gray-500">Tour Destination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center w-[92vw] ml-5">
            <div className="box h-[14vh] w-[46vw] flex items-center rounded-lg gap-4">
              <img src={Trolly} alt="trolly" />
              <div>
                <h1 className="text-xl font-semibold">213+</h1>
                <span className="text-gray-500 text-sm">Tours Packages</span>
              </div>
            </div>
            <div className="box h-[14vh] w-[46vw] flex items-center rounded-lg gap-4">
              <img
                className="h-14 w-14 object-cover"
                src={Mountain}
                alt="mountain"
              />
              <div>
                <h1 className="text-xl font-semibold">89+</h1>
                <span className="text-gray-500 text-sm">
                  Adventure Activities
                </span>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center w-[92vw] ml-5">
            <div className="box h-[14vh] w-[46vw] flex items-center rounded-lg gap-4">
              <img src={Compass} alt="compass" />
              <div>
                <h1 className="text-xl font-semibold">400+</h1>
                <span className="text-gray-500 text-sm">Travel Guides</span>
              </div>
            </div>
            <div className="box h-[14vh] w-[46vw] flex items-center rounded-lg gap-4">
              <img src={Tree} alt="tree" />
              <div>
                <h1 className="text-xl font-semibold">200+</h1>
                <span className="text-gray-500 text-sm">Tour Destination</span>
              </div>
            </div>
          </div>
          <h4 className="mt-4 text-black w-[90vw] text-center mx-auto">
            FriskyTrails is the ultimate travel partner for adventure seekers,
            offering thrilling experiences across India’s most breathtaking
            destinations.
          </h4>
          <div className="box mt-2 h-[14vh] w-[90vw] mx-auto border-1 border-gray-300 p-4 flex items-center rounded-lg gap-8">
            <img src={Cric} alt="cric" />
            <div>
              <span className="text-black text-xl">24/7 Customer Support</span>
            </div>
          </div>
          <div className="box mt-2 h-[14vh] w-[90vw] mx-auto border-1 border-gray-300 p-4 flex items-center rounded-lg gap-8">
            <img src={Map} alt="map" />
            <div>
              <span className="text-black text-xl">
                No Booking Fee Best Price Guarantee
              </span>
            </div>
          </div>
          <Link to="/services/holidays">
          <div className="w-[90vw] mx-auto md:flex md:justify-center">

                <button className="bg-white w-full md:w-[50vw] mb-2 mt-8 border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white py-5">
                  Explore Now
                </button>
          </div>
              </Link>
        </div>
      </div>
    </>
  );
};

export default About;
