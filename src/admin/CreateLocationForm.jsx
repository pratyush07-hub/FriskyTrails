import { useState } from "react";
import { createLocation } from "../api/admin.api";


const CreateLocationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  // Handle text input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Auto-generate slug when typing name
    if (name === "name") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setFormData((prev) => ({ ...prev, slug: generatedSlug }));
    }
  };

  // Handle image input
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("slug", formData.slug);
    data.append("description", formData.description);
    if (imageFile) {
      data.append("image", imageFile);
    }

    try {
      const res = await createLocation(data);
      setMessage(res.message || "Location created successfully!");
      console.log(res.location);

      // Reset form
      setFormData({ name: "", slug: "", description: "" });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      setMessage("Failed to create location");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto mt-30 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create New Location</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Location Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
          required
          className="p-2 border rounded bg-gray-100"
          readOnly
        />
        <textarea
          name="description"
          placeholder="Short Description"
          value={formData.description}
          onChange={handleChange}
          rows="3"
          className="p-2 border rounded"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Create Location
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default CreateLocationForm;
