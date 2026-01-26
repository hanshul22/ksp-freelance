const HeroSection = () => {
  return (
    <section 
      className="w-full min-h-[75vh] lg:min-h-[85vh] flex items-center justify-center"
      
    >
      <div className="container px-4 mx-auto text-center">
        <h1 className="mb-6 text-4xl font-bold text-black md:text-5xl lg:text-6xl">
          Our Services
        </h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-black md:text-xl">
          End-to-end water infrastructure solutions from design to ongoing support
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
