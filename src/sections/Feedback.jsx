import { useEffect, useRef } from "react";

const Feedback = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile || !scrollRef.current) return;

    const container = scrollRef.current;
    let index = 0;

    const scrollInterval = setInterval(() => {
      if (!container) return;
      const cardWidth = container.children[0].offsetWidth + 16; // 16 = space-x-4
      index = (index + 1) % container.children.length;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 3000); // every 3 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <>
      <div className="relative h-auto w-full flex flex-col items-center justify-center pb-10">
        <h3 className="text-center text-[rgb(255,99,33)] pt-10 md:pt-10 font-semibold text-lg md:text-xl">
          Customer's Feedback
        </h3>
        <h1 className="text-center font-bold text-3xl md:text-5xl mt-2">
          What Says Our Visitors
        </h1>

        <div className="relative w-full flex items-center justify-center mt-8">
          {/* Background Circles */}
          <div className="md:hidden xl:block absolute w-32 md:w-80 h-32 md:h-80 bg-[url('/images/circle.avif')] bg-no-repeat bg-center bg-contain mr-20 md:mr-45 mt-4 md:mt-8 z-0"></div>
          <div className="md:hidden xl:block absolute w-32 md:w-80 h-32 md:h-80 bg-[url('/images/dots.png')] bg-no-repeat bg-center bg-contain translate-x-20 md:translate-x-140 translate-y-10 md:translate-y-30 z-0"></div>

          {/* Review Cards */}
          <div className="relative z-10 w-full">
            {/* Desktop view (grid layout) */}
            <div className="hidden xl:grid grid-cols-2 gap-8 md:gap-10 px-6 md:px-20">
              {data.map((data, index) => (
                <div
                  key={index}
                  className="card bg-white shadow rounded-xl flex flex-col md:flex-row p-4 md:p-6"
                >
                  <div className="w-full md:w-[20%]">
                    <div className="circle h-10 w-10 md:h-16 md:w-16 rounded-full bg-red-300 mt-2 md:mt-6 ml-2 md:ml-6"></div>
                  </div>
                  <div className="w-full md:w-[80%]">
                    <div className="flex justify-between items-start">
                      <div>
                        <h1 className="text-lg md:text-2xl font-bold mt-2">
                          {data.name}
                        </h1>
                        <h3 className="text-sm md:text-xl text-gray-400">
                          {data.profession}
                        </h3>
                      </div>
                      <div>
                        <h1 className="text-sm md:text-xl mt-2">⭐⭐⭐⭐⭐</h1>
                      </div>
                    </div>
                    <p className="text-sm md:text-lg text-gray-500 mt-4">
                      {data.review}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile view (auto-scroll) */}
            <div
              ref={scrollRef}
              className="xl:hidden flex space-x-4 px-4 snap-x snap-mandatory overflow-hidden"
            >
              {data.map((data, index) => (
                <div
                  key={index}
                  className="card snap-center min-w-[85vw] bg-white shadow rounded-xl p-4 flex flex-col"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-red-300" />
                    <div>
                      <h1 className="text-lg font-bold">{data.name}</h1>
                      <h3 className="text-sm text-gray-400">
                        {data.profession}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-2">
                    <h1 className="text-sm">⭐⭐⭐⭐⭐</h1>
                    <p className="text-sm text-gray-500 mt-2">{data.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const data = [
  {
    name: "Rahul Sharma",
    profession: "Software Engineer",
    review:
      "Amazing service! The process was smooth, and I loved how eco-friendly the approach was. Highly recommended!",
  },
  {
    name: "Priya Verma",
    profession: "Graphic Designer",
    review:
      "Great experience! The team was very professional, and the entire process was hassle-free. Will definitely use it again.",
  },
  {
    name: "Amit Singh",
    profession: "Marketing Specialist",
    review:
      "I was really impressed with the efficiency and sustainability of the service. A step towards a better future!",
  },
  {
    name: "Neha Kapoor",
    profession: "Entrepreneur",
    review:
      "Fantastic initiative! I appreciate the attention to detail and how well-organized everything was. Keep up the great work!",
  },
];

export default Feedback;
