
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from "/bannerimages/1.png";
import Image2 from "/bannerimages/2.png";
import Image3 from "/bannerimages/3.png";


const Banner = () => {
  const data = [Image1, Image2, Image3];
  return (
    <div>
      <div className="banner h-auto w-full md:w-[90vw] lg:w-[80vw] mx-auto flex justify-center items-center px-4 md:px-0">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: "auto",
            },
          }}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
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
                className="h-[150px] md:h-[300px] bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item})`,
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
