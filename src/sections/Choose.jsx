import React from 'react'

const Choose = () => {
  return (
    <>
        <div className='h-[50vh] mt-30 w-full'>
            <h1 className='text-5xl font-bold text-center'>Why Choose Us</h1>
            <div className="flex justify-center mt-8 items-center gap-4 grid-cols-4 h-[40vh] w-full">
                {data.map((data) => (
                    <div className="h-[30vh] w-[18vw] rounded-lg bg-white border-1 border-[#FF6321] shadow-lg">
                        <img className='mt-8 ml-28' src={data.image} alt="" />
                        <h1 className='mt-6 text-xl font-semibold text-center'>{data.title}</h1>
                        <p className='text-gray-500 w-[15vw] ml-5 tracking-tighter mt-4 text-sm text-center'>{data.des}</p>
                    </div>
                ))}
                
            </div>
        </div> 
    </>
  )
}
const data = [
    {
       title: "Easy Booking",
       image: "./src/assets/exc-deal.svg",
       des: "We offer easy and convenient flight bookings with attractive offers."
    },
    {
       title: "Lowest Price",
       image: "./src/assets/exc-deal.svg",
       des: "We ensure low rates on hotel reservation, holiday packages and on flight tickets."
    },
    {
       title: "Exciting Deals",
       image: "./src/assets/exc-deal.svg",
       des: "Enjoy exciting deals on flights, hotels, buses, car rental and tour packages."
    },
    {
       title: "24/7 Support",
       image: "./src/assets/exc-deal.svg",
       des: "Get assistance 24/7 on any kind of travel related query. We are happy to assist you."
    },
]

export default Choose
