import { Lightbulb, Settings, Headphones } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: '01',
      icon: Lightbulb,
      title: 'Design Engineering & Consultancy',
      description: 'Expert design and consultation services tailored to your specific water treatment needs. We analyze, plan, and engineer solutions that meet regulatory standards and efficiency goals.',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      badgeColor: 'bg-emerald-400',
    },
    {
      id: '02',
      icon: Settings,
      title: 'Erection & Commissioning',
      description: 'Professional installation and system commissioning with precision and care. Our experienced team ensures seamless integration and optimal performance from day one.',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-500',
      badgeColor: 'bg-emerald-400',
    },
    {
      id: '03',
      icon: Headphones,
      title: 'Operation & Maintenance',
      description: 'Ongoing support and maintenance services to keep your systems running efficiently. We provide regular inspections, troubleshooting, and performance optimization.',
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-500',
      badgeColor: 'bg-teal-400',
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#e8f7fa] overflow-hidden">
      {/* Soft curved background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/40 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 px-6 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-wider text-teal-600 uppercase">
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="relative pt-6">
                {/* Card */}
                <div className="relative h-full p-6 bg-white shadow-md rounded-2xl">
                  {/* Number Badge - positioned at top right */}
                  <div className="absolute -top-3 right-6">
                    <div className={`flex items-center justify-center w-10 h-10 text-sm font-bold text-white ${service.badgeColor} rounded-full shadow-md`}>
                      {service.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-5">
                    <div className={`flex items-center justify-center w-14 h-14 rounded-xl ${service.iconBg}`}>
                      <Icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900">
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
