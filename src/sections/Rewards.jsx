import React from "react";

const Rewards = () => {
  return (
    <>
      <div className="h-[80vh] w-full">
            <h1 className="text-center text-5xl font-bold">More to explore</h1>
        <div className="flex justify-center items-center mt-10 gap-10 grid-cols-4 w-full">
          {data.map((data) => (
            <div className="h-[55vh] w-[25vw] flex justify-center hover:scale-105 transition-transform duration-300 rounded-lg bg-white shadow-lg">
              <div>
                <img
                  className="h-[25vh] w-[20vw] object-fill"
                  src={data.image}
                  alt=""
                />
                <h1 className="mt-6 text-xl font-semibold text-center">
                  {data.title}
                </h1>
                <p className="w-[18vw] ml-4 tracking-tighter mt-2 text-center">
                  {data.des}
                </p>
                <div className="flex justify-center"> 
                <button className="bg-white mt-8 border-1 font-semibold rounded-lg active:scale-95 transition-all duration-300 hover:bg-amber-400 hover:text-white px-4 py-2">
                  {data.button}
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const data = [
  {
    title: "Check out the FriskyTrails blog",
    image: "/images/veon.webp",
    des: "Follw the team's musings on trends in travel, itinerary ideas and travel tips",
    button: "Read Now",
  },
  {
    title: "Save on fun with friskyTrails cash",
    image: "/images/veon.webp",
    des: "Find out how to save more when you book and leave a review",
    button: "How FriskyTrailsCash works",
  },
  {
    title: "Share joy and get rewarded",
    image: "/images/veon.webp",
    des: "After your friend signs up and completes a booking, you'll get a ₹400 reward!",
    button: "Invite freinds",
  },
];

export default Rewards;
