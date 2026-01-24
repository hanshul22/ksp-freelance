import { Filter, ChevronUp, Droplets, Factory, Shield } from 'lucide-react';

const treatmentCategories = [
  { title: 'MGF / PSF / ACF / Iron Removal', subtitle: 'Multi-grade filtration systems' },
  { title: 'Water Softener', subtitle: 'Hard water treatment solutions' },
  { title: 'Ultra Filtration', subtitle: 'Membrane-based purification' },
  { title: 'General Consumables', subtitle: 'Filter media and spares' },
  { title: 'Chemicals', subtitle: 'Treatment chemicals and additives' },
  { title: 'Reverse Osmosis', subtitle: 'Advanced RO systems' },
  { title: 'Nano Filtration', subtitle: 'Precision filtration technology' },
  { title: 'DM Plant / Mixed Bed', subtitle: 'Demineralization systems' },
];

const featureCards = [
  {
    icon: Droplets,
    iconColor: 'text-[#155DFC]',
    title: 'Potable Water',
    description: 'Safe drinking water for residential and commercial use',
  },
  {
    icon: Factory,
    iconColor: 'text-[#155DFC]',
    title: 'Industrial Use',
    description: 'Process water for manufacturing and production',
  },
  {
    icon: Shield,
    iconColor: 'text-[#22C55E]',
    title: 'Quality Assured',
    description: 'Meets WHO and BIS standards for water quality',
  },
];

const WaterTreatmentSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0D9488] rounded-xl mb-6">
            <Filter className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Water Treatment Plant
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive purification systems for potable and industrial water
          </p>
        </div>

        {/* Treatment Categories Container */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-md border border-gray-100 mb-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-[#0A1628]">
              8 Treatment Categories
            </h3>
            <ChevronUp className="w-5 h-5 text-gray-400" />
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {treatmentCategories.map((category, index) => (
              <div
                key={index}
                className="bg-[#F0F9FF] rounded-xl p-4 border border-[#E0F2FE]"
              >
                <h4 className="text-sm font-semibold text-[#0A1628] mb-1">
                  {category.title}
                </h4>
                <p className="text-xs text-gray-500">
                  {category.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-md border border-gray-100 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <card.icon className={`w-10 h-10 ${card.iconColor}`} />
              </div>

              {/* Title */}
              <h4 className="text-lg font-bold text-[#0A1628] mb-2">
                {card.title}
              </h4>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WaterTreatmentSection;
