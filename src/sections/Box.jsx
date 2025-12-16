import { Link } from "react-router-dom";

const Box = () => {
  const data = [
    {
      image: "/TrendingBlog/Kodaikanal.png",
      des: "Places to Visit in Kodaikanal in 1 Day",
      link: "/blog/places-to-visit-in-kodaikanal-in-1-day",
    },
    {
      image: "/TrendingBlog/Calangute.png",
      des: "Places to Visit Near Calangute",
      link: "/blog/places-to-visit-near-calangute",
    },
    {
      image: "/TrendingBlog/Ahemdabad.png",
      des: "Places to Visit Near Ahmedabad Within 100 Km",
      link: "/blog/places-to-visit-near-ahmedabad-within-100-km",
    },
    {
      image: "/TrendingBlog/Pelling.png",
      des: "Places to Visit in Pelling",
      link: "/blog/places-to-visit-in-pelling",
    },
    {
      image: "/TrendingBlog/Havelock.png",
      des: "Places to Visit in Havelock Island",
      link: "/blog/places-to-visit-in-havelock",
    },
    {
      image: "/TrendingBlog/SouthGoa.png",
      des: "Best Places to Visit in South Goa",
      link: "/blog/best-places-to-visit-in-south-goa",
    },
  ];
  
  return (
    <>
      <div className="hidden md:block">
  <div className="grid grid-cols-1 md:grid-cols-2">
    {data.map((item, index) => (
      <div
        key={index}
        className="box m-auto w-[80vw] sm:w-[60vw] md:w-[48vw] lg:w-[42vw] xl:w-[40vw] pb-8 pt-8 flex"
      >
        <img
          className="w-[35vw] sm:w-[30vw] md:w-[24vw] h-[24vh] md:h-[28vh] object-cover rounded-l-4xl bg-green-300"
          src={item.image}
          alt=""
        />
        <div className="pl-4 sm:pl-5 md:pl-6 pt-4 text-xl sm:text-[1.35rem] md:text-[1rem] lg:text-xl xl:text-2xl font-semibold tracking-tight">
          <h3>{item.des}</h3>
          <Link to={item.link}>
            <button className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 border active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white mt-6 md:mt-2 xl:mt-2 text-base sm:text-lg font-semibold rounded-full px-5 sm:px-6 py-2 cursor-pointer">
              Read More
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="md:hidden flex gap-4 overflow-x-auto px-4 pb-4">
        {data.map((item, index) => (
          <div key={index} className="box mt-4 h-auto pb-2 rounded-xl w-full shrinnk-0">
            <img
              className="w-[80vw] mx-auto bg-green-300 h-[28vh] rounded-xl"
              src={item.image}
              alt=""
            />
            <h3 className="w-[70vw] mx-auto mt-2 text-xl">{item.des}</h3>
            <div className="w-full h-auto flex justify-center">

            <Link to={item.link}>
                  <button className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 border-1 active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white mt-4 text-lg font-semibold rounded-full px-6 py-2 cursor-pointer">
                    Read More
                  </button>
                </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Box;
