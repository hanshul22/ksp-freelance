import { CircleDot, Shield, Leaf, Users, TrendingUp, Award } from 'lucide-react';

const CultureValuesSection = () => {
  return (
    <section className="relative w-full px-6 py-20 overflow-hidden" >
      {/* Soft abstract curved shapes */}

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Our Culture & Values
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            Built on principles of excellence, safety, and sustainability
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Excellence Card */}
          <article className="p-6 text-center bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center mx-auto mb-4 bg-blue-500 w-14 h-14 rounded-xl">
              <CircleDot className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Excellence</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Committed to delivering superior quality in every project
            </p>
          </article>

          {/* Safety First Card */}
          <article className="p-6 text-center bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center mx-auto mb-4 bg-blue-500 w-14 h-14 rounded-xl">
              <Shield className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Safety First</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Uncompromising safety standards for people and environment
            </p>
          </article>

          {/* Sustainability Card */}
          <article className="p-6 text-center bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center mx-auto mb-4 bg-blue-500 w-14 h-14 rounded-xl">
              <Leaf className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Sustainability</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Eco-friendly solutions for a greener tomorrow
            </p>
          </article>

          {/* Team Spirit Card */}
          <article className="p-6 text-center bg-white shadow-sm rounded-xl">
            <div className="flex items-center justify-center mx-auto mb-4 bg-blue-500 w-14 h-14 rounded-xl">
              <Users className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Team Spirit</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Collaborative culture fostering innovation and growth
            </p>
          </article>
        </div>

        {/* Stats Summary Card */}
        <div className="p-8 bg-white shadow-sm rounded-2xl md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
            {/* Stat 1 */}
            <div className="text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-3 text-green-500" />
              <p className="text-3xl font-bold md:text-4xl text-slate-900">100%</p>
              <p className="mt-1 text-sm text-slate-500">Safety Compliance</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <Award className="w-8 h-8 mx-auto mb-3 text-blue-500" />
              <p className="text-3xl font-bold md:text-4xl text-slate-900">500+</p>
              <p className="mt-1 text-sm text-slate-500">Projects Delivered</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-cyan-500" />
              <p className="text-3xl font-bold md:text-4xl text-slate-900">50+</p>
              <p className="mt-1 text-sm text-slate-500">Expert Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureValuesSection;
