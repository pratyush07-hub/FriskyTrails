import { useState, useEffect } from "react";
import Editor from "../components/Editor";
import { getProductById, updateProduct, getCountries, getStates, getCities, getAllProductTypes } from "../api/admin.api";

const EditProductForm = ({ productId, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    offerPrice: "",
    actualPrice: "",
    productType: "",
    rating: 0,
    reviews: 0,
    productHighlights: "",
    productOverview: "",
    additionalInfo: "",
    faq: "",
    country: "",
    state: "",
    city: "",
  });

  const [images, setImages] = useState([]); // existing images URLs
  const [newImages, setNewImages] = useState([]); // newly selected files
  const [previews, setPreviews] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [productTypes, setProductTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(productId);
        const product = res.data;

        setFormData({
          name: product.name || "",
          slug: product.slug || "",
          offerPrice: product.offerPrice || "",
          actualPrice: product.actualPrice || "",
          productType: product.productType?._id || product.productType || "",
          rating: product.rating || 0,
          reviews: product.reviews || 0,
          productHighlights: product.productHighlights || "",
          productOverview: product.productOverview || "",
          additionalInfo: product.additionalInfo || "",
          faq: product.faq || "",
          country: product.country?._id || "",
          state: product.state?._id || "",
          city: product.city?._id || "",
        });

        setImages(product.images || []);
      } catch (err) {
        console.error("Failed to fetch product:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) fetchProduct();
  }, [productId]);

  // Load countries
  useEffect(() => {
    (async () => {
      try {
        const res = await getCountries();
        setCountries(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // Load states when country changes
  useEffect(() => {
    if (!formData.country) return setStates([]);
    (async () => {
      try {
        const res = await getStates(formData.country);
        setStates(res.data);
        setFormData(prev => ({ ...prev, state: "", city: "" }));
        setCities([]);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [formData.country]);

  // Load cities when state changes
  useEffect(() => {
    if (!formData.state) return setCities([]);
    (async () => {
      try {
        const res = await getCities(formData.state);
        setCities(res.data);
        setFormData(prev => ({ ...prev, city: "" }));
      } catch (err) {
        console.error(err);
      }
    })();
  }, [formData.state]);

  // Load product types
  useEffect(() => {
    (async () => {
      try {
        const res = await getAllProductTypes();
        setProductTypes(res.data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const handleChange = e => {
    const { name, value, files } = e.target;

    if (name === "images") {
      const selected = Array.from(files);
      if (selected.length + images.length + newImages.length > 5)
        return alert("❌ You can upload up to 5 images.");

      setNewImages(prev => [...prev, ...selected]);
      setPreviews(prev => [...prev, ...selected.map(f => URL.createObjectURL(f))]);
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));

      // Auto-generate slug if name changes
      if (name === "name") {
        setFormData(prev => ({
          ...prev,
          slug: value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
        }));
      }
    }
  };

  const removeImage = (index, isNew = false) => {
    if (isNew) {
      setNewImages(prev => prev.filter((_, i) => i !== index));
      setPreviews(prev => prev.filter((_, i) => i !== index));
    } else {
      setImages(prev => prev.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const data = new FormData();
      for (const key in formData) data.append(key, formData[key]);
      newImages.forEach(img => data.append("images", img));

      await updateProduct(formData.slug, data);
      setMessage("✅ Product updated successfully!");
      if (onUpdate) onUpdate();
      if (onClose) onClose();
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to update product");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 w-[70%] mt-10 mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-4">

        {/* Name & Slug */}
        <input type="text" name="name" value={formData.name} onChange={handleChange} required className="p-2 border rounded" />
        <input type="text" name="slug" value={formData.slug} disabled className="p-2 border rounded bg-gray-100 cursor-not-allowed" />

        {/* Prices */}
        <input type="number" name="offerPrice" value={formData.offerPrice} onChange={handleChange} placeholder="Offer Price" required className="p-2 border rounded" />
        <input type="number" name="actualPrice" value={formData.actualPrice} onChange={handleChange} placeholder="Actual Price" required className="p-2 border rounded" />

        {/* Product Type */}
        <select name="productType" value={formData.productType} onChange={handleChange} className="p-2 border rounded">
          <option value="">Select Product Type</option>
          {productTypes.map(pt => <option key={pt._id} value={pt._id}>{pt.name}</option>)}
        </select>

        {/* Rating & Reviews */}
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" className="p-2 border rounded" />
        <input type="number" name="reviews" value={formData.reviews} onChange={handleChange} placeholder="Reviews" className="p-2 border rounded" />

        {/* Editors */}
        <label className="font-semibold">Product Highlights</label>
        <Editor content={formData.productHighlights} onChange={val => setFormData(prev => ({ ...prev, productHighlights: val }))} />

        <label className="font-semibold">Product Overview</label>
        <Editor content={formData.productOverview} onChange={val => setFormData(prev => ({ ...prev, productOverview: val }))} />

        <label className="font-semibold">Additional Info</label>
        <Editor content={formData.additionalInfo} onChange={val => setFormData(prev => ({ ...prev, additionalInfo: val }))} />

        <label className="font-semibold">FAQ</label>
        <Editor content={formData.faq} onChange={val => setFormData(prev => ({ ...prev, faq: val }))} />

        {/* Country / State / City */}
        <select name="country" value={formData.country} onChange={handleChange} className="p-2 border rounded">
          <option value="">Select Country</option>
          {countries.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>
        <select name="state" value={formData.state} onChange={handleChange} disabled={!states.length} className="p-2 border rounded">
          <option value="">Select State</option>
          {states.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
        </select>
        <select name="city" value={formData.city} onChange={handleChange} disabled={!cities.length} className="p-2 border rounded">
          <option value="">Select City</option>
          {cities.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>

        {/* Images */}
        <div className="flex flex-wrap gap-2">
          {images.map((img, i) => (
            <div key={i} className="relative">
              <img src={img} className="w-32 h-32 object-cover rounded" />
              <button type="button" onClick={() => removeImage(i)} className="absolute top-1 right-1 text-red-500 bg-white rounded-full px-1">X</button>
            </div>
          ))}
          {previews.map((src, i) => (
            <div key={i} className="relative">
              <img src={src} className="w-32 h-32 object-cover rounded" />
              <button type="button" onClick={() => removeImage(i, true)} className="absolute top-1 right-1 text-red-500 bg-white rounded-full px-1">X</button>
            </div>
          ))}
        </div>
        <input type="file" name="images" multiple accept="image/*" onChange={handleChange} />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Update Product</button>
      </form>

      {message && <p className={`mt-4 text-center font-medium ${message.includes("Failed") ? "text-red-600" : "text-green-600"}`}>{message}</p>}
    </div>
  );
};

export default EditProductForm;
