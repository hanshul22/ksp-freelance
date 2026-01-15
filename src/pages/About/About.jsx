import Header from '@/components/layout/Header';
import { CheckCircle2, Factory, Building2, Hospital, Hotel, Droplets } from 'lucide-react';

const About = () => {
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="w-full min-h-[70vh] flex items-center justify-center px-6"
        style={{
          background: 'linear-gradient(135deg, #0891b2 0%, #0ea5a9 25%, #0284c7 60%, #1d4ed8 100%)'
        }}
      >
        <div className="max-w-[1100px] w-full text-center pt-24">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white leading-tight mb-6">
            About KSP Hydro Engineers
          </h1>
          <p className="text-lg md:text-xl text-white/85 font-normal leading-relaxed max-w-2xl mx-auto">
            Building trust, credibility, and sustainable water solutions for over two decades
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
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

      {/* Our Journey Section */}
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
    </div>
  );
};

export default About;
