import Call from '../assets/calling.svg';
import Email from '../assets/email.svg';

// Example data array with image URLs and LinkedIn URLs
const teamMembers = [
  { img: '/members/sanya.jpg', linkedin: 'https://www.linkedin.com/in/sanya-batra-b22a0628a/' },
  { img: '/images/member1.jpg', linkedin: 'https://www.linkedin.com/in/pratyush-kumar-32741b2b2/' },
  { img: '/images/member3.jpg', linkedin: 'https://linkedin.com/in/member3' },
  { img: '/images/member4.jpg', linkedin: 'https://linkedin.com/in/member4' },
  { img: '/images/member5.jpg', linkedin: 'https://linkedin.com/in/member5' },
  { img: '/images/member6.jpg', linkedin: 'https://linkedin.com/in/member6' },
  { img: '/images/member7.jpg', linkedin: 'https://linkedin.com/in/member7' },
  { img: '/images/member8.jpg', linkedin: 'https://linkedin.com/in/member8' },
];

const Knowus = () => {
  return (
    <div className="px-4 md:px-10 xl:pl-20 w-full lg:w-[90%] max-w-[1280px] mx-auto">
      <h4 className="text-orange-600 text-xl md:text-2xl font-semibold">
        Get In
      </h4>
      <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl pt-2 font-semibold tracking-tighter leading-tight">
        Touch & Start Your Adventure!
      </h1>
      <p className="pt-4 lg:pt-2 xl:pt-2 sm:pt-6 text-sm sm:text-base">
        Our expert support team is always prepared to help you with any queries or concerns,
        providing quick and tailored solutions to suit your needs.
      </p>

      <div className="border-amber-600 mt-6 sm:mt-8 xl:mt-8 lg:mt-0 border rounded-3xl w-full lg:w-[40vw] xl:w-[36vw] h-auto sm:h-[40vh] p-6 sm:p-8">
        {/* Contact info section */}
        <div className="flex lg:flex-col xl:flex-row flex-wrap sm:flex-nowrap gap-4 sm:gap-6 items-start">
          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 h-[40px] w-[40px] rounded-full flex items-center justify-center">
              <img className="h-[20px] w-[20px] object-contain invert" src={Call} alt="Call icon" />
            </div>
            <div>
              <h3 className="text-gray-600 text-sm sm:text-base">Phone No:</h3>
              <h2 className="text-base sm:text-lg font-semibold text-orange-500 cursor-pointer"><a href="tel:+917501516714">
              +91-75015 16714
            </a></h2>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 h-[40px] w-[40px] rounded-full flex items-center justify-center">
              <img className="h-[20px] w-[20px] object-contain invert" src={Email} alt="Email icon" />
            </div>
            <div>
              <h3 className="text-gray-600 text-sm sm:text-base">Email Address:</h3>
              <h2 className="text-base sm:text-lg font-semibold text-orange-500 cursor-pointer"><a href="mailto:contact@friskytrails.in">
              contact@friskytrails.in
            </a></h2>
            </div>
          </div>
        </div>

        {/* Team Text */}
        <h1 className="text-xl sm:text-2xl xl:text-3xl pt-6 font-semibold tracking-tighter">
          20+ Expert Team member
        </h1>

        {/* Overlapping Circles with Images */}
        <div className="pt-6 sm:pt-10 flex items-center space-x-[-20px] relative z-0">
          {teamMembers.map((member, index) => (
            <a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-110 hover:z-10"
            >
              <img
                src={member.img}
                alt={`Team member ${index + 1}`}
                className="h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] rounded-full border-2 border-white object-cover shadow-md"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Knowus;
