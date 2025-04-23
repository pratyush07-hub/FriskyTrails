import React from "react";
import { Link } from "react-router-dom";


const Blogs = () => {
  const data = [
    {
      image: "/images/car.jpg",
      des: "Budget-Friendly Family Vacation Destinations Around the World",
    },
    {
      image: "/images/car.jpg",
      des: "Hidden Beaches in Goa",
    },
    {
      image: "/images/car.jpg",
      des: "Best Wildlife Sanctuaries and National Parks to Explore in Chhattisgarh",
    },
    {
      image: "/images/car.jpg",
      des: "10 Offbeat Weekend Getaways From Delhi for Nature Lovers",
    },
  ];

  return (
    <>
      <div className="h-[80vh] w-[80vw] m-auto">
        {/* <div className="w-[80vw] m-auto"> */}
          <h1 className="text-4xl pt-20 text-center font-bold">
            Enjoy Fresh Travel Blogs
          </h1>
          <div className="grid grid-cols-4 gap-6 mt-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="h-[40vh] w-full bg-cover bg-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="h-full w-full bg-black/30 rounded-lg p-2">
                  <button className="font-semibold rounded-lg active:scale-95 transition-all duration-300 bg-[rgb(233,99,33)] text-white shadow px-2 py-1">
                    Holiday Destinations
                  </button>
                  <div className="h-[4vh]">
                    <h2 className="text-white mt-38 font-semibold">
                      {item.des}
                    </h2>
                  </div>
                  <button className="backdrop-blur-lg rounded-lg text-white active:scale-95 mt-6 w-full h-[5vh]">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link to="/blog">
            <button className="bg-white mt-8 border-1 text-xl font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-6 py-4">
              More Blogs
            </button>
            </Link>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Blogs;
