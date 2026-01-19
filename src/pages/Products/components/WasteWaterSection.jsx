import { Recycle, ChevronDown, ChevronUp, Factory, Settings, Shield } from 'lucide-react';

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

const WasteWaterSection = () => {
  return (
    <section className="relative bg-[#F1FDF3] py-20 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D9F5DD] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D9F5DD] rounded-full translate-x-1/3 translate-y-1/3 opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="bg-[#E8F4F8] rounded-xl p-6 shadow-md">
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
      </div>
    </section>
  );
};

export default WasteWaterSection;
