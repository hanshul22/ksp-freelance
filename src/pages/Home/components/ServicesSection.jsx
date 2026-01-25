import { Lightbulb, Cog, Headphones, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: '01',
      icon: Lightbulb,
      title: 'Design Engineering & Consultancy',
      description: 'We assess requirements, select the right technology, and design efficient, compliant solutions tailored to real-world conditions.',
    },
    {
      id: '02',
      icon: Cog,
      title: 'Erection & Commissioning',
      description: 'On-site execution, installation, and commissioning of water infrastructure projects. Our teams ensure seamless integration, system readiness, and reliable performance from day one.',
    },
    {
      id: '03',
      icon: Headphones,
      title: 'Operation & Maintenance',
      description: 'Long-term operation and maintenance support to keep systems running efficiently. From routine monitoring to troubleshooting and compliance, we ensure uninterrupted performance.',
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
        <div className="relative grid grid-cols-1 gap-12 pt-8 md:grid-cols-3 md:gap-10">
          {/* Connecting Lines - Desktop Only */}
          <div className="absolute hidden md:block top-[55%] left-0 right-0 z-0 px-8">
            <div className="flex justify-between max-w-5xl mx-auto">
              {/* Line 1: Card 01 → Card 02 */}
              <div className="flex items-center justify-center flex-1">
                <div className="w-16 h-px ml-auto mr-4 bg-[#B9F8CF]"></div>
              </div>
              {/* Spacer for middle card */}
              <div className="flex-1"></div>
              {/* Line 2: Card 02 → Card 03 */}
              <div className="flex items-center justify-center flex-1">
                <div className="w-16 h-px ml-4 mr-auto bg-[#B9F8CF]"></div>
              </div>
            </div>
          </div>

          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="relative z-10 pt-8">
                {/* Card */}
                <div className="relative h-full px-8 py-10 bg-white shadow-lg rounded-3xl">
                  {/* Number Badge - Top Right - Overlapping card boundary */}
                  <div className="absolute -top-6 -right-3">
                    <div 
                      className="flex items-center justify-center w-12 h-12 text-base font-bold text-white rounded-full shadow-md"
                      style={{ background: 'linear-gradient(135deg, #155DFC 0%, #00C950 100%)' }}
                    >
                      {service.id}
                    </div>
                  </div>

                  {/* Icon Container - Top Left */}
                  <div className="mb-8">
                    <div 
                      className="flex items-center justify-center w-16 h-16 rounded-2xl"
                      style={{ background: 'linear-gradient(135deg, #DBEAFE 0%, #DCFCE7 100%)' }}
                    >
                      <Icon className="w-8 h-8 text-cyan-500" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-5 text-xl font-bold leading-tight text-gray-900">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-1.5 text-sm font-medium text-amber-500">
                    <span>👉</span>
                    <span>Learn more</span>
                  </div>
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
