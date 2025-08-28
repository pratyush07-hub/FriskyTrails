import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getLocationWithBlogs } from "../api/admin.api";

const LocationPage = () => {
  const { slug } = useParams();
  const [location, setLocation] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await getLocationWithBlogs(slug);

        setLocation(data.data.location);
        setBlogs(data.data.blogs || []);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!location) return <p className="text-center mt-10">Location not found</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Banner */}
      <div className="w-full h-64 overflow-hidden rounded-2xl shadow-lg mb-6">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title + Description */}
      <h1 className="text-4xl font-bold mb-4">{location.name}</h1>
      <p className="text-lg text-gray-600 mb-8">{location.description}</p>

      {/* Blogs */}
      <h2 className="text-2xl font-semibold mb-4">
        Blogs about {location.name}
      </h2>
      {blogs.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.slug}`} key={blog.slug}>
              <div className="rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{blog.title}</h3>
                  <p className="text-sm text-gray-500">
                    By {blog.authorName} •{" "}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationPage;
