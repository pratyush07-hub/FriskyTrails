import React from "react";

const Box = () => {
  const data = [
    {
      image: "/images/rock.jpg",
      des: "Indonesian Hot Spots | 5 Unique Destinations Worth Considering",
    },
    {
      image: "/images/rock.jpg",
      des: "Indonesian Hot Spots | 5 Unique Destinations Worth Considering",
    },
    {
      image: "/images/rock.jpg",
      des: "Indonesian Hot Spots | 5 Unique Destinations Worth Considering",
    },
    {
      image: "/images/rock.jpg",
      des: "Indonesian Hot Spots | 5 Unique Destinations Worth Considering",
    },
    {
      image: "/images/rock.jpg",
      des: "Indonesian Hot Spots | 5 Unique Destinations Worth Considering",
    },
    {
      image: "/images/rock.jpg",
      des: "Indonesian Hot Spots | 5 Unique Destinations Worth Considering",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="box m-auto w-[40vw] pb-10 pt-10 flex">
          <img
            className="w-[24vw] h-[28vh] object-cover rounded-l-4xl"
            src={item.image}
            alt=""
          />
          <div className="pl-6 pt-4 text-2xl font-semibold tracking-tighter">
            <h3>
              {item.des}
            </h3>
            <button className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 border-1 active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white mt-8 text-lg font-semibold rounded-full px-6 py-2 cursor-pointer">
              Read More
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Box;
