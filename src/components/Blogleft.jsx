const Blogleft = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="pt-6 pb-10">
      {blog.intro && (
        <div className="flex justify-center items-center">
          <p className="w-[90%] mx-auto pt-0 md:pt-10 leading-relaxed">
            {blog.intro}
          </p>
        </div>
      )}

      {blog.content && (
        <div
          className="prose prose-lg max-w-none w-[90%] mx-auto mt-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      )}

      {blog.location && (
        <h3 className="pt-6 text-center">
          <b>Location:</b>{" "}
          {typeof blog.location === "string"
            ? blog.location
            : blog.location?.name || "N/A"}
        </h3>
      )}

      {blog.timings && (
        <h3 className="pt-2 text-center">
          <b>Timings:</b> {blog.timings}
        </h3>
      )}

      {blog.highlights && (
        <h3 className="pt-2 text-center">
          <b>Highlights:</b>{" "}
          {Array.isArray(blog.highlights)
            ? blog.highlights.join(", ")
            : blog.highlights}
        </h3>
      )}
    </div>
  );
};

export default Blogleft;
