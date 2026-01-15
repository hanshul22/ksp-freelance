const DirectorMessageSection = () => {
  return (
    <section className="relative w-full px-6 py-20 overflow-hidden" >
      {/* Subtle wave shapes at bottom */}
  

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Main Card */}
        <article 
          className="p-8 shadow-lg rounded-2xl md:p-12"
          style={{
            background: 'linear-gradient(135deg, #f8fcff 0%, #f0f7ff 100%)',
            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Header Row */}
          <header className="flex flex-col items-start gap-5 mb-8 sm:flex-row sm:items-center">
            {/* Avatar Circle */}
            <div 
              className="flex-shrink-0 w-16 h-16 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
              }}
            />
            
            {/* Title and Subtitle */}
            <div>
              <h2 className="text-xl font-bold md:text-2xl text-slate-900">
                Managing Director&apos;s Message
              </h2>
              <p className="mt-1 text-sm font-semibold text-blue-600 md:text-base">
                Vision for Sustainable Future
              </p>
            </div>
          </header>

          {/* Message Body with Left Accent */}
          <div className="border-l-[3px] border-blue-500 pl-6 space-y-5">
            {/* Quote */}
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed italic">
              &quot;Water is not just a resource; it is the foundation of life and progress. At KSP Hydro Engineers, we have dedicated ourselves to ensuring that every drop counts. Our commitment goes beyond engineering solutions &ndash; we are building a sustainable future where clean water is accessible to all.&quot;
            </p>

            {/* Paragraph 1 */}
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
              Over the past two decades, we have witnessed the growing importance of water conservation and wastewater management. Our team of dedicated engineers and technical experts work tirelessly to deliver innovative, efficient, and environmentally responsible solutions.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
              As we look ahead, our vision remains clear: to be the most trusted partner in water infrastructure, driving sustainability, innovation, and excellence in every project we undertake. Together with our clients, partners, and team, we are creating a water-secure future for generations to come.
            </p>
          </div>

          {/* Divider */}
          <div className="pt-6 mt-8 border-t border-slate-200">
            {/* Signature Block */}
            <p className="font-bold text-slate-900">Mr. Kumar S. Patel</p>
            <p className="mt-1 text-sm text-slate-500">
              Managing Director, KSP Hydro Engineers Pvt. Ltd.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default DirectorMessageSection;
