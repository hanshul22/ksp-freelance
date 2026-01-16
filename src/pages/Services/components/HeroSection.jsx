const HeroSection = () => {
  return (
    <section 
      className="w-full min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center"
      style={{
        background: 'linear-gradient(to right, #0066cc, #00a3a3, #0052cc)'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Our Services
        </h1>
        <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
          End-to-end water infrastructure solutions from design to ongoing support
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
