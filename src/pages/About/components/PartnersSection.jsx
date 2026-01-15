const PartnersSection = () => {
  return (
    <section className="w-full py-20 px-6 relative overflow-hidden bg-white">
      {/* Subtle mint-green curved shape in top-right */}
      <div 
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-30"
        style={{ 
          background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
          transform: 'translate(30%, -30%)'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Technology & Support Partners
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
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
