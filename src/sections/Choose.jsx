
import { Features } from './Features';
import { Headphones, CalendarCheck, BadgeDollarSign, Tag } from "lucide-react";
const Choose = () => {
  return (
    <div className='w-full'>
       <Features
        features={features}
        heading="Why Travel With Us"
        subheading="DISCOVER THE DIFFERENCE"
      />

    </div>
  );
};

const features = [
  {
    id: 1,
    icon: Headphones,
    title: "24/7 Travel Support",
    description: "Our expert team is here round the clock to assist you with any travel queries. Just reach out, and we've got you covered.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Easy Booking Process",
    description: "Booking adventure or tour is now easier than ever, with unbeatable offers to make your trip even better!",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
  },
  {
    id: 3,
    icon: BadgeDollarSign,
    title: "Unbeatable Price",
    description: "Get the lowest rates on hotels, holiday packages, Adventures and flights, so you can travel without breaking the bank.",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80",
  },
  {
    id: 4,
    icon: Tag,
    title: "Unmissable Deals",
    description: "From flights and hotels to buses, car rentals, and tour packages – grab the best deals for your next adventure!",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
  },
];


export default Choose;
