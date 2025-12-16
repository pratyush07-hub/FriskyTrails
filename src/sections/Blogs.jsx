import { Link } from "react-router-dom";



const Blogs = () => {
  const data = [
    {
      image: '/TravelBlog/Vacation.png',
      des: "Budget-Friendly Family Vacation Destinations Around the World",
      link: "https://frisky-trails.vercel.app/blog/places-to-visit-in-india-in-winter",
    },
    {
      image: "/TravelBlog/Goa.png",
      des: "Hidden Beaches in Goa",
      link: "https://frisky-trails.vercel.app/blog/places-to-visit-near-calangute",
    },
    {
      image: "/TravelBlog/Chattisgarh.png",
      des: "Best Wildlife Sanctuaries and National Parks to Explore in Chhattisgarh",
      link: "https://frisky-trails.vercel.app/blog/offbeat-places-to-visit-in-india",
    },
    {
      image: "/TravelBlog/Delhi.png",
      des: "10 Offbeat Weekend Getaways From Delhi for Nature Lovers",
      link: "https://frisky-trails.vercel.app/blog/places-to-visit-near-delhi-within-300-km",
    },
  ];

  const preloadPage = (url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "document";
    link.href = url;
    document.head.appendChild(link);
  };

  return (
    <div className="w-full md:mt-8 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-2">
      {/* Heading — spacing reduced */}
      <h2
        className="text-3xl py-2 md:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-3 md:mb-4 leading-tight tracking-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Enjoy Fresh Travel Blogs
      </h2>

      {/* Cards */}
      <div className="w-full">
        {/* Mobile Carousel */}
        <div className="block lg:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 -ml-4 pl-4 snap-x snap-mandatory scroll-smooth">
            {data.map((item) => (
              <Link
                key={item.des}
                to={item.link}
                onMouseEnter={() => preloadPage(item.link)}
                className="group relative min-w-[80vw] max-w-sm h-64 sm:h-72 sm:min-w-[70vw] flex-shrink-0 snap-center rounded-3xl shadow-xl overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-4 pb-8">
                  <h2 className="text-white font-bold text-sm sm:text-base line-clamp-2 mb-3">
                    {item.des}
                  </h2>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold py-2 rounded-xl">
                    Read More →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {data.map((item) => (
            <Link
              key={item.des}
              to={item.link}
              onMouseEnter={() => preloadPage(item.link)}
              className="group relative w-full h-80 lg:h-96 rounded-3xl shadow-xl overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 pb-10">
                <h2 className="text-white font-bold text-lg line-clamp-2 mb-4">
                  {item.des}
                </h2>
                <button className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold py-2.5 rounded-xl">
                  Read More →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-6 lg:mt-6">
        <Link
          to="/blog"
          className="px-10 py-4 text-lg font-semibold bg-white border shadow-xl rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-400 hover:text-white transition"
        >
          More Blogs
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
