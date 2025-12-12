import { MapPin, Search, Calendar, Users } from "lucide-react";


const HeroBanner = ({ state }) => {
  return (
    <>
      {state.bannerImage && (
        <section className="relative h-[300px] sm:h-[400px] lg:h-[450px] overflow-hidden">
          <img
            src={state.bannerImage}
            alt={state.name}
            className="w-full h-full object-cover"
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
              
              {/* Location Badge */}
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

          {/* Search Bar */}
          <div className="absolute -bottom-8 left-1/2 w-full max-w-4xl px-4" style={{ transform: 'translateX(-50%)' }}>
            <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-100">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Vacation Rentals"
                  className="bg-transparent outline-none w-full text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div className="hidden sm:block w-px h-10 bg-gray-200" />
              <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-100">
                <Calendar className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="bg-transparent outline-none w-full text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <div className="hidden sm:block w-px h-10 bg-gray-200" />
              <div className="flex-1 flex items-center gap-3 px-4 py-2 rounded-xl bg-gray-100">
                <Users className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Bedrooms"
                  className="bg-transparent outline-none w-full text-gray-900 placeholder:text-gray-400"
                />
              </div>
              <button className="px-8 py-3 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-600 transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HeroBanner;
