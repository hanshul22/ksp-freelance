import { Building2, Factory, Users, ArrowRight } from 'lucide-react';

const SectorsSection = () => {
  const sectors = [
    {
      id: 1,
      title: 'Institutions',
      description: 'Hotels, hospitals, campuses & educational facilities',
      icon: Building2,
    },
    {
      id: 2,
      title: 'Real Estate',
      description: 'Residential & commercial property developments',
      icon: Building2,
    },
    {
      id: 3,
      title: 'Industrial',
      description: 'Manufacturing plants & industrial facilities',
      icon: Factory,
    },
    {
      id: 4,
      title: 'Communities & Municipalities',
      description: 'Public infrastructure & municipal water systems',
      icon: Users,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-wide text-teal-600 uppercase">
            Who We Serve
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Sectors We Serve
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600">
            Trusted by leading organizations across industries for reliable water solutions
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_3px_0px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl">
                    <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-slate-600">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
            Explore Sector Solutions
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
