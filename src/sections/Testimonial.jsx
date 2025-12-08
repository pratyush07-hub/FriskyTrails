import { TestimonialMarquee } from './TestimonialMarquee';
import { testimonialData } from '../lib/TestimonialData.js';

const Testimonial = () => {
  return (
    <section className="  w-full py-16 px-4 md:px-8 lg:px-12 text-center ">
      
      {/* Small Top Orange Heading */}
      <h3 className="text-orange-500 font-semibold text-lg md:text-xl mb-2">
        Customer's Feedback
      </h3>

      {/* Main Bold Black Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black">
        What Says Our Visitors
      </h1>

      <TestimonialMarquee data={testimonialData} />
    </section>
  );
};

export default Testimonial;
