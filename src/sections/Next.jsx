import React from 'react'

const Next = () => {
  const data = [
    {
      image: "/nextimages/1.png",
      name: "Bali",
    },
    {
      image: "/nextimages/2.png",
      name: "Goa",
    },
    {
      image: "/nextimages/3.png",
      name: "Manali",
    },
    {
      image: "/nextimages/4.png",
      name: "Kashmir",
    },
    {
      image: "/nextimages/5.png",
      name: "Chennai",
    },
    {
      image: "/nextimages/6.png",
      name: "Shilong",
    },
  ]
  return (
    <>
      <div className='h-screen w-[90vw] mx-auto'>
        <h1 className='text-4xl font-bold text-center'>Where to Next?</h1>
        <div className="grid grid-cols-3 gap-6 mt-10">
            {data.map((item, index) => (
              <div 
                key={index}
                className="h-[40vh] w-full bg-cover bg-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="h-full w-full rounded-lg flex items-center justify-center">  
                  {/* bg-black/30 */}
                  {/* <h1 className='text-4xl font-semibold text-white'>{item.name}</h1> */}
                </div>
              </div>
            ))}
          </div>
      </div>
    </>
  )
}

export default Next

