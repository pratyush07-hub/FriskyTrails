const Promise = () => {
  return (
    <div className="h-auto w-full px-4 md:px-8 mb-8 lg:px-16">
      <h1 className="text-center text-3xl md:text-5xl pt-10 font-bold">
          What we promise
      </h1>

      {/* Container switches layout based on screen size */}
      <div className="mt-6 md:mt-10">
        {/* Wrapper scrolls on mobile, grid on md+ */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 overflow-x-auto md:overflow-visible no-scrollbar">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[96%] md:min-w-0 flex-shrink-0 md:flex-shrink h-auto flex justify-center hover:scale-105 transition-transform duration-300 rounded-lg bg-white shadow-lg pb-8"
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
    title: "Unmatched Experience",
    image: "/promiseimages/1.png",
    des: "From trekking in the Himalayas to Sky Diving in NCR, we curate unique adventures for every traveller.",
  },
  {
    title: "Trusted Expertise",
    image: "/promiseimages/2.png",
    des: "With 4+ years of experience in the travel industry, we ensure safety, quality, and unforgettable moments.",
  },
  {
    title: "For Every Explorer",
    image: "/promiseimages/3.png",
    des: "Whether you're a solo traveler, a couple, or a group of friends, we have something for everyone.",
  },
];

export default Promise;