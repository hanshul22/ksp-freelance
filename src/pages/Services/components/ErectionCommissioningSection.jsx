import { Wrench, HardHat, ClipboardCheck, GraduationCap, Shield, ListChecks, CheckCircle } from 'lucide-react';

const primaryCards = [
  {
    icon: HardHat,
    title: "Professional Installation",
    description: "Expert installation by certified technicians ensuring quality workmanship and adherence to safety standards.",
    items: [
      "Equipment installation and integration",
      "Piping and electrical work",
      "Control system setup",
      "Safety protocol implementation"
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Testing & Validation",
    description: "Rigorous testing protocols to ensure the system meets all performance specifications and quality standards.",
    items: [
      "Performance testing",
      "Quality parameter validation",
      "Load testing",
      "Safety system verification"
    ]
  },
  {
    icon: GraduationCap,
    title: "Handover & Training",
    description: "Comprehensive training for your staff and complete documentation handover for smooth operations.",
    items: [
      "Operator training sessions",
      "Documentation handover",
      "Troubleshooting guidance",
      "Maintenance instruction"
    ]
  }
];

const secondaryCards = [
  {
    icon: Shield,
    title: "Safety First Approach",
    items: [
      "Certified installation teams",
      "Strict adherence to safety protocols",
      "PPE and site safety measures",
      "Quality assurance at every step"
    ]
  },
  {
    icon: ListChecks,
    title: "Commissioning Checklist",
    items: [
      "System functionality verification",
      "Performance parameters testing",
      "Documentation and certification",
      "Operator training completion"
    ]
  }
];

const ErectionCommissioningSection = () => {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#f97316] rounded-xl mb-6">
            <Wrench className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
            Erection & Commissioning
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional installation and commissioning services ensuring your system operates at peak performance
          </p>
        </div>

        {/* Primary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {primaryCards.map((card, index) => (
            <div 
              key={index}
              className="bg-[#fef7f0] rounded-2xl p-6 shadow-sm"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#f97316] rounded-xl mb-5">
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1f36] mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                {card.description}
              </p>
              <div>
                <p className="font-semibold text-[#1a1f36] text-sm mb-3">What We Do:</p>
                <ul className="space-y-2">
                  {card.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryCards.map((card, index) => (
            <div 
              key={index}
              className="bg-[#fef7f0] rounded-2xl p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <card.icon className="w-6 h-6 text-[#f97316]" />
                <h3 className="text-lg font-bold text-[#1a1f36]">
                  {card.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErectionCommissioningSection;
