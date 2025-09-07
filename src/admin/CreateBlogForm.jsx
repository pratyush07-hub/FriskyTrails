import { useState, useEffect, useRef } from "react";
import { createBlog, getCountries, getStates, getCities } from "../api/admin.api";
import JoditEditor from 'jodit-react';

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
  const editor = useRef(null);
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
        setFormData(prev => ({ ...prev, state: "", city: "" }));
        setCities([]);
      } catch (err) {
        console.error("Failed to fetch states", err);
      }
    };
    fetchStates();
  }, [formData.country]);

  // Fetch cities when state changes
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

    // Auto-generate slug from title
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
      console.log(res.data);

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
      console.error(err);
      setMessage("Failed to create blog");
    }
  };

  return (
    <div className="p-4 max-w-xl mt-30 mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New Blog</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-4">

        {/* Title */}
        <input type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required className="p-2 border rounded" />

        {/* Slug */}
        <input type="text" name="slug" placeholder="Slug" value={formData.slug} disabled className="p-2 border rounded bg-gray-100 cursor-not-allowed" />

        {/* Intro */}
        <textarea name="intro" placeholder="Short Intro" value={formData.intro} onChange={handleChange} required className="p-2 border rounded min-h-[80px]" />

        {/* Content */}
        {/* Content */}
<JoditEditor
  ref={editor}
  value={formData.content}
  config={{
    readonly: false,
    height: 300,
      pastePlain: false,    // Important: allows formatted content to be pasted
    cleanHTML: false,
  }}
  onBlur={newContent => setFormData(prev => ({ ...prev, content: newContent }))}
/>


        {/* Author Name */}
        <input type="text" name="authorName" placeholder="Author Name" value={formData.authorName} onChange={handleChange} required className="p-2 border rounded" />

        {/* Country */}
        <select name="country" value={formData.country} onChange={handleChange} required className="p-2 border rounded">
          <option value="">Select Country</option>
          {countries.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>

        {/* State */}
        <select name="state" value={formData.state} onChange={handleChange} required className="p-2 border rounded" disabled={!states.length}>
          <option value="">Select State</option>
          {states.map(s => <option key={s._id} value={s._id}>{s.name}</option>)}
        </select>

        {/* City */}
        <select name="city" value={formData.city} onChange={handleChange} required className="p-2 border rounded" disabled={!cities.length}>
          <option value="">Select City</option>
          {cities.map(c => <option key={c._id} value={c._id}>{c.name}</option>)}
        </select>

        {/* Image Upload */}
        <input key={imageFile ? imageFile.name : "file"} type="file" name="image" accept="image/*" onChange={handleImageChange} className="p-2 border rounded" />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Create Blog</button>
      </form>

      {message && <p className={`mt-4 text-center font-medium ${message.includes("Failed") ? "text-red-600" : "text-green-600"}`}>{message}</p>}
    </div>
  );
};

export default CreateBlogForm;
