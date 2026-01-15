import Header from '@/components/layout/Header';
import { CheckCircle2, Factory, Building2, Hospital, Hotel, Droplets, CircleDot, Shield, Leaf, Users, TrendingUp, Award, ShieldCheck, CheckCircle } from 'lucide-react';
import clientlogo1 from '@/assets/images/clientlogo1.png';
import clientlogo2 from '@/assets/images/clientlogo2.png';
import clientlogo3 from '@/assets/images/clientlogo3.png';
import clientlogo4 from '@/assets/images/clientlogo4.png';
import clientlogo5 from '@/assets/images/clientlogo5.png';
import clientlogo6 from '@/assets/images/clientlogo6.png';

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

      {/* Managing Director's Message Section */}
      <section className="w-full py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#F5FAFF' }}>
        {/* Subtle wave shapes at bottom */}
        <div 
          className="absolute bottom-0 left-0 w-full h-32 opacity-40"
          style={{
            background: 'radial-gradient(ellipse 80% 100% at 20% 100%, #d4f1f9 0%, transparent 60%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-full h-24 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 60% 100% at 80% 100%, #dbeafe 0%, transparent 60%)'
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Main Card */}
          <article 
            className="rounded-2xl p-8 md:p-12 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #f8fcff 0%, #f0f7ff 100%)',
              boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)'
            }}
          >
            {/* Header Row */}
            <header className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
              {/* Avatar Circle */}
              <div 
                className="w-16 h-16 rounded-full flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)'
                }}
              />
              
              {/* Title and Subtitle */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900">
                  Managing Director's Message
                </h2>
                <p className="text-blue-600 font-semibold text-sm md:text-base mt-1">
                  Vision for Sustainable Future
                </p>
              </div>
            </header>

            {/* Message Body with Left Accent */}
            <div className="border-l-[3px] border-blue-500 pl-6 space-y-5">
              {/* Quote */}
              <p className="text-slate-600 text-[15px] md:text-base leading-relaxed italic">
                "Water is not just a resource; it is the foundation of life and progress. At KSP Hydro Engineers, we have dedicated ourselves to ensuring that every drop counts. Our commitment goes beyond engineering solutions – we are building a sustainable future where clean water is accessible to all."
              </p>

              {/* Paragraph 1 */}
              <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
                Over the past two decades, we have witnessed the growing importance of water conservation and wastewater management. Our team of dedicated engineers and technical experts work tirelessly to deliver innovative, efficient, and environmentally responsible solutions.
              </p>

              {/* Paragraph 2 */}
              <p className="text-slate-600 text-[15px] md:text-base leading-relaxed">
                As we look ahead, our vision remains clear: to be the most trusted partner in water infrastructure, driving sustainability, innovation, and excellence in every project we undertake. Together with our clients, partners, and team, we are creating a water-secure future for generations to come.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 mt-8 pt-6">
              {/* Signature Block */}
              <p className="text-slate-900 font-bold">Mr. Kumar S. Patel</p>
              <p className="text-slate-500 text-sm mt-1">
                Managing Director, KSP Hydro Engineers Pvt. Ltd.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Our Culture & Values Section */}
      <section className="w-full py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#EDF8FA' }}>
        {/* Soft abstract curved shapes */}
        <div 
          className="absolute top-0 left-0 w-80 h-80 rounded-full opacity-30"
          style={{ 
            background: 'radial-gradient(circle, #c5e8ed 0%, transparent 70%)',
            transform: 'translate(-40%, -40%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-25"
          style={{ 
            background: 'radial-gradient(circle, #c5e8ed 0%, transparent 70%)',
            transform: 'translate(40%, 40%)'
          }}
        />
        <div 
          className="absolute top-1/3 right-10 w-48 h-48 rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #b8e4eb 0%, transparent 70%)'
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Culture & Values
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Built on principles of excellence, safety, and sustainability
            </p>
          </div>

          {/* Values Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Excellence Card */}
            <article className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CircleDot className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Excellence</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Committed to delivering superior quality in every project
              </p>
            </article>

            {/* Safety First Card */}
            <article className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Safety First</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Uncompromising safety standards for people and environment
              </p>
            </article>

            {/* Sustainability Card */}
            <article className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Sustainability</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Eco-friendly solutions for a greener tomorrow
              </p>
            </article>

            {/* Team Spirit Card */}
            <article className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Team Spirit</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Collaborative culture fostering innovation and growth
              </p>
            </article>
          </div>

          {/* Stats Summary Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {/* Stat 1 */}
              <div className="text-center">
                <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-slate-900">100%</p>
                <p className="text-sm text-slate-500 mt-1">Safety Compliance</p>
              </div>

              {/* Stat 2 */}
              <div className="text-center">
                <Award className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500 mt-1">Projects Delivered</p>
              </div>

              {/* Stat 3 */}
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-500 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-bold text-slate-900">50+</p>
                <p className="text-sm text-slate-500 mt-1">Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Compliance Section */}
      <section className="w-full py-20 px-6 relative overflow-hidden bg-white">
        {/* Subtle green curve at bottom */}
        <div 
          className="absolute bottom-0 left-0 w-full h-40 opacity-30"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 0% 100%, #d1fae5 0%, transparent 60%)'
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Column - Quality Overview */}
            <div>
              <h2 className="text-3xl md:text-[34px] font-bold text-slate-900 mb-5">
                Quality & Compliance
              </h2>
              <p className="text-base text-slate-500 leading-relaxed max-w-lg mb-8">
                Our commitment to quality is reflected in our adherence to international standards and best practices. We maintain rigorous quality assurance processes throughout every project lifecycle.
              </p>

              {/* Quality Assurance Card */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-5">
                  <ShieldCheck className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-semibold text-slate-900">Quality Assurance Practices</h3>
                </div>

                {/* Quality Practices List */}
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Stringent quality control at every project stage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Regular third-party audits and inspections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Continuous process improvement initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">Comprehensive testing and validation protocols</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Certifications */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 md:p-8 border border-slate-100">
                {/* Certifications Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold text-slate-900">Certifications & Standards</h3>
                </div>

                {/* Certification Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Cert 1 */}
                  <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">ISO 9001:2015 - Quality Management</span>
                    </div>
                  </div>

                  {/* Cert 2 */}
                  <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">ISO 14001:2015 - Environmental Management</span>
                    </div>
                  </div>

                  {/* Cert 3 */}
                  <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">OHSAS 18001 - Occupational Health & Safety</span>
                    </div>
                  </div>

                  {/* Cert 4 */}
                  <div className="bg-white rounded-lg p-5 border border-slate-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">CE Certification</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Esteemed Clients Section */}
      <section className="w-full py-20 px-6 relative overflow-hidden" style={{ backgroundColor: '#ECFDF5' }}>
        {/* Soft abstract curved shapes */}
        <div 
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-40"
          style={{ 
            background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
            transform: 'translate(-30%, -30%)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-35"
          style={{ 
            background: 'radial-gradient(circle, #d1fae5 0%, transparent 70%)',
            transform: 'translate(30%, 30%)'
          }}
        />
        <div 
          className="absolute top-1/2 right-20 w-80 h-80 rounded-full opacity-25"
          style={{ 
            background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)',
            transform: 'translateY(-50%)'
          }}
        />
        <div 
          className="absolute top-20 left-1/3 w-64 h-64 rounded-full opacity-20"
          style={{ 
            background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)'
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Esteemed Clients
            </h2>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Trusted by industry leaders across multiple sectors for reliable and sustainable water solutions
            </p>
          </div>

          {/* Client Logo Grid - Row 1 */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo1} alt="ITC Limited" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo2} alt="Tata Realty" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo3} alt="Mankind" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo4} alt="NIMS University" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo5} alt="Marriott" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo6} alt="The Lalit" className="max-w-full max-h-full object-contain" />
            </div>
          </div>

          {/* Client Logo Grid - Row 2 */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo6} alt="The Lalit" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo5} alt="Marriott" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo4} alt="NIMS University" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo2} alt="Tata Realty" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm w-[130px] h-[100px] flex items-center justify-center">
              <img src={clientlogo1} alt="ITC Limited" className="max-w-full max-h-full object-contain" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
