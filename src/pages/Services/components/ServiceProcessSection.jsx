import { Handshake, MapPin, FileText, HardHat, CheckCircle, Settings } from 'lucide-react';

const ServiceProcessSection = () => {
  const processSteps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "Understanding your requirements and challenges",
      icon: Handshake
    },
    {
      number: 2,
      title: "Site Assessment",
      description: "Detailed evaluation and feasibility study",
      icon: MapPin
    },
    {
      number: 3,
      title: "Proposal & Design",
      description: "Customized solution with detailed documentation",
      icon: FileText
    },
    {
      number: 4,
      title: "Installation",
      description: "Professional erection and commissioning",
      icon: HardHat
    },
    {
      number: 5,
      title: "Testing & Handover",
      description: "Validation and training completion",
      icon: CheckCircle
    },
    {
      number: 6,
      title: "Ongoing Support",
      description: "Continuous maintenance and optimization",
      icon: Settings
    }
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Complete Service Process
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            From initial consultation to ongoing support, we're with you every step of the way
          </p>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div 
              key={step.number}
              className="bg-sky-50/50 rounded-2xl border border-dashed border-sky-200 p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              
              <div className="ml-14 w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center">
                <step.icon className="w-4 h-4 text-blue-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;
