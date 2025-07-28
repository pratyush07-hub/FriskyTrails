import Deals from '../assets/deals.png';
import Work from '../assets/24.png';
import Price from '../assets/price.png';
import Booking from '../assets/booking.png';

const Choose = () => {
  return (
    <>
      <div className='w-full'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-center'>Why Choose Us</h1>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-lg bg-white border border-[#FF6321] shadow-lg px-2 py-2 md:px-6 md:py-8 text-center flex flex-col items-center"
            >
              <img className='h-16 w-16 mb-6' src={item.image} alt="img" />
              <h2 className='text-lg font-semibold mb-3'>{item.title}</h2>
              <p className='text-sm text-gray-600 tracking-tight'>{item.des}</p>
            </div> 
          ))}
        </div>
      </div>
    </>
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

