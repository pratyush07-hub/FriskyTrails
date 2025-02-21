import React from 'react'

const About = () => {
  return (
    <>
      <div className="about">
        <div className="h-screen w-full flex">
          <div className="w-[25%] flex items-start">
            <div className="masker mt-30">
              <div className="flex flex-col gap-6">
                <div className="box h-[14vh] w-[18vw] ml-28 flex items-center border-1 border-gray-200 rounded-lg gap-8 pl-10">
                  <img src="./src/assets/trolly.svg" alt="" />
                  <div>
                    <h1 className="text-2xl font-semibold">213+</h1>
                    <span className="text-gray-500">Tours Packages</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] ml-28 flex items-center border-1 border-gray-200 rounded-lg gap-8 pl-10">
                  <img
                    className="h-14 w-14 object-cover"
                    src="./src/assets/mountain.avif"
                    alt=""
                  />
                  <div>
                    <h1 className="text-2xl font-semibold">89+</h1>
                    <span className="text-gray-500">Adventure Activities</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] ml-28 flex items-center border-1 border-gray-200 rounded-lg gap-8 pl-10">
                  <img src="./src/assets/compass.svg" alt="" />
                  <div>
                    <h1 className="text-2xl font-semibold">400+</h1>
                    <span className="text-gray-500">Travel Guides</span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] ml-28 flex items-center border-1 border-gray-200 rounded-lg gap-8 pl-10">
                  <img src="./src/assets/tree.svg" alt="" />
                  <div>
                    <h1 className="text-2xl font-semibold">200+</h1>
                    <span className="text-gray-500">Tour Destination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[32%] flex items-start">
            <div className="mt-40">
              <img src="/images/secondpage.avif" alt="" />
            </div>
          </div>
          <div className="w-[43%] flex items-start">
            <div className="mt-36 ml-6">
              <h3 className="text-[rgb(255,99,33)] font-semibold text-xl">
                About Us
              </h3>
              <h1 className="text-6xl mt-2 leading-none font-semibold tracking-tighter w-[30vw]">
                Discover India's Hidden Wonders
              </h1>
              <div className="flex gap-4">
                <div className="box h-[14vh] w-[18vw] mt-8 flex items-center rounded-lg gap-8">
                  <img src="./src/assets/map.svg" alt="" />
                  <div className="">
                    <span className="text-xl">
                      No Booking Fee Best Price Guarantee
                    </span>
                  </div>
                </div>
                <div className="box h-[14vh] w-[18vw] mt-8 flex items-center rounded-lg gap-8">
                  <img src="./src/assets/cric.svg" alt="" />
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
              <button className="bg-white mt-8 border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-8 py-5">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
