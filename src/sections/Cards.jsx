import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Cards = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <style>
  {`
    .slick-slide > div {
      margin: 0 15px;
    }
    .slick-list {
      margin: 0 -15px;
    }

    .slick-prev, .slick-next {
      z-index: 10 !important;
      width: 45px;
      height: 45px;
      top: 45%;
      transform: translateY(-50%);
    }

    .slick-prev:before, .slick-next:before {
      color: orange !important;
      font-size: 32px !important;
      opacity: 1 !important;
    }

    /* Default position for xl and above (outside the cards) */
    .slick-prev {
      left: -55px !important;
    }

    .slick-next {
      right: -55px !important;
    }

    /* Hide arrows when not needed */
    .slick-disabled {
      display: none !important;
    }

    /* Overlap arrows for screens smaller than xl (below 1280px) */
    @media (max-width: 1279px) {
      .slick-prev {
        left: 0px !important;
      }

      .slick-next {
        right: 0px !important;
      }
    }
  `}
</style>


      <div className="trips h-auto mt-8 mb-4 w-full">
        <div className="mx-4 md:mx-32 flex justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            Upcoming Trips & Adventures
          </h1>
        </div>
        <div className="w-[90vw] m-auto">
          <div className="mt-10 relative">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="overflow-hidden">
                  <div className="card h-auto overflow-hidden rounded-xl bg-white shadow-lg">
                    <img
                      className="h-[30vh] w-full rounded-t-xl transition-transform duration-300 hover:scale-105 object-cover"
                      src={d.image}
                      alt=""
                    />
                    <h3 className="text-gray-400 mt-4 ml-4">
                      ⭐{d.rating} Overall Reviews
                    </h3>
                    <h1 className="mt-2 ml-4 mr-5 text-2xl">{d.title}</h1>
                    <div className="mt-6 ml-4 mb-4 flex justify-between items-center">
                      <div>
                        <span className="text-[rgb(255,99,33)] font-semibold text-2xl">
                          {d.price}
                        </span>
                        <span className="text-gray-400"> /person</span>
                      </div>
                      <Link to="/tours">
                        <button className="bg-white mr-4 border border-gray-300 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-[rgb(255,99,33)] hover:text-white px-4 py-2">
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Rishikesh, India (River Rafting & Bungee Jumping)",
    image: "/images/tower.avif",
    price: "₹1,500",
    rating: 4.8,
  },
  {
    title: "Manali, India (Paragliding & Trekking)",
    image: "/images/secondpage.avif",
    price: "₹2,000",
    rating: 4.7,
  },
  {
    title: "Auli, India (Skiing & Snowboarding)",
    image: "/images/car.jpg",
    price: "₹3,000",
    rating: 4.6,
  },
  {
    title: "Leh Ladakh, India (Bike Riding & Camping)",
    image:
      "https://www.adventurenation.com/blog/wp-content/uploads/2022/09/Ladakh-Bike-Tour.jpg",
    price: "₹5,000",
    rating: 4.9,
  },
  {
    title: "Andaman & Nicobar Islands (Scuba Diving & Snorkeling)",
    image:
      "https://www.go2andaman.com/wp-content/uploads/2021/06/scuba-diving.png",
    price: "₹3,500",
    rating: 4.8,
  },
];

export default Cards;
