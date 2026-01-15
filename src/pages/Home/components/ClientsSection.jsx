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
    <section className="relative py-16 overflow-hidden md:py-24">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
         className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M968.71 779.592C1191.69 675.646 1327.81 814.553 1368 897L1364.87 241.078C1283.44 139.325 1167.57 133.063 1112.77 142.455C1057.96 151.848 998.461 109.581 995.329 84.534C981.55 16.9068 950.964 0 937.393 0H4.14998C-3.36601 269.256 1.01827 362.661 4.14998 375.707C20.4348 464.624 105.93 555.733 146.642 590.172C208.232 636.092 357.091 713.843 459.811 657.487C562.53 601.131 635.185 654.878 658.673 688.796C756.381 851.602 906.076 817.162 968.71 779.592Z"
            fill="#EFFEEF"
          />
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-wide text-blue-600 uppercase">
            Trusted Partnerships
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Clients
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-600">
            Proud to serve leading organizations across industries
          </p>
        </div>

        {/* Infinite Scrolling Logos */}
        <div className="relative mb-12 overflow-hidden md:mb-16">
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div key={`${client.id}-${index}`} className="flex-shrink-0 mx-3 md:mx-4">
                <div className="flex items-center justify-center w-40 h-24 sm:w-56 sm:h-32 md:w-64 md:h-36">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <div className="p-10 bg-white shadow-lg rounded-2xl md:p-12">
            <div className="flex items-start gap-4 md:gap-6">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-10 h-10 text-blue-400 md:w-12 md:h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <p className="mb-6 text-base italic leading-relaxed text-gray-600 md:text-lg">
                  &quot;KSP Hydro Engineers transformed our industrial wastewater
                  management system. Their expertise and commitment to sustainable
                  solutions exceeded our expectations. The team&apos;s professionalism and
                  ongoing support have been invaluable.&quot;
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900 md:text-base">
                    Client
                  </p>
                  <p className="text-xs text-gray-500 md:text-sm">HR Manager</p>
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
