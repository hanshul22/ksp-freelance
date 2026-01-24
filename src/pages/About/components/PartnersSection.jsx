const PartnersSection = () => {
  return (
    <section className="relative w-full px-4 py-16 mt-20 overflow-hidden md:px-8 md:py-20">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Technology & Support Partners
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Collaborating with global leaders to deliver cutting-edge water treatment solutions
          </p>
        </div>

        {/* Partner Logo Placeholder Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="bg-white rounded-xl w-[130px] h-[100px] border border-slate-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
