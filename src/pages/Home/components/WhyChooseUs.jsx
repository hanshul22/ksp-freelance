import { Award, Shield, Settings, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'Proven Technologies',
      description: 'Field-tested water and wastewater treatment technologies successfully implemented across STPs, ETPs, WTPs, RO systems, and lake revival projects.',
    },
    {
      id: 2,
      icon: Shield,
      title: 'Quality & Compliance',
      description: 'All systems are designed and executed in line with regulatory norms, safety standards, and performance benchmarks to ensure long-term reliability.',
    },
    {
      id: 3,
      icon: Settings,
      title: 'End-to-End Solutions',
      description: 'Complete lifecycle support from design engineering and commissioning to operation, maintenance, and system optimization.',
    },
    {
      id: 4,
      icon: Headphones,
      title: 'Reliable Support',
      description: 'Dedicated technical teams, quick response, and ongoing AMC support to keep your systems running efficiently, year after year.',
    },
  ];

  return (
    <section 
      className="py-16 md:py-24"
      style={{
        background: 'linear-gradient(to right, #155DFC, #00C950)'
      }}
    >
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-wide uppercase text-white/90">
            Trust & Expertise
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Why Choose KSP Hydro
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/90">
            A trusted partner delivering practical, reliable, and compliant water solutions across industries and public infrastructure.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="p-6 transition-all border bg-white/10 backdrop-blur-sm rounded-2xl md:p-8 border-white/20 hover:bg-white/15"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="flex items-center justify-center rounded-lg w-14 h-14 bg-white/20">
                    <Icon className="text-white w-7 h-7" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-lg font-bold leading-tight text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/80">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
