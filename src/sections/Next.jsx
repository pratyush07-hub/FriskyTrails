const Next = () => {
  const data = [
    { image: "/nextimages/1.png", name: "Bali" },
    { image: "/nextimages/2.png", name: "Manali" },
    { image: "/nextimages/3.png", name: "Manali" },
    { image: "/nextimages/4.png", name: "Goa" },
    { image: "/nextimages/5.png", name: "Shilong" },
    { image: "/nextimages/6.png", name: "Chennai" },
  ];

  return (
    <div className="h-auto w-[90vw] mx-auto">
      <h1 className="text-4xl font-bold text-center">Where to Next?</h1>

      <div className="mt-6 mb-4 md:mt-10 overflow-x-auto pb-4 md:overflow-visible">
        <div className="flex md:grid md:grid-cols-3 gap-6 min-w-max md:min-w-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative min-w-[70vw] md:min-w-0 h-[40vh] bg-cover bg-center rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Subtle overlay that only slightly darkens the image */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Text with animation */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <h1 className="text-4xl font-semibold text-white border-b-2 border-white pb-1">{item.name}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Next;
