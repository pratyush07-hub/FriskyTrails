import Contactform from "../components/Contactform";
import Call from "../assets/calling.svg";
import Email from "../assets/email.svg";
import Location from "../assets/location.avif";
import Knowus from "../components/Knowus";

const ContactUs = () => {
  return (
    <>
      <div className="relative min-h-screen mt-28 md:mt-32 lg:mt-40 w-full px-4 sm:px-6">
        {/* Title */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight text-center mt-16">
          Contact Us
        </h1>

        {/* Description */}
        <div className="w-full sm:w-[80%] lg:w-[60%] mx-auto">
          <p className="text-center mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-gray-600">
            FriskyTrails is one of the leading travel platforms for adventure
            enthusiasts and explorers who seek to experience the thrill of
            travel and discover the beauty of incredible destinations.
          </p>
        </div>

        {/* Know Us + Form Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 pt-16 lg:pt-20">
          {/* Left: Know Us */}
          <div className="w-full lg:w-[50%] flex justify-center">
            <Knowus />
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-[50%]">
            <h1 className="font-semibold tracking-tight text-center text-2xl sm:text-3xl md:text-4xl pt-6 md:pt-10">
              Looking for any help?
            </h1>
            <div className="pt-6 sm:pt-8 flex justify-center">
              <Contactform />
            </div>
          </div>
        </div>

        {/* Office Section */}
        <div className="w-full pt-16 sm:pt-20 md:pt-24">
          <h4 className="font-semibold text-base sm:text-lg md:text-xl text-center text-orange-500">
            Our Location
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mt-2">
            Office In India
          </h1>

          {/* Office Details */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 pt-8 sm:pt-10 lg:pt-16">
            {/* Image */}
            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] flex justify-center">
              <img
                className="w-full sm:w-[90%] lg:w-[85%] xl:w-[80%] h-auto rounded-3xl shadow-lg"
                src="/images/office.webp"
                alt="Office"
              />
            </div>

            {/* Info Section */}
            <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[50%] flex flex-col items-center gap-6 py-10 md:py-16">
              {/* Contact Info */}
              <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-4 px-4 sm:px-6">
                {/* Phone */}
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 h-[40px] w-[40px] rounded-full">
                    <img
                      className="h-[20px] w-[20px] object-contain invert"
                      src={Call}
                      alt="Call"
                    />
                  </div>
                  <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-700">
                    <a href="tel:+917501516714">+91-75015 16714</a>
                  </h2>
                </div>

                {/* Email */}
                <div className="flex items-center justify-center sm:justify-start gap-4 xl:pr-20">
                  <div className="flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 h-[40px] w-[40px] rounded-full">
                    <img
                      className="h-[20px] w-[20px] object-contain invert"
                      src={Email}
                      alt="Email"
                    />
                  </div>
                  <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-700 text-center sm:text-left break-words">
                    <a href="mailto:contact@friskytrails.in">
                      contact@friskytrails.in
                    </a>
                  </h2>
                </div>
              </div>

              {/* Divider */}
              <div className="h-0.5 w-[85%] bg-gray-300"></div>

              {/* Location Section */}
              <div className="w-full px-4 sm:px-6 flex flex-col gap-8">
                {/* Office 1 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[rgb(248,159,124)] to-amber-300 h-[40px] w-[40px] rounded-full">
                    <img
                      className="h-[20px] w-[20px] object-contain"
                      src={Location}
                      alt="Location"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold pb-2">
                      Siliguri Office
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-snug max-w-[90vw] sm:max-w-[80vw] lg:max-w-[32vw] mx-auto sm:mx-0">
                      Uttarapan Market Complex, G15, Hill Cart Rd, opposite of
                      Biswadeep Cinema Hall, Ward 1, Patiram Jote, Siliguri,
                      West Bengal 734001
                    </p>
                  </div>
                </div>

                {/* Office 2 */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[rgb(248,159,124)] to-amber-300 h-[40px] w-[40px] rounded-full">
                    <img
                      className="h-[20px] w-[20px] object-contain"
                      src={Location}
                      alt="Location"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold pb-2">
                      Jaipur Office
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-snug max-w-[90vw] sm:max-w-[80vw] lg:max-w-[32vw] mx-auto sm:mx-0">
                      Example Address, Near Central Park, Sector 5, Jaipur,
                      Rajasthan 700091
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
