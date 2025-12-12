import Deals from '../assets/deals.png';
import Work from '../assets/24.png';
import Price from '../assets/price.png';
import Booking from '../assets/booking.png';

const Choose = () => {
  return (
    <div className='w-full mt-8 md:mt-12'>
      <h1 className='text-3xl mb-2 sm:text-4xl md:text-5xl font-bold text-center '  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>Why Choose Us</h1>

      {/* Mobile: Horizontal scroll | Tablet & above: Grid */}
      <div className="mt-6 md:mt-8 max-w-[90vw] mx-auto">
        <div className="flex sm:hidden gap-6 overflow-x-auto pb-4 w-full">
          {data.map((item, index) => (
            <div
              key={index}
              className="min-w-[70vw] rounded-lg bg-white border border-[#FF6321] shadow-lg px-4 pt-6 pb-6 text-center flex flex-col items-center"
            >
              <img className='h-16 w-16 mb-6' src={item.image} alt="img" />
              <h2 className='text-lg font-semibold mb-3'>{item.title}</h2>
              <p className='text-sm text-gray-600 tracking-tight'>{item.des}</p>
            </div>
          ))}
        </div>

        {/* Tablet and above: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-white border border-[#FF6321] shadow-lg px-4 pt-6 pb-6 text-center flex flex-col items-center"
            >
              <img className='h-16 w-16 mb-6' src={item.image} alt="img" />
              <h2 className='text-lg font-semibold mb-3'>{item.title}</h2>
              <p className='text-sm text-gray-600 tracking-tight'>{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "24/7 Travel Support",
    image: Work,
    des: "Our expert team is here round the clock to assist you with any travel queries. Just reach out, and we’ve got you covered.",
  },
  {
    title: "Easy Booking Process",
    image: Booking,
    des: "Booking adventure or tour is now easier than ever, with unbeatable offers to make your trip even better!",
  },
  {
    title: "Unbeatable Price",
    image: Price,
    des: "Get the lowest rates on hotels, holiday packages, Adventures and flights, so you can travel without breaking the bank.",
  },
  {
    title: "Unmissable Deals",
    image: Deals,
    des: "From flights and hotels to buses, car rentals, and tour packages – grab the best deals for your next adventure!",
  },
];

export default Choose;