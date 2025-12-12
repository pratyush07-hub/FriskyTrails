import { Utensils, ChevronRight, Star } from "lucide-react";


const PopularFoods = ({ foods }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Utensils className="w-6 h-6 text-teal-500" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Popular Places to Eat</h2>
            <p className="text-gray-500 text-sm">Grab some amazing foods from the best Restaurants</p>
          </div>
        </div>
        <button className="flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors">
          Show all <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-900 text-sm">{food.name}</h3>
                {food.verified && (
                  <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-gray-900">{food.rating}</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-gray-500 text-xs mb-1">
                {food.reviews?.toLocaleString()} reviews
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{food.description}</span>
                <span>{food.priceRange}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularFoods;
