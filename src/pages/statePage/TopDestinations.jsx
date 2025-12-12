import { Compass, ChevronRight, ArrowUpRight, Star } from "lucide-react";



const TopDestinations = ({ destinations, stateName }) => {
  return (
    <section id="destinations" className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Compass className="w-6 h-6 text-teal-500" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Top Destinations</h2>
            <p className="text-gray-500 text-sm">Get inspired by some of our best {stateName} attractions</p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
          Show all <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {destination.distance && (
                <span className="absolute bottom-3 left-3 px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  {destination.distance}
                </span>
              )}
              {destination.discount && (
                <span className="absolute bottom-3 right-3 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">
                  {destination.discount}
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 text-sm leading-tight mb-2 line-clamp-2">
                {destination.name}
              </h3>
              {destination.price && (
                <p className="text-lg font-bold text-gray-900">
                  € {destination.price}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
