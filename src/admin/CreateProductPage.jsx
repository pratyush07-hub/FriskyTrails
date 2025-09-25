import { useEffect, useState } from "react";
import { 
  createProduct, 
  getCountries, 
  getStates, 
  getCities, 
  getAllProductTypes 
} from "../api/admin.api";
import Editor from "../components/Editor";

const CreateProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    productType: "",
    offerPrice: "",
    actualPrice: "",
    productHighlights: "",
    productOverview: "",
    thingsToCarry: "",
    additionalInfo: "",
    faq: "",
    country: "",
    state: "",
    city: "",
    reviews: "",
    rating: "",
  });

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [productTypes, setProductTypes] = useState([]);

  // Auto generate slug
  useEffect(() => {
    if (formData.name) {
      setFormData((prev) => ({
        ...prev,
        slug: formData.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)+/g, ""),
      }));
    }
  }, [formData.name]);

  // Load product types
  useEffect(() => {
    (async () => {
      try {
        const res = await getAllProductTypes();
        setProductTypes(res.data);
      } catch (err) {
        console.error("Error fetching product types:", err);
      }
    })();
  }, []);

  // Load countries
  useEffect(() => {
    (async () => {
      const res = await getCountries();
      setCountries(res.data);
    })();
  }, []);

  // Load states when country changes
  useEffect(() => {
    if (formData.country) {
      (async () => {
        const res = await getStates(formData.country);
        setStates(res.data);
        setCities([]);
      })();
    } else {
      setStates([]);
      setCities([]);
    }
  }, [formData.country]);

  // Load cities when state changes
  useEffect(() => {
    if (formData.state) {
      (async () => {
        const res = await getCities(formData.state);
        setCities(res.data);
      })();
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const selected = Array.from(files);
      if (selected.length > 5)
        return alert("❌ You can upload up to 5 images.");
      setImages(selected);
      setPreviews(selected.map((f) => URL.createObjectURL(f)));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formObj = new FormData();
      for (const key in formData) formObj.append(key, formData[key]);
      images.forEach((f) => formObj.append("images", f));

      await createProduct(formObj);
      alert("✅ Product created successfully!");

      // Reset form
      setFormData({
        name: "",
        slug: "",
        description: "",
        productType: "",
        offerPrice: "",
        actualPrice: "",
        productHighlights: "",
        productOverview: "",
        thingsToCarry: "",
        additionalInfo: "",
        faq: "",
        country: "",
        state: "",
        city: "",
        reviews: "",
        rating: "",
      });
      setImages([]);
      setPreviews([]);
    } catch (err) {
      console.error("Error creating product:", err);
      alert("❌ Failed to create product");
    }
  };

  return (
    <div className="max-w-3xl mt-10 mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name & Slug */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded w-full"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
          required
          className="p-2 border rounded w-full bg-gray-100"
          readOnly
        />

        {/* Product Type */}
        <select
          name="productType"
          value={formData.productType}
          onChange={handleChange}
          required
          className="p-2 border rounded w-full"
        >
          <option value="">Select Product Type</option>
          {productTypes.map((pt) => (
            <option key={pt._id} value={pt._id}>
              {pt.name}
            </option>
          ))}
        </select>

        {/* Prices */}
        <div className="flex gap-4">
          <input
            type="number"
            name="offerPrice"
            placeholder="Offer Price"
            value={formData.offerPrice}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          />
          <input
            type="number"
            name="actualPrice"
            placeholder="Actual Price"
            value={formData.actualPrice}
            onChange={handleChange}
            required
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Reviews & Rating */}
        <div className="flex gap-4">
          <input
            type="text"
            name="reviews"
            placeholder="Reviews"
            value={formData.reviews}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />

        {/* Editors */}
        <Editor
          content={formData.productHighlights}
          onChange={(c) =>
            setFormData((p) => ({ ...p, productHighlights: c }))
          }
        />
        <Editor
          content={formData.productOverview}
          onChange={(c) =>
            setFormData((p) => ({ ...p, productOverview: c }))
          }
        />
        <Editor
          content={formData.thingsToCarry}
          onChange={(c) =>
            setFormData((p) => ({ ...p, thingsToCarry: c }))
          }
        />
        <Editor
          content={formData.additionalInfo}
          onChange={(c) =>
            setFormData((p) => ({ ...p, additionalInfo: c }))
          }
        />
        <Editor
          content={formData.faq}
          onChange={(c) => setFormData((p) => ({ ...p, faq: c }))}
        />

        {/* Location */}
        <div className="flex gap-4">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="p-2 border rounded w-full"
          >
            <option value="">Select Country</option>
            {countries.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            disabled={!formData.country}
            className="p-2 border rounded w-full"
          >
            <option value="">Select State</option>
            {states.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name}
              </option>
            ))}
          </select>

          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            disabled={!formData.state}
            className="p-2 border rounded w-full"
          >
            <option value="">Select City</option>
            {cities.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/* Images */}
        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="p-2 border rounded w-full"
        />
        {previews.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3">
            {previews.map((src, idx) => (
              <img
                key={idx}
                src={src}
                className="w-32 h-24 object-cover rounded-lg border"
                alt="Preview"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-3 rounded-xl mt-4"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
