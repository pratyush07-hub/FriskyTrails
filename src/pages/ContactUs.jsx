import Contactform from "../components/Contactform";
import Call from "../assets/calling.svg";
import Email from "../assets/email.svg";
import Location from "../assets/location.avif";
import Knowus from "../components/Knowus";

const ContactUs = () => {
  return (
    <>
      <div className="relative min-h-screen mt-32 md:mt-28 lg:mt-30 xl:mt-60 w-full">
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
          <div className="flex justify-center pt-6 md:pt-10">
            <div className="w-[50%] h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px] flex justify-center items-center rounded-md">
              <img
                className="h-auto lg:h-[45vh] w-full lg:w-[90%] xl:w-[35vw]"
                src="/images/office.webp"
                alt=""
              />
            </div>
            <div className="w-[50%] gap-14 h-[300px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
              <div className="w-[84%] pt-20 flex flex-row justify-between">
                <div className="flex items-center h-20 gap-4">
                  <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
                    <img
                      className="h-[20px] w-[20px] object-contain invert"
                      src={Call}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-600 cursor-pointer">
                      <a href="tel:+917501516714">+91-75015 16714</a>
                    </h2>
                  </div>
                </div>
                <div className="flex items-center h-20 gap-4">
                  <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-xl to-amber-400 h-[40px] w-[40px] rounded-full">
                    <img
                      className="h-[20px] w-[20px] object-contain invert"
                      src={Email}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-600 cursor-pointer">
                      <a href="mailto:contact@friskytrails.in">
                        contact@friskytrails.in
                      </a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="h-0.5 w-[90%] bg-gray-600"></div>
              <div className="w-[84%] pt-6">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-row gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[rgb(248,159,124)] to-amber-300 border-orange-500 h-[40px] w-[40px] rounded-full">
                      <img
                        className="h-[20px] w-[20px] object-contain"
                        src={Location}
                        alt="Location"
                      />
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 cursor-pointer leading-snug max-w-[90vw] sm:max-w-[80vw] lg:max-w-[32vw]">
                      <p className="text-2xl text-gray-800 pb-2 pt-1">
                        Silliguri Office
                      </p>
                      Uttarapan Market Complex, G15, Hill Cart Rd, opposite of
                      Biswadeep Cinema Hall, Ward 1, Patiram Jote, Siliguri,
                      West Bengal 734001
                    </p>
                  </div>
                  <div className="flex flex-row gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center bg-gradient-to-r from-[rgb(248,159,124)] to-amber-300 border-orange-500 h-[40px] w-[40px] rounded-full">
                      <img
                        className="h-[20px] w-[20px] object-contain"
                        src={Location}
                        alt="Location"
                      />
                    </div>

                    <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 cursor-pointer leading-snug max-w-[90vw] sm:max-w-[80vw] lg:max-w-[32vw]">
                      <p className="text-2xl text-gray-800 pb-2 pt-1">
                        Silliguri Office
                      </p>
                      Uttarapan Market Complex, G15, Hill Cart Rd, opposite of
                      Biswadeep Cinema Hall, Ward 1, Patiram Jote, Siliguri,
                      West Bengal 734001
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
