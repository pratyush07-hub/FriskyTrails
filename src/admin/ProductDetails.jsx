import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div className="max-w-4xl mx-auto p-6">
      {/* Product Image */}
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
      )}

      {/* Product Title */}
      <h1 className="text-4xl font-bold text-orange-500 mb-3">{product.name}</h1>

      {/* Location Details */}
      <div className="text-gray-700 mb-4 space-y-1">
        {product.city && (
          <p>
            <span className="font-semibold">City:</span> {product.city.name}
          </p>
        )}
        {product.city?.state && (
          <p>
            <span className="font-semibold">State:</span> {product.city.state.name}
          </p>
        )}
        {product.city?.state?.country && (
          <p>
            <span className="font-semibold">Country:</span>{" "}
            {product.city.state.country.name}
          </p>
        )}
      </div>

      {/* Description */}
      <p className="text-lg text-gray-700 mb-4">{product.description}</p>

      {/* Price */}
      <p className="text-xl font-semibold">₹{product.price}</p>
    </div>
  );
};

export default ProductDetails;
