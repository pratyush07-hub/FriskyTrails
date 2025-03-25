import React from "react";

const Latestblog = () => {
  const data = [
    {
      season: "Summer",
      color: "bg-amber-200"
    },
    {
      season: "Monsoon",
      color: "bg-blue-200"
    },
    {
      season: "Autumn",
      color: "bg-purple-200"
    },
    {
      season: "Winter",
      color: "bg-blue-100"
    },
    {
      season: "Spring",
      color: "bg-green-200"
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
          <div key={index} className={`h-[26vh] w-[15vw] m-auto flex justify-center items-center ${item.color} rounded-lg shadow-lg`}>
            
            <h1 className="text-xl font-semibold">
              {item.season}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Latestblog;
