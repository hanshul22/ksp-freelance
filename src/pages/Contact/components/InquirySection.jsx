import { Mail, Phone } from 'lucide-react';

const inquiries = [
  {
    title: 'Sales Inquiry',
    description: 'Get product information, pricing, and quotations',
    email: 'sales@ksphydro.com',
    phone: '+91 80 2345 6789',
  },
  {
    title: 'Technical Support',
    description: 'System troubleshooting and technical assistance',
    email: 'support@ksphydro.com',
    phone: '+91 80 2345 6790',
  },
  {
    title: 'Partnership',
    description: 'Explore collaboration and partnership opportunities',
    email: 'partnerships@ksphydro.com',
    phone: '+91 98765 43210',
  },
];

const InquirySection = () => {
  return (
    <section className="bg-gradient-to-r from-[#155DFC] via-[#0092B8] to-[#155DFC] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Specific Inquiry?
          </h2>
          <p className="text-white/80 text-base md:text-lg">
            Our specialized teams are ready to assist you with detailed information
          </p>
        </div>

        {/* Inquiry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {inquiries.map((inquiry, index) => (
            <div
              key={index}
              className="bg-[#3AAFFF]/25 backdrop-blur-sm rounded-2xl p-6 border border-[#5AC8FF]/30"
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2">
                {inquiry.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                {inquiry.description}
              </p>

              {/* Contact Details */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white/70" />
                  <span className="text-white text-sm">{inquiry.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white/70" />
                  <span className="text-white text-sm">{inquiry.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-white/70 text-sm mb-5">
            Or call our main helpline for general inquiries
          </p>
          <a
            href="tel:+918023456789"
            className="inline-flex items-center gap-3 bg-white text-[#0B7DDA] px-8 py-3.5 rounded-full font-semibold text-base shadow-lg border border-[#E0E0E0]"
          >
            <Phone className="w-5 h-5" />
            +91 80 2345 6789
          </a>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
