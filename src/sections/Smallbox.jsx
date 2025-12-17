import { Link } from "react-router-dom";

const Smallbox = () => {
  const data = [
    { name: "Goa", image: "/destinations/Goa.png", slug: "goa" },
    { name: "Himachal", image: "/destinations/Himachal.png", slug: "himachal" },
    { name: "Kashmir", image: "/destinations/Kashmir.png", slug: "kashmir" },
    { name: "Kerala", image: "/destinations/Kerala.png", slug: "kerala" },
    { name: "Tawang", image: "/destinations/Tawang.png", slug: "tawang" },
    { name: "Andaman", image: "/destinations/Andaman.png", slug: "andaman" },
    { name: "Meghalaya", image: "/destinations/Meghalaya.png", slug: "meghalaya" },
    { name: "Rajasthan", image: "/destinations/Rajasthan.png", slug: "rajasthan" },
    { name: "Uttarakhand", image: "/destinations/Uttarakhand.png", slug: "uttarakhand" },
  ];

  return (
    <>
      {data.map((item, index) => (
        <Link
          to={`/state/${item.slug}/blogs`}
          key={index}
          className="
            group
            block relative overflow-hidden
            aspect-[4/3] sm:aspect-[5/3] md:aspect-[3/2]
            w-full
            rounded-md md:rounded-lg lg:rounded-xl
          "
        >
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="
              absolute inset-0
              h-full w-full
              object-contain
              transition-transform duration-300
              group-hover:scale-105
              will-change-transform
            "
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/30 md:bg-black/20" />

          {/* TEXT */}
          <div className="relative flex justify-center items-center h-full w-full">
            <h3 className="text-gray-200 tracking-tight text-[0.6rem] sm:text-xs md:text-sm lg:text-base font-bold">
              {item.name}
            </h3>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Smallbox;
