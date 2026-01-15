import { Lightbulb, Settings, Headphones } from 'lucide-react';

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
      icon: Settings,
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
    <section className="relative py-16 overflow-hidden md:py-24">
      {/* Background SVG Shape */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-100 300C100 200 300 100 500 150C700 200 900 400 1100 350C1300 300 1400 200 1540 250V600H-100V300Z"
            fill="#E8F7F7"
            fillOpacity="0.6"
          />
        </svg>
      </div>

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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="relative pt-6">
                {/* Number Badge - positioned at top right */}
                <div className="absolute z-20 -top-0 right-4 md:right-6">
                  <div className="flex items-center justify-center w-12 h-12 text-base font-bold text-white rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg">
                    {service.id}
                  </div>
                </div>

                {/* Card */}
                <div className="h-full p-8 bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-2xl">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-teal-50">
                      <Icon className="w-7 h-7 text-teal-600" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-xl font-bold leading-tight text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base leading-relaxed text-slate-600">
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
