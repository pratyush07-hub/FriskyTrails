import PropTypes from "prop-types";

const Blogleft = ({ blog }) => {
  if (!blog || !blog.blocks) return null;

  return (
    <div className="pt-6 pb-10 h-auto w-full">
      {/* Intro Section */}
      {blog.intro && (
        <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none w-[90%] mx-auto mb-6">
          <div dangerouslySetInnerHTML={{ __html: blog.intro }} />
        </div>
      )}

      {/* Sorted Blocks */}
      {blog.blocks
        .sort((a, b) => a.order - b.order)
        .map((block, index) => (
          <div key={index} className="w-[90%] mx-auto mb-8 bg-orange-200 p-4 rounded-lg">
            {/* Heading */}
            {block.heading && (
              <div className="flex items-start mb-2">
  <span className="font-bold mr-2">{block.order}.</span>
  <div
    className="blog-heading flex-1"
    dangerouslySetInnerHTML={{ __html: block.heading }}
  />
</div>


            )}

            {/* Content */}
            {block.content && (
              <div
                className="blog-content prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            )}

            {/* Block Image */}
            {block.image && (
              <div className="flex justify-center mt-4">
                <img
                  src={block.image}
                  alt={`Block ${block.order} Image`}
                  className="rounded-lg max-w-full"
                />
              </div>
            )}
          </div>
        ))}

      {/* Conclusion */}
      {blog.conclusion && (
        <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none w-[90%] mx-auto mt-6">
          <div dangerouslySetInnerHTML={{ __html: blog.conclusion }} />
        </div>
      )}
    </div>
  );
};

Blogleft.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    intro: PropTypes.string,
    conclusion: PropTypes.string,
    authorName: PropTypes.string,
    country: PropTypes.object,
    state: PropTypes.object,
    city: PropTypes.object,
    blocks: PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number.isRequired,
        heading: PropTypes.string,
        content: PropTypes.string,
        image: PropTypes.string,
      })
    ).isRequired,
  }),
};

export default Blogleft;