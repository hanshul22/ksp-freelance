const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold text-[#0A1628] leading-[1.1] mb-6 tracking-tight">
          Build a Career That Solves Real
          <br className="hidden md:block" />
          Water Challenges
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          At KSP Hydro Engineers, we work on projects that matter, improving water quality, sustainability, and infrastructure across industries and communities.
        </p>
        
        <button className="bg-white text-[#1E88E5] font-semibold px-8 py-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100">
          Apply to Work With Us
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
