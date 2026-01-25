const JourneySection = () => {
 const journeyEvents = [
  {
    year: '2003',
    title: 'Company Founded',
    description:
      'KSP Hydro Engineers was established to deliver reliable water and wastewater treatment solutions.',
    side: 'left'
  },
  {
    year: '2007',
    title: 'Entry into Water & Wastewater Projects',
    description:
      'KSP Hydro Engineers Pvt. Ltd. dedicatedly incorporated for Projects Division under Water.',
    side: 'right'
  },
  {
    year: '2011',
    title: 'Infrastructure & Capability Expansion',
    description:
      'Start of new manufacturing facility in Jaipur (RIICO).',
    side: 'left'
  },
  {
    year: '2015',
    title: 'Administrative & Geographic Growth',
    description:
      'Established new administrative offices and expanded presence across key regions in India.',
    side: 'right'
  },
  {
    year: '2018',
    title: 'Innovation Award',
    description:
      'Recognized for sustainable water recycling technology.',
    side: 'left'
  },
  {
    year: '2020',
    title: 'Major Milestone',
    description:
      'Successfully commissioned 500+ water treatment systems.',
    side: 'right'
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description:
      'Established as a trusted partner across multiple sectors nationwide.',
    side: 'left'
  }
];


  // Card component for consistent styling
  const MilestoneCard = ({ year, title, description, side }) => (
    <div className={`bg-white rounded-2xl p-5 w-full ${side === 'left' ? 'text-right' : 'text-left'} shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)]`}>
      {/* Year */}
      <div className="mb-2">
        <span className="text-2xl font-bold text-blue-600 md:text-2xl">{year}</span>
      </div>
      
      {/* Title */}
      <h3 className="text-sm font-semibold md:text-xl text-slate-900">
        {title}
      </h3>
      
      {/* Description */}
      <p className="mt-2 text-sm leading-relaxed md:text-base text-slate-500">
        {description}
      </p>
    </div>
  );

  return (
    <section className="relative w-full px-6 py-20 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none mt-60">
        <svg
          className="w-full"
          height="1036"
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
                      <MilestoneCard 
                        year={event.year} 
                        title={event.title} 
                        description={event.description}
                        side={event.side}
                      />
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute z-10 transform -translate-x-1/2 left-1/2">
                    <div className="w-4 h-4 bg-blue-500 border-4 border-white rounded-full shadow-md" />
                  </div>

                  {/* Right side content */}
                  <div className={`w-1/2 ${event.side === 'right' ? 'pl-12' : ''}`}>
                    {event.side === 'right' && (
                      <MilestoneCard 
                        year={event.year} 
                        title={event.title} 
                        description={event.description}
                        side={event.side}
                      />
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
                  <div className="flex-1">
                    <MilestoneCard 
                      year={event.year} 
                      title={event.title} 
                      description={event.description}
                      side={event.side}
                    />
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
