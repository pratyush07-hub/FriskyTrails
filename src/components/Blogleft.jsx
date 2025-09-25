import PropTypes from "prop-types";

const Blogleft = ({ blog }) => {
  if (!blog || !blog.blocks) return null;
  console.log(blog);

  return (
    <div className="pt-6 pb-10 overflow-y-auto max-h-[80vh] w-full custom-scrollbar">
      {blog.blocks
  .sort((a, b) => a.order - b.order)
  .map((block, index) => (
    <div key={index} className="w-[90%] mx-auto mb-8">
      {/* Order and Short Intro on same line */}
      {block.intro && (
        <p className="leading-relaxed">
          <strong>{block.order}.</strong>{" "}
          <span
            dangerouslySetInnerHTML={{ __html: block.intro.replace(/^<p>|<\/p>$/g, "") }}
          />
        </p>
      )}

      {/* Content */}
      {block.content && (
        <div
          className="prose prose-lg max-w-none"
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

    </div>
  );
};

// Updated PropTypes
Blogleft.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string,
    authorName: PropTypes.string,
    country: PropTypes.object,
    state: PropTypes.object,
    city: PropTypes.object,
    blocks: PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number.isRequired,
        intro: PropTypes.string,
        content: PropTypes.string,
        image: PropTypes.string,
      })
    ).isRequired,
  }),
};

export default Blogleft;
