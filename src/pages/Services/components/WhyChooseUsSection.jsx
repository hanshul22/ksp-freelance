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
      <div className="container px-4 mx-auto lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">
            Why Choose KSP Hydro Services?
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
            Trusted by leading organizations for comprehensive water infrastructure services
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 text-center bg-white shadow-lg rounded-2xl"
            >
              <div 
                className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #155DFC 0%, #0092B8 100%)' }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Service Commitment Section */}
        <div className="p-8 bg-white shadow-lg rounded-2xl lg:p-12">
          <div className="flex flex-col items-center mb-10 text-center">
            <h3 className="mb-4 text-2xl font-bold lg:text-3xl text-slate-900">
              Our Service Commitment
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-gray-500 lg:text-lg">
              We don't just install systems — we build lasting relationships. Our commitment extends beyond project completion to ensure your water treatment infrastructure continues to deliver optimal performance year after year.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <span className="mb-2 text-4xl font-bold text-blue-600 lg:text-5xl">
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500">
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
