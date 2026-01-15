const JourneySection = () => {
  const journeyEvents = [
    {
      year: '2003',
      title: 'Company Founded',
      description: 'KSP Hydro Engineers established with a vision to revolutionize water treatment',
      side: 'left'
    },
    {
      year: '2008',
      title: 'First Major Project',
      description: 'Completed 5 MLD wastewater treatment plant for leading industrial client',
      side: 'right'
    },
    {
      year: '2012',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001:2015 certification for quality management',
      side: 'left'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'Expanded operations across 5 states with 100+ projects completed',
      side: 'right'
    },
    {
      year: '2018',
      title: 'Innovation Award',
      description: 'Recognized for sustainable water recycling technology',
      side: 'left'
    },
    {
      year: '2020',
      title: 'Major Milestone',
      description: 'Successfully commissioned 500+ water treatment systems',
      side: 'right'
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Established as a trusted partner across multiple sectors nationwide',
      side: 'left'
    }
  ];

  return (
    <section className="relative w-full px-6 py-20 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 w-full h-full mt-40 pointer-events-none">
        <svg
          // className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1340 1036"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M945.56 918.092C1168.54 814.147 1304.66 953.054 1344.85 1035.5L1341.72 379.579C1260.29 277.825 1144.42 271.563 1089.62 280.956C1034.81 290.349 975.311 248.081 972.179 223.034C972.179 59.0002 649.093 112.5 635.523 112.5C442.399 119 41.1201 105.6 -18.9999 0V514.207C-2.71509 603.124 82.78 694.233 123.492 728.673C185.082 774.593 333.941 852.343 436.661 795.987C539.38 739.631 612.035 793.378 635.523 827.296C733.232 990.102 882.926 955.663 945.56 918.092Z" fill="#EFFEEF"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Our Journey
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Two decades of innovation, growth, and commitment to sustainable water solutions
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central vertical line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-200 transform -translate-x-1/2" />
          
          {/* Central vertical line - Mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-blue-200" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {journeyEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Desktop Layout */}
                <div className="items-center hidden md:flex">
                  {/* Left side content */}
                  <div className={`w-1/2 ${event.side === 'left' ? 'pr-12' : ''}`}>
                    {event.side === 'left' && (
                      <div className="p-6 text-right bg-white border shadow-sm rounded-xl border-slate-100">
                        <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                        <h3 className="mt-1 text-lg font-semibold text-slate-900">{event.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{event.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute z-10 transform -translate-x-1/2 left-1/2">
                    <div className="w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-md" />
                  </div>

                  {/* Right side content */}
                  <div className={`w-1/2 ${event.side === 'right' ? 'pl-12' : ''}`}>
                    {event.side === 'right' && (
                      <div className="p-6 text-left bg-white border shadow-sm rounded-xl border-slate-100">
                        <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                        <h3 className="mt-1 text-lg font-semibold text-slate-900">{event.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-500">{event.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="flex items-start md:hidden">
                  {/* Node */}
                  <div className="relative z-10 mr-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full border-[3px] border-white shadow-md ml-[6px]" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 p-5 bg-white border shadow-sm rounded-xl border-slate-100">
                    <span className="text-xl font-bold text-blue-600">{event.year}</span>
                    <h3 className="mt-1 text-base font-semibold text-slate-900">{event.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
