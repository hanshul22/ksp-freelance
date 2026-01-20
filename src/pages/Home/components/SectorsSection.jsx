import { Building2, Factory, Users } from "lucide-react";

const SectorsSection = () => {
  const sectors = [
    {
      id: 1,
      title: "Institutions",
      description: "Hotels, hospitals, campuses & educational facilities",
      icon: Building2,
    },
    {
      id: 2,
      title: "Real Estate",
      description: "Residential & commercial property developments",
      icon: Building2,
    },
    {
      id: 3,
      title: "Industrial",
      description: "Manufacturing plants & industrial facilities",
      icon: Factory,
    },
    {
      id: 4,
      title: "Communities & Municipalities",
      description: "Public infrastructure & municipal water systems",
      icon: Users,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Mobile Background Shape - Only visible on mobile */}
      <div className="absolute inset-0 -z-10 block md:hidden">
        <svg
          viewBox="0 0 375 462"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[462]  object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M44.8145 445.968C27 433.12 8 435 -1 458V142.5C21.1412 147.063 32.795 120.507 34.0602 108.34C34.0602 28.6596 164.588 54.6477 170.071 54.6477C248.093 57.805 350.211 51.2958 374.5 0V249.779C367.921 292.971 357 338.5 343 358.5C337.4 366.5 291.91 414.03 250.412 386.655C208.913 359.28 179.56 385.388 170.071 401.864C130.596 480.948 70.1188 464.218 44.8145 445.968Z"
            fill="#EFFAFE"
          />
        </svg>
      </div>

      <div className="px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-10 text-center md:mb-16">
          <p className="mb-2 md:mb-3 text-xs md:text-sm font-semibold tracking-widest md:tracking-wide text-green-500 md:text-teal-600 uppercase">
            Who We Serve
          </p>
          <h2 className="mb-3 md:mb-4 text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900">Sectors We Serve</h2>
          <p className="max-w-xs md:max-w-2xl mx-auto text-sm md:text-lg text-slate-500 md:text-slate-600 leading-relaxed">
            Trusted by leading organizations across industries for reliable water solutions
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm md:shadow-[0_3px_0px_rgba(0,0,0,0.2)] md:hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-300"
              >
                {/* Icon - Centered on mobile, left-aligned on desktop */}
                <div className="mb-4 md:mb-6 flex justify-center md:justify-start">
                  <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-blue-50 md:bg-blue-100 rounded-xl">
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-blue-500 md:text-blue-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title - Centered on mobile, left-aligned on desktop */}
                <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-bold leading-tight text-gray-900 text-center md:text-left">
                  {sector.title}
                </h3>

                {/* Description - Centered on mobile, left-aligned on desktop */}
                <p className="text-sm md:text-base leading-relaxed text-slate-500 md:text-slate-600 text-center md:text-left">
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
