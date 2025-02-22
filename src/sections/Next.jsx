import React from 'react';
import '/src/styles/Class.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import Image1 from "/images/car.jpg";
import Image2 from "/images/car.jpg";
import Image3 from "/images/car.jpg";
import Image4 from "/images/car.jpg";
import Image5 from "/images/car.jpg";
import Image6 from "/images/car.jpg";
import Image7 from "/images/car.jpg";
import Image8 from "/images/car.jpg";


const Next = () => {
  const data = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8]

  return (
    <>
      <div className='h-screen w-full'>
        <div className='ml-32 mr-32 mt-6'>
            <h1 className='text-4xl font-bold'>Where to next?</h1>
            <Swiper
                effect='coverflow'
                grabCursor={true}
                slidesPerView={'auto'}
                centeredSlides={true}
                coverflowEffect={{
                    rotate:0,
                    stretch:0,
                    depth:120,
                    modifier:2.5,
                }}
                pagination={{
                    clickable:true,
                }}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false,
                }}
                modules={[EffectCoverflow,Pagination,Autoplay]}
            >
                {data.map((item,index) => (
                    <SwiperSlide key={index}>
                        <img className='h-[400px]' src={item} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>
    </>
  )
}

export default Next
