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
      <div className="flex flex-col md:flex-row items-start md:items-center md:px-18 gap-2 md:gap-4">
        <h1 className="text-lg md:text-2xl tracking-tighter font-semibold whitespace-nowrap">
          Best Places to Travel in India by Season
        </h1>
        <div className="h-[4px] w-full bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 rounded"></div>
      </div>

      <div className="grid grid-cols-2 md:mb-12 lg:mb-0 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 h-auto md:h-[40vh] w-full md:w-[90vw] m-auto mt-4 md:mt-8">
        {data.map((item, index) => (
          <div
            key={index}
            className={`h-[20vh] md:h-[26vh] w-full md:w-[28vw] lg:w-[15vw] m-auto flex justify-center items-center rounded-lg shadow-lg ${item.color}`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-lg md:text-xl font-semibold text-white bg-opacity-40 px-2 py-1 rounded">
              {item.season}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Latestblog;
