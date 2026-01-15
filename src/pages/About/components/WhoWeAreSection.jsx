import { CheckCircle2, Factory, Building2, Hospital, Hotel, Droplets } from 'lucide-react';

const WhoWeAreSection = () => {
  const values = [
    'Innovation & Excellence',
    'Environmental Responsibility',
    'Customer-Centric Approach',
    'Integrity & Transparency'
  ];

  const industries = [
    { icon: Factory, name: 'Industrial Manufacturing' },
    { icon: Building2, name: 'Real Estate & Infrastructure' },
    { icon: Hospital, name: 'Healthcare Institutions' },
    { icon: Hotel, name: 'Hospitality Sector' }
  ];

  return (
    <section className="w-full py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#F2FBFF' }}>
      {/* Background organic shapes */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-40"
        style={{ 
          background: 'radial-gradient(circle, #d4f1f9 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-30"
        style={{ 
          background: 'radial-gradient(circle, #d4f1f9 0%, transparent 70%)',
          transform: 'translate(30%, 30%)'
        }}
      />
      <div 
        className="absolute top-1/2 left-0 w-48 h-48 rounded-full opacity-25"
        style={{ 
          background: 'radial-gradient(circle, #c8eef7 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Company Overview */}
          <div className="space-y-8">
            {/* Who We Are */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-5">
                Who We Are
              </h2>
              <p className="text-base md:text-[17px] text-slate-600 leading-relaxed max-w-lg">
                KSP Hydro Engineers Pvt. Ltd. is a leading provider of comprehensive water and wastewater management solutions. Since 2003, we have been transforming the way industries, institutions, and communities manage their water resources.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                Our Mission
              </h3>
              <p className="text-base md:text-[17px] text-slate-600 leading-relaxed max-w-lg">
                To engineer sustainable water solutions that convert wastewater into reusable and potable water, contributing to environmental conservation while meeting the highest standards of quality and reliability.
              </p>
            </div>

            {/* Our Values */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                Our Values
              </h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-base text-slate-700">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Industries We Serve */}
          <div>
            <h2 className="text-2xl md:text-[26px] font-bold text-slate-900 mb-6">
              Industries We Serve
            </h2>

            {/* Industry Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm"
                >
                  <industry.icon className="w-10 h-10 text-blue-600 mb-4" strokeWidth={1.5} />
                  <p className="text-base font-semibold text-slate-900">
                    {industry.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Stat Card */}
            <div 
              className="rounded-2xl p-6 md:p-8"
              style={{ backgroundColor: '#2563eb' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Droplets className="w-8 h-8 text-white/90" />
                <span className="text-4xl md:text-5xl font-bold text-white">20+</span>
              </div>
              <p className="text-white/80 text-base md:text-lg">
                Years of Engineering Excellence
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
