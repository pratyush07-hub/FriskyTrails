import PropTypes from "prop-types";
import Call from "../assets/calling.svg";

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
    <div className="pt-6 w-full">
      {/* Sections */}
      {product.productHighlights && renderSection("Highlights", product.productHighlights)}
      {product.productOverview && renderSection("Overview", product.productOverview)}
      {product.thingsToCarry && renderSection("Things to Carry", product.thingsToCarry)}
      <div className="md:hidden bg-white border border-orange-500 rounded-lg shadow-md p-4 mb-4 md:mb-0 md:mt-10 sm:p-5">
                    <h1 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-semibold">
                      Got a Question?
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg mt-2">
                      Our destination expert will be happy to help you resolve your queries for this tour.
                    </p>
                    <div className="flex gap-3 sm:gap-4 items-center w-full mt-4">
                      <div className="flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 h-9 w-9 sm:h-10 sm:w-10 rounded-full">
                        <img className="h-4 w-4 sm:h-5 sm:w-5 invert" src={Call} alt="call" />
                      </div>
                      <div>
                        <a
                          className="text-base sm:text-lg md:text-xl font-semibold block"
                          href="tel:+91-9876543210"
                        >
                          +91-9876543210
                        </a>
                        <h3 className="text-xs sm:text-sm">Mon-Sun: 9AM-8PM</h3>
                        <h3 className="text-xs sm:text-sm break-all">
                          support@friskytrails.com
                        </h3>
                      </div>
                    </div>
                  </div>
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
