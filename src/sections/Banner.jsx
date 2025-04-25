import React from 'react';
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "/bannerimages/1.png";
import Image2 from "/bannerimages/2.png";
import Image3 from "/bannerimages/3.png";


const Banner = () => {
  const data = [Image1, Image2, Image3];
  return (
    <div>
      <div className="banner h-[80vh] w-[80vw] mx-auto flex justify-center items-center">
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
                  height: "300px",
                  backgroundImage: `url(${item})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Banner
