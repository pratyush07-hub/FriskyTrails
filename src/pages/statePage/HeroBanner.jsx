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

  const bannerImage = state.bannerImage 

  return (
    <>
      {bannerImage && (
        <section 
          className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-visible" 
          aria-label={`${state.name} banner`}
        >
          <img
            src={bannerImage}
            alt={`${state.name} landscape`}
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
                  <p className="text-2xl font-bold text-gray-900">{state.name}</p>
                </div>
              </div>
            </div>
          </div>

          <form 
            onSubmit={handleSearch} 
            className="absolute -bottom-16 sm:-bottom-10 left-1/2 w-[calc(100%-2rem)] sm:w-full max-w-4xl px-2 sm:px-4" 
            style={{ transform: 'translateX(-50%)' }}
          >
            <div 
              className="rounded-2xl shadow-xl p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4"
              style={{ backgroundColor: '#ffffff' }}
            >
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">Search vacation rentals</label>
                <div 
                  className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl"
                  style={{ backgroundColor: '#f3f4f6' }}
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#9ca3af' }} />
                  <input
                    id="search"
                    type="text"
                    placeholder="Vacation Rentals"
                    className="bg-transparent outline-none w-full text-sm sm:text-base"
                    style={{ color: '#111827' }}
                    aria-label="Search vacation rentals"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10" style={{ backgroundColor: '#e5e7eb' }} />
              
              <div className="flex gap-2 sm:flex-1 sm:gap-4">
                <div className="flex-1">
                  <label htmlFor="checkin" className="sr-only">Check-in date</label>
                  <div 
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl"
                    style={{ backgroundColor: '#f3f4f6' }}
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#9ca3af' }} />
                    <input
                      id="checkin"
                      type="date"
                      className="bg-transparent outline-none w-full text-sm sm:text-base"
                      style={{ color: '#111827' }}
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                </div>
                
                <div className="flex-1">
                  <label htmlFor="guests" className="sr-only">Number of guests</label>
                  <div 
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 rounded-xl"
                    style={{ backgroundColor: '#f3f4f6' }}
                  >
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#9ca3af' }} />
                    <select
                      id="guests"
                      className="bg-transparent outline-none w-full text-sm sm:text-base"
                      style={{ color: '#111827' }}
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                        <option key={num} value={num}>
                          {num} 
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold transition-colors text-sm sm:text-base"
                style={{ backgroundColor: '#14b8a6', color: '#ffffff' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0d9488'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#14b8a6'}
                aria-label="Search"
              >
                Search
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default HeroBanner;
