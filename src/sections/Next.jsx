import { Link } from "react-router-dom";

const Next = () => {
  const data = [
    { image: "/nextimages/1.png", name: "Meghalaya", slug: "meghalaya" },
    { image: "/nextimages/2.png", name: "Kashmir", slug: "kashmir" },
    { image: "/nextimages/3.png", name: "Ladakh", slug: "ladakh" },
    { image: "/nextimages/4.png", name: "Goa", slug: "goa" },
    { image: "/nextimages/5.png", name: "Himachal", slug: "himachal" },
    { image: "/nextimages/6.png", name: "Kerala", slug: "kerala" },
  ];
  

  return (
    <div className="h-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-6 md:py-8 mt-8 md:mt-12">
      {/* Title - Fully responsive */}
      <h1 
        className='text-3xl mb-7 sm:text-4xl md:text-5xl font-bold text-center'
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        Where to Next?
      </h1>

      {/* Responsive Container */}
      <div className="mt-4 md:mt-10 max-w-[90vw] mx-auto">
        {/* Mobile: Horizontal scroll */}
        <div className="flex sm:hidden gap-6 overflow-x-auto pb-4 w-full">
          {data.map((item, index) => (
            <Link 
              key={item.name} 
              to={`/state/${item.slug}/blogs`}
              className="min-w-[70vw] rounded-2xl sm:rounded-3xl shadow-xl flex-shrink-0 group hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div
                className="relative w-full h-64 sm:h-72 bg-cover bg-center bg-no-repeat overflow-hidden cursor-pointer"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Gradient overlay - Always visible on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Bottom content - Always visible on mobile */}
                <div className="absolute inset-0 flex items-end p-4 sm:p-6 pb-10 sm:pb-12 justify-center">
                  <div className="text-center w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text">
                      {item.name}
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-2 sm:mt-3 rounded-full"></div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Tablet (md): Grid layout for medium screens */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 md:gap-8 w-full">
          {data.map((item, index) => (
            <Link key={item.name} to={`/state/${item.slug}/blogs`} className="group w-full h-72 md:h-80">
              <div
                className="relative w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                
                {/* Bottom content overlay */}
                <div className="absolute inset-0 flex items-end p-6 pb-12 justify-center">
                  <div className="text-center transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-200">
                    <h2 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text">
                      {item.name}
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-3 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                  </div>
                </div>

                {/* Subtle top accent line */}
                <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop (lg and above): Grid layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6 md:gap-8 w-full">
          {data.map((item, index) => (
            <Link key={item.name} to={`/state/${item.slug}/blogs`} className="group w-full h-80 lg:h-96">
              <div
                className="relative w-full h-full bg-cover bg-center bg-no-repeat rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>
                
                {/* Bottom content overlay */}
                <div className="absolute inset-0 flex items-end p-6 lg:p-8 pb-12 lg:pb-16 justify-center">
                  <div className="text-center transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out delay-200">
                    <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white drop-shadow-lg tracking-tight bg-gradient-to-r from-white to-slate-200 bg-clip-text">
                      {item.name}
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-white/50 to-transparent mx-auto mt-3 sm:mt-4 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                  </div>
                </div>

                {/* Subtle top accent line */}
                <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile swipe indicators - Only show on small screens */}
      <div className="mt-8 flex justify-center sm:hidden">
        <div className="flex space-x-2">
          {data.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-white/50 transition-all duration-300"
              style={{
                backgroundColor: index === 0 ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.3)'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Next;
