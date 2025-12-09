import choose from "@/assets/choose.png";

const Choose= () => {
  const leftFeatures = [
    {
      title: "Color Schemes",
      description: "Choosing the right colors is crucial in setting the mood of a space"
    },
    {
      title: "Furniture Selection",
      description: "Opt for furniture that blends aesthetics and functionality"
    },
    {
      title: "Lighting",
      description: "Proper lighting enhances the ambiance and usability of a room"
    }
  ];

  const rightFeatures = [
    {
      title: "Textures Materials",
      description: "Incorporating diverse textures, like wood, metal, and fabrics, adds depth and interest to your décor"
    },
    {
      title: "Accessories",
      description: "Personalizing spaces with art, plants, and accessories helps reflect your personality"
    },
    {
      title: "Space Optimization",
      description: "Smart layouts and multifunctional furniture maximize small spaces"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
        {/* Main Heading */}
        <h1 
          className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug sm:leading-tight lg:leading-tight mb-6 sm:mb-12 lg:mb-20"
          style={{ 
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#1a3a2f",
            fontStyle: "italic",
            fontWeight: 400
          }}
        >
          We provide different<br />
          types of Interior design
        </h1>

        {/* Features Grid - Always 3 columns */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-12 items-start">
          
          {/* Left Features */}
          <div className="space-y-3 sm:space-y-6 lg:space-y-8">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="pb-2 sm:pb-4 lg:pb-6 border-b border-gray-200">
                <h3 
                  className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#1a3a2f"
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed"
                  style={{ color: "#4a5568" }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div 
              className="relative overflow-hidden w-full"
              style={{
                borderRadius: "0 0 100px 100px"
              }}
            >
              <img
                src={choose}
                alt="Beautiful interior design with cozy living room featuring colorful cushions and modern furniture"
                className="w-full object-cover"
                style={{
                  borderRadius: "0 0 100px 100px",
                  height: "clamp(180px, 40vw, 550px)"
                }}
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-3 sm:space-y-6 lg:space-y-8">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="pb-2 sm:pb-4 lg:pb-6 border-b border-gray-200">
                <h3 
                  className="text-xs sm:text-base md:text-lg lg:text-2xl font-bold mb-1 sm:mb-2 lg:mb-3"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: "#1a3a2f"
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-[10px] sm:text-xs md:text-sm lg:text-base leading-relaxed"
                  style={{ color: "#4a5568" }}
                >
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
