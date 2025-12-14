import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

export default function BannerSwiper({
  slides = [
    { mobile: "/bannerimages/1_result.webp", desktop: "/bannerimages/1.png", alt: "Banner 1" },
    { mobile: "/bannerimages/2_result.webp", desktop: "/bannerimages/2_result.webp", alt: "Banner 2" },
    { mobile: "/bannerimages/3_result.webp", desktop: "/bannerimages/3_result.webp", alt: "Banner 3" },
  ],
  autoPlayInterval = 5000,

  width,
  mobileWidth = "90%",
  desktopWidth = "80%",

  height,
  mobileHeight = "150px",
  desktopHeight = "260px",

  showDots = false,
  showArrows = false,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const goToSlide = (i) => {
    if (isTransitioning || i === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(i);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [nextSlide, autoPlayInterval]);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();

    setTouchStart(0);
    setTouchEnd(0);
  };

  // responsive width without extra vertical gap
  const containerWidth = width || undefined;

  return (
    <div
      className={`relative overflow-hidden m-0 mx-auto ${className}`}
      style={{
        width:
          containerWidth ||
          (typeof window !== "undefined" && window.innerWidth >= 768
            ? desktopWidth
            : mobileWidth),
        height: height || undefined,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="min-w-full h-full relative">
            {/* MOBILE & MD VIEW */}
            <div
              className="block md:hidden h-full"
              style={{
                height: height || mobileHeight,
                width: "100%",
              }}
            >
              <img
                src={slide.mobile}
                alt={slide.alt || `Slide ${i + 1}`}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>

            {/* DESKTOP VIEW */}
            <div
              className="hidden md:block h-full"
              style={{
                height: height || desktopHeight,
                width: "100%",
              }}
            >
              <img
                src={slide.desktop}
                alt={slide.alt || `Slide ${i + 1}`}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-1.5 md:p-2 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Previous Slide"
          >
            <span className="text-lg md:text-xl">{`<`}</span>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-1.5 md:p-2 shadow-lg transition-all hover:scale-110 z-10"
            aria-label="Next Slide"
          >
            <span className="text-lg md:text-xl">{`>`}</span>
          </button>
        </>
      )}

      {/* DOTS */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all ${
                currentIndex === i
                  ? "bg-white w-6 md:w-8 h-1.5 md:h-2"
                  : "bg-white/50 hover:bg-white/80 w-1.5 md:w-2 h-1.5 md:h-2"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ----- PROP TYPES ----- */
BannerSwiper.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      mobile: PropTypes.string.isRequired,
      desktop: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ),
  autoPlayInterval: PropTypes.number,

  width: PropTypes.string,
  mobileWidth: PropTypes.string,
  desktopWidth: PropTypes.string,

  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  desktopHeight: PropTypes.string,

  showDots: PropTypes.bool,
  showArrows: PropTypes.bool,
  className: PropTypes.string,
};
