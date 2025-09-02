import { useState, useEffect } from "react";
import { createCity, getCountries, getStates } from "../api/admin.api";

const CreateCityForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    country: "",
    state: "",
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch countries on mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountries();
        setCountries(res.data);
      } catch (err) {
        console.error("Failed to fetch countries", err);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states when country changes
  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.country) return;
      try {
        const res = await getStates(formData.country); 
        setStates(res.data);
      } catch (err) {
        console.error("Failed to fetch states", err);
      }
    };
    fetchStates();
  }, [formData.country]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug from city name
    if (name === "name") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("slug", formData.slug);
    data.append("country", formData.country);
    data.append("state", formData.state);
    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      const res = await createCity(data);
      setMessage(res.message || "✅ City created successfully!");
      console.log(res.data);

      // Reset form
      setFormData({
        name: "",
        slug: "",
        country: "",
        state: "",
      });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create city");
    }
  };

  return (
    <div className="p-4 max-w-xl mt-30 mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New City</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        {/* City Name */}
        <input
          type="text"
          name="name"
          placeholder="City Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        {/* Slug (auto-generated) */}
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          disabled
          className="p-2 border rounded bg-gray-100 cursor-not-allowed"
        />

        {/* Country Dropdown */}
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        >
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
        </select>

        {/* State Dropdown */}
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        >
          <option value="">Select State</option>
          {states.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>

        {/* Image Upload */}
        <input
          key={imageFile ? imageFile.name : "file"}
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="p-2 border rounded"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Create City
        </button>
      </form>

      {/* Message */}
      {message && (
        <p
          className={`mt-4 text-center font-medium ${
            message.includes("Failed") ? "text-red-600" : "text-green-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default CreateCityForm;
