import React from "react";

const Latestblog = () => {
  const data = [
    {
      season: "Summer",
      color: "bg-amber-200",
      image: "/seasonsimages/Summer.webp",
    },
    {
      season: "Monsoon",
      color: "bg-blue-200",
      image: "/seasonsimages/Monsoon.webp",
    },
    {
      season: "Autumn",
      color: "bg-purple-200",
      image: "/seasonsimages/Autumn.webp",
    },
    {
      season: "Winter",
      color: "bg-blue-100",
      image: "/seasonsimages/Winter.webp",
    },
    {
      season: "Spring",
      color: "bg-green-200",
      image: "/seasonsimages/Spring.webp",
    },
  ];

  return (
    <>
      <div className="flex items-center pl-18">
        <h1 className="text-2xl tracking-tighter font-semibold">
          Best Places to Travel in India by Season
        </h1>
        <div className="h-[4px] ml-4 mt-2 bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 w-[58vw] rounded"></div>
      </div>

      <div className="grid grid-cols-5 h-[40vh] w-[90vw] m-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className={`h-[26vh] w-[15vw] m-auto flex justify-center items-center rounded-lg shadow-lg ${item.color}`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-xl font-semibold text-white bg-opacity-40 px-2 py-1 rounded">
              {item.season}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Latestblog;
