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
    <section className="bg-gradient-to-r from-[#0D6EFD] to-[#2196F3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Have a Specific Inquiry?
          </h2>
          <p className="text-white/70 text-base md:text-lg">
            Our specialized teams are ready to assist you with detailed information
          </p>
        </div>

        {/* Inquiry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {inquiries.map((inquiry, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {inquiry.title}
              </h3>

              {/* Description */}
              <p className="text-white/70 text-sm mb-4">
                {inquiry.description}
              </p>

              {/* Contact Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white/80" />
                  <span className="text-white text-sm">{inquiry.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white/80" />
                  <span className="text-white text-sm">{inquiry.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-white/70 text-sm mb-4">
            Or call our main helpline for general inquiries
          </p>
          <a
            href="tel:+918023456789"
            className="inline-flex items-center gap-2 bg-white text-[#0D6EFD] px-6 py-3 rounded-full font-medium text-sm shadow-lg"
          >
            <Phone className="w-4 h-4" />
            +91 80 2345 6789
          </a>
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
