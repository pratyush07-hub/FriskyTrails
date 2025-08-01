
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
    <div className='h-auto w-[90vw] mx-auto'>
      <h1 className='text-4xl font-bold text-center'>Where to Next?</h1>

      {/* Mobile: horizontal scroll, Desktop: grid */}
      <div className="mt-6 mb-4 md:mt-10 overflow-x-auto pb-4 md:overflow-visible">
        <div className="flex md:grid md:grid-cols-3 gap-6 min-w-max md:min-w-0">
          {data.map((item, index) => (
            <div 
              key={index}
              className="min-w-[70vw] md:min-w-0 h-[40vh] bg-cover bg-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="h-full w-full rounded-lg flex items-center justify-center">  
                {/* <h1 className='text-4xl font-semibold text-white'>{item.name}</h1> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Next

