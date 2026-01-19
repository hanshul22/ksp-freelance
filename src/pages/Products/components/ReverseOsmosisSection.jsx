import { Waves, ArrowRight, CheckCircle } from 'lucide-react';

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
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blue-100 mb-12">
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

        {/* Applications & Available Models Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#0A1628] mb-6">
            Applications & Available Models
          </h3>
        </div>

        {/* RO Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Residential RO */}
          <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-100">
            <Waves className="w-8 h-8 text-[#3B82F6] mb-4" />
            <h4 className="text-lg font-semibold text-[#0A1628] mb-2">Residential RO</h4>
            <p className="text-sm font-medium text-[#3B82F6] mb-4">50-200 LPH</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Homes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Apartments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Villas</span>
              </div>
            </div>
          </div>

          {/* Commercial RO */}
          <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-100">
            <Waves className="w-8 h-8 text-[#3B82F6] mb-4" />
            <h4 className="text-lg font-semibold text-[#0A1628] mb-2">Commercial RO</h4>
            <p className="text-sm font-medium text-[#3B82F6] mb-4">250-1000 LPH</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Offices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Schools</span>
              </div>
            </div>
          </div>

          {/* Industrial RO */}
          <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-100">
            <Waves className="w-8 h-8 text-[#3B82F6] mb-4" />
            <h4 className="text-lg font-semibold text-[#0A1628] mb-2">Industrial RO</h4>
            <p className="text-sm font-medium text-[#3B82F6] mb-4">1000-50000 LPH</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Pharma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Food & Beverage</span>
              </div>
            </div>
          </div>

          {/* High-Capacity RO */}
          <div className="bg-[#F0F7FF] rounded-2xl p-6 border border-blue-100">
            <Waves className="w-8 h-8 text-[#3B82F6] mb-4" />
            <h4 className="text-lg font-semibold text-[#0A1628] mb-2">High-Capacity RO</h4>
            <p className="text-sm font-medium text-[#3B82F6] mb-4">50000+ LPH</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Large Industries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Municipal Supply</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Bottling Plants</span>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our RO Systems Banner */}
        <div className="bg-gradient-to-r from-[#1E3A8A] to-[#0EA5E9] rounded-2xl p-10">
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center mb-10">
            Why Choose Our RO Systems?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Premium Membranes */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">Premium Membranes</h4>
              <p className="text-sm text-white/70">High-quality imported membranes</p>
            </div>

            {/* Low Maintenance */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">Low Maintenance</h4>
              <p className="text-sm text-white/70">Easy filter replacement</p>
            </div>

            {/* Energy Saving */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">Energy Saving</h4>
              <p className="text-sm text-white/70">Efficient power consumption</p>
            </div>

            {/* 24/7 Support */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-base font-semibold text-white mb-2">24/7 Support</h4>
              <p className="text-sm text-white/70">Technical assistance available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReverseOsmosisSection;
