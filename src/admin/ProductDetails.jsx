import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Right from "../assets/right.svg";
import Share from "../assets/share.svg";
import Payment from "../assets/payment.svg";
import Call from "../assets/calling.svg";
import { getProductBySlug } from "../api/admin.api";
import Content from "../Productpage/Content";
import BookingModal from "../components/BookingModal"; // Added import

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [showBooking, setShowBooking] = useState(false); // Added state

  const baseUrl = process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://your-vercel-app.vercel.app";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductBySlug(slug);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [slug]);

  const openBookingModal = () => setShowBooking(true); // Added function
  const closeBookingModal = () => setShowBooking(false); // Added function

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen w-full">
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mt-30 m-auto px-4">
        <div className="flex items-center pt-4 sm:pt-6 flex-wrap gap-2">
          <h3 className="font-semibold text-sm sm:text-base">Home</h3>
          <img className="h-3 w-3 sm:h-4 sm:w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold text-sm sm:text-base">Products</h3>
          <img className="h-3 w-3 sm:h-4 sm:w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold text-gray-600 text-sm sm:text-base truncate">{product.name}</h3>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl tracking-tighter font-bold pt-4">{product.name}</h1>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-2">
          <div className="email flex items-center gap-2 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <h3 className="text-gray-500 text-sm sm:text-base">
                {"⭐".repeat(product.rating || 5)} ({product.reviews || 0} Reviews)
              </h3>
            </div>
            <div className="border-1 h-full border-gray-400 hidden sm:block"></div>
            <div className="number flex justify-center items-center">
              <h3 className="text-gray-500 text-sm sm:text-base">
                {product.city?.name}, {product.state?.name}
              </h3>
            </div>
          </div>
          <button className="py-2 flex items-center justify-center gap-2 px-4 sm:px-6 font-semibold text-white active:scale-95 transition-all duration-300 bg-[rgb(233,99,33)] rounded-3xl text-sm sm:text-base w-fit">
            <img className="invert h-4 w-4 sm:h-5 sm:w-5" src={Share} alt="share" />
            Share
          </button>
        </div>
      </div>

      <div className="h-[60vh] sm:h-[70vh] md:h-[80vh] w-full pt-4 px-4">
        <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] w-full max-w-7xl rounded-lg bg-white m-auto">
          {product.images && product.images.length > 0 && (
            <>
              <div className="block sm:hidden space-y-2 h-full overflow-y-auto">
                {product.images.map((img, idx) => (
                  <div key={idx} className={`w-full rounded-xl shadow-2xl relative overflow-hidden ${
                    idx === 2 ? 'h-[30vh]' : 'h-[20vh]'
                  }`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                      style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="hidden sm:block lg:hidden grid grid-cols-2 h-full gap-2">
                {product.images.map((img, idx) => (
                  <div key={idx} className={`w-full rounded-xl shadow-2xl relative overflow-hidden ${
                    idx === 2 ? 'h-[40vh] col-span-2' : 'h-[28vh]'
                  }`}>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                      style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                  </div>
                ))}
              </div>

              <div className="hidden lg:grid grid-cols-3 h-full gap-3">
                <div className="space-y-3">
                  {product.images.slice(0, 2).map((img, idx) => (
                    <div key={idx} className="h-[33vh] w-full rounded-2xl shadow-2xl relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                        style={{ backgroundImage: `url('${img}')` }}
                      ></div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  {product.images[2] ? (
                    <div className="h-[68vh] w-full rounded-2xl shadow-2xl relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                        style={{ backgroundImage: `url('${product.images[2]}')` }}
                      ></div>
                    </div>
                  ) : product.images[0] ? (
                    <div className="h-[68vh] w-full rounded-2xl shadow-2xl relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                        style={{ backgroundImage: `url('${product.images[0]}')` }}
                      ></div>
                    </div>
                  ) : null}
                </div>

                <div className="space-y-3">
                  {product.images.slice(3, 5).map((img, idx) => (
                    <div key={idx} className="h-[33vh] w-full rounded-2xl shadow-2xl relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                        style={{ backgroundImage: `url('${img}')` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] m-auto flex flex-col lg:flex-row min-h-screen px-4">
        <div className="w-full lg:w-[70%] min-h-screen m-auto order-2 lg:order-1">
          <Content product={product} />
        </div>

        <div className="w-full lg:w-[30%] min-h-screen m-auto order-1 lg:order-2 mb-8 lg:mb-0">
          <div className="h-[6vh] sm:h-[4vh] relative w-full bg-orange-500 m-auto rounded-t-lg">
            <span className="text-white absolute right-2 top-1 text-sm sm:text-base">Save upto 50%</span>
          </div>

          <div className="min-h-[25vh] sm:h-[20vh] w-full border-1 border-orange-500 bg-white m-auto rounded-b-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between w-[90%] sm:w-[86%] m-auto p-4 sm:p-0">
              <div className="text-center sm:text-left mb-4 sm:mb-0">
                <span className="font-semibold text-sm sm:text-base">From</span>
                <span className="line-through pl-2 text-lg sm:text-xl text-gray-500">₹{product.actualPrice}</span>
                <h1 className="text-2xl sm:text-3xl font-bold text-orange-500">₹{product.offerPrice}</h1>
                <span className="font-semibold text-sm sm:text-base">per person</span>
              </div>
              <div>
                <button
                  onClick={openBookingModal} // Added onClick here
                  className="py-2 px-6 sm:px-10 flex text-lg sm:text-xl items-center gap-2 font-semibold text-white active:scale-95 transition-all duration-300 bg-[rgb(233,99,33)] rounded-3xl"
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-4 w-[90%] m-auto items-center pt-2 pb-4">
              <img className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" src={Payment} alt="payment" />
              <p className="text-xs sm:text-sm">
                <span className="underline font-semibold">Reserve now & pay later</span> to book your spot and pay nothing today
              </p>
            </div>
          </div>

          <div className="min-h-[40vh] sm:h-[36vh] w-full border-1 border-orange-500 mt-6 sm:mt-10 bg-white m-auto rounded-lg">
            <div className="flex items-center justify-between w-[90%] m-auto p-4">
              <div>
                <h1 className="text-orange-500 pt-2 sm:pt-4 text-xl sm:text-2xl md:text-3xl font-semibold">Got a Question?</h1>
                <p className="pt-2 sm:pt-4 text-sm sm:text-lg md:text-xl">Our destination expert will be happy to help you resolve your queries for this tour.</p>
                <div className="flex gap-3 sm:gap-4 items-center w-full m-auto pt-4 sm:pt-6">
                  <div className="round flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] text-lg sm:text-xl to-amber-400 h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] rounded-full flex-shrink-0">
                    <img className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] object-contain invert" src={Call} alt="call" />
                  </div>
                  <div className="min-w-0">
                    <a className="text-lg sm:text-xl font-semibold block" href="tel:+91-9876543210">
                      +91-9876543210
                    </a>
                    <h3 className="text-xs sm:text-sm">Mon-Sun: 9AM-8PM</h3>
                    <h3 className="text-xs sm:text-sm break-all">support@friskytrails.com</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Booking Modal Added Here */}
      {showBooking && <BookingModal productSlug={product.slug} onClose={closeBookingModal} />}
    </div>
  );
};

export default ProductDetails;
