import React from 'react';
import '/src/styles/hello.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Next = () => {
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
                        <img className='h-[400px]' src={item.image} alt={item.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>
    </>
  )
}
const data = [
    {
      title: "Nepal",
      image: "/images/secondpage.avif"
    },
    {
      title: "USA",
      image: "/images/car.jpg"
    },
    {
      title: "Chile",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Torres_del_Paine_Patagonia_Chile.jpg"
    },
    {
      title: "Australia",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Great_Barrier_Reef.jpg"
    },
    {
      title: "Brazil",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/65/Amazon_Rainforest.jpg"
    },
    {
      title: "Africa",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Sahara_Desert_-_Algeria.jpg"
    },
    {
      title: "Canada",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Lake_Louise_Alberta_Canada.jpg"
    },
    {
      title: "Chile",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Torres_del_Paine_National_Park.jpg"
    }
  ];  

export default Next
