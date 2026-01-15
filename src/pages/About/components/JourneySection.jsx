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
    <section className="w-full py-20 px-6 relative overflow-hidden bg-white">
      {/* Subtle green background shapes */}
      <div 
        className="absolute top-20 left-0 w-96 h-96 rounded-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
          transform: 'translate(-40%, 0%)'
        }}
      />
      <div 
        className="absolute bottom-20 right-0 w-80 h-80 rounded-full opacity-20"
        style={{ 
          background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
          transform: 'translate(40%, 0%)'
        }}
      />
      <div 
        className="absolute top-1/2 left-10 w-64 h-64 rounded-full opacity-15"
        style={{ 
          background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)',
          transform: 'translateY(-50%)'
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Journey
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
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
                <div className="hidden md:flex items-center">
                  {/* Left side content */}
                  <div className={`w-1/2 ${event.side === 'left' ? 'pr-12' : ''}`}>
                    {event.side === 'left' && (
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-right">
                        <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                        <h3 className="text-lg font-semibold text-slate-900 mt-1">{event.title}</h3>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">{event.description}</p>
                      </div>
                    )}
                  </div>

                  {/* Center node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                  </div>

                  {/* Right side content */}
                  <div className={`w-1/2 ${event.side === 'right' ? 'pl-12' : ''}`}>
                    {event.side === 'right' && (
                      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 text-left">
                        <span className="text-2xl font-bold text-blue-600">{event.year}</span>
                        <h3 className="text-lg font-semibold text-slate-900 mt-1">{event.title}</h3>
                        <p className="text-sm text-slate-500 mt-2 leading-relaxed">{event.description}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-start">
                  {/* Node */}
                  <div className="relative z-10 mr-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full border-[3px] border-white shadow-md ml-[6px]" />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                    <span className="text-xl font-bold text-blue-600">{event.year}</span>
                    <h3 className="text-base font-semibold text-slate-900 mt-1">{event.title}</h3>
                    <p className="text-sm text-slate-500 mt-2 leading-relaxed">{event.description}</p>
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
