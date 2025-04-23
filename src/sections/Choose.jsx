import React from 'react'
import Deals from '../assets/deals.png'
import Work from '../assets/24.png'
import Price from '../assets/price.png'
import Booking from '../assets/booking.png'

const Choose = () => {
  return (
    <>
        <div className='h-[50vh] mt-20 w-full'>
            <h1 className='text-5xl font-bold text-center'>Why Choose Us</h1>
            <div className="flex justify-center mt-8 items-center gap-8 grid-cols-4 h-[40vh] w-full">
                {data.map((data) => (
                    <div className="h-[32vh] w-[18vw] rounded-lg bg-white border-1 border-[#FF6321] shadow-lg">
                        <div className='flex justify-center pt-6'>
                        <img className=' h-16 w-16' src={data.image} alt="img" />
                        </div>
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
       title: "24/7 Travel Support",
       image: Work,
       des: "Our expert team is here round the clock to assist you with any travel queries. Just reach out, and we’ve got you covered."
    },
    {
       title: "Easy Booking Process",
       image: Booking,
       des: "Booking adventure or tour is now easier than ever, with unbeatable offers to make your trip even better!"
    },
    {
       title: "Unbeatable Price",
       image: Price,
       des: "Get the lowest rates on hotels, holiday packages, Adventures and flights, so you can travel without breaking the bank."
    },
    {
       title: "Unmissable Deals",
       image: Deals,
       des: "From flights and hotels to buses, car rentals, and tour packages – grab the best deals for your next adventure!"
    },
]

export default Choose
