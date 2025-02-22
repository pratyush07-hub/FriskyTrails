import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Cards = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <div>
      <style>
        {`
          .slick-dots li button:before {
            color: red !important;
            opacity: 1;
          }

          .slick-dots li.slick-active button:before {
            color: blue !important;
          }

          .slick-prev:before, .slick-next:before {
            color: green !important;
            font-size: 24px;
          }
          .slick-slide > div {
            margin: 0 15px; /* Adds spacing */
          }
          .slick-list {
            margin: 0 -15px; /* Prevents overflow */
          }
          .slick-prev, .slick-next {
            z-index: 10 !important; /* Ensures arrows are above other elements */
          }

        `}
      </style>

      <div className="trips h-[90vh] w-full">
        <div className="ml-32 mr-32 flex justify-between">
          <h1 className="text-4xl font-bold">Upcoming Trips</h1>
          <button className="bg-[rgb(255,99,33)] mt-2 border-1 font-semibold rounded-lg active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white px-6 py-2">
            Show All
          </button>
        </div>
        <div className="w-3/4 m-auto">
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div key={index} className="">
                  <div className="card h-[60vh] ml-5 rounded-xl bg-white shadow-lg">
                    <img
                      className="h-[30vh] w-[25vw] rounded-xl  object-cover"
                      src={d.image}
                      alt=""
                    />
                    <h3 className="text-gray-400 mt-4 ml-4">
                      ⭐{d.rating} Overall Reviews
                    </h3>
                    <h1 className="mt-2 ml-4 mr-5 text-2xl h-[10vh]">{d.title}</h1>
                    <div className="mt-10 ml-4 flex justify-between items-center">
                      <div>
                        <span className="text-[rgb(255,99,33)] font-semibold text-3xl">
                          {d.price}
                        </span>
                        <span className="text-gray-400">/person</span>
                      </div>
                      <button className="bg-white mr-4 border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-[rgb(255,99,33)] hover:text-white px-6 py-3">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
const data = [
    {
      title: "Rishikesh, India (River Rafting & Bungee Jumping)",
      image: "/images/tower.avif",
      price: "₹1,500",
      rating: 4.8,
    },
    {
      title: "Manali, India (Paragliding & Trekking)",
      image:
        "/images/secondpage.avif",
      price: "₹2,000",
      rating: 4.7,
    },
    {
      title: "Auli, India (Skiing & Snowboarding)",
      image:
        "/images/car.jpg",
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
      title: "Andaman & Nicobar Islands, India (Scuba Diving & Snorkeling)",
      image:
        "https://www.go2andaman.com/wp-content/uploads/2021/06/scuba-diving.png",
      price: "₹3,500",
      rating: 4.8,
    },
  ];
export default Cards
