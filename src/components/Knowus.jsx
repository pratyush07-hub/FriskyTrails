import Call from '../assets/calling.svg';
import Email from '../assets/email.svg';

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
              <img className="h-[20px] w-[20px] object-contain invert" src={Call} alt="" />
            </div>
            <div>
              <h3 className="text-gray-600 text-sm sm:text-base">Phone No:</h3>
              <h2 className="text-base sm:text-lg font-semibold text-orange-500 cursor-pointer">+91-75015 16714</h2>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 h-[40px] w-[40px] rounded-full flex items-center justify-center">
              <img className="h-[20px] w-[20px] object-contain invert" src={Email} alt="" />
            </div>
            <div>
              <h3 className="text-gray-600 text-sm sm:text-base">Email Address:</h3>
              <h2 className="text-base sm:text-lg font-semibold text-orange-500 cursor-pointer">friskytrails@gmail.com</h2>
            </div>
          </div>
        </div>

        {/* Team Text */}
        <h1 className="text-xl sm:text-2xl xl:text-3xl pt-6 font-semibold tracking-tighter">
          20+ Expert Team member
        </h1>

        {/* Overlapping Circles */}
        <div className="pt-6 sm:pt-10 flex items-center space-x-[-20px] relative z-0">
          {[100, 200, 300, 400, 500, 600, 700, 800].map((shade, index) => (
            <div
              key={index}
              className={`h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] rounded-full bg-amber-${shade} hover:scale-110 hover:z-10 transition-transform`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Knowus;
