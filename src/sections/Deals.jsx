import React from 'react';

const Deals = () => {
  return (
    <>
      <div className="h-screen w-full pt-30">
        <h1 className="pl-38 text-4xl font-bold tracking-tight">
          Deals You Can't Miss
        </h1>
        <p className="pt-2 pb-6 pl-38">
          Travel beyond boundaries with incredible savings
        </p>
        <div className="grid grid-cols-3 h-[70vh] w-[80vw] rounded-lg bg-white m-auto">
          {/* Left Column */}
          <div className="mx-auto">
            <div className="h-[33vh] w-[26vw] mt-2 mb-3 rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/kashmir.webp')",
                }}
              ></div>
              <h1 className="absolute bottom-7 text-white font-semibold text-lg px-4  py-1">
                Kashmir
              </h1>
              <h1 className="absolute bottom-2 text-white px-4  py-1">
                4 Nights / 5 days
              </h1>
            </div>
            <div className="h-[33vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/kerala.webp')",
                }}
              ></div>
              <h1 className="absolute bottom-7 text-white font-semibold text-lg px-4  py-1">
                Kashmir
              </h1>
              <h1 className="absolute bottom-2 text-white px-4  py-1">
                4 Nights / 5 days
              </h1>
            </div>
          </div>

          {/* Middle Column */}
          <div className="m-auto">
            <div className="h-[68vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/thailand.png')",
                }}
              ></div>
              <h1 className="absolute bottom-7 text-white font-semibold text-lg px-4  py-1">
                Kashmir
              </h1>
              <h1 className="absolute bottom-2 text-white px-4  py-1">
                4 Nights / 5 days
              </h1>
            </div>
          </div>

          {/* Right Column */}
          <div className="mx-auto">
            <div className="h-[33vh] w-[26vw] mt-2 mb-3 rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/bali.png')",
                }}
              ></div>
              <h1 className="absolute bottom-7 text-white font-semibold text-lg px-4  py-1">
                Kashmir
              </h1>
              <h1 className="absolute bottom-2 text-white px-4  py-1">
                4 Nights / 5 days
              </h1>
            </div>
            <div className="h-[33vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{
                  backgroundImage: "url('/images/malaysia.png')",
                }}
              ></div>
              <h1 className="absolute bottom-7 text-white font-semibold text-lg px-4  py-1">
                Kashmir
              </h1>
              <h1 className="absolute bottom-2 text-white px-4  py-1">
                4 Nights / 5 days
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
