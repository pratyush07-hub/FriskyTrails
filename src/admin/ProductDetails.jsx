import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Right from "../assets/right.svg";
import Share from "../assets/share.svg";
import Payment from "../assets/payment.svg";
import Call from "../assets/calling.svg";
import { getProductBySlug } from "../api/admin.api";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

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

  if (!product) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen w-full">
      <div className="w-[80%] mt-30 m-auto">
        {/* Breadcrumb */}
        <div className="flex items-center pt-6">
          <h3 className="font-semibold">Home</h3>
          <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold">Products</h3>
          <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold text-gray-600">{product.name}</h3>
        </div>

        {/* Title */}
        <h1 className="text-3xl tracking-tighter font-bold pt-4">{product.name}</h1>

        {/* Reviews and Location */}
        <div className="flex justify-between items-center pt-2">
          <div className="flex items-center gap-4">
            <h3 className="text-gray-500">
              {"⭐".repeat(product.rating || 5)} ({product.reviews || 0} Reviews)
            </h3>
            <span className="border-l border-gray-400 h-5"></span>
            <h3 className="text-gray-500">
              {product.city?.name}, {product.state?.name}, {product.country?.name}
            </h3>
          </div>
          <button className="py-2 flex items-center gap-2 px-6 font-semibold text-white bg-orange-500 rounded-3xl hover:scale-95 transition-all">
            <img className="invert h-5 w-5" src={Share} alt="share" /> Share
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="h-[80vh] w-full pt-4">
        <div className="grid grid-cols-3 h-[70vh] w-[80vw] rounded-lg bg-white m-auto gap-3">
          {product.images && product.images.length > 0 &&
            <>
              <div className="mx-auto space-y-3">
                {product.images.slice(0, 2).map((img, idx) => (
                  <div key={idx} className="h-[33vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
                    <img
                      src={img}
                      alt={`product-${idx}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              <div className="m-auto">
                {product.images[2] && (
                  <div className="h-[68vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
                    <img
                      src={product.images[2]}
                      alt="product-2"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                )}
              </div>

              <div className="mx-auto space-y-3">
                {product.images.slice(3, 5).map((img, idx) => (
                  <div key={idx} className="h-[33vh] w-[26vw] rounded-2xl shadow-2xl relative overflow-hidden">
                    <img
                      src={img}
                      alt={`product-${idx + 3}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </>
          }
        </div>
      </div>

      {/* Content Section */}
      <div className="w-[80%] m-auto flex gap-8 mt-10">
        <div className="w-[70%]">
          {product.description && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Description</h2>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          )}

          {product.productHighlights && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Highlights</h2>
              <div dangerouslySetInnerHTML={{ __html: product.productHighlights }} />
            </div>
          )}

          {product.productOverview && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Overview</h2>
              <div dangerouslySetInnerHTML={{ __html: product.productOverview }} />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-[30%] space-y-6">
          {/* Price Box */}
          <div className="p-4 bg-white border border-orange-500 rounded-xl">
            <p className="text-gray-500 line-through">₹{product.actualPrice}</p>
            <h2 className="text-3xl font-bold text-orange-500">₹{product.offerPrice}</h2>
            <p className="text-sm">per person</p>
            <button className="mt-3 w-full py-2 bg-orange-500 text-white font-semibold rounded-xl hover:scale-95 transition-all">
              Book Now
            </button>
            <div className="flex items-center gap-2 mt-2 text-sm">
              <img src={Payment} alt="payment" className="w-5 h-5" />
              <span>Reserve now & pay later</span>
            </div>
          </div>

          {/* Contact Box */}
          {product.contact && (
            <div className="p-4 bg-white border border-orange-500 rounded-xl">
              <h2 className="text-orange-500 text-2xl font-semibold mb-2">Got a Question?</h2>
              <p className="mb-3">Our expert is here to help you.</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-gradient-to-r from-orange-500 to-amber-400">
                  <img src={Call} alt="call" className="w-5 h-5 invert" />
                </div>
                <div>
                  <a href={`tel:${product.contact}`} className="font-semibold text-lg">{product.contact}</a>
                  {product.contactHours && <p className="text-sm">{product.contactHours}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;  