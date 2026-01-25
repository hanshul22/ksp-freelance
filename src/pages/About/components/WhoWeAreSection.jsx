import { CheckCircle2, Factory, Building2, Users, Landmark, Droplets } from 'lucide-react';

const WhoWeAreSection = () => {
  const values = [
    'Innovation & Excellence',
    'Environmental Responsibility',
    'Customer-Centric Approach',
    'Integrity & Transparency'
  ];

  const industries = [
    { icon: Factory, name: 'Industrial & Commercial' },
    { icon: Building2, name: 'Institutions' },
    { icon: Users, name: 'Communities & Hospitality' },
    { icon: Landmark, name: 'Government & Municipalities' }
  ];

  return (
    <section className="relative w-full px-6 py-48 overflow-hidden md:py-48">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column - Company Overview */}
          <div className="space-y-6">
            {/* Who We Are */}
            <div>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl text-slate-900">
                Who We Are
              </h2>
              <p className="text-sm leading-relaxed md:text-base text-slate-600">
                KSP Hydro Engineers Pvt. Ltd. is a water and wastewater engineering company specializing in design, execution. Since 2003, KSP has worked with government bodies, institutions, industries, and hospitality solutions across India.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h3 className="mb-3 text-lg font-semibold md:text-xl text-slate-900">
                Our Mission
              </h3>
              <p className="text-sm leading-relaxed md:text-base text-slate-600">
                To engineer practical, compliant, and sustainable water solutions that enable safe water supply, responsible wastewater management, and long-term operational reliability, while supporting environmental conservation and regulatory compliance.
              </p>
            </div>

            {/* Our Values */}
            <div>
              <h3 className="mb-3 text-lg font-semibold md:text-xl text-slate-900">
                Our Values
              </h3>
              <p className="mb-3 text-sm leading-relaxed md:text-base text-slate-600">
                We are committed to make EARTH a better place to live by playing its part towards environmental preservation and thereby achieving sustainable growth. KSP creates value for its customers by developing innovative and eco - friendly solutions that are technically, financially and environmentally sustainable.
              </p>
            </div>
          </div>

          {/* Right Column - Industries We Serve */}
          <div>
            <h2 className="mb-5 text-xl font-bold md:text-2xl text-slate-900">
              Industries We Serve
            </h2>

            {/* Industry Cards Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="p-5 bg-white border shadow-sm rounded-xl border-slate-100"
                >
                  <industry.icon className="w-8 h-8 mb-3 text-blue-600" strokeWidth={1.5} />
                  <p className="text-sm font-medium text-slate-900">
                    {industry.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Highlight Stat Card */}
            <div 
              className="p-5 rounded-xl md:p-6"
              style={{ backgroundColor: '#2563eb' }}
            >
              <div className="flex items-center gap-3 mb-1">
                <Droplets className="w-7 h-7 text-white/90" />
                <span className="text-3xl font-bold text-white md:text-4xl">20+</span>
              </div>
              <p className="text-sm text-white/80 md:text-base">
                Years of Engineering Experience
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
