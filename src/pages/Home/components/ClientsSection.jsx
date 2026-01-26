
import { Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11 } from '@/assets';



const ClientsSection = () => {
  // Row 1 clients - scrolls left
  const clientsRow1 = [
    { id: 1, logo: Client1, name: 'Impact Kerala' },
    { id: 2, logo: Client2, name: 'RUIDP' },
    { id: 3, logo: Client3, name: 'Assam Cancer Care Foundation' },
    { id: 4, logo: Client4, name: 'DCSEM' },
    { id: 5, logo: Client5, name: 'CPWD' },
    { id: 6, logo: Client6, name: 'Marriott' },
  ];

  // Row 2 clients - scrolls right
  const clientsRow2 = [
    { id: 7, logo: Client7, name: 'Harvest Gold' },
    { id: 8, logo: Client8, name: 'Avery Dennison' },
    { id: 9, logo: Client9, name: 'OJI JK Packaging' },
    { id: 10, logo: Client10, name: 'Tata Communications' },
    { id: 11, logo: Client11, name: 'The Lalit' },
  ];

  // Duplicate arrays for seamless infinite scroll
  const duplicatedRow1 = [...clientsRow1, ...clientsRow1, ...clientsRow1];
  const duplicatedRow2 = [...clientsRow2, ...clientsRow2, ...clientsRow2];

  return (
    <section className="relative py-16 overflow-hidden md:py-24">
      {/* Background SVG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Mobile SVG */}
        <div className="absolute top-0 left-0 w-full md:hidden">
          <svg
            className="w-full h-auto min-h-[462px] object-cover"
            viewBox="0 0 375 462"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M329.685 445.968C347.5 433.12 366.5 435 375.5 458V142.5C353.359 147.063 341.705 120.507 340.44 108.34C340.44 28.6596 209.912 54.6477 204.429 54.6477C126.407 57.805 24.2887 51.2958 0 0V249.779C6.5791 292.971 17.5 338.5 31.5 358.5C37.1 366.5 82.5895 414.03 124.088 386.655C165.587 359.28 194.94 385.388 204.429 401.864C243.904 480.948 304.381 464.218 329.685 445.968Z"
              fill="#EFFEEF"
            />
          </svg>
        </div>

        {/* Desktop SVG */}
        <div className="hidden md:block">
          <svg
            className="w-full"
            height="950"
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
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 hidden text-sm font-semibold tracking-wide text-blue-600 uppercase md:block">
            Trusted Partnerships
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Clients
          </h2>
          <p className="max-w-3xl mx-auto text-base text-gray-600">
            Proud to work with leading organizations across hospitality, government, healthcare, industry, and institutions
          </p>
        </div>

        {/* Client Logos - Row 1 (Scrolls Left) */}
        <div className="relative mb-6 overflow-hidden">
          <div className="flex animate-scroll-left hover:pause-animation">
            {duplicatedRow1.map((client, index) => (
              <div key={`row1-${client.id}-${index}`} className="flex-shrink-0 mx-3">
                <div className="flex items-center justify-center h-24 p-4 bg-white border border-gray-100 shadow-sm w-36 sm:w-40 sm:h-28 md:w-44 md:h-28 rounded-xl">
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

        {/* Client Logos - Row 2 (Scrolls Right) */}
        <div className="relative mb-8 overflow-hidden">
          <div className="flex animate-scroll-right hover:pause-animation">
            {duplicatedRow2.map((client, index) => (
              <div key={`row2-${client.id}-${index}`} className="flex-shrink-0 mx-3">
                <div className="flex items-center justify-center h-24 p-4 bg-white border border-gray-100 shadow-sm w-36 sm:w-40 sm:h-28 md:w-44 md:h-28 rounded-xl">
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

        {/* "And many more" text */}
        <p className="mb-12 text-sm text-center text-gray-500 md:mb-10">
          <strong> And many more across the world...</strong>
        </p>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-2xl md:pr-16 md:pl-10 md:py-10">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left md:gap-6">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-10 h-10 text-blue-500 md:text-teal-400 md:w-12 md:h-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-base md:text-2xl">
                <p className="mb-6 text-base italic leading-relaxed text-gray-600 md:text-base">
                  &quot;This refers to services provided by M/s KSP Hydro Engineers Pvt. Ltd. for our facilities. They are currently managing our sewage treatment plant and have consistently met our expectations with their expertise, dedicated workforce, quality assurance, compliance, safety measures, reliability, and 24/7 commitment. We highly recommend M/s KSP Hydro as specialists in water treatment services and as an excellent provider of O&M services.&quot;
                </p>
                <div>
                  <p className="text-sm font-semibold text-gray-900 md:text-base">
                    S C Agarwal
                  </p>
                  <p className="text-xs text-gray-500 md:text-sm">
                    Director, Ready Roti India Pvt Ltd
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
