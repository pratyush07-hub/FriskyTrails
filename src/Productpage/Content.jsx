const Content = ({ product }) => {
  // Handle FAQ data - it might be HTML or JSON
  let faqData = [];
  let isFaqJson = false;
  
  if (product?.faq && typeof product.faq === 'string') {
    try {
      // Check if it looks like JSON (starts with [ or {)
      if (product.faq.trim().startsWith('[') || product.faq.trim().startsWith('{')) {
        const parsed = JSON.parse(product.faq);
        if (Array.isArray(parsed)) {
          faqData = parsed;
          isFaqJson = true;
        }
      }
    } catch (error) {
      // If it's not JSON, treat it as HTML content
      faqData = null;
      isFaqJson = false;
    }
  }

  return (
    <div className="w-full max-h-[90vh] overflow-y-auto custom-scrollbar p-2 sm:p-4 rounded-lg shadow-md">
      {/* Product Highlights */}
      {product?.productHighlights && (
        <>
          <h3 className="text-lg sm:text-xl md:text-2xl">
            {product.name}​{" "}
            <span className="text-orange-500 font-semibold">Highlights</span>
          </h3>
          <div 
            className="pt-2 text-gray-700 space-y-2"
            dangerouslySetInnerHTML={{ __html: product.productHighlights }}
          />
        </>
      )}

      {/* Product Overview */}
      {product?.productOverview && (
        <>
          <h3 className="text-lg sm:text-xl md:text-2xl pt-6 sm:pt-8 md:pt-10">
            {product.name}​{" "}
            <span className="text-orange-500 font-semibold">Overview</span>
          </h3>
          <div 
            className="pt-2 text-gray-700 space-y-2"
            dangerouslySetInnerHTML={{ __html: product.productOverview }}
          />
        </>
      )}

      {/* Things to Carry */}
      {product?.thingsToCarry && (
        <>
          <h3 className="text-lg sm:text-xl md:text-2xl pt-6 sm:pt-8 md:pt-10">
            {product.name}​{" "}
            <span className="text-orange-500 font-semibold">Things to Carry</span>
          </h3>
          <div 
            className="pt-2 text-gray-700 space-y-2"
            dangerouslySetInnerHTML={{ __html: product.thingsToCarry }}
          />
        </>
      )}

      {/* Additional Info */}
      {product?.additionalInfo && (
        <>
          <h3 className="text-lg sm:text-xl md:text-2xl pt-6 sm:pt-8 md:pt-10">
            {product.name}​{" "}
            <span className="text-orange-500 font-semibold">Additional Info</span>
          </h3>
          <div 
            className="pt-2 text-gray-700 space-y-2"
            dangerouslySetInnerHTML={{ __html: product.additionalInfo }}
          />
        </>
      )}

      {/* FAQ Section */}
      {product?.faq && (
        <>
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold pt-6 sm:pt-8 md:pt-10">{product.name} FAQs</h1>
          {isFaqJson && faqData && faqData.length > 0 ? (
            // Render as JSON Q&A format
            faqData.map((item, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-6 mt-4">
                <div className="h-8 w-8 sm:h-10 sm:w-10 aspect-square text-white rounded-full flex justify-center items-center bg-gradient-to-r from-[rgb(255,99,33)] text-sm sm:text-xl to-amber-400 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h1 className="text-base sm:text-lg md:text-xl font-semibold">{item.question}</h1>
                  <h1 className="text-xs sm:text-sm">{item.answer}</h1>
                </div>
              </div>
            ))
          ) : (
            // Render as HTML content
            <div 
              className="mt-4 prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: product.faq }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Content;
