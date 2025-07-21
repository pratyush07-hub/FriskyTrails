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

  // Move hover state outside the map (for proper reactivity)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-[60vh] w-full px-4">
      <h1 className="text-3xl md:text-5xl text-center font-bold">Curated Categories</h1>
      
      {/* Grid layout for responsiveness */}
      <div className="grid w-[80vw] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-8 md:gap-16 place-items-center">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-64 h-72 flex items-center justify-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Image (Moves up on hover) */}
            <motion.img
              src={item.image}
              alt={item.name}
              className="absolute w-full h-full rounded-lg shadow-lg object-cover"
              animate={{ y: hoveredIndex === index ? -30 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* Button (Revealed on hover) */}
            <motion.button
              className="absolute mt-80 px-8 py-2 bg-white font-semibold rounded-lg shadow-md hover:bg-amber-400 hover:text-white transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              View All
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
}
