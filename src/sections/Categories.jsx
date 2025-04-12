import { motion } from "framer-motion";
import { useState } from "react";

export default function HoverRevealButton() {
  const data = [
    {
      image: "/images/1.png",
      name: "Japan",
    },
    {
      image: "/images/4.png",
      name: "Dubai",
    },
    {
      image: "/images/6.png",
      name: "Manali",
    },
    {
      image: "/images/2.png",
      name: "Maldives",
    },
  ];

  return (
    <div className="h-[60vh] w-full">
      <h1 className="text-6xl text-center font-bold">Curated Categories</h1>
      <div className="flex items-center justify-center gap-10 mt-10">

      {data.map((item, index) => {
        const [isHovered, setIsHovered] = useState(false);
        return (
          <div
          key={index}
            className="relative w-64 h-74 flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
            {/* Image (Moves up on hover) */}
            <motion.img
              src={item.image}
              alt="Animated Image"
              className="absolute w-full h-full rounded-lg shadow-lg object-cover"
              animate={{ y: isHovered ? -30 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              />
            {/* <h1 className="z-10 text-2xl text-white font-semibold">{item.name}</h1> */}
            {/* Button (Revealed on hover) */}
            <motion.button
              className="absolute px-10 py-2 mt-70 bg-white hover:text-white font-semibold rounded-lg shadow-md hover:bg-amber-400 transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              >
              View All
            </motion.button>
          </div>
        );
      })}
      </div>
    </div>
  );
}
