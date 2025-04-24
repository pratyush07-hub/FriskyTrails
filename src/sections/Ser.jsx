import React from "react";
import "/src/styles/Class.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Form from "../components/Form";

import Image1 from "/holidaysimages/upper.png";
import Image2 from "/holidaysimages/upper.png";
import Image3 from "/holidaysimages/upper.png";
import Image4 from "/holidaysimages/upper.png";
import Image5 from "/holidaysimages/upper.png";
import Image6 from "/holidaysimages/upper.png";
import Image7 from "/holidaysimages/upper.png";
import Image8 from "/holidaysimages/upper.png";
import Deals from "./Deals";

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
        <Deals />
        <div className="min-h-[80vh] w-full flex items-center justify-center">
          <div
            className="w-[80vw] h-[45vh] rounded-3xl shadow-6xl"
            style={{
              backgroundImage: `url('/holidaysimages/testimonialsbanner.png')`,
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
        <div className="w-[80vw] h-screen m-auto">
            <h1 className="font-bold text-4xl">Find Your Perfect “Holiday” Package</h1>
            <p className="pt-4 pb-1">At FriskyTrails, we believe travel should be hassle-free, exciting, and tailored just for you. Whether you’re planning a family vacation, a romantic getaway, or a thrilling solo adventure, we have something for every kind of traveller.</p>

            <div className="flex">
              <div className="w-[50%]">
            <h3 className="font-semibold text-xl pt-2">✨ Adventure Escapes</h3>
            <p className="pt-2">Craving an adrenaline rush? Try our adventure-packed getaways featuring: <br />
 ✔ Paragliding in Bir Billing – Soar above the majestic valleys. <br />
 ✔ Scuba Diving in Andaman – Explore the vibrant underwater world. <br />
 ✔ Trekking to Kedarkantha – A winter wonderland awaits!</p>

            <h3 className="font-semibold text-xl pt-3">🏝️ Beach & Island Retreats</h3>
            <p className="pt-3">Nothing beats the sun, sand, and sea! Discover: <br />
 ✔ Goa's Pristine Beaches – Beach parties, sunsets & water sports. <br />
 ✔ Lakshadweep & Andaman – Crystal-clear waters & secluded escapes. <br />
 ✔ Pondicherry’s French Vibes – A blend of culture & relaxation.</p>
            <h3 className="font-semibold text-xl pt-3">🏞️ Hills & Nature Lovers’ Paradise</h3>
            <p className="pt-3">Love the mountains? Indulge in: <br />
 ✔ Manali & Shimla Road Trips – Drive through mesmerizing landscapes. <br /> 
 ✔ Darjeeling & Sikkim – Tea gardens, monasteries & misty mornings. <br />
 ✔ Munnar & Ooty – Breathe in the fresh mountain air.</p>
              </div>
            <div className="w-[50%] mt-14 bg-amber-500 rounded-2xl shadow-2xl"
            style={{
              backgroundImage: `url('/holidaysimages/holiday.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            >
              
            </div>
            </div>

            <h3 className="font-semibold text-xl pt-3">Exclusive Offers & Rewards!</h3>
            <p className="pt-3">💰 Save More with FriskyTrails Cash – Earn rewards every time you book & review your trip. <br />
 🎉 Refer & Earn – Share your joy, and get ₹400 when your friend completes a booking. <br />
🚀 Start planning your dream vacation today with FriskyTrails – because every journey should be unforgettable!</p>
        </div>
      </div>
    </>
  );
};

export default Ser;
