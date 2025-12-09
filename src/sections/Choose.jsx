import choose from "../assets/choose.png";

const Choose = () => {
  const leftFeatures = [
    {
      title: "Thrilling Adventures",
      description: "Discover handpicked trails, treks, and outdoor experiences designed to spark your inner explorer."
    },
    {
      title: "Expert Trail Guidance",
      description: "Navigate confidently with detailed trail maps, difficulty ratings, and safety recommendations."
    },
    {
      title: "Real-Time Travel Insights",
      description: "Stay updated with live weather, route conditions, and important alerts before you start your journey."
    }
  ];
  

  const rightFeatures = [
    {
      title: "Premium Gear Suggestions",
      description: "Get curated gear recommendations tailored to each adventure—from hiking essentials to camping kits."
    },
    {
      title: "Community Adventure Stories",
      description: "Read real travel experiences shared by adventurers to inspire your next epic journey."
    },
    {
      title: "Smart Trip Planning",
      description: "Plan your adventure effortlessly with optimized routes, estimated timings, and essential checklists."
    }
  ];
  
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        
        {/* Main Heading */}
        <h1
  className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-5xl leading-tight font-bold mb-10 sm:mb-16 lg:mb-24"
  style={{
    fontFamily: "'Playfair Display', Georgia, serif",
  }}
>
  {/* Small screens: only "Why Choose Us" */}
  <span className="block lg:hidden">Why Choose Us?</span>

  {/* Medium & larger screens: full line */}
  <span className="hidden lg:block">Why Choose Us for Your Next Adventure?</span>
</h1>

        {/* Responsive Grid — small/md = 1 col, large = 3 col */}
        <div className="
          grid 
          grid-cols-1 
          md:grid-cols-1 
          lg:grid-cols-3 
          gap-10 sm:gap-12 lg:gap-20 
          items-start
        ">
          
          {/* Left Features */}
          <div className="space-y-6">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="pb-4 border-b border-gray-200">
                <h3
                  className="text-2xl sm:text-xl md:text-2xl md:font-semibold  mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                     color: "#1a3a2f"
                  
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div
              className="
                relative 
                overflow-hidden 
                w-full 
                max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full
              "
            >
              <img
                src={choose}
                alt="Interior design"
                className="
                  w-full 
                  object-cover

                  /* Small + Medium: simple rectangle */
                  rounded-none 

                  /* Large screens: bring back curve */
                  lg:rounded-t-[20px]
                  lg:rounded-b-[150px]
                "
                style={{
                  /* small + md = fixed height, no clamp */
                  height: "400px",

                  /* large = auto responsive height */
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="pb-4 border-b border-gray-200">
                 <h3
                  className="text-2xl sm:text-xl md:text-2xl md:font-semibold  mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                     color: "#1a3a2f"
                  
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-md sm:text-md text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Choose;
