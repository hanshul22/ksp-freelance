import { Settings, Shield, Clock, Headphones } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "Every project is unique. We design solutions tailored to your specific needs."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring the highest standards of quality."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Committed to project timelines without compromising on quality."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance for your peace of mind."
    }
  ];

  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose KSP Hydro Services?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Trusted by leading organizations for comprehensive water infrastructure services
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Commitment Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex flex-col items-center text-center mb-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Our Service Commitment
            </h3>
            <p className="text-gray-500 text-base lg:text-lg max-w-3xl leading-relaxed">
              We don't just install systems — we build lasting relationships. Our commitment extends beyond project completion to ensure your water treatment infrastructure continues to deliver optimal performance year after year.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
