import { Link } from "react-router-dom";

const Blogs = () => {
  const data = [
    {
      image: "/images/car.jpg",
      des: "Budget-Friendly Family Vacation Destinations Around the World",
    },
    {
      image: "/blogimages/goa.jpg",
      des: "Hidden Beaches in Goa",
    },
    {
      image: "/blogimages/wildlife.avif",
      des: "Best Wildlife Sanctuaries and National Parks to Explore in Chhattisgarh",
    },
    {
      image: "/blogimages/delhi.avif",
      des: "10 Offbeat Weekend Getaways From Delhi for Nature Lovers",
    },
  ];

  return (
    <div className="h-auto w-[90vw] m-auto mb-12 ">
      {/* Heading */}
      <h1
        className="text-center text-2xl sm:text-3xl md:text-5xl font-bold"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Enjoy Fresh Travel Blogs
      </h1>

      {/* Blog Cards */}
      <div className="mt-8 md:mt-12 overflow-x-auto xl:overflow-visible">
        <div className="flex xl:grid xl:grid-cols-4 gap-8 pb-4 min-w-[40vw] lg:min-w-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative min-w-[70vw] md:min-w-[45vw] xl:min-w-0 h-[44vh] rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/25 flex flex-col justify-end p-4">
                <h2 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-3 line-clamp-2">
                  {item.des}
                </h2>
                <button className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 text-white font-semibold py-2 rounded-lg w-full hover:brightness-110 active:scale-95 transition-all duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Blogs Button */}
      <div className="flex justify-center mt-6 lg:mt-10">
        <Link to="/blog">
          <button className="bg-white border border-gray-300 text-xl font-semibold rounded-full px-6 py-3 transition-all duration-300 hover:bg-amber-400 hover:text-white active:scale-95">
            More Blogs
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
