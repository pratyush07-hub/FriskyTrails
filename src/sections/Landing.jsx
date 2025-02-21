import React from 'react'

const Landing = () => {
  return (
    <div>
      <div className="main">
        <div className="h-screen w-full">
          <div className="masker mt-36 flex">
            <div className="h-screen w-[50%] mt-4 px-26">
              <h1 className="text-8xl font-bold tracking-tighter w-[40vw]">
                Turning Every Journey Into An Adventure
              </h1>
              <h4 className="mt-10 text-xl text-[rgb(102,102,102)] w-[26vw]">
                Expertly crafted adventures for unforgettable journeys.
                FriskyTrails—taking you beyond the ordinary!
              </h4>
              <div className="buttons flex gap-4 mt-14">
                <button className="bg-[rgb(255,99,33)] border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 text-white px-12 py-6">
                  Plan Now
                </button>
                <button className="bg-white border-1 font-semibold rounded-full active:scale-90 transition-all duration-300 hover:bg-amber-400 hover:text-white px-8 py-5">
                  Our Offerings
                </button>
              </div>
            </div>
            <div className="w-[50%] mt-2">
              <div className="img">
                <img className="pr-16" src="/images/homeimage.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
