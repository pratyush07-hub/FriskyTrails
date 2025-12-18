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
          key={index}
          to={`/state/${item.slug}/blogs`}
          className="
            group relative overflow-hidden
            aspect-square
            w-full
            rounded-md md:rounded-lg
            transition-transform duration-300
            hover:scale-[1.03]
          "
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

          {/* text */}
          <div className="relative flex items-center justify-center h-full w-full">
            <h3 className="text-gray-200 font-semibold tracking-tight text-[0.6rem] sm:text-xs md:text-sm lg:text-base">
              {item.name}
            </h3>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Smallbox;
