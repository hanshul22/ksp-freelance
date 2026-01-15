const CTASection = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Ready to Partner With Us?
        </h2>
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
          Let&apos;s work together to create sustainable water solutions for your organization
        </p>
        <button 
          className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
        >
          Contact Us Today
        </button>
      </div>
    </section>
  );
};

export default CTASection;
