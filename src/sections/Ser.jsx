import React from "react";
import "/src/styles/Class.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Form from "../components/Form";

import Image1 from "/images/ice.jpg";
import Image2 from "/images/ice.jpg";
import Image3 from "/images/ice.jpg";
import Image4 from "/images/ice.jpg";
import Image5 from "/images/ice.jpg";
import Image6 from "/images/ice.jpg";
import Image7 from "/images/ice.jpg";
import Image8 from "/images/ice.jpg";

const Ser = () => {
  const data = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];
  return (
    <>
      <div className="min-h-screen w-full">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          slidesPerView={"auto"}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2.5,
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="flex justify-center items-center relative"
                style={{
                  height: "400px",
                  backgroundImage: `url(${item})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Form />
        <div className="min-h-[80vh] w-full flex items-center justify-center">
          <div
            className="w-[80vw] h-[45vh] rounded-3xl shadow-6xl"
            style={{
              backgroundImage: `url('/images/testimonialsbanner.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Optional content over the background */}
            <h1 className="text-white text-4xl pl-10 pt-28 font-semibold">
              Loved For Experiences!
            </h1>
            <p className="text-white text-xl pl-10 w-[34vw] p-2">
              Read stories from travellers who trusted us to craft their perfect
              journeys!
            </p>
            <button className="bg-gradient-to-r from-[rgb(255,99,33)] ml-10 px-6 to-amber-400 mt-2 text-white font-bold rounded-full py-2">
              <div className="flex text-xl gap-1">View Testimonials</div>
            </button>
          </div>
        </div>
        <div className="w-[80vw] h-[70vh] m-auto">
            <h1 className="font-bold text-4xl">Book Your Holiday With FriskyTrails</h1>
            <p className="pt-4 pb-1">Book Your Holiday Packages With FriskyTrails and discover a world of meticulously curated, affordable itineraries designed to meet the unique needs and budgets of every traveller. Each getaway is crafted with precision, ensuring that every aspect of your journey is seamless and memorable. Whether you're seeking adventure, relaxation, or a blend of both, our packages promise an unforgettable getaway tailored just for you. Start planning your dream vacation today and experience the perfect escape with our exceptional itineraries.</p>

            <h3 className="font-semibold pt-2">Enjoy Seamless Booking At Budget-Friendly Prices!</h3>
            <p className="pt-3">Our platform's user-friendly interface simplifies the navigation of diverse trip packages, catering to various destinations, preferences, and budgets. With just a few clicks, travellers can book their ideal vacation. Whether you're dreaming of a beach escape or a mountain retreat, finding and booking your perfect getaway is straightforward and hassle-free with us, ensuring a smooth start to your travel adventure.
            Unlock unbeatable savings on your next getaway with us, your ultimate travel companion! Discover a world of affordable packages customised to meet the diverse needs of every traveller. Embark on a mountain escape or a city adventure with our exclusive travel at competitive prices and leverage exclusive discounts, ensuring your travel is as economical as it is enjoyable. Don’t miss out on it, and book your next vacation with us to experience the perfect blend of luxury and value!</p>

            <h3 className="font-semibold pt-3">Create Memories That Last A Lifetime!</h3>
            <p className="pt-3">Book and explore your dream destinations with our exclusive itineraries. Each of our packages are carefully designed to ensure that every traveller enjoys a promising getaway. Whether you're a solo traveller, part of a group, or travelling with family, we have tailored itineraries to suit everyone. Choose from a variety of splendid tour packages and let us handle the details, guaranteeing a seamless and memorable experience. Start your adventure with FriskyTrails today and cherish every moment of your journey.</p>
        </div>
      </div>
    </>
  );
};

export default Ser;
