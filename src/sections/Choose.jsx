import React from 'react'
import Deal from '../assets/exc-deal.svg'

const Choose = () => {
  return (
    <>
        <div className='h-[50vh] mt-20 w-full'>
            <h1 className='text-5xl font-bold text-center'>Why Choose Us</h1>
            <div className="flex justify-center mt-8 items-center gap-8 grid-cols-4 h-[40vh] w-full">
                {data.map((data) => (
                    <div className="h-[32vh] w-[18vw] rounded-lg bg-white border-1 border-[#FF6321] shadow-lg">
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
       title: "24/7 Travel Support",
       image: Deal,
       des: "Our expert team is here round the clock to assist you with any travel queries. Just reach out, and we’ve got you covered."
    },
    {
       title: "Easy Booking Process",
       image: Deal,
       des: "Booking adventure or tour is now easier than ever, with unbeatable offers to make your trip even better!"
    },
    {
       title: "Unbeatable Price",
       image: Deal,
       des: "Get the lowest rates on hotels, holiday packages, Adventures and flights, so you can travel without breaking the bank."
    },
    {
       title: "Unmissable Deals",
       image: Deal,
       des: "From flights and hotels to buses, car rentals, and tour packages – grab the best deals for your next adventure!"
    },
]

export default Choose
