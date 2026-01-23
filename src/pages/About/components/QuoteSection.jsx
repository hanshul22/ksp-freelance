const QuoteSection = () => {
  return (
    <section className="w-full bg-white px-4 py-16 md:px-8 md:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Quote Container with Left Accent */}
        <div className="flex items-start gap-6 md:gap-8">
          {/* Left Accent Line */}
          <div 
            className="w-1 flex-shrink-0 bg-blue-600 self-stretch"
            aria-hidden="true"
          />
          
          {/* Text Content Block */}
          <div className="flex-1">
            {/* Quote Text */}
            <blockquote className="text-2xl font-bold leading-relaxed text-slate-900 md:text-3xl lg:text-4xl">
              "A large, heavily bolded quote for emphasis and breaking up content."
            </blockquote>
            
            {/* Author Attribution */}
            <p className="mt-6 text-base md:text-lg">
              <span className="font-bold text-slate-900">Mr. Kumar S. Patel,</span>
              <span className="font-normal text-slate-500"> Managing Director, KSP Hydro Engineers Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
