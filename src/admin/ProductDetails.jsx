import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Right from "../assets/right.svg";
import Share from "../assets/share.svg";
import Payment from "../assets/payment.svg";
import Call from "../assets/calling.svg";
import { getProductBySlug } from "../api/admin.api";
import Content from "../Productpage/Content";
import BookingModal from "../components/BookingModal";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

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

  const openBookingModal = () => setShowBooking(true);
  const closeBookingModal = () => setShowBooking(false);

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen w-full">
      {/* Breadcrumb */}
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mt-30 m-auto px-4">
        <div className="flex items-center pt-4 sm:pt-6 flex-wrap gap-2">
          <h3 className="font-semibold text-sm sm:text-base">Home</h3>
          <img className="h-3 w-3 sm:h-4 sm:w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold text-sm sm:text-base">Products</h3>
          <img className="h-3 w-3 sm:h-4 sm:w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold text-gray-600 text-sm sm:text-base truncate">
            {product.name}
          </h3>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-3xl tracking-tighter font-bold pt-4">
          {product.name}
        </h1>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-4 pt-2">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <div className="flex items-center gap-1">
              <h3 className="text-gray-500 text-sm sm:text-base">
                {"⭐".repeat(product.rating || 5)} ({product.reviews || 0} Reviews)
              </h3>
            </div>
            <div className="border h-full border-gray-300 hidden sm:block"></div>
            <div>
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

      {/* Images Section */}
      <div className="h-auto w-full pt-4 px-4">
        <div className="w-full max-w-7xl rounded-lg bg-white m-auto">
          {product.images && product.images.length > 0 && (
            <>
              {/* Mobile */}
              <div className="block sm:hidden space-y-2">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="w-full h-52 rounded-xl shadow-2xl relative overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                      style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Tablet */}
              <div className="hidden sm:block lg:hidden grid grid-cols-2 gap-2">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-full rounded-xl shadow-2xl relative overflow-hidden ${
                      idx === 2 ? "col-span-2 h-60" : "h-40"
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                      style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                  </div>
                ))}
              </div>

              {/* Desktop */}
              <div className="hidden lg:grid grid-cols-3 gap-3">
                <div className="space-y-3">
                  {product.images.slice(0, 2).map((img, idx) => (
                    <div
                      key={idx}
                      className="h-56 w-full rounded-2xl shadow-2xl relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                        style={{ backgroundImage: `url('${img}')` }}
                      ></div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <div className="h-[28rem] w-full rounded-2xl shadow-2xl relative overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                      style={{
                        backgroundImage: `url('${
                          product.images[2] || product.images[0]
                        }')`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  {product.images.slice(3, 5).map((img, idx) => (
                    <div
                      key={idx}
                      className="h-56 w-full rounded-2xl shadow-2xl relative overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
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

      {/* Main Section */}
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[90%] m-auto flex flex-col lg:flex-row px-4 gap-8 mt-10">
        {/* Left - Content */}
        <div className="w-full lg:w-[70%] order-2 lg:order-1">
          <Content product={product} />
        </div>

        {/* Right - Sticky Sidebar */}
        <div className="w-full lg:w-[30%] order-1 lg:order-2 lg:pl-6">
          <div className="lg:sticky lg:top-28 space-y-6">
            {/* Price Card */}
            <div className="bg-white border border-orange-500 rounded-lg shadow-md overflow-hidden">
              <div className="bg-orange-500 py-4 relative">
                <span className="text-white absolute right-2 top-1 text-xs sm:text-sm md:text-base">
                  Save upto 50%
                </span>
              </div>
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center sm:text-left">
                  <span className="font-semibold text-xs sm:text-sm md:text-base">
                    From
                  </span>
                  <span className="line-through pl-2 text-base sm:text-lg md:text-xl text-gray-500">
                    ₹{product.actualPrice}
                  </span>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-500">
                    ₹{product.offerPrice}
                  </h1>
                  <span className="font-semibold text-xs sm:text-sm md:text-base">
                    per person
                  </span>
                </div>
                <button
                  onClick={openBookingModal}
                  className="py-2 px-6 sm:px-8 md:px-10 text-sm sm:text-base md:text-lg font-semibold text-white active:scale-95 transition-all duration-300 bg-[rgb(233,99,33)] rounded-3xl"
                >
                  Book Now
                </button>
              </div>
              <div className="flex items-start gap-2 sm:gap-3 px-4 pb-4">
                <img
                  className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                  src={Payment}
                  alt="payment"
                />
                <p className="text-xs sm:text-sm md:text-base leading-snug">
                  <span className="underline font-semibold">
                    Reserve now & pay later
                  </span>{" "}
                  to book your spot and pay nothing today
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white border border-orange-500 rounded-lg shadow-md p-4 sm:p-5">
              <h1 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-semibold">
                Got a Question?
              </h1>
              <p className="text-sm sm:text-base md:text-lg mt-2">
                Our destination expert will be happy to help you resolve your
                queries for this tour.
              </p>
              <div className="flex gap-3 sm:gap-4 items-center w-full mt-4">
                <div className="flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 h-9 w-9 sm:h-10 sm:w-10 rounded-full">
                  <img
                    className="h-4 w-4 sm:h-5 sm:w-5 invert"
                    src={Call}
                    alt="call"
                  />
                </div>
                <div>
                  <a
                    className="text-base sm:text-lg md:text-xl font-semibold block"
                    href="tel:+91-9876543210"
                  >
                    +91-9876543210
                  </a>
                  <h3 className="text-xs sm:text-sm">Mon-Sun: 9AM-8PM</h3>
                  <h3 className="text-xs sm:text-sm break-all">
                    support@friskytrails.com
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBooking && (
        <BookingModal productSlug={product.slug} onClose={closeBookingModal} />
      )}
    </div>
  );
};

export default ProductDetails;
