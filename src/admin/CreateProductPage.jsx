import { useEffect, useState } from "react";
import { createProduct, getCountries, getStates, getCities } from "../api/admin.api";

const CreateProductPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",   // ✅ Added slug
    description: "",
    price: "",
    image: null,
    country: "",
    state: "",
    city: "",
  });
  const [preview, setPreview] = useState(null);

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  // ✅ Auto-generate slug when name changes
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
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
      setPreview(URL.createObjectURL(files[0]));
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
      formObj.append("slug", formData.slug);   // ✅ Include slug
      formObj.append("description", formData.description);
      formObj.append("price", formData.price);
      formObj.append("country", formData.country);
      formObj.append("state", formData.state);
      formObj.append("city", formData.city);
      if (formData.image) formObj.append("image", formData.image);

      const res = await createProduct(formObj);
      alert("✅ Product created successfully!");
    //   console.log(res);
      setFormData({
      name: "",
      slug: "",
      description: "",
      price: "",
      image: null,
      country: "",
      state: "",
      city: "",
    });

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

        {/* Slug (auto-filled but editable) */}
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

        {/* Image Upload */}
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-3 border rounded-xl"
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-28 object-cover mt-3 rounded-lg"
          />
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
