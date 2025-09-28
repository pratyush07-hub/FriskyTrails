import { useEffect, useState } from "react";
import Right from "../assets/right.svg";
import Facebook from "../assets/facebook.svg";
import Twitter from "../assets/twitter.svg";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instagram.svg";
import Blogleft from "../components/Blogleft";
import Blogright from "../components/Blogright";
import { getSingleBlog } from "../api/blog.api";
import { useParams } from "react-router-dom";

const Newlog = () => {

    const { slug } = useParams();
  const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

 useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getSingleBlog(slug);
        setBlog(res.data);
      } catch (err) {
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);
  
  if (loading) return <p className="text-center mt-10">Loading blog...</p>;
if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
if (!blog) return null;

  return (
    <div className="min-h-screen mt-30 w-full">
      <div
        className="w-full min-h-[460px] bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/images/bgbanner.svg')",
        }}
      >
        <div className="flex items-center gap-2 px-4 xl:pl-20 pt-6 text-sm sm:text-base">
          <h3 className="font-semibold">{blog.country.name}</h3>
          <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold">{blog.state.name}</h3>
          <img className="h-4 w-4 mt-1" src={Right} alt="rightarrow" />
          <h3 className="font-semibold text-gray-600">{blog.city.name}</h3>
        </div>

        <h1 className="text-2xl sm:text-3xl xl:pl-20 md:text-4xl font-semibold tracking-tighter px-4 pt-8 md:pt-4">
          {blog.title}
        </h1>

        <img
          className="mx-auto rounded-2xl mt-6 w-[90vw] h-[40vh] max-w-5xl"
          src={blog.coverImage}
          alt="image"
        />
        {/* Blog Section */}
        <div className="w-full flex flex-col lg:flex-row pt-10 gap-6">
          {/* Left sidebar */}

          <div className="lg:w-[15%] hidden xl:flex flex-col pl-6 items-center sticky top-0">
            <div className="flex gap-4 pt-6">
              <a href="https://www.facebook.com/friskytrails/" target="_blank">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src={Facebook}
                  alt=""
                  />
              </a>
              <a href="https://x.com/frisky_trails" target="_blank">
                <img className="w-8 h-8 sm:w-10 sm:h-10" src={Twitter} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/friskytrails/"
                target="_blank"
                >
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src={Linkedin}
                  alt=""
                  />
              </a>
              <a href="https://www.instagram.com/friskytrails/" target="_blank">
                <img
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  src={Instagram}
                  alt=""
                  />
              </a>

          </div>
            <div className="hidden xl:block w-[100%] h-[200px] sm:h-[300px] lg:h-[78vh] mt-4 bg-[url('/blogimages/blogbanner.png')] bg-cover bg-center rounded-lg shadow-lg" />
                  </div>

          {/* Middle content */}
          <div className="lg:w-[55%] w-full px-0 lg:pl-10 overflow-y-visible lg:overflow-y-auto custom-scrollbar lg:max-h-[calc(100vh-100px)]">
            <Blogleft blog={blog} />
          </div>

          {/* Right sidebar */}
          <div className="hidden lg:block lg:w-[30%] w-full sticky top-0">
            <Blogright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newlog;
