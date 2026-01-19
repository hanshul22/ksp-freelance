import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="relative bg-[#F3FBF5] py-16 overflow-hidden">
      {/* Decorative curved shapes */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-[#D4EED9] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4EED9] rounded-full translate-x-1/3 -translate-y-1/3 opacity-60" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#D4EED9] rounded-full -translate-x-1/3 translate-y-1/3 opacity-60" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4EED9] rounded-full translate-x-1/4 translate-y-1/4 opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            Find Us on Map
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Locate our head office in Bangalore
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-gradient-to-b from-[#E8F4FC] to-[#D6EBF8] rounded-2xl shadow-lg p-8 min-h-[400px] flex items-center justify-center">
          {/* Placeholder Content */}
          <div className="text-center">
            {/* Location Icon */}
            <div className="flex justify-center mb-4">
              <MapPin className="w-10 h-10 text-[#1E88E5]" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#0A1628] mb-1">
              Interactive Map
            </h3>

            {/* Subtext */}
            <p className="text-gray-500 text-sm mb-6">
              Actual Map
            </p>

            {/* Button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1E88E5] text-white px-6 py-3 rounded-lg font-medium text-sm"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
