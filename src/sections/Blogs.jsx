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
 //fast reloading ke liye
  const preloadPage = (url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "document";
    link.href = url;
    document.head.appendChild(link);
  };
  

  return (
    <div className="w-full mt-10 max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-2 ">
      {/* Perfect Responsive Heading */}
      <h2
  className="text-3xl py-4 md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 leading-tight tracking-tight"
  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
>
  Enjoy Fresh Travel Blogs
</h2>


  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
        {data.map((item, index) => (
          <Link
            key={item.des}
            to={item.link}
            onMouseEnter={() => preloadPage(item.link)}
            className="group relative w-full h-64 sm:h-72 md:h-80 lg:h-96 aspect-video rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${item.image})` }}
          >

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
           
            <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 lg:p-8 pb-12 sm:pb-14">
         
              <h2 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-lg leading-tight line-clamp-2 mb-4 sm:mb-5 drop-shadow-lg tracking-tight">
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
