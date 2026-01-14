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
    <section className="relative py-16 md:py-24">
      
      <div className="relative z-10 px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-wide text-teal-600 uppercase">
            End-to-End Support
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600">
            Complete lifecycle support from initial design through ongoing maintenance
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="relative">
                {/* Vertical Line Connector (hidden on mobile) */}
                {index < services.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-5 w-10 h-0.5 bg-gray-300"></div>
                )}

                {/* Card */}
                <div className="h-full p-8 transition-shadow bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-8">
                    <div className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-teal-500 rounded-full">
                      {service.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mt-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-50">
                      <Icon className="w-8 h-8 text-teal-600" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-600">
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
