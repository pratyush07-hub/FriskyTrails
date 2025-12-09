import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {data} from '../lib/corouselData'

const Cards = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="w-full py-10 bg-[#faf4e8]">
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
        Upcoming Trips & Adventures
      </h1>

      <div className="w-full max-w-7xl mx-auto px-4 mt-10">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-52 sm:h-64 md:h-72 object-cover"
                />

                <div className="p-4 sm:p-5 flex flex-col gap-2">
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    ⭐ {item.rating} Overall Reviews
                  </p>

                  <h2 className="font-semibold text-lg sm:text-xl md:text-2xl line-clamp-2 leading-tight">
                    {item.title}
                  </h2>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-baseline">
                      <span className="text-[rgb(255,99,33)] font-bold text-xl sm:text-2xl">
                        {item.price}
                      </span>
                      <span className="text-gray-400 ml-1 text-sm">
                        /person
                      </span>
                    </div>

                    <Link to="/tours">
                      <button className="rounded-full p-3   border border-gray-300 text-sm sm:text-base font-semibold bg-white hover:bg-[rgb(255,99,33)] hover:text-white transition-all">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

/* ---------- CUSTOM ARROWS ---------- */
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-20 
               bg-orange-100 hover:bg-orange-200 text-orange-500
               w-10 h-10 rounded-full flex items-center justify-center shadow-md"
  >
    <FaChevronLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-20 
               bg-orange-100 hover:bg-orange-200 text-orange-500
               w-10 h-10 rounded-full flex items-center justify-center shadow-md"
  >
    <FaChevronRight />
  </button>
);


export default Cards;
