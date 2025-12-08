import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// ==================== Testimonial Card ====================

const TestimonialCard = ({ testimonial }) => (
  <div className="flex flex-col gap-3 rounded-xl bg-white/80 backdrop-blur-sm p-6 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative">

    {/* Orange side strip */}
    <div className="absolute left-0 top-0 h-full w-1 bg-orange-200 rounded-l-xl"></div>

    {/* Header Row: Image + Name + Stars */}
    <div className="flex items-center justify-between gap-3 pl-2">

      {/* Left: Image + Name */}
      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-200">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-gray-800">{testimonial.name}</p>
          <p className="text-xs text-gray-500">{testimonial.profession}</p>
        </div>
      </div>

      {/* Right: Star Ratings */}
      <div className="flex text-yellow-400 text-sm">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>

    {/* Review */}
    <p className="line-clamp-4 text-sm text-gray-700 pl-2">{testimonial.review}</p>
  </div>
);

// PropTypes for TestimonialCard
TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string,
    rating: PropTypes.number.isRequired,
    review: PropTypes.string.isRequired,
  }).isRequired,
};

// ==================== Testimonial Marquee ====================

export const TestimonialMarquee = ({ data }) => {
  const [columns, setColumns] = useState([data]); // default 1 column

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) {
        // large screens -> 3 columns
        setColumns([
          data.filter((_, i) => i % 3 === 0),
          data.filter((_, i) => i % 3 === 1),
          data.filter((_, i) => i % 3 === 2),
        ]);
      } else {
        // small/medium screens -> 1 column
        setColumns([data]);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, [data]);

  const infiniteColumns = columns.map((col) => [...col, ...col]);

  return (
    <div className="z-100 w-full overflow-hidden bg-background py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
        {infiniteColumns.map((column, colIdx) => (
          <div key={colIdx} className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 animate-scroll space-y-6 top-0">

              {[...column, ...column].map((testimonial, idx) => (
                <TestimonialCard
                  key={`col-${colIdx}-${idx}`}
                  testimonial={testimonial}
                />
              ))}

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes for TestimonialMarquee
TestimonialMarquee.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      profession: PropTypes.string,
      rating: PropTypes.number.isRequired,
      review: PropTypes.string.isRequired,
    })
  ).isRequired,
};
