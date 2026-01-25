import { useState } from 'react';

const QuoteSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const paragraph3Full = `"Necessity is the mother of Invention. Providing business excellence & delivering best of products to our renowned customers has been a part of our epic journey. We believe in a healthy environmental balance, which has resulted in building a strong team of youth to cultivate the new age thinking. We strongly believe that the future of our group depends on the way KSP, Its Team including all teammates esteemed customers & support partners including vendors jointly care for serenity of environment."`;

  const paragraph3Truncated = `"Necessity is the mother of Invention. Providing business excellence & delivering best of products to our renowned customers has been a part of our epic journey.`;

  return (
    <section className="w-full px-4 py-16 bg-white md:px-8 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Content Container with Left Accent */}
        <div className="flex items-stretch gap-6 md:gap-8">
          {/* Left Accent Line */}
          <div
            className="flex-shrink-0 w-1 bg-blue-600"
            aria-hidden="true"
          />
          
          {/* Text Content Block */}
          <div className="flex flex-col flex-1 gap-6">
            {/* Paragraph 1 */}
            <p className="text-base leading-relaxed text-slate-700 md:text-lg">
              "From humble beginnings in 2003, KSP Hydro Engineers Pvt. Ltd. has been on an epic journey towards business excellence and its promise to deliver the very best to its customers. KSP's logo depicts its vision to become a one-stop solution shop for its customers within the bouquet of water & wastewater management.
            </p>
            
            {/* Paragraph 2 */}
            <p className="text-base leading-relaxed text-slate-700 md:text-lg">
              'Pavati' meaning Clear Water 'Beyond Imagination' is our motive for everyone on this earth. Let us all join hands to create a better earth for generations to come.
            </p>
            
            {/* Paragraph 3 with Read More */}
            <p className="text-base leading-relaxed text-slate-700 md:text-lg">
              {isExpanded ? paragraph3Full : paragraph3Truncated}
              {' '}
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline font-medium text-blue-600 hover:text-blue-700"
              >
                {isExpanded ? 'Read less' : 'Read more'}
              </button>
            </p>
            
            {/* Author Attribution */}
            <p className="mt-2 text-base md:text-lg">
              <span className="font-bold text-slate-900">Mr. Puneet Modani,</span>
              <span className="font-normal text-slate-500"> Managing Director, KSP Hydro Engineers Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
