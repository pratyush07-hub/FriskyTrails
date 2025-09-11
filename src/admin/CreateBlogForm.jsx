import { useState, useEffect } from "react";
import { createBlog, getCountries, getStates, getCities } from "../api/admin.api";
import Editor from "../components/Editor";

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    intro: "",
    content: "",
    authorName: "",
    country: "",
    state: "",
    city: "",
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

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

  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.country) return;
      try {
        const res = await getStates(formData.country);
        setStates(res.data);
        setFormData(prev => ({ ...prev, state: "", city: "" }));
        setCities([]);
      } catch (err) {
        console.error("Failed to fetch states", err);
      }
    };
    fetchStates();
  }, [formData.country]);

  useEffect(() => {
    const fetchCities = async () => {
      if (!formData.state) return;
      try {
        const res = await getCities(formData.state);
        setCities(res.data);
        setFormData(prev => ({ ...prev, city: "" }));
      } catch (err) {
        console.error("Failed to fetch cities", err);
      }
    };
    fetchCities();
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "title") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setFormData(prev => ({ ...prev, slug: generatedSlug }));
    }
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }
    if (imageFile) data.append("image", imageFile);

    try {
      const res = await createBlog(data);
      setMessage(res.message || "✅ Blog created successfully!");

      setFormData({
        title: "",
        slug: "",
        intro: "",
        content: "",
        authorName: "",
        country: "",
        state: "",
        city: "",
      });
      setImageFile(null);
      setStates([]);
      setCities([]);
    } catch (err) {
      console.error("Error creating blog:", err);
      setMessage("Failed to create blog");
    }
  };

  return (
    <div className="p-4 w-[70%] mt-30 mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New Blog</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          disabled
          className="p-2 border rounded bg-gray-100 cursor-not-allowed"
        />

        <textarea
          name="intro"
          placeholder="Short Intro"
          value={formData.intro}
          onChange={handleChange}
          required
          className="p-2 border rounded min-h-[80px]"
        />

        {/* Custom Editor */}
        <Editor content={formData.content} onChange={(content) => setFormData(prev => ({ ...prev, content }))} />

        <input
          type="text"
          name="authorName"
          placeholder="Author Name"
          value={formData.authorName}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        >
          <option value="">Select Country</option>
          {countries.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>

        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          required
          className="p-2 border rounded"
          disabled={!states.length}
        >
          <option value="">Select State</option>
          {states.map(s => (
            <option key={s._id} value={s._id}>{s.name}</option>
          ))}
        </select>

        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
          className="p-2 border rounded"
          disabled={!cities.length}
        >
          <option value="">Select City</option>
          {cities.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
          ))}
        </select>

        <input
          key={imageFile ? imageFile.name : "file"}
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="p-2 border rounded"
        />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Create Blog
        </button>
      </form>

      {message && (
        <p className={`mt-4 text-center font-medium ${message.includes("Failed") ? "text-red-600" : "text-green-600"}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default CreateBlogForm;
