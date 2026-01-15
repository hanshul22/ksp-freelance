const DirectorMessageSection = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#F5FAFF' }}>
      {/* Subtle wave shapes at bottom */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 100% at 20% 100%, #d4f1f9 0%, transparent 60%)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-full h-24 opacity-30"
        style={{
          background: 'radial-gradient(ellipse 60% 100% at 80% 100%, #dbeafe 0%, transparent 60%)'
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Main Card */}
        <article 
          className="rounded-2xl p-8 md:p-12 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #f8fcff 0%, #f0f7ff 100%)',
            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Header Row */}
          <header className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
            {/* Avatar Circle */}
            <div 
              className="w-16 h-16 rounded-full flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
              }}
            />
            
            {/* Title and Subtitle */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                Managing Director&apos;s Message
              </h2>
              <p className="text-blue-600 font-semibold text-sm md:text-base mt-1">
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
          <div className="border-t border-slate-200 mt-8 pt-6">
            {/* Signature Block */}
            <p className="text-slate-900 font-bold">Mr. Kumar S. Patel</p>
            <p className="text-slate-500 text-sm mt-1">
              Managing Director, KSP Hydro Engineers Pvt. Ltd.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default DirectorMessageSection;
