import React, { useState } from "react";
import IceImage from "/images/ice.jpg";
import Box from "../sections/Box";

import Latestblog from "../sections/Latestblog";
import Cards from "../sections/Cards";

const Blog = () => {
  

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
            <button className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 mt-8 text-xl text-white font-bold rounded-lg px-6 py-2">
            <div className="flex gap-1">
              Dive into the Blog!
            </div>
          </button>
          
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
