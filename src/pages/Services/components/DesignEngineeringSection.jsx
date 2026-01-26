import { Ban, Search, ClipboardList, Lightbulb, CheckCircle } from 'lucide-react';

const cards = [
  {
    icon: Search,
    title: "Site Study & Assessment",
    description: "Comprehensive site evaluation including water quality analysis, flow requirements, space constraints, and environmental conditions.",
    activities: [
      "Water quality testing and analysis",
      "Flow rate and demand assessment",
      "Site feasibility studies",
      "Environmental impact evaluation"
    ]
  },
  {
    icon: ClipboardList,
    title: "Design & Planning",
    description: "Custom engineering designs tailored to your specific requirements, ensuring optimal performance and compliance.",
    activities: [
      "Detailed engineering drawings",
      "Process flow diagrams",
      "Equipment layout planning",
      "Compliance documentation"
    ]
  },
  {
    icon: Lightbulb,
    title: "Technology Selection",
    description: "Expert guidance in choosing the most suitable treatment technology based on your needs, budget, and long-term goals.",
    activities: [
      "Technology comparison analysis",
      "Cost-benefit evaluation",
      "Efficiency optimization",
      "Future scalability planning"
    ]
  }
];

const processSteps = [
  { number: "01", title: "Discovery", description: "Understand requirements and constraints" },
  { number: "02", title: "Analysis", description: "Evaluate options and feasibility" },
  { number: "03", title: "Design", description: "Create optimized solution" },
  { number: "04", title: "Approval", description: "Present and finalize proposal" }
];

const DesignEngineeringSection = () => {
  return (
    <section id="design-engineering" className="relative w-full py-12 overflow-hidden lg:py-16">

      <div className="container relative z-10 px-4 mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <div
            className="inline-flex items-center justify-center mb-6 w-14 h-14 rounded-xl"
            style={{ background: 'linear-gradient(180deg, #155DFC 0%, #0092B8 100%)' }}
          >
            <Ban className="text-white w-7 h-7" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
            Design Engineering & Consultancy
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 md:text-lg">
            Expert consulting and engineering services to create the optimal water treatment solution for your needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-8 bg-white shadow-lg rounded-2xl"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #155DFC 0%, #0092B8 100%)' }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1f36] mb-4">
                {card.title}
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                {card.description}
              </p>
              <div>
                <p className="font-semibold text-[#1a1f36] mb-3">Key Activities:</p>
                <ul className="space-y-2">
                  {card.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Our Consultancy Process */}
        <div className="p-8 bg-white shadow-lg rounded-3xl md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1f36] text-center mb-12">
            Our Consultancy Process
          </h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#0066cc] mb-3">
                  {step.number}
                </p>
                <h4 className="text-lg font-bold text-[#1a1f36] mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignEngineeringSection;
