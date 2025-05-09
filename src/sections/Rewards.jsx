import React from "react";

const Rewards = () => {
  return (
    <>
      <div className="h-[80vh] w-full">
            <h1 className="text-center text-5xl pt-20 font-bold">Discover More with FriskyTrails</h1>
        <div className="flex justify-center items-center mt-10 gap-10 grid-cols-4 w-full">
          {data.map((data) => (
            <div className="h-[56vh] w-[25vw] flex justify-center hover:scale-105 transition-transform duration-300 rounded-lg bg-white shadow-lg">
              <div>
                <div className="flex justify-center pt-16">

                <img
                  className="h-30 w-30 object-fill"
                  src={data.image}
                  alt=""
                  />
                  </div>
                <h1 className="mt-6 text-xl font-semibold text-center">
                  {data.title}
                </h1>
                <p className="w-[22vw] ml-4 tracking-tighter mt-2 text-center">
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
    title: "Find Your Perfect Gateway",
    image: "/rewardsimages/trolly.png",
    des: "Explore our handpicked travel packages and thrilling adventures tailored just for you.",
    button: "Read Now",
  },
  {
    title: "Save More, Travel More",
    image: "/rewardsimages/money.png",
    des: "Earn rewards when you book and leave a review – because great trips deserve great perks!",
    button: "How FriskyTrailsCash works",
  },
  {
    title: "Refer Joy & Earn",
    image: "/rewardsimages/refer.png",
    des: 'Share the joy of travel! Invite a friend, and when they complete a booking, you get ₹300 as a thank-you.',
    button: "Invite freinds",
  },
];

export default Rewards;
