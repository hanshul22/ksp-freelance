import { Waves, ArrowRight } from 'lucide-react';

const featureCards = [
  {
    title: 'Removes up to 99%',
    description: 'Of dissolved salts, bacteria, and contaminants',
  },
  {
    title: 'Membrane Technology',
    description: 'High-quality TFC/CTA membranes',
  },
  {
    title: 'Energy Efficient',
    description: 'Optimized for minimal power usage',
  },
];

const processSteps = [
  {
    number: 1,
    title: 'Pre-Filtration',
    description: 'Sediment & carbon filters remove larger particles',
  },
  {
    number: 2,
    title: 'Pressure Pump',
    description: 'Applies pressure to push water through membrane',
  },
  {
    number: 3,
    title: 'RO Membrane',
    description: 'Semi-permeable membrane filters out contaminants',
  },
  {
    number: 4,
    title: 'Post-Filtration',
    description: 'Final polishing for taste and odor',
  },
  {
    number: 5,
    title: 'Pure Water',
    description: 'Clean, safe water ready for use',
  },
];

const ReverseOsmosisSection = () => {
  return (
    <section className="bg-[#F2F6FF] py-20 relative overflow-hidden">
      {/* Background decorative curves */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 100 Q 200 50 400 100 T 800 80 T 1200 120 T 1600 80"
            stroke="#DBEAFE"
            strokeWidth="80"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M-100 600 Q 300 550 600 600 T 1100 580 T 1500 620"
            stroke="#DBEAFE"
            strokeWidth="60"
            fill="none"
            opacity="0.4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#3B82F6] rounded-2xl mb-6">
            <Waves className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Reverse Osmosis Systems
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Advanced membrane technology for superior water purification
          </p>
        </div>

        {/* What is Reverse Osmosis Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blue-100 mb-10">
          <h3 className="text-xl font-semibold text-[#0A1628] mb-4">
            What is Reverse Osmosis?
          </h3>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
            Reverse Osmosis (RO) is an advanced water purification technology that uses a semi-permeable membrane to remove ions, molecules, and larger particles from water. By applying pressure, water is forced through the membrane, leaving contaminants behind and producing pure, clean water.
          </p>

          {/* Feature Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-gray-100"
              >
                <h4 className="text-base font-semibold text-[#0A1628] mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How RO Technology Works Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0A1628] mb-6">
            How RO Technology Works
          </h3>
        </div>

        {/* Process Steps Container */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blue-100">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6] flex items-center justify-center mb-4">
                  <span className="text-white text-lg font-bold">{step.number}</span>
                </div>

                {/* Step Title */}
                <h4 className="text-sm font-semibold text-[#0A1628] mb-2">
                  {step.title}
                </h4>

                {/* Step Description */}
                <p className="text-xs text-gray-500 mb-3">
                  {step.description}
                </p>

                {/* Arrow (not on last step) */}
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-[#3B82F6] hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReverseOsmosisSection;
