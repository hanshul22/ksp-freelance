import { PenTool, Search, FileText, Lightbulb, CheckCircle } from 'lucide-react';

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
    icon: FileText,
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

const DesignEngineeringSection = () => {
  return (
    <section className="relative w-full bg-[#e8f4f8] py-20 lg:py-28 overflow-hidden">
      {/* Background curved shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-50">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="150" ry="100" fill="#d4eef5" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-50">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <ellipse cx="150" cy="150" rx="150" ry="100" fill="#d4eef5" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#0066cc] rounded-xl mb-6">
            <PenTool className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] mb-6">
            Design Engineering & Consultancy
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Expert consulting and engineering services to create the optimal water treatment solution for your needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0066cc] rounded-xl mb-6">
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a1f36] mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
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
      </div>
    </section>
  );
};

export default DesignEngineeringSection;
