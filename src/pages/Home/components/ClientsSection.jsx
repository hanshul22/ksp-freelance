import { Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10, Client11 } from '@/assets';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ClientsSection = () => {
  const containerRef = useRef(null);

  const clients = [
    { id: 1, logo: Client1, name: 'Impact Kerala' },
    { id: 2, logo: Client2, name: 'RUIDP' },
    { id: 3, logo: Client3, name: 'Assam Cancer Care Foundation' },
    { id: 4, logo: Client4, name: 'DCSEM' },
    { id: 5, logo: Client5, name: 'CPWD' },
    { id: 6, logo: Client6, name: 'Marriott' },
    { id: 7, logo: Client7, name: 'Harvest Gold' },
    { id: 8, logo: Client8, name: 'Avery Dennison' },
    { id: 9, logo: Client9, name: 'OJI JK Packaging' },
    { id: 10, logo: Client10, name: 'Tata Communications' },
    { id: 11, logo: Client11, name: 'The Lalit' },
  ];

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      // --- SCROLL ANIMATION ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (prefersReducedMotion) {
        tl.to('.clients-header, .client-card, .testimonial-card', {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1
        });
      } else {
        // 1. Header Content
        tl.from('.clients-header', {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        });

        // 2. Client Grid
        tl.from('.client-wrapper', {
          y: isDesktop ? 20 : 12,
          opacity: 0,
          duration: 0.6,
          stagger: {
            amount: 0.8,
            grid: "auto",
            from: "start"
          },
          ease: "power2.out"
        }, "-=0.4");

        // 3. Testimonial Card
        tl.from('.testimonial-card', {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.2");
      }

      // --- MICRO INTERACTIONS (Desktop Only) ---
      if (isDesktop && !prefersReducedMotion) {
        // Logo Card Hover
        const cards = gsap.utils.toArray('.client-card');

        cards.forEach(card => {
          const logo = card.querySelector('.client-logo');

          const hoverTl = gsap.timeline({ paused: true });

          // Card Lift & Border
          hoverTl.to(card, {
            y: -3,
            borderColor: "rgba(37, 99, 235, 0.3)", // Subtle blue hint
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
            duration: 0.25,
            ease: "power2.out"
          }, 0);

          // Logo Scale
          if (logo) {
            hoverTl.to(logo, {
              scale: 1.05,
              duration: 0.25,
              ease: "power2.out"
            }, 0);
          }

          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());
        });

        // Testimonial Card Hover
        const testimonialCard = containerRef.current.querySelector('.testimonial-card');
        if (testimonialCard) {
          const tHoverTl = gsap.timeline({ paused: true });

          tHoverTl.to(testimonialCard, {
            boxShadow: "0 20px 40px -5px rgba(0, 0, 0, 0.12)",
            duration: 0.3,
            ease: "power2.out"
          });

          testimonialCard.addEventListener('mouseenter', () => tHoverTl.play());
          testimonialCard.addEventListener('mouseleave', () => tHoverTl.reverse());
        }
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="clients-section relative py-16 overflow-hidden md:py-24">
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
          <p className="clients-header mb-3 hidden text-sm font-semibold tracking-wide text-blue-600 uppercase md:block">
            Trusted Partnerships
          </p>
          <h2 className="clients-header mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Our Clients
          </h2>
          <p className="clients-header max-w-3xl mx-auto text-base text-gray-600">
            Proud to work with leading organizations across hospitality, government, healthcare, industry, and institutions
          </p>
        </div>

        {/* Client Logos - Grid Layout */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16 md:gap-6 lg:gap-8">
          {clients.map((client) => (
            <div key={client.id} className="client-wrapper">
              <div
                className="client-card flex items-center justify-center h-24 p-6 bg-white border border-gray-100 shadow-sm rounded-xl md:h-32"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  width="160"
                  height="96"
                  className="client-logo object-contain w-full h-full transition-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* "And many more" text */}
        <p className="clients-header mb-12 text-sm text-center text-gray-500 md:mb-10">
          <strong> And many more across the world...</strong>
        </p>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto testimonial-card">
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
    </section>
  );
};

export default ClientsSection;
