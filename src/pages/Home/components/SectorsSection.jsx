import { Building2, Factory, Users } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
            Who We Serve
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sectors We Serve
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Trusted by leading organizations across industries for reliable water solutions
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {sector.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
