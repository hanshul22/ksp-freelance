import { Lightbulb, Cog, Headphones } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: '01',
      icon: Lightbulb,
      title: 'Design Engineering & Consultancy',
      description: 'Expert design and consultation services tailored to your specific water treatment needs. We analyze, plan, and engineer solutions that meet regulatory standards and efficiency goals.',
    },
    {
      id: '02',
      icon: Cog,
      title: 'Erection & Commissioning',
      description: 'Professional installation and system commissioning with precision and care. Our experienced team ensures seamless integration and optimal performance from day one.',
    },
    {
      id: '03',
      icon: Headphones,
      title: 'Operation & Maintenance',
      description: 'Ongoing support and maintenance services to keep your systems running efficiently. We provide regular inspections, troubleshooting, and performance optimization.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
            End-to-End Support
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Complete lifecycle support from initial design through ongoing maintenance
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="relative">
                {/* Vertical Line Connector (hidden on mobile) */}
                {index < services.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-5 w-10 h-0.5 bg-gray-300"></div>
                )}

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg">
                      {service.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-teal-600" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
