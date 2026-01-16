const HowWeWorkSection = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-8">
            How KSP Hydro Works With Clients
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            At KSP Hydro Engineers, we believe in building long-term partnerships with our clients. Our comprehensive service approach ensures that from the initial consultation to ongoing maintenance, every aspect of your water treatment system is handled with expertise and care.
          </p>
        </div>
      </div>
      
      {/* Bottom wave shape */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#e8f4f8"
          />
        </svg>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
