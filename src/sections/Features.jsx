import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Features({
  features,
  heading = "Discover Your Next Adventure",
  subheading = "EXPLORE THE WORLD",
}) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  const featureRefs = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, [currentFeature]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);

      return () => clearTimeout(timeout);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <section className="py-16 px-4 sm:py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 text-gray-600"
          >
            {subheading}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight px-2"
          >
            {heading}
          </motion.h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            ref={containerRef}
            className="flex lg:flex-col flex-row overflow-x-auto no-scrollbar lg:overflow-visible order-2 lg:order-1 pb-2 scroll-smooth gap-3 sm:gap-4 lg:gap-3"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;

              return (
                <div
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className="relative cursor-pointer flex-shrink-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  <div
                    className={`flex flex-col bg-white lg:flex-row items-center lg:items-start gap-3 lg:gap-4 p-4 sm:p-5 lg:p-5 min-w-[150px] sm:min-w-[170px] md:min-w-[190px] lg:min-w-0 lg:max-w-2xl transition-all duration-500 rounded-xl lg:rounded-2xl border 
                      ${isActive ? "shadow-lg border-gray-300" : "border-gray-200"}
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`p-3 sm:p-4 rounded-xl transition-all duration-500 shrink-0
                        ${isActive ? "bg-orange-50 text-black shadow-md" : "bg-gray-200 text-black"}
                      `}
                    >
                      {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0 text-center lg:text-left">
                      <h3
                        className={`text-sm sm:text-base lg:text-lg font-semibold leading-tight 
                          ${isActive ? "text-gray-900" : "text-gray-600"}
                        `}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className={`hidden lg:block mt-2 text-sm leading-relaxed 
                          ${isActive ? "text-gray-600" : "text-gray-500"}
                        `}
                      >
                        {feature.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="mt-3 lg:mt-4 bg-gray-200 rounded-full h-1 lg:h-1.5 overflow-hidden">
                        {isActive && (
                          <motion.div
                            className="h-full bg-orange-100 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFeature}
                  src={features[currentFeature].image}
                  alt={features[currentFeature].title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Bottom Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleFeatureClick(index)}
                    className={`h-2 rounded-full transition-all duration-300 
                      ${currentFeature === index ? "bg-white w-6" : "bg-white/60 w-2"}
                    `}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
