const MapSection = () => {
  // Google Maps location for KSP Hydro Engineers, Jaipur
  const mapLocation = "https://maps.app.goo.gl/qWyo0hOHrtoHLbxR6";
  const embedMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0!2d75.8!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890";

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-16 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-3">
            Find Us on Map
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Locate our head office in Bangalore
          </p>
        </div>

        {/* Map Container */}
        <div className="bg-gradient-to-br from-[#E3F2FD] via-[#BBDEFB] to-[#90CAF9]/40 rounded-3xl shadow-xl overflow-hidden min-h-[500px] md:min-h-[600px] relative">
          {/* Google Maps Iframe */}
          <iframe
            src={embedMapUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: '500px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
            title="KSP Hydro Engineers Location"
          ></iframe>

          {/* Overlay Button */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <a
              href={mapLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1E88E5] hover:bg-[#1976D2] text-white px-8 py-3.5 rounded-lg font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300"
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
