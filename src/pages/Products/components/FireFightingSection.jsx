import { Flame, Shield, Settings, Wrench } from 'lucide-react';

const systemCards = [
  {
    title: 'Sprinkler Systems',
    applicationScenarios: 'Commercial buildings, warehouses, manufacturing facilities',
    keyFeatures: ['Automatic activation', 'Zone-wise control', 'Code-compliant'],
  },
  {
    title: 'Hydrant Systems',
    applicationScenarios: 'Large industrial complexes, high-rise buildings',
    keyFeatures: ['High-pressure delivery', 'Strategic placement', 'Manual operation'],
  },
  {
    title: 'Foam Systems',
    applicationScenarios: 'Chemical plants, oil refineries, aircraft hangars',
    keyFeatures: ['Fuel fire suppression', 'Rapid deployment', 'Specialized foam agents'],
  },
];

const bottomFeatures = [
  { icon: Shield, label: 'Code Compliant' },
  { icon: Settings, label: 'Professional Installation' },
  { icon: Wrench, label: 'AMC Support' },
];

const FireFightingSection = () => {
  return (
    <section className="relative bg-[#FDF2F2] py-20 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FECACA]/40 rounded-full -translate-x-1/2 -translate-y-1/4" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-[#FECACA]/40 rounded-full translate-x-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#EF4444] rounded-xl mb-6">
            <Flame className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Fire Fighting Systems
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Reliable fire protection solutions for complete safety and compliance
          </p>
        </div>

        {/* System Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {systemCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-red-100"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-[#FEE2E2] rounded-xl mb-4">
                <Flame className="w-6 h-6 text-[#EF4444]" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0A1628] mb-4">
                {card.title}
              </h3>

              {/* Application Scenarios */}
              <div className="mb-4">
                <p className="text-sm font-semibold text-[#0A1628] mb-1">
                  Application Scenarios:
                </p>
                <p className="text-sm text-gray-500">
                  {card.applicationScenarios}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <p className="text-sm font-semibold text-[#0A1628] mb-2">
                  Key Features:
                </p>
                <ul className="space-y-1.5">
                  {card.keyFeatures.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#FEE2E2] flex items-center justify-center flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                      </span>
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Section */}
        <div className="bg-gradient-to-r from-[#EF4444] to-[#F97316] rounded-2xl p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Comprehensive Fire Safety
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-3xl mx-auto mb-8">
            Our fire fighting systems are designed, installed, and maintained in compliance with national and international fire safety codes including NFPA, NBC, and local regulations.
          </p>

          {/* Bottom Features */}
          <div className="flex flex-wrap justify-center gap-12">
            {bottomFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <feature.icon className="w-8 h-8 text-white" />
                <span className="text-white text-sm">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FireFightingSection;
