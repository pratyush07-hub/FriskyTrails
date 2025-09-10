"use client";
import { useEffect, useRef } from "react";

const Rewards = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile || !scrollRef.current) return;

    const container = scrollRef.current;
    const cards = container.querySelectorAll(".scroll-card");
    let index = 0;

    const scrollInterval = setInterval(() => {
      if (index >= cards.length) index = 0;

      const card = cards[index];
      container.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });

      index++;
    }, 3000); // 3 seconds delay per card

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="h-auto w-full md:px-8 mb-8 lg:px-16">
      <h1 className="text-center text-3xl md:text-5xl pt-10 md:pt-2 font-bold">
        Discover More with FriskyTrails
      </h1>

      <div className="mt-6 md:mt-10">
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 overflow-hidden md:overflow-visible no-scrollbar scroll-smooth"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="scroll-card w-[100%] flex-shrink-0 md:flex-shrink h-auto flex justify-center hover:scale-105 transition-transform duration-300 rounded-lg bg-white shadow-lg pb-2 md:pb-8"
            >
              <div className="w-full max-w-sm">
                <div className="flex justify-center pt-8 md:pt-12">
                  <img
                    className="h-20 w-20 object-fill"
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <h1 className="mt-4 md:mt-6 text-lg md:text-xl font-semibold text-center">
                  {item.title}
                </h1>

                <p className="w-full px-4 tracking-tighter mt-2 text-center">
                  {item.des}
                </p>

                <div className="flex justify-center">
                  <button className="bg-white mt-4 md:mt-6 border font-semibold rounded-lg active:scale-95 transition-all duration-300 hover:bg-amber-400 hover:text-white px-4 py-2">
                    {item.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Find Your Perfect Gateway",
    image: "/rewardsimages/trolly.png",
    des: "Explore our handpicked travel packages and thrilling adventures tailored just for you.",
    button: "Book Now",
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
    des: "Share the joy of travel! Invite a friend, and when they complete a booking, you get ₹300 as a thank-you.",
    button: "Invite friends",
  },
];

export default Rewards;
