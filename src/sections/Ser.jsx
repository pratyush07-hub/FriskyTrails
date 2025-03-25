import React from 'react';
import '/src/styles/Class.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Form from '../components/Form';

import Image1 from "/images/ice.jpg";
import Image2 from "/images/ice.jpg";
import Image3 from "/images/ice.jpg";
import Image4 from "/images/ice.jpg";
import Image5 from "/images/ice.jpg";
import Image6 from "/images/ice.jpg";
import Image7 from "/images/ice.jpg";
import Image8 from "/images/ice.jpg";


const Ser = () => {
    const data = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8]
  return (
    <>
      <div className='h-screen w-full'>
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
                    delay:4500,
                    disableOnInteraction:false,
                }}
                modules={[EffectCoverflow,Pagination,Autoplay]}
            >
                {data.map((item,index) => (
                    <SwiperSlide key={index}>
                        <div className='flex justify-center items-center relative'  style={{
                            height: "400px",
                            backgroundImage: `url(${item})`, 
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
                <Form />
            
        </div>
      
    </>
  )
}

export default Ser
