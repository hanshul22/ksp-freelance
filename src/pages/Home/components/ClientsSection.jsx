import clientLogo1 from '@/assets/images/clientlogo1.png';
import clientLogo2 from '@/assets/images/clientlogo2.png';
import clientLogo3 from '@/assets/images/clientlogo3.png';
import clientLogo4 from '@/assets/images/clientlogo4.png';
import clientLogo5 from '@/assets/images/clientlogo5.png';
import clientLogo6 from '@/assets/images/clientlogo6.png';

const ClientsSection = () => {
  const clients = [
    { id: 1, logo: clientLogo1, name: 'Client 1' },
    { id: 2, logo: clientLogo2, name: 'Client 2' },
    { id: 3, logo: clientLogo3, name: 'Client 3' },
    { id: 4, logo: clientLogo4, name: 'Client 4' },
    { id: 5, logo: clientLogo5, name: 'Client 5' },
    { id: 6, logo: clientLogo6, name: 'Client 6' },
  ];

  // Duplicate the clients array for seamless loop
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">
            Trusted Partnerships
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Clients
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Proud to serve leading organizations across industries
          </p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative overflow-hidden mb-12 md:mb-16">
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 mx-3 md:mx-4"
              >
                <div className="flex items-center justify-center w-40 h-24 sm:w-56 sm:h-32 md:w-64 md:h-36">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-10 md:p-12">
            <div className="flex items-start gap-4 md:gap-6">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 italic">
                  &quot;KSP Hydro Engineers transformed our industrial wastewater management 
                  system. Their expertise and commitment to sustainable solutions 
                  exceeded our expectations. The team&apos;s professionalism and ongoing 
                  support have been invaluable.&quot;
                </p>
                <div>
                  <p className="text-gray-900 font-semibold text-sm md:text-base">Client</p>
                  <p className="text-gray-500 text-xs md:text-sm">HR Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
