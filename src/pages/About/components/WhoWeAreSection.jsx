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
    <section className="relative w-full px-6 py-20 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1340 719"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M386.29 610.356C163.314 514.169 27.19 642.708 -13 719L-9.86831 112.04C71.5556 17.882 191.695 50.8085 246.5 59.5C301.305 68.1915 382.868 23.1774 386 0H1338H1353.67C1356.94 164.764 1353.46 226.552 1350.85 236.619C1334.57 318.899 1249.07 403.207 1208.36 435.076C1146.77 477.568 997.909 549.515 895.189 497.365C792.47 445.216 719.815 494.951 696.327 526.337C598.619 676.991 448.924 645.122 386.29 610.356Z"
            fill="#EFFAFE"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column - Company Overview */}
          <div className="space-y-8">
            {/* Who We Are */}
            <div>
              <h2 className="mb-5 text-3xl font-bold md:text-4xl text-slate-900">
                Who We Are
              </h2>
              <p className="text-base md:text-[17px] text-slate-600 leading-relaxed max-w-lg">
                KSP Hydro Engineers Pvt. Ltd. is a leading provider of comprehensive water and wastewater management solutions. Since 2003, we have been transforming the way industries, institutions, and communities manage their water resources.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="mb-4 text-xl font-semibold md:text-2xl text-slate-900">
                Our Mission
              </h3>
              <p className="text-base md:text-[17px] text-slate-600 leading-relaxed max-w-lg">
                To engineer sustainable water solutions that convert wastewater into reusable and potable water, contributing to environmental conservation while meeting the highest standards of quality and reliability.
              </p>
            </div>

            {/* Our Values */}
            <div>
              <h3 className="mb-4 text-xl font-semibold md:text-2xl text-slate-900">
                Our Values
              </h3>
              <ul className="space-y-3">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="flex-shrink-0 w-5 h-5 text-green-500" />
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
            <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white border shadow-sm rounded-xl border-slate-100"
                >
                  <industry.icon className="w-10 h-10 mb-4 text-blue-600" strokeWidth={1.5} />
                  <p className="text-base font-semibold text-slate-900">
                    {industry.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Stat Card */}
            <div 
              className="p-6 rounded-2xl md:p-8"
              style={{ backgroundColor: '#2563eb' }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Droplets className="w-8 h-8 text-white/90" />
                <span className="text-4xl font-bold text-white md:text-5xl">20+</span>
              </div>
              <p className="text-base text-white/80 md:text-lg">
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
