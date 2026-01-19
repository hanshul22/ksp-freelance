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
    <section className="relative bg-[#F3FBF5] py-16 overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left curve */}
        <svg
          className="absolute top-0 left-0 w-[300px] h-[400px]"
          viewBox="0 0 300 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="0" cy="200" rx="200" ry="250" fill="#E0F5E6" fillOpacity="0.6" />
        </svg>
        
        {/* Right curve */}
        <svg
          className="absolute bottom-0 right-0 w-[250px] h-[300px]"
          viewBox="0 0 250 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="200" cy="250" rx="180" ry="200" fill="#E0F5E6" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-white rounded-xl p-6 shadow-sm"
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
