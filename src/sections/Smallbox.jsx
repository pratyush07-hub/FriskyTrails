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

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden h-[12vh] w-[27vw] md:w-[6vw] md:rounded-md"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black/30 md:bg-black/20"></div>

          {/* Centered text */}
          <div className="relative flex justify-center items-center h-full w-full">
            <h3 className="text-white tracking-tighter text-xs font-bold uppercase">
              {item.name}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Smallbox;
