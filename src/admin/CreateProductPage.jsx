import { useEffect, useState } from "react";
import { createProduct, getCountries, getStates, getCities } from "../api/admin.api";

const CreateProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    images: [],   // ✅ multiple images
    country: "",
    state: "",
    city: "",
  });
  const [previews, setPreviews] = useState([]); // ✅ multiple previews

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // ✅ Auto-generate slug
  useEffect(() => {
    if (formData.name) {
      const generatedSlug = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  }, [formData.name]);

  // ✅ Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountries();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // ✅ Fetch states
  useEffect(() => {
    if (formData.country) {
      const fetchStates = async () => {
        try {
          const res = await getStates(formData.country);
          setStates(res.data);
          setCities([]);
        } catch (error) {
          console.error("Error fetching states:", error);
        }
      };
      fetchStates();
    }
  }, [formData.country]);

  // ✅ Fetch cities
  useEffect(() => {
    if (formData.state) {
      const fetchCities = async () => {
        try {
          const res = await getCities(formData.state);
          setCities(res.data);
        } catch (error) {
          console.error("Error fetching cities:", error);
        }
      };
      fetchCities();
    }
  }, [formData.state]);

  // ✅ Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      const selectedFiles = Array.from(files);
      setFormData({ ...formData, images: selectedFiles });

      // preview URLs
      const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviews(previewUrls);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formObj = new FormData();
      formObj.append("name", formData.name);
      formObj.append("slug", formData.slug);
      formObj.append("description", formData.description);
      formObj.append("price", formData.price);
      formObj.append("country", formData.country);
      formObj.append("state", formData.state);
      formObj.append("city", formData.city);

      // append multiple images
      formData.images.forEach((file) => {
        formObj.append("images", file);
      });

      const res = await createProduct(formObj);
      alert("✅ Product created successfully!");

      // reset
      setFormData({
        name: "",
        slug: "",
        description: "",
        price: "",
        images: [],
        country: "",
        state: "",
        city: "",
      });
      setPreviews([]);
    } catch (error) {
      alert(error.message || "❌ Failed to create product");
    }
  };

  return (
    <div className="max-w-3xl mt-30 mx-auto p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-orange-500 mb-6 text-center">
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />

        {/* Slug */}
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          autoComplete="off"
          value={formData.slug}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Product Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        />

        {/* Country */}
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        {/* State */}
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
          disabled={!formData.country}
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>

        {/* City */}
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
          required
          disabled={!formData.state}
        >
          <option value="">Select City</option>
          {cities.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        {/* Images Upload */}
        <input
          type="file"
          name="images"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />

        {/* Preview */}
        {previews.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-3">
            {previews.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Preview ${idx}`}
                className="w-32 h-24 object-cover rounded-lg border"
              />
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold py-3 rounded-xl hover:scale-95"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default CreateProductPage;
