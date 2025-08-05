import Contactform from "../components/Contactform";
import Call from "../assets/calling.svg";
import Email from "../assets/email.svg";
import Location from "../assets/location.avif";
import Knowus from "../components/Knowus";

const ContactUs = () => {
  return (
    <>
      <div className="relative min-h-screen mt-23 md:mt-28 lg:mt-30 xl:mt-60 w-full">
        <h1 className="font-bold text-4xl md:text-8xl tracking-tight text-center mt-16 md:mt-30">
          Contact Us
        </h1>
        <div className="w-[90vw] lg:w-[60vw] mx-auto flex justify-center">
          <p className="text-center mt-4 md:mt-8 text-base md:text-xl text-gray-600">
            FriskyTrails is one of the leading travel platforms for adventure
            enthusiasts and explorers who seek to experience the thrill of
            travel and discover the beauty of incredible destinations.
          </p>
        </div>
        <div className="h-auto xl:h-screen flex flex-col lg:flex-row pt-16 lg:pt-26">
          <div className="h-auto xl:h-[85vh] w-full lg:w-[50%]">
            <Knowus />
          </div>
          <div className="h-auto xl:h-[85vh] w-full lg:w-[50%]">
            <h1 className="font-semibold tracking-tight flex justify-center pt-6 md:pt-10 text-3xl md:text-4xl">
              Looking for any help?
            </h1>
            <Contactform />
          </div>
        </div>
        <div className="h-auto md:h-auto w-full">
          <h4 className="font-semibold text-lg md:text-xl text-center pt-10 md:pt-20 lg:pt-6 xl:pt-12 text-orange-500">
            Our Location
          </h4>
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Office In India
          </h1>
          <div className="flex flex-col lg:flex-row xl:gap-60 pb-4">
            <div className="lg:pl-10 xl:pl-30 pt-6 md:pt-16 w-[90%] mx-auto lg:w-[60%] xl:w-[50%]">
              <img
                className="h-auto lg:h-[45vh] w-full lg:w-[90%] xl:w-[35vw]"
                src="/images/office.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 lg:pt-2  w-[90%] mx-auto lg:w-[40%] xl:w-[50%]">
              <h1 className="text-3xl md:text-5xl font-bold pt-4 lg:pt-18">
                Siliguri Office
              </h1>
              <div className="flex items-center pt-4 md:pt-8 gap-4">
                <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
                  <img
                    className="h-[20px] w-[20px] object-contain invert"
                    src={Call}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-600 cursor-pointer">
                    +91-75015 16714
                  </h2>
                </div>
              </div>
              <div className="flex pt-4 items-center gap-4">
                <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
                  <img
                    className="h-[20px] w-[20px] object-contain invert"
                    src={Email}
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-600 cursor-pointer">
                    friskytrails@gmail.com
                  </h2>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 pt-4">
                {/* Icon */}
                <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[rgb(248,159,124)] to-amber-300 border-orange-500 h-[40px] w-[40px] rounded-full">
                  <img
                    className="h-[20px] w-[20px] object-contain"
                    src={Location}
                    alt="Location"
                  />
                </div>

                {/* Address Text */}
                <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 cursor-pointer leading-snug max-w-[90vw] sm:max-w-[80vw] lg:max-w-[32vw]">
                  Uttarapan Market Complex, G15, Hill Cart Rd, opposite of
                  Biswadeep Cinema Hall, Ward 1, Patiram Jote, Siliguri, West
                  Bengal 734001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
