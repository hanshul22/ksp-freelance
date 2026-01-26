import { MapPin, ArrowRight } from 'lucide-react';

const office = {
  title: 'Head Office',
  company: 'KSP Hydro Engineers Pvt. Ltd.',
  address: ['S-1 A/8, Arya Square Mall', 'Subhash Nagar, Jaipur – 302016'],
  country: 'India',
};

const OfficesSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">
            Our Office
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Visit us at any of our locations across India
          </p>
        </div>

        {/* Single Centered Office Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 bg-[#1E88E5] rounded-xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0A1628] text-center mb-4">
                {office.title}
              </h3>

              {/* Address */}
              <div className="text-center space-y-1 text-gray-600 text-sm mb-1">
                <p className="font-medium">{office.company}</p>
                {office.address.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              
              {/* Country */}
              <p className="font-semibold text-[#0A1628] text-center text-sm mb-6">
                {office.country}
              </p>

              {/* Get Directions Link */}
              <div className="flex justify-center">
                <a
                  href="https://maps.app.goo.gl/qWyo0hOHrtoHLbxR6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1E88E5] text-sm font-medium hover:gap-3 transition-all duration-300"
                >
                  Get Directions
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
