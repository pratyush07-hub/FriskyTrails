import React from 'react'

const Next = () => {
  const data = [
    {
      image: "/images/car.jpg",
      name: "Bali",
    },
    {
      image: "/images/car.jpg",
      name: "Goa",
    },
    {
      image: "/images/car.jpg",
      name: "Manali",
    },
    {
      image: "/images/car.jpg",
      name: "Kashmir",
    },
    {
      image: "/images/car.jpg",
      name: "Chennai",
    },
    {
      image: "/images/car.jpg",
      name: "Shilong",
    },
  ]
  return (
    <>
      <div className='h-screen w-[80vw] m-auto'>
        <h1 className='text-4xl font-bold text-center'>Where to Next?</h1>
        <div className="grid grid-cols-3 gap-6 mt-10">
            {data.map((item, index) => (
              <div 
                key={index}
                className="h-[40vh] w-full bg-cover bg-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="h-full w-full bg-black/30 rounded-lg flex items-center justify-center">
                  <h1 className='text-4xl font-semibold text-white'>{item.name}</h1>
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default Next

