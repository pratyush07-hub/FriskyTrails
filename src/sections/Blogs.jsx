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
      <div className="h-auto mb-4 mt-8 w-[90vw] m-auto">
        <h1 className="text-4xl text-center font-bold">
          Enjoy Fresh Travel Blogs
        </h1>

        {/* Horizontal scroll on mobile + tablet, grid on large screens only */}
        <div className="mt-4 md:mt-10 overflow-x-auto xl:overflow-visible">
          <div className="flex xl:grid xl:grid-cols-4 gap-6 pb-4 min-w-[40vw] lg:min-w-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="min-w-[70vw] md:min-w-[40vw] xl:min-w-0 h-[42vh] w-full bg-cover bg-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="h-full w-full bg-black/30 rounded-lg p-2">
                  
                  <div className="h-[4vh]">
                    <h2 className="text-white mt-42 lg:mt-50 xl:mt-50 font-semibold">
                      {item.des}
                    </h2>
                  </div>
                  <button className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 rounded-lg text-white active:scale-95 mt-6 w-full h-[5vh]">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link to="/blog">
            <button className="bg-white mt-2 lg:mt-6 border-1 text-xl font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-6 py-2 lg:py-4">
              More Blogs
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Blogs;
