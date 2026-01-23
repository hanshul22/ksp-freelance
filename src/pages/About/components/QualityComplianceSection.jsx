import { ShieldCheck, Award, CheckCircle } from 'lucide-react';

const QualityComplianceSection = () => {
  return (
    <section className="relative w-full px-4 py-24 mt-24 mb-20 overflow-hidden md:px-8 md:py-20">

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column - Quality Overview */}
          <div>
            <h2 className="text-3xl md:text-[34px] font-bold text-slate-900 mb-5">
              Quality & Compliance
            </h2>
            <p className="max-w-lg mb-8 text-base leading-relaxed text-slate-500">
              Our commitment to quality is reflected in our adherence to international standards and best practices. We maintain rigorous quality assurance processes throughout every project lifecycle.
            </p>

            {/* Quality Assurance Card */}
            <div className="p-6 border bg-slate-50 rounded-xl border-slate-100">
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
            <div className="p-6 border bg-slate-50 rounded-xl md:p-8 border-slate-100">
              {/* Certifications Header */}
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-semibold text-slate-900">Certifications & Standards</h3>
              </div>

              {/* Certification Cards Grid */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Cert 1 */}
                <div className="p-5 bg-white border rounded-lg shadow-sm border-slate-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">ISO 9001:2015 - Quality Management</span>
                  </div>
                </div>

                {/* Cert 2 */}
                <div className="p-5 bg-white border rounded-lg shadow-sm border-slate-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">ISO 14001:2015 - Environmental Management</span>
                  </div>
                </div>

                {/* Cert 3 */}
                <div className="p-5 bg-white border rounded-lg shadow-sm border-slate-100">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">OHSAS 18001 - Occupational Health & Safety</span>
                  </div>
                </div>

                {/* Cert 4 */}
                <div className="p-5 bg-white border rounded-lg shadow-sm border-slate-100">
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
  );
};

export default QualityComplianceSection;
