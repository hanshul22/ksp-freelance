import { Gauge, Zap, Shield, Settings, Activity } from 'lucide-react';

const pumpCards = [
  {
    title: 'Centrifugal Pumps',
    useCases: 'Water transfer, circulation, boosting',
    capacity: 'Up to 1000 m³/hr',
  },
  {
    title: 'Submersible Pumps',
    useCases: 'Borewell, sump drainage, wastewater',
    capacity: '5 - 500 HP',
  },
  {
    title: 'Dosing Pumps',
    useCases: 'Chemical injection, precise dosing',
    capacity: 'Up to 500 LPH',
  },
  {
    title: 'Pressure Booster Systems',
    useCases: 'High-rise buildings, low-pressure areas',
    capacity: 'Customized',
  },
];

const bottomFeatures = [
  {
    icon: Zap,
    title: 'Energy Efficient',
    description: 'Optimized for low power consumption',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Shield,
    title: 'Durable Build',
    description: 'Long-lasting performance',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Settings,
    title: 'Easy Maintenance',
    description: 'Simple servicing requirements',
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Activity,
    title: 'Smart Control',
    description: 'Automated operations',
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

const PumpingSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#6366F1] rounded-2xl mb-6">
            <Gauge className="w-7 h-7 text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Pumping Systems
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Efficient and reliable pumps for every water management need
          </p>
        </div>

        {/* Pump Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {pumpCards.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-[#6366F1] rounded-xl">
                <Gauge className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#0A1628] mb-2">
                  {card.title}
                </h3>
                <div className="mb-1">
                  <span className="text-sm text-gray-400">Use Cases: </span>
                  <span className="text-sm text-gray-500">{card.useCases}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-400">Capacity: </span>
                  <span className="text-sm text-gray-600">{card.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0A1628] text-center mb-8">
            Why Choose Our Pumping Solutions?
          </h3>

          {/* Feature Icons Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {bottomFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className={`w-14 h-14 rounded-full ${feature.bgColor} flex items-center justify-center mb-3`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h4 className="text-sm font-semibold text-[#0A1628] mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PumpingSection;
