import React from "react";
import { motion } from "framer-motion";

const Scroll = () => {
  return (
    <div>
      <div className="animation h-[40vh] w-full">
        <div className="text flex whitespace-nowrap overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 16 }}
            className="text-7xl font-bold"
          >
            <span className="flex justify-center items-center ml-40 text-white [text-shadow:_-2px_-2px_0_#0a0322,2px_2px_0_#0a0322,-2px_2px_0_#0a0322,2px_-2px_0_#0a0322]">
              <img className="h-40 w-40" src="/logo.PNG" alt="" />
              Explore every destination, Every season – with FriskyTrails!
            </span>
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 16 }}
            className="text-7xl font-bold"
          >
            <span className="flex justify-center items-center ml-40 text-white [text-shadow:_-2px_-2px_0_#0a0322,2px_2px_0_#0a0322,-2px_2px_0_#0a0322,2px_-2px_0_#0a0322]">
              <img className="h-40 w-40" src="/logo.PNG" alt="" />
              Explore every destination, Every season – with FriskyTrails!
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Scroll;
