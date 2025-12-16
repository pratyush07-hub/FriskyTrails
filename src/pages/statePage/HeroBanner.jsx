import { MapPin, Search, Calendar, Users } from "lucide-react";
import { useState } from "react";





const HeroBanner = ({ state }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ searchQuery, checkInDate, guests });
  };

  // Safety check for state prop
  if (!state) {
    return null;
  }

  const bannerImage = state?.coverImage;
  const stateName = state?.name || "Destination";

  return (
    <>
      {bannerImage ? (
        <section 
          className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-visible" 
          aria-label={`${stateName} banner`}
        >
          <img
            src={bannerImage}
            alt={`${stateName} landscape`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3), transparent)' }}
          />
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Find deals for any season
              </h1>
              <p className="text-white/80 text-lg mb-8">
                From cozy country homes to funky city apartments
              </p>
              
              <div 
                className="absolute right-8 top-1/2 hidden lg:flex items-center gap-3 rounded-2xl px-6 py-4 shadow-lg"
                style={{ transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.95)' }}
              >
                <MapPin className="w-8 h-8 text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-2xl font-bold text-gray-900">{stateName}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // Fallback banner when image is not available
        <section 
          className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-visible bg-gradient-to-r from-blue-500 to-purple-600" 
          aria-label={`${stateName} banner`}
        >
          <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto w-full">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
                Welcome to {stateName}
              </h1>
              <p className="text-white/80 text-lg mb-8">
                Discover amazing places and experiences
              </p>
              
              <div 
                className="absolute right-8 top-1/2 hidden lg:flex items-center gap-3 rounded-2xl px-6 py-4 shadow-lg"
                style={{ transform: 'translateY(-50%)', backgroundColor: 'rgba(255,255,255,0.95)' }}
              >
                <MapPin className="w-8 h-8 text-gray-700" />
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="text-2xl font-bold text-gray-900">{stateName}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroBanner;
