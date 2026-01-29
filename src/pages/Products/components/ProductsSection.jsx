import { useRef } from 'react';
import {
  Droplets,
  CheckCircle,
  Filter,
  Recycle,
  FlaskConical,
  Layers,
  GlassWater,
  SlidersHorizontal,
  Cpu,
  RefreshCw,
  Activity,
  Settings,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ProductsData from '@/data/ProductsData';

gsap.registerPlugin(ScrollTrigger);

// Icon mapping based on headerIcon.type
const iconMap = {
  'droplets': Droplets,
  'filter': Filter,
  'recycle': Recycle,
  'flask': FlaskConical,
  'layers': Layers,
  'glass-water': GlassWater,
  'sliders': SlidersHorizontal,
  'cpu': Cpu,
  'refresh': RefreshCw,
  'activity': Activity,
  'settings': Settings,
};

// SVG paths for desktop
const desktopSvgPaths = {
  right: "M953.559 918.092C1176.54 814.147 1312.66 953.054 1352.85 1035.5L1349.72 379.579C1268.29 277.825 1152.42 271.563 1097.62 280.956C1042.81 290.349 983.31 248.081 980.179 223.034C980.179 59.0002 657.093 112.5 643.522 112.5C450.398 119 49.1196 105.6 -11.0004 0V514.207C5.28442 603.124 90.7795 694.233 131.491 728.673C193.081 774.593 341.941 852.343 444.66 795.987C547.38 739.631 620.035 793.378 643.522 827.296C741.231 990.102 890.926 955.663 953.559 918.092Z",
  left: "M387.29 918.092C164.314 814.147 28.19 953.054 -12 1035.5L-8.86831 379.579C72.5556 277.825 188.428 271.563 243.233 280.956C298.037 290.349 357.539 248.081 360.671 223.034C360.671 59.0002 683.757 112.5 697.327 112.5C890.451 119 1291.73 105.6 1351.85 0V514.207C1335.57 603.124 1250.07 694.233 1209.36 728.673C1147.77 774.593 998.909 852.343 896.189 795.987C793.47 739.631 720.815 793.378 697.327 827.296C599.619 990.102 449.924 955.663 387.29 918.092Z",
};

// SVG paths for mobile
const mobileSvgPaths = {
  right: "M243.669 445.968C317.567 395.476 362.68 462.951 376 503V185C349.015 135.573 309.575 131.913 291.412 136.476C273.249 141.038 253.529 120.507 252.491 108.34C252.491 28.6596 145.416 54.6477 140.918 54.6477C76.9142 57.805 19.9247 51.2958 0 0V250.5C5.397 293.692 8.50748 331.271 22 348C42.4118 370.306 59.4573 380.375 93.5 353C127.543 325.625 133.134 385.388 140.918 401.864C173.301 480.948 222.912 464.218 243.669 445.968Z",
  left: "M132.331 445.968C58.4331 395.476 13.3196 462.951 0 503V185C26.9851 135.573 66.4248 131.913 84.5878 136.476C102.751 141.038 122.471 120.507 123.509 108.34C123.509 28.6596 230.584 54.6477 235.082 54.6477C299.086 57.805 356.075 51.2958 376 0V250.5C370.603 293.692 367.493 331.271 354 348C333.588 370.306 316.543 380.375 282.5 353C248.457 325.625 242.866 385.388 235.082 401.864C202.699 480.948 153.088 464.218 132.331 445.968Z",
};

// SVG fill colors
const svgFillColors = {
  right: "#EFFAFE",
  left: "#EFFEEF",
};

const ProductSection = ({ product }) => {
  const containerRef = useRef(null);
  const IconComponent = iconMap[product.headerIcon.type] || Droplets;
  const { sections, svg: svgDirection } = product;

  const { contextSafe } = useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Elements
    const header = containerRef.current.querySelector('.product-header');
    const headerIcon = containerRef.current.querySelector('.header-icon');
    const headerTitle = containerRef.current.querySelector('.header-title');
    const headerSubtitle = containerRef.current.querySelector('.header-subtitle');
    const cards = gsap.utils.toArray('.info-card');
    const processSection = containerRef.current.querySelector('.process-section-container');
    const processTitle = containerRef.current.querySelector('.process-title');
    const processSteps = gsap.utils.toArray('.process-step');
    const benefitsCard = containerRef.current.querySelector('.benefits-card');
    const svgPaths = gsap.utils.toArray('.bg-svg-path');

    // 0. Section Entry (Fade In)
    gsap.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" });

    if (prefersReduced) {
      // Reduced Motion: Simple Fades
      ScrollTrigger.batch([header, ...cards, processSection, benefitsCard], {
        onEnter: (elements) => gsap.to(elements, { opacity: 1, duration: 0.5, stagger: 0.1 }),
        start: "top 85%"
      });
      return;
    }

    // 1. Header Animation (Group)
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: "top 85%",
        toggleActions: "play reverse play reverse"
      }
    });

    headerTl.fromTo(header,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      .from(headerIcon, { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" }, "-=0.6")
      .from([headerTitle, headerSubtitle], { y: 10, opacity: 0, stagger: 0.1, duration: 0.6, ease: "power2.out" }, "-=0.4");

    // 2. Info Cards Animation
    mm.add("(min-width: 768px)", () => {
      // Desktop
      gsap.fromTo(cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile
      gsap.fromTo(cards,
        { y: 15, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });

    // 3. Process Section Animation
    const processTl = gsap.timeline({
      scrollTrigger: {
        trigger: processSection,
        start: "top 80%",
        toggleActions: "play reverse play reverse"
      }
    });

    processTl.fromTo(processSection,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 }
    )
      .fromTo(processTitle,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(processSteps,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );

    // 4. Key Benefits Card Animation
    gsap.fromTo(benefitsCard,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2, // Slight delay
        scrollTrigger: {
          trigger: benefitsCard,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      }
    );

    // 5. SVG Draw Animation (Scroll Scrub)
    svgPaths.forEach(path => {
      const length = path.getTotalLength();
      // Set initial state: hidden stroke, hidden fill
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
        fillOpacity: 0
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        fillOpacity: 1, // Progressively reveal fill
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6
        }
      });
    });

  }, { scope: containerRef });

  // Micro Interactions (Context Safe)
  const handleCardHover = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    gsap.to(e.currentTarget, {
      y: -3,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });
  });

  const handleCardLeave = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });
  });

  const handleIconHover = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    const icon = e.currentTarget.querySelector('.header-icon-svg');
    gsap.to(e.currentTarget, { y: -2, duration: 0.2, ease: "power2.out", overwrite: true });
    if (icon) gsap.to(icon, { scale: 1.05, duration: 0.2, ease: "power2.out", overwrite: true });
  });

  const handleIconLeave = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    const icon = e.currentTarget.querySelector('.header-icon-svg');
    gsap.to(e.currentTarget, { y: 0, duration: 0.2, ease: "power2.out", overwrite: true });
    if (icon) gsap.to(icon, { scale: 1, duration: 0.2, ease: "power2.out", overwrite: true });
  });

  const handleProcessHover = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    const text = e.currentTarget.querySelector('.process-text');
    if (text) gsap.to(text, { x: 4, duration: 0.3, ease: "power2.out", overwrite: true });
  });

  const handleProcessLeave = contextSafe((e) => {
    if (window.innerWidth < 768) return;
    const text = e.currentTarget.querySelector('.process-text');
    if (text) gsap.to(text, { x: 0, duration: 0.3, ease: "power2.out", overwrite: true });
  });

  return (
    <section ref={containerRef} id={product.slug} className="product-section relative py-20 md:mb-36 opacity-0">
      <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] pointer-events-none ">
        {/* Desktop SVG */}
        <svg
          className="hidden w-full md:block bg-svg"
          height="1035"
          preserveAspectRatio="none"
          viewBox="0 0 1340 1036"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="bg-svg-path"
            d={desktopSvgPaths[svgDirection]}
            fill={svgFillColors[svgDirection]}
            stroke="#94A3B8"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* mobile SVG */}
        <svg
          className="block w-full mt-9 md:hidden bg-svg"
          height="503"
          viewBox="0 0 376 503"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="bg-svg-path"
            d={mobileSvgPaths[svgDirection]}
            fill={svgFillColors[svgDirection]}
            stroke="#94A3B8"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="product-header mb-12 text-center opacity-0">
          {/* Icon */}
          <div
            className="header-icon inline-flex items-center justify-center mb-6 w-14 h-14 rounded-xl cursor-default"
            style={{ backgroundColor: product.headerIcon.bgColor }}
            onMouseEnter={handleIconHover}
            onMouseLeave={handleIconLeave}
          >
            <IconComponent className="header-icon-svg text-white w-7 h-7 transition-none" />
          </div>

          <h2 className="header-title text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            {product.title}
          </h2>
          <p className="header-subtitle max-w-2xl mx-auto text-base text-gray-500 md:text-lg">
            {product.subtitle}
          </p>
        </div>

        {/* Top Information Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
          {/* Card 1 - What It Is */}
          <div
            className="info-card p-6 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-xl opacity-0 cursor-default"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{sections.whatItIs.title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              {sections.whatItIs.description}
            </p>
          </div>

          {/* Card 2 - Where It's Used */}
          <div
            className="info-card p-6 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-xl opacity-0 cursor-default"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{sections.whereItsUsed.title}</h3>
            <ul className="space-y-2">
              {sections.whereItsUsed.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="flex-shrink-0 w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 - Advantages */}
          <div
            className="info-card p-6 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-xl opacity-0 cursor-default"
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
          >
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{sections.advantages.title}</h3>
            <ul className="space-y-2">
              {sections.advantages.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#155DFC] flex-shrink-0" />
                  <span className="text-sm text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Overview Section */}
        <div className="process-section-container p-8 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-xl opacity-0">
          <h3 className="process-title text-xl font-bold text-[#0A1628] mb-6 opacity-0">
            Process Overview & Benefits
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left - Treatment Process */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-[#155DFC]" />
                <span className="text-sm font-semibold text-[#0A1628]">
                  {sections.processOverview.title}
                </span>
              </div>

              <ul className="space-y-3">
                {sections.processOverview.steps.map((step, index) => (
                  <li
                    key={index}
                    className="process-step flex items-center gap-3 opacity-0 cursor-default"
                    onMouseEnter={handleProcessHover}
                    onMouseLeave={handleProcessLeave}
                  >
                    <span className="flex items-center justify-center w-6 h-6 bg-[#155DFC] text-white text-xs font-bold rounded-full flex-shrink-0 transition-transform duration-300">
                      {index + 1}
                    </span>
                    <span className="process-text text-sm text-gray-600 transition-transform duration-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Key Benefits (Benefits Card) */}
            <div className="benefits-card bg-[#F0F9FF] rounded-xl p-6 opacity-0">
              <h4 className="text-sm font-semibold text-[#0A1628] mb-4">{sections.keyBenefits.title}</h4>
              <ul className="space-y-4">
                {sections.keyBenefits.items.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#0A1628] block">
                        {benefit}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <>
      {ProductsData.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductsSection;
