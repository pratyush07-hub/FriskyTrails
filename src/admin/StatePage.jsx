import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStateWithBlogs } from "../api/admin.api";

const StatePage = () => {
  const { slug } = useParams(); // e.g. "kerala"
  const [stateData, setStateData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchState = async () => {
    try {
      const res = await getStateWithBlogs(slug);
      setStateData(res.data); // ✅ matches backend response
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchState();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!stateData) return <p className="text-center py-10">State not found</p>;

  const { state, blogs } = stateData;

  return (
    <div className="max-w-6xl mt-30 mx-auto p-6">
      {/* State Info */}
      <div className="text-center mb-10">
        {state.image && (
          <img
            src={state.image}
            alt={state.name}
            className="mx-auto w-64 h-40 object-cover rounded-xl shadow-md"
          />
        )}
        <h1 className="text-4xl font-bold mt-4 text-orange-500">{state.name}</h1>
      </div>

      {/* Blogs */}
      <div>
        <h2 className="text-2xl font-bold mb-6">
          Travel Blogs from {state.name}
        </h2>
        {blogs.length === 0 ? (
          <p className="text-gray-500">No blogs added yet.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-32 object-cover rounded-lg mb-3"
                  />
                )}
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  by {blog.authorName} •{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-700">
                  {blog.country?.name}, {blog.city?.name}
                </p>
                <a
                  href={`/blog/${blog.slug}`}
                  className="text-orange-500 font-semibold mt-2 inline-block"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatePage;
