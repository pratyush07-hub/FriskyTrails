import { useState, useEffect } from "react";
import { createBlog, getLocations } from "../api/admin.api";

const CreateBlogForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    intro: "",
    content: "",
    authorName: "",
    location: "",
    highlights: "",
    timings: "",
  });

  const [locations, setLocations] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  // Fetch locations on mount
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await getLocations();
        setLocations(res.data);
      } catch (err) {
        console.error("Failed to fetch locations", err);
      }
    };
    fetchLocations();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Auto-generate slug from title
    if (name === "title") {
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
    data.append("title", formData.title);
    data.append("slug", formData.slug);
    data.append("intro", formData.intro);
    data.append("content", formData.content);
    data.append("authorName", formData.authorName);
    data.append("location", formData.location);
    data.append("highlights", formData.highlights);
    data.append("timings", formData.timings);
    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      const res = await createBlog(data);
      setMessage(res.message || "✅ Blog created successfully!");
      console.log(res.data);

      // Reset form
      setFormData({
        title: "",
        slug: "",
        intro: "",
        content: "",
        authorName: "",
        location: "",
        highlights: "",
        timings: "",
      });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create blog");
    }
  };

  return (
    <div className="p-4 max-w-xl mt-30 mx-auto">
      <h2 className="text-xl font-bold mb-4">Create New Blog</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        {/* Slug */}
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          disabled
          className="p-2 border rounded bg-gray-100 cursor-not-allowed"
        />

        {/* Intro */}
        <textarea
          name="intro"
          placeholder="Short Intro"
          value={formData.intro}
          onChange={handleChange}
          required
          className="p-2 border rounded min-h-[80px]"
        />

        {/* Content */}
        <textarea
          name="content"
          placeholder="Enter full blog content"
          value={formData.content}
          onChange={handleChange}
          required
          className="p-2 border rounded min-h-[200px] w-full"
        />

        {/* Author Name */}
        <input
          type="text"
          name="authorName"
          placeholder="Author Name"
          value={formData.authorName}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        {/* Location Dropdown */}
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        >
          <option value="">Select Location</option>
          {locations.map((loc) => (
            <option key={loc._id} value={loc._id}>
              {loc.name}
            </option>
          ))}
        </select>

        {/* Highlights */}
        <textarea
          name="highlights"
          placeholder="Highlights (comma separated)"
          value={formData.highlights}
          onChange={handleChange}
          className="p-2 border rounded min-h-[60px]"
        />

        {/* Timings */}
        <input
          type="text"
          name="timings"
          placeholder="Timings (e.g., 9 AM - 6 PM)"
          value={formData.timings}
          onChange={handleChange}
          className="p-2 border rounded"
        />

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
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Create Blog
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

export default CreateBlogForm;
