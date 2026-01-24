import { Droplets, CheckCircle, Leaf, Zap, Shield, Settings, GitBranch } from 'lucide-react';

const whereUsed = [
  'Hotels & resorts',
  'Residential complexes',
  'Public parks & lakes',
  'Sports & recreation centers',
];

const advantages = [
  { icon: Leaf, text: 'Eco-friendly treatment' },
  { icon: Zap, text: 'Energy-efficient operation' },
  { icon: Shield, text: 'Safe for swimmers' },
  { icon: Settings, text: 'Automated monitoring' },
];

const processSteps = [
  'Pre-filtration and debris removal',
  'Sand/media filtration',
  'Chemical balancing & disinfection',
  'UV/Ozone treatment (optional)',
  'Continuous circulation & monitoring',
];

const keyBenefits = [
  { title: 'Crystal Clear Water', description: 'Consistently clean and visually appealing' },
  { title: 'Reduced Chemical Usage', description: 'Cost-effective and environmentally friendly' },
  { title: 'Automated Control', description: 'Minimal manual intervention required' },
];

const SwimmingPoolSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#155DFC] rounded-xl mb-6">
            <Droplets className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Swimming Pool & Lake Revival
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Advanced filtration and purification systems to restore and maintain crystal-clear water
          </p>
        </div>

        {/* Top Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Card 1 - What It Is */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">What It Is</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Comprehensive water circulation, filtration, and chemical treatment systems designed to maintain optimal water quality for swimming pools, decorative lakes, and water features.
            </p>
          </div>

          {/* Card 2 - Where It's Used */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">Where It's Used</h3>
            <ul className="space-y-2">
              {whereUsed.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 - Advantages */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100">
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">Advantages</h3>
            <ul className="space-y-2">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-[#155DFC] flex-shrink-0" />
                  <span className="text-gray-500 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Overview Section */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-8 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-[#0A1628] mb-6">
            Process Overview & Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left - Treatment Process */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-5 h-5 text-[#155DFC]" />
                <span className="text-sm font-semibold text-[#0A1628]">Treatment Process</span>
              </div>

              <ul className="space-y-3">
                {processSteps.map((step, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#155DFC] text-white text-xs font-bold rounded-full flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-600 text-sm">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Key Benefits */}
            <div className="bg-[#F0F9FF] rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[#0A1628] mb-4">Key Benefits</h4>
              <ul className="space-y-4">
                {keyBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#0A1628] block">{benefit.title}</span>
                      <span className="text-xs text-gray-500">{benefit.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwimmingPoolSection;
