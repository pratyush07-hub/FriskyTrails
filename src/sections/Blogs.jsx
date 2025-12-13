import { Link } from "react-router-dom";

const Blogs = () => {
  const data = [
    {
      image: "/images/car.jpg",
      des: "Budget-Friendly Family Vacation Destinations Around the World",
      link:'https://frisky-trails.vercel.app/blog/places-to-visit-in-india-in-winter',
    },
    {
      image: "/blogimages/goa.jpg",
      des: "Hidden Beaches in Goa",
      link:'https://frisky-trails.vercel.app/blog/places-to-visit-near-calangute',
    },
    {
      image: "/blogimages/wildlife.avif",
      des: "Best Wildlife Sanctuaries and National Parks to Explore in Chhattisgarh",
      link:'https://frisky-trails.vercel.app/blog/offbeat-places-to-visit-in-india',
    },
    {
      image: "/blogimages/delhi.avif",
      des: "10 Offbeat Weekend Getaways From Delhi for Nature Lovers",
      link:'https://frisky-trails.vercel.app/blog/places-to-visit-near-delhi-within-300-km',
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
    <div className="w-full mt-8 md:mt-12 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-2">
      {/* Perfect Responsive Heading */}
      <h2
        className="text-3xl py-4 md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight tracking-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Enjoy Fresh Travel Blogs
      </h2>

      {/* Responsive Grid/Carousel Container */}
      <div className="w-full">
        {/* Mobile Carousel - Hidden on larger screens */}
        <div className="block lg:hidden">
          <div 
            className="flex overflow-x-auto gap-4 pb-6 -ml-4 pl-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(140,146,157,0.5)transparent' }}
          >
            {data.map((item, index) => (
              <Link
                key={item.des}
                to={item.link}
                onMouseEnter={() => preloadPage(item.link)}
                className="group relative min-w-[80vw] max-w-sm h-64 sm:h-72 sm:min-w-[70vw] flex-shrink-0 snap-center rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 bg-cover bg-center bg-no-repeat last:mr-4"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 pb-10 sm:pb-12">
                  <h2 className="text-white font-bold text-sm sm:text-base leading-tight line-clamp-2 mb-3 sm:mb-4 drop-shadow-lg tracking-tight">
                    {item.des}
                  </h2>
                  
                  <div className="w-full">
                    <button className="w-full bg-gradient-to-r from-orange-500/95 to-amber-400/95 backdrop-blur-sm text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:from-orange-500 hover:to-amber-500 hover:shadow-xl hover:brightness-110 active:scale-95 transition-all duration-300 border border-white/20 text-sm">
                      Read More →
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {data.map((item, index) => (
            <Link
              key={item.des}
              to={item.link}
              onMouseEnter={() => preloadPage(item.link)}
              className="group relative w-full h-80 lg:h-96 aspect-video rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 pb-12 lg:pb-14">
                <h2 className="text-white font-bold text-lg lg:text-xl leading-tight line-clamp-2 mb-4 sm:mb-5 drop-shadow-lg tracking-tight">
                  {item.des}
                </h2>
                
                <div className="w-full sm:w-4/5 lg:w-full">
                  <button className="w-full bg-gradient-to-r from-orange-500/95 to-amber-400/95 backdrop-blur-sm text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl shadow-lg hover:from-orange-500 hover:to-amber-500 hover:shadow-xl hover:brightness-110 active:scale-95 transition-all duration-300 border border-white/20">
                    Read More →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Enhanced CTA Button */}
      <div className="flex justify-center mt-12 lg:mt-16">
        <Link 
          to="/blog"
          className="group relative inline-flex items-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 text-lg sm:text-xl font-semibold bg-white/95 backdrop-blur-sm border-2 border-gray-200/50 shadow-xl rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-400 hover:text-white hover:border-transparent hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10 tracking-wide">More Blogs</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-amber-400/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
