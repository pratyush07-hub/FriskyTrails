import choose from "../assets/choose.png";

const Choose = () => {
  const leftFeatures = [
    {
      title: "Thrilling Adventures",
      description:
        "Discover handpicked trails, treks, and outdoor experiences designed to spark your inner explorer.",
    },
    {
      title: "Expert Trail Guidance",
      description:
        "Navigate confidently with detailed trail maps, difficulty ratings, and safety recommendations.",
    },
    {
      title: "Real-Time Travel Insights",
      description:
        "Stay updated with live weather, route conditions, and important alerts before you start your journey.",
    },
  ];

  const rightFeatures = [
    {
      title: "Premium Gear Suggestions",
      description:
        "Get curated gear recommendations tailored to each adventure—from hiking essentials to camping kits.",
    },
    {
      title: "Community Adventure Stories",
      description:
        "Read real travel experiences shared by adventurers to inspire your next epic journey.",
    },
    {
      title: "Smart Trip Planning",
      description:
        "Plan your adventure effortlessly with optimized routes, estimated timings, and essential checklists.",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16 xl:py-24">

        {/* Heading */}
        <h1
          className="text-center text-4xl sm:text-5xl font-bold leading-tight mb-12 sm:mb-16 xl:mb-24"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          <span className="block xl:hidden">Why Choose Us?</span>
          <span className="hidden xl:block">
            Why Choose Us for Your Next Adventure?
          </span>
        </h1>

        {/* MAIN GRID — sm/md/lg = 1 column, xl = 3 columns */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 sm:gap-12 xl:gap-20">

          {/* LEFT FEATURES */}
          <div className="space-y-6">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="pb-4 border-b border-gray-200">
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#1a3a2f",
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

          {/* IMAGE CENTER */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-md xl:max-w-full">
              <img
                src={choose}
                alt="Adventure"
                className="
                  w-full object-cover rounded-none
                  xl:rounded-t-[20px]
                  xl:rounded-b-[150px]
                "
                style={{
                  height: "400px",
                  transition: "all 0.3s ease-in-out",
                }}
              />
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="pb-4 border-b border-gray-200">
                <h3
                  className="text-xl sm:text-2xl font-semibold mb-2"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#1a3a2f",
                  }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
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
