import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const Landing = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full h-[84vh] bg-[rgb(247, 241, 231)] overflow-hidden">
      {/* Background Video */}
      <div className="h-[70vh] md:h-[62vh] w-full">
        <video
          className="absolute md:block h-[62vh] top-0 w-full left-0 object-cover"
          ref={videoRef}
          src="/images/Webvi.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <video
          className="absolute md:hidden top-0 w-full h-[70vh] left-0 object-cover"
          ref={videoRef}
          src="/images/mobile.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        <button
          onClick={toggleMute}
          className="absolute z-20 top-4 right-4 bg-white/20 backdrop-blur-md text-black p-2 md:p-3 rounded-full hover:bg-white/30 transition shadow-md"
        >
          {isMuted ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
        </button>
      </div>

      {/* <Scroll /> */}
      <div className="animation w-full">
        <div className="relative text flex whitespace-nowrap overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
            md:transition={{ ease: "linear", repeat: Infinity, duration: 16 }}
            className="text-7xl font-bold"
          >
            <span className="flex justify-center items-center ml-20 md:ml-40 text-white [text-shadow:_-2px_-2px_0_#0a0322,2px_2px_0_#0a0322,-2px_2px_0_#0a0322,2px_-2px_0_#0a0322]">
              <img
                className="h-20 w-20 md:h-40 md:w-40"
                src="/logo.PNG"
                alt=""
              />
              {/* Explore every destination, Every season – with FriskyTrails! */}
              <h1 className="md:text-6xl text-3xl">
                Explore every destination, Every season – with FriskyTrails!
              </h1>
            </span>
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
            md:transition={{ ease: "linear", repeat: Infinity, duration: 16 }}
            className="text-7xl font-bold"
          >
            <span className="flex justify-center items-center ml-20 md:ml-40 text-white [text-shadow:_-2px_-2px_0_#0a0322,2px_2px_0_#0a0322,-2px_2px_0_#0a0322,2px_-2px_0_#0a0322]">
              <img
                className="h-20 w-20 md:h-40 md:w-40"
                src="/logo.PNG"
                alt=""
              />
              {/* Explore every destination, Every season – with FriskyTrails! */}
              <h1 className="md:text-6xl text-3xl">
                Explore every destination, Every season – with FriskyTrails!
              </h1>
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;

{
  /* Overlay (optional for text visibility) */
}
{
  /* <div className="absolute top-0 left-0 w-full h-[65vh] bg-black/50" /> */
}

{
  /* Centered Text */
}
{
  /* <div className="relative z-10 flex items-center justify-center h-full"> */
}
{
  /* <h1 className="text-white text-4xl text-center font-bold">
          Welcome to FriskyTrails
        </h1> */
}
{
  /* </div> */
}
