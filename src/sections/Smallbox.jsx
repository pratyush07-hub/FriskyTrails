const Smallbox = () => {
  const data = [
    { name: "Goa", image: "/destinations/Goa.png" },
    { name: "Himachal", image: "/destinations/Himachal.png" },
    { name: "Kashmir", image: "/destinations/Kashmir.png" },
    { name: "Kerala", image: "/destinations/Kerala.png" },
    { name: "Tawang", image: "/destinations/Tawang.png" },
    { name: "Andaman", image: "/destinations/Andaman.png" },
    { name: "Meghalaya", image: "/destinations/Meghalaya.png" },
    { name: "Rajasthan", image: "/destinations/Rajasthan.png" },
    { name: "Uttarakhand", image: "/destinations/Uttarakhand.png" },
  ];

//isme mene aspect height and with use kiya instead of vw,vh fixed values

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="
            relative overflow-hidden 
            aspect-[4/3] sm:aspect-[5/3] md:aspect-[3/2]  /* height scales by width */
            w-full 
            rounded-md md:rounded-lg lg:rounded-xl
          "
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
      
          <div className="absolute inset-0 bg-black/40 sm:bg-black/30 md:bg-black/20"></div>

       
          <div className="relative flex justify-center items-center h-full w-full">
            <h3 className="text-gray-300   tracking-tight text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-bold ">
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Smallbox;
