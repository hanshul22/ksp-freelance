import { CircleDot, Shield, Leaf, Users, TrendingUp, Award } from 'lucide-react';

const CultureValuesSection = () => {
  return (
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
  );
};

export default CultureValuesSection;
