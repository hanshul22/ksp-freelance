import { Recycle, ChevronDown, ChevronUp, Factory, Settings, Shield, Filter, Box, Wind, Layers, Droplets, Zap, Grid3X3, Package, Radio } from 'lucide-react';

const etpCards = [
  {
    icon: Factory,
    title: 'Industrial Focus',
    description: 'Specialized treatment solutions for industrial wastewater from manufacturing, textile, pharmaceutical, and chemical industries.',
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    description: 'Tailored treatment processes based on effluent characteristics, discharge norms, and reuse requirements.',
  },
  {
    icon: Shield,
    title: 'Compliance-Driven',
    description: 'Designed to meet stringent environmental regulations and discharge standards set by pollution control boards.',
  },
];

const sparesCategories = [
  { icon: Filter, label: 'Automatic Fine Screen' },
  { icon: Box, label: 'MBBR Media' },
  { icon: Wind, label: 'Stormix Aerator' },
  { icon: Layers, label: 'Ultra Filtration' },
  { icon: Droplets, label: 'Tertiary Treatment' },
  { icon: Zap, label: 'Ozonization System' },
  { icon: Grid3X3, label: 'MS-FRP Tube Settlers' },
  { icon: Package, label: 'General Consumables' },
  { icon: Radio, label: 'Remote Monitoring Tools' },
];

const WasteWaterSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#22C55E] rounded-xl mb-6">
            <Recycle className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Waste Water Recycling
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Transforming wastewater into reusable water through advanced treatment technologies
          </p>
        </div>

        {/* STP Accordion (Collapsed State) */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100 mb-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#0A1628]">
              Sewage Treatment Plant (STP) – 6 Technologies
            </h3>
            <ChevronDown className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* ETP Section (Expanded State) */}
        <div className="bg-[#E8F4F8] rounded-xl p-6 shadow-md mb-4">
          {/* ETP Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#0A1628]">
              Effluent Treatment Plant (ETP)
            </h3>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </div>

          {/* ETP Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {etpCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                {/* Icon */}
                <div className="mb-4">
                  <card.icon className="w-6 h-6 text-[#155DFC]" />
                </div>

                {/* Title */}
                <h4 className="text-base font-semibold text-[#0A1628] mb-2">
                  {card.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spares & Components Section */}
        <div className="bg-[#F6FAFD] rounded-xl p-6 shadow-md border border-gray-100">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-[#0A1628]">
              Spares & Components – 9 Categories
            </h3>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sparesCategories.map((category, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 bg-[#155DFC] rounded-lg flex-shrink-0">
                  <category.icon className="w-5 h-5 text-white" />
                </div>

                {/* Label */}
                <span className="text-sm font-medium text-[#0A1628]">
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WasteWaterSection;
