import { MapPin, ArrowRight } from 'lucide-react';

const offices = [
  {
    title: 'Head Office',
    company: 'KSP Hydro Engineers Pvt. Ltd.',
    address: ['123, Industrial Area, Phase 2', 'Bangalore, Karnataka - 560058'],
    country: 'India',
  },
  {
    title: 'Branch Office - Mumbai',
    company: null,
    address: ['Office No. 45, 3rd Floor', 'Business Complex, Andheri East', 'Mumbai, Maharashtra - 400069'],
    country: 'India',
  },
  {
    title: 'Branch Office - Delhi',
    company: null,
    address: ['Unit 201, Tower B', 'Corporate Park, Sector 18', 'Gurugram, Haryana - 122015'],
    country: 'India',
  },
];

const OfficesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Our Offices
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Visit us at any of our locations across India
          </p>
        </div>

        {/* Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offices.map((office, index) => (
            <div
              key={index}
              className="relative bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/20"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-[#1E88E5] rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#0A1628] mb-3">
                {office.title}
              </h3>

              {/* Address */}
              <div className="space-y-1 text-gray-500 text-sm mb-1">
                {office.company && <p>{office.company}</p>}
                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              
              {/* Country */}
              <p className="font-semibold text-[#0A1628] text-sm mb-4">
                {office.country}
              </p>

              {/* Get Directions Link */}
              <a
                href="#"
                className="inline-flex items-center gap-1 text-[#1E88E5] text-sm font-medium"
              >
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
