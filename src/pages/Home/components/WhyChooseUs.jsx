import React from 'react';
import { Award, Shield, Settings, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      icon: Award,
      title: 'Proven Technologies',
      description: 'Cutting-edge water treatment systems backed by years of industry expertise and successful implementations.',
    },
    {
      id: 2,
      icon: Shield,
      title: 'Quality & Compliance',
      description: 'All solutions meet international standards and regulatory requirements for water quality and safety.',
    },
    {
      id: 3,
      icon: Settings,
      title: 'End-to-End Solutions',
      description: 'Complete lifecycle management from design and installation to ongoing operation and maintenance.',
    },
    {
      id: 4,
      icon: Headphones,
      title: 'Reliable Support',
      description: '24/7 technical support and rapid response teams to ensure your systems operate at peak performance.',
    },
  ];

  return (
    <section 
      className="py-16 md:py-24"
      style={{
        background: 'linear-gradient(to right, #155DFC, #00C950)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3">
            Trust & Expertise
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose KSP Hydro
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Your trusted partner for sustainable water solutions
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all w-full h-80"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-lg bg-white/20 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/80 leading-relaxed">
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
