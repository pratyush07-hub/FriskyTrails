import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Right from "../assets/right.svg";
import Share from "../assets/share.svg";
import { getBlogBySlug } from "../api/admin.api";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogBySlug(slug);
        setBlog(res.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [slug]);

  if (!blog) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="min-h-screen w-full">
      <div className="w-[80%] mt-30 m-auto">
        {/* Breadcrumb */}
        <div className="flex items-center pt-6">
          <h3 className="font-semibold">Home</h3>
          <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold">Blogs</h3>
          <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold text-gray-600">{blog.title}</h3>
        </div>

        {/* Title */}
        <h1 className="text-3xl tracking-tighter font-bold pt-4">{blog.title}</h1>

        {/* Author and Location */}
        <div className="flex justify-between">
          <div className="email flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1">
              <h3 className="text-gray-500">
                By {blog.authorName}
              </h3>
            </div>
            <div className="border-1 h-full border-gray-400"></div>
            <div className="number flex justify-center items-center">
              <h3 className="text-gray-500">
                {blog.city?.name}, {blog.state?.name}
              </h3>
            </div>
          </div>
          <button className="py-2 flex items-center gap-2 px-6 font-semibold text-white active:scale-95 transition-all duration-300 bg-[rgb(233,99,33)] rounded-3xl">
            <img className="invert h-5 w-5" src={Share} alt="share" />
            Share
          </button>
        </div>
      </div>

      {/* Blog Image */}
      {blog.image && (
        <div className="h-[60vh] w-full pt-4">
          <div className="h-[50vh] w-[80vw] rounded-lg bg-white m-auto">
            <div className="h-full w-full rounded-2xl shadow-2xl relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-in-out hover:scale-110"
                style={{ backgroundImage: `url('${blog.image}')` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Content */}
      <div className="w-[80%] m-auto py-8">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          {blog.intro && (
            <div className="mb-8">
              <p className="text-xl text-gray-700 leading-relaxed">{blog.intro}</p>
            </div>
          )}

          {/* Main Content */}
          {blog.content && (
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>
          )}

          {/* Author Info */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {blog.authorName?.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{blog.authorName}</h3>
                <p className="text-gray-600">Travel Writer</p>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="mt-8 p-6 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-700">
              {blog.city?.name}, {blog.state?.name}, {blog.country?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
