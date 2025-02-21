import React from 'react'

const Categories = () => {
  return (
    <div>
      <div className="categories w-full">
        <h1 className="text-6xl font-bold text-center">Curated Categories</h1>
        <div className="boxes flex justify-center gap-10 mt-10">
          <div className="card">
            <img
              className=" h-[50vh] w-[18vw] rounded-lg object-cover"
              src="/images/card.webp"
              alt=""
            />
          </div>
          <div className="card">
            <img
              className=" h-[50vh] w-[18vw] rounded-lg object-cover"
              src="/images/card.webp"
              alt=""
            />
          </div>
          <div className="card">
            <img
              className=" h-[50vh] w-[18vw] rounded-lg object-cover"
              src="/images/card.webp"
              alt=""
            />
          </div>
          <div className="card">
            <img
              className=" h-[50vh] w-[18vw] rounded-lg object-cover"
              src="/images/card.webp"
              alt=""
            />
          </div>
        </div>
        <div className="boxes flex justify-center gap-10 mt-10">
          <div className="card">
            <img
              className=" h-[50vh] w-[18vw] rounded-lg object-cover"
              src="/images/card.webp"
              alt=""
            />
          </div>
          <div className="card">
            <img
              className=" h-[50vh] w-[18vw] rounded-lg object-cover"
              src="/images/card.webp"
              alt=""
            />
          </div>
          <div className="card">
            <img
              className=" h-[50vh] w-[18vw] rounded-lg object-cover"
              src="/images/card.webp"
              alt=""
            />
          </div>
          <div className="card">
            <img
              className=" h-[50vh] w-[18vw] rounded-lg object-cover"
              src="/images/card.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
