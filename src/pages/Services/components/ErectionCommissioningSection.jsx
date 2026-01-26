import { Wrench, HardHat, ClipboardCheck, GraduationCap, Shield, ListChecks, CheckCircle, MonitorPlay, Headphones, FileText, Settings } from 'lucide-react';

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


const ErectionCommissioningSection = () => {
  return (
    <section id="erection-commissioning" className="w-full py-12 lg:py-16">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div
            className="inline-flex items-center justify-center mb-6 w-14 h-14 rounded-xl"
            style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
          >
            <Wrench className="text-white w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
            Erection & Commissioning
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg">
            Professional installation and commissioning services ensuring your system operates at peak performance
          </p>
        </div>

        {/* Primary Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {primaryCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#fef7f0] rounded-2xl p-6 shadow-sm"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1f36] mb-3">
                {card.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
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

        {/* Secondary Cards Grid - Handover & Training */}
        <div className="bg-[#fef7f0] rounded-3xl p-8 md:p-12">
          <h3 className="text-xl md:text-2xl font-bold text-[#1a1f36] text-center mb-10">
            Handover & Training
          </h3>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="flex flex-col items-center text-center">
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
              >
                <MonitorPlay className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-600">Operator training sessions</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
              >
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-600">Initial troubleshooting support</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
              >
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-600">Documentation and manuals</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #F54900 0%, #E7000B 100%)' }}
              >
                <Settings className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-600">System walkthroughs</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ErectionCommissioningSection;
