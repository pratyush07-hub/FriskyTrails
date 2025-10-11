import { useState } from "react";
import PropTypes from "prop-types";
import Call from "../assets/calling.svg";

const Content = ({ product, thingsToCarry, howToReach }) => {
  if (!product) return null;

  const MAX_WORDS = 50;
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (key) => {
    setExpandedSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Handle FAQ data
  let faqData = [];
  let isFaqJson = false;

  if (product.faq && typeof product.faq === "string") {
    try {
      if (
        product.faq.trim().startsWith("[") ||
        product.faq.trim().startsWith("{")
      ) {
        const parsed = JSON.parse(product.faq);
        if (Array.isArray(parsed)) {
          faqData = parsed;
          isFaqJson = true;
        }
      }
    } catch {
      faqData = null;
      isFaqJson = false;
    }
  }

  // Count words
  const countWords = (text) => {
    if (!text) return 0;
    return text.replace(/<[^>]+>/g, "").trim().split(/\s+/).length;
  };

  // Render sections with Read More
  const renderSection = (key, title, htmlContent, showTitle = true) => {
    const wordCount = countWords(htmlContent);
    const isExpanded = expandedSections[key];
    const shouldTruncate = wordCount > MAX_WORDS;

    const truncated =
      shouldTruncate && !isExpanded
        ? htmlContent.split(" ").slice(0, MAX_WORDS).join(" ") + "..."
        : htmlContent;

    return (
      <div className="w-full mx-auto mb-6">
        {showTitle && (
          <>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
              {product.name}{" "}
            </span>
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mb-2">
              {title}
            </span>
          </>
        )}
        <div className="blog-content bg-white p-4 rounded-lg prose prose-lg mt-1 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: truncated }} />
          {shouldTruncate && (
            <button
              onClick={() => toggleSection(key)}
              className="text-orange-500 font-semibold mt-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="pt-6 w-full">
      {/* 1. Highlights */}
      {product.productHighlights &&
        renderSection("highlights", "Highlights", product.productHighlights)}

      {/* 2. Overview */}
      {product.productOverview &&
        renderSection("overview", "Overview", product.productOverview)}

      {/* 3. Things to Carry */}
      {thingsToCarry && (
        <div className="w-full mx-auto mb-6">
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
            {product.name}{" "}
          </span>
          <span className="text-lg sm:text-xl md:text-2xl font-semibold text-orange-500 mb-2">
            Things to Carry
          </span>
          <div className="blog-content bg-white p-4 rounded-lg prose prose-lg mt-1 max-w-none">
            {Array.isArray(thingsToCarry) ? (
              <ul className="list-disc pl-5">
                {(expandedSections["carry"]
                  ? thingsToCarry
                  : thingsToCarry.slice(0, 10)
                ).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    countWords(thingsToCarry) > MAX_WORDS &&
                    !expandedSections["carry"]
                      ? thingsToCarry.split(" ").slice(0, MAX_WORDS).join(" ") +
                        "..."
                      : thingsToCarry,
                }}
              />
            )}
            {countWords(
              Array.isArray(thingsToCarry)
                ? thingsToCarry.join(" ")
                : thingsToCarry
            ) > MAX_WORDS && (
              <button
                onClick={() => toggleSection("carry")}
                className="text-orange-500 font-semibold mt-2"
              >
                {expandedSections["carry"] ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* 4. Got a Question - Contact Card */}
      <div className="md:hidden bg-white border border-orange-500 rounded-lg shadow-md p-4 mb-4 md:mb-0 md:mt-10 sm:p-5">
        <h1 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-semibold">
          Got a Question?
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2">
          Our destination expert will be happy to help you resolve your queries
          for this tour.
        </p>
        <div className="flex gap-3 sm:gap-4 items-center w-full mt-4">
          <div className="flex items-center justify-center bg-gradient-to-r from-[rgb(255,99,33)] to-amber-400 h-9 w-9 sm:h-10 sm:w-10 rounded-full">
            <img
              className="h-4 w-4 sm:h-5 sm:w-5 invert"
              src={Call}
              alt="call"
            />
          </div>
          <div>
            <a
              className="text-base sm:text-lg md:text-xl font-semibold block"
              href="tel:+91-7501516714"
            >
              +91-75015 16714
            </a>
            <h3 className="text-xs sm:text-sm">Mon-Sun: 9AM-8PM</h3>
            <h3 className="text-xs sm:text-sm break-all">
              <a href="mailto:contact@friskytrails.in" className="text-black md:hidden lg:block">
              contact@friskytrails.in
            </a>
            </h3>
          </div>
        </div>
      </div>

      {/* 5. Know Before You Book */}
      {product.additionalInfo &&
        renderSection(
          "additionalInfo",
          "Know Before You Book",
          product.additionalInfo
        )}

      {/* 6. How to Reach */}
      {howToReach &&
        howToReach.trim() !== "" &&
        renderSection("howToReach", "How to Reach", howToReach)}

      {/* 7. FAQ */}
      {product.faq && (
        <div className="w-full mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black mb-2">
            {product.name} <span className="text-orange-500">FAQ</span>
          </h2>
          {isFaqJson && faqData && faqData.length > 0 ? (
            faqData.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-6 mt-4 bg-white p-4 rounded-lg"
              >
                <div className="h-8 w-8 sm:h-10 sm:w-10 aspect-square text-white rounded-full flex justify-center items-center bg-gradient-to-r from-[rgb(255,99,33)] text-sm sm:text-xl to-amber-400 flex-shrink-0">
                  {index + 1}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                    {item.question}
                  </h3>
                  <p className="text-sm sm:text-base">
                    {countWords(item.answer) > MAX_WORDS &&
                    !expandedSections[`faq-${index}`]
                      ? item.answer
                          .split(" ")
                          .slice(0, MAX_WORDS)
                          .join(" ") + "..."
                      : item.answer}
                  </p>
                  {countWords(item.answer) > MAX_WORDS && (
                    <button
                      onClick={() => toggleSection(`faq-${index}`)}
                      className="text-orange-500 font-semibold mt-2"
                    >
                      {expandedSections[`faq-${index}`]
                        ? "Read Less"
                        : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            // FIX: Do NOT render duplicate title here
            renderSection("faqHtml", "", product.faq, false)
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
  thingsToCarry: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  howToReach: PropTypes.string,
};

export default Content;
