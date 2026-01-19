const HeroSection = () => {
  return (
    <section className="relative bg-[#EBF7FA] pt-32 pb-20 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left curve */}
        <svg
          className="absolute top-0 left-0 w-64 h-64 opacity-50"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 100C-50 44.7715 -5.22847 0 50 0H200V200H50C-5.22847 200 -50 155.228 -50 100Z"
            fill="#D5EEF5"
          />
        </svg>

        {/* Bottom right curve */}
        <svg
          className="absolute bottom-0 right-0 w-80 h-40"
          viewBox="0 0 320 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M320 160H0C0 71.6344 71.6344 0 160 0C248.366 0 320 71.6344 320 160Z"
            fill="#D5EEF5"
            fillOpacity="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
          Contact Us
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
          Get in touch with our team - we're here to help with all your water treatment needs
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
