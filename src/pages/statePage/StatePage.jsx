import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HeroBanner from "./HeroBanner";
import LoadingSpinner from "./Loading";
import { STATE_BLOGS } from "./StateBlogConfig";

const StatePage = () => {
  const { slug } = useParams();
  const [stateObj, setStateObj] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const key = slug?.toLowerCase();
    const data = STATE_BLOGS[key] || null;
    setStateObj(data);
    setLoading(false);
  }, [slug]);

  if (loading) return <LoadingSpinner />;

  if (!stateObj) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">State not found.</p>
      </div>
    );
  }

  const { stateName, stateImage, blogs } = stateObj;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroBanner
        state={{
          name: stateName,
          coverImage: stateImage,
        }}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Blogs Carousel */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Top Blogs in {stateName}
          </h2>

          {/* Horizontal Carousel - Conditional layout for single vs multiple blogs */}
          {blogs.length === 1 ? (
            <div className="flex justify-center">
              <Link
                to={blogs[0].link}
                className="
                  w-full
                  max-w-md
                  bg-white
                  border border-gray-200
                  rounded-xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-md
                  transition-shadow
                  group
                "
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    className="
                      h-full w-full object-cover
                      group-hover:scale-105
                      transition-transform duration-300
                    "
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-orange-400">
                    {blogs[0].title}
                  </h3>
                </div>
              </Link>
            </div>
          ) : (
            <div
              className="
                flex gap-6
                overflow-x-auto
                scroll-smooth
                snap-x snap-mandatory
                px-1
                pr-6
                scroll-px-6
                pb-4
                [-ms-overflow-style:none]
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {blogs.map((blog, index) => (
                <Link
                  to={blog.link}
                  key={blog.link || index}
                  className="
                    snap-start
                    min-w-[90%]
                    sm:min-w-[48%]
                    md:min-w-[32%]
                    lg:min-w-[25%]
                    xl:min-w-[23%]
                    bg-white
                    border border-gray-200
                    rounded-xl
                    overflow-hidden
                    shadow-sm
                    hover:shadow-md
                    transition-shadow
                    group
                  "
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="
                        h-full w-full object-cover
                        group-hover:scale-105
                        transition-transform duration-300
                      "
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-orange-400">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default StatePage;
