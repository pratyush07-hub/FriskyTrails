import { useEffect, useState } from "react";
import EditBlogForm from "./EditBlogForm"; // ✅ Import new form
import { getAllBlogs } from "../api/admin.api";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null); // ✅ Track blog being edited

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await getAllBlogs();

      if (!data.status) throw new Error(data.message || "Failed to fetch blogs");
      setBlogs(data.data || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        Loading blogs...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 font-medium mt-10">
        ⚠️ {error}
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10">
        No blogs found 😕
      </div>
    );
  }

if (selectedBlog) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
      <button
        onClick={() => setSelectedBlog(null)}
        className="mb-4 inline-flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition"
      >
        ⬅ Back to All Blogs
      </button>

      <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
      <EditBlogForm
        blogId={selectedBlog._id} // ✅ pass ID, not full object
        onUpdate={fetchBlogs}
        onClose={() => setSelectedBlog(null)}
      />
    </div>
  );
}

  return (
    <section className="max-w-6xl mx-auto px-2 sm:px-4 py-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">All Blogs</h2>
        <button
          onClick={fetchBlogs}
          className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-md text-sm"
        >
          🔄 Refresh
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition"
          >
            {blog.coverImage && (
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-3">
                {blog.intro}
              </p>

              <div className="text-xs text-gray-400 flex flex-wrap gap-2 mb-3">
                <span>✍️ {blog.authorName}</span>
                {blog.city && <span>📍 {blog.city}</span>}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={`/blog/${blog.slug}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Read more →
                </a>
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="text-sm text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md"
                >
                  ✏️ Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllBlogs;
