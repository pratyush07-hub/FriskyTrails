import PropTypes from "prop-types";

const Content = ({ product }) => {
  if (!product) return null;

  // Handle FAQ data - it might be JSON or HTML
  let faqData = [];
  let isFaqJson = false;

  if (product.faq && typeof product.faq === "string") {
    try {
      if (product.faq.trim().startsWith("[") || product.faq.trim().startsWith("{")) {
        const parsed = JSON.parse(product.faq);
        if (Array.isArray(parsed)) {
          faqData = parsed;
          isFaqJson = true;
        }
      }
    } catch (err) {
      // treat as HTML
      faqData = null;
      isFaqJson = false;
    }
  }

  return (
    <div className="pt-6 pb-10 w-full">
      {/* Product Highlights */}
      {product.productHighlights && (
        <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none w-[90%] mx-auto mb-6">
          <div dangerouslySetInnerHTML={{ __html: product.productHighlights }} />
        </div>
      )}

      {/* Product Overview */}
      {product.productOverview && (
        <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none w-[90%] mx-auto mb-6">
          <div dangerouslySetInnerHTML={{ __html: product.productOverview }} />
        </div>
      )}

      {/* Things to Carry */}
      {product.thingsToCarry && (
        <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none w-[90%] mx-auto mb-6">
          <div dangerouslySetInnerHTML={{ __html: product.thingsToCarry }} />
        </div>
      )}

      {/* Additional Info */}
      {product.additionalInfo && (
        <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none w-[90%] mx-auto mb-6">
          <div dangerouslySetInnerHTML={{ __html: product.additionalInfo }} />
        </div>
      )}

      {/* FAQ Section */}
      {product.faq && (
        <>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold pt-6 sm:pt-8 md:pt-10 w-[90%] mx-auto">
            {product.name} FAQs
          </h2>

          {isFaqJson && faqData && faqData.length > 0 ? (
            faqData.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-6 mt-4 w-[90%] mx-auto bg-orange-200 p-4 rounded-lg"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 aspect-square text-white rounded-full flex justify-center items-center bg-gradient-to-r from-[rgb(255,99,33)] text-sm sm:text-xl to-amber-400 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl">{item.question}</h3>
                  <p className="text-sm sm:text-base">{item.answer}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none w-[90%] mx-auto mt-4">
              <div dangerouslySetInnerHTML={{ __html: product.faq }} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

Content.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    productHighlights: PropTypes.string,
    productOverview: PropTypes.string,
    thingsToCarry: PropTypes.string,
    additionalInfo: PropTypes.string,
    faq: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(
        PropTypes.shape({
          question: PropTypes.string,
          answer: PropTypes.string,
        })
      ),
    ]),
  }).isRequired,
};

export default Content;
