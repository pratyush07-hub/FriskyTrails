import React, { useState } from "react";
import IceImage from "/images/ice.jpg";
import Box from "../sections/Box";
import Des from "../components/Des";
import Latestblog from "../sections/Latestblog";
import Cards from "../sections/Cards";

const Blog = () => {
  const [showDes, setShowDes] = useState(false);
  const toggleDes = () => setShowDes(!showDes);

  return (
    <div className="w-full">
      <div
        style={{
          height: "400px",
          backgroundImage: `url(${IceImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white text-center">
          <h1 className="text-6xl font-bold tracking-tight pt-34">
            Your Ultimate Companion for Everywhere!
          </h1>
          <p className="text-xl pt-4">
            Searching for Travel Guides, Destinations, and Adventure for Joyful
            Journey Ahead?
          </p>
            <button onClick={toggleDes} className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 mt-8 text-white font-bold rounded-full px-6 py-2">
            <div className="flex gap-1">
              Choose a Destination{" "}
              <img
                className="pt-0.5 invert"
                src="./src/assets/arrow.svg"
                alt=""
              />
            </div>
          </button>
          {showDes && <Des onClose={() => setShowDes(false)} />} 
        </div>
      </div>
      <div className="trends">
        <h1 className="text-4xl tracking-tighter pt-20 font-semibold pl-32">
          Trending Blogs
        </h1>
        <div className="grid grid-cols-2">
          <Box />
        </div>
        <div className="LatestBlog p-10">
          <Latestblog />
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Blog;
