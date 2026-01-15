import Header from '@/components/layout/Header';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section 
        className="w-full min-h-[70vh] flex items-center justify-center px-6"
        style={{
          background: 'linear-gradient(135deg, #0891b2 0%, #0ea5a9 25%, #0284c7 60%, #1d4ed8 100%)'
        }}
      >
        <div className="max-w-[1100px] w-full text-center pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
            About KSP Hydro Engineers
          </h1>
          <p className="text-lg md:text-xl text-white/85 font-normal leading-relaxed max-w-2xl mx-auto">
            Building trust, credibility, and sustainable water solutions for over two decades
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
