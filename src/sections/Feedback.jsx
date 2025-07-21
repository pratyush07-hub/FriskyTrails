import React from "react";

const Feedback = () => {
  return (
    <>
      <div class="relative h-screen w-full flex flex-col items-center justify-center">
        <h3 class="text-center text-[rgb(255,99,33)] pt-10 md:pt-20 font-semibold text-lg md:text-xl">
          Customer's Feedback
        </h3>
        <h1 class="text-center font-bold text-3xl md:text-5xl mt-2">
          What Says Our Visitors
        </h1>

        <div class="relative h-auto md:h-[80vh] w-full flex items-center justify-center">
          <div class="absolute w-40 md:w-80 h-40 md:h-80 bg-[url('/images/circle.avif')] bg-no-repeat bg-center bg-contain mr-20 md:mr-45 mt-4 md:mt-8"></div>

          <div class="absolute w-40 md:w-80 h-40 md:h-80 bg-[url('/images/dots.png')] bg-no-repeat bg-center bg-contain translate-x-20 md:translate-x-140 translate-y-10 md:translate-y-30"></div>

          <div class="relative z-10 flex justify-center">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
              {data.map((data) => (
                <div class="card h-auto md:h-[30vh] w-full md:w-[40vw] bg-white shadow rounded-xl flex flex-col md:flex-row">
                  <div className="w-full md:w-[20%]">
                    <div className="circle h-10 w-10 md:h-15 md:w-15 rounded-full bg-red-300 mt-4 md:mt-6 ml-4 md:ml-10"></div>
                  </div>
                  <div className="w-full md:w-[80%]">
                    <div className="flex justify-between">
                      <div>
                        <h1 className="text-xl md:text-2xl font-bold mt-4 md:mt-6">{data.name}</h1>
                        <h3 className="text-lg md:text-xl text-gray-400 tracking-tight">
                          {data.profession}
                        </h3>
                      </div>
                      <div>
                        <h1 className="text-xl md:text-2xl mt-4 md:mt-10 mr-4 md:mr-8">⭐⭐⭐⭐⭐</h1>
                      </div>
                    </div>

                    <div className="w-full md:w-[30vw] mt-4 md:mt-6">
                      <p className="text-base md:text-xl text-gray-400">{data.review}</p>
                    </div>
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
