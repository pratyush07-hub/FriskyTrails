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
      faqData = null;
      isFaqJson = false;
    }
  }

  // Helper to render a section
  const renderSection = (title, htmlContent) => (
    <div className="w-full mx-auto mb-6">
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">{product.name} </span>
      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mb-2">{title}</span>
      <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );

  return (
    <div className="pt-6 pb-10 w-full">
      {/* Sections */}
      {product.productHighlights && renderSection("Highlights", product.productHighlights)}
      {product.productOverview && renderSection("Overview", product.productOverview)}
      {product.thingsToCarry && renderSection("Things to Carry", product.thingsToCarry)}
      {product.additionalInfo && renderSection("Know Before You Book", product.additionalInfo)}

      {/* FAQ Section */}
      {product.faq && (
        <div className="w-full mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
            {product.name} <span className="text-orange-500">FAQ</span>
          </h2>
          {isFaqJson && faqData && faqData.length > 0 ? (
            faqData.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-6 mt-4 bg-orange-200 p-4 rounded-lg"
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
            <div className="blog-content bg-orange-200 p-4 rounded-lg prose prose-lg max-w-none mt-4">
              <div dangerouslySetInnerHTML={{ __html: product.faq }} />
            </div>
          )}
        </div>
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
