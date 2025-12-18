import { MapPin } from "lucide-react";
import { useState } from "react";

const SmallBanner = ({ bannerImage, stateName }) => {
  return (
    <section
      className="relative h-[300px] sm:h-[400px] overflow-visible lg:hidden"
      aria-label={`${stateName} banner`}
    >
      {bannerImage && (
        <img
          src={bannerImage}
          alt={`${stateName} landscape`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}

      <div />

      <div className="absolute mt-5 inset-0 flex flex-col justify-start pt-20 sm:pt-24 px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
          {bannerImage ? "Find deals for any season" : `Welcome to ${stateName}`}
        </h1>
        <p className="text-white/80 text-lg mb-8">
          {bannerImage
            ? "From cozy country homes to funky city apartments"
            : "Discover amazing places and experiences"}
        </p>

        {/* Location box below text for small devices */}
        <div className="flex flex-col items-start gap-2 rounded-2xl px-4 shadow-lg w-fit">
          <MapPin className="w-6 h-6 text-white" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-white">{stateName}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LargeBanner = ({ bannerImage, stateName }) => {
  return (
    <section
      className="relative h-[500px] lg:h-[500px] overflow-visible hidden lg:block"
      aria-label={`${stateName} banner`}
    >
      {bannerImage && (
        <img
          src={bannerImage}
          alt={`${stateName} landscape`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background: bannerImage
            ? "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3), transparent)"
            : "transparent",
        }}
      />

      {/* Column layout: heading + text + location */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 gap-6">
        <div>
          <h1 className="text-5xl font-bold text-white mb-3">
            Find deals for any season
          </h1>
          <p className="text-white/80 text-lg">
            From cozy country homes to funky city apartments
          </p>
        </div>

        {/* Location block in same column */}
        <div className="flex flex-row items-center gap-3 rounded-2xl px-6 py-4 shadow-lg w-fit">
          <MapPin className="w-8 h-8 text-white" />
          <div className="flex flex-col">
         
            <p className="text-2xl font-bold text-white">{stateName}</p>
          </div>
        </div>
      </div>
    </section>
  );
};


const HeroBanner = ({ state }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [guests, setGuests] = useState(1);

  if (!state) return null;

  const bannerImage = state?.coverImage;
  const stateName = state?.name || "Destination";

  return (
    <>
      {/* Small + Medium Devices */}
      <SmallBanner bannerImage={bannerImage} stateName={stateName} />
      {/* Large Devices */}
      <LargeBanner bannerImage={bannerImage} stateName={stateName} />
    </>
  );
};

export default HeroBanner;
