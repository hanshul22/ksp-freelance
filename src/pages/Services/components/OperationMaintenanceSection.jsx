import React, { useRef } from 'react';
import { Settings, CalendarCheck, Activity, HeadphonesIcon, CheckCircle, Clock, TrendingUp, Shield, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OperationMaintenanceSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Element Selection via Structure
    const container = containerRef.current.querySelector('.container');
    if (!container) return;

    // Section 1: Header
    const headerBlock = container.children[0];
    const headerIconWrapper = headerBlock.children[0];
    const headerTitle = headerBlock.children[1];
    const headerDesc = headerBlock.children[2];

    // Section 2: Cards
    const cardsGrid = container.children[1];
    const omCards = gsap.utils.toArray(cardsGrid.children);

    // Section 3: Benefits Strip
    const benefitsStrip = container.children[2];
    const benefitsGrid = benefitsStrip.querySelector('.grid');
    const benefitsItems = benefitsGrid ? gsap.utils.toArray(benefitsGrid.children) : [];

    // Initial States
    const allElements = [headerIconWrapper, headerTitle, headerDesc, ...omCards, benefitsStrip];

    if (prefersReduced) {
      gsap.set(allElements, { opacity: 0 });
    } else {
      gsap.set(allElements, { opacity: 0 });
      // Y values set inside matchMedia
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)",
    }, (context) => {
      const { isDesktop } = context.conditions;

      const headerY = isDesktop ? 22 : 14;
      const cardY = isDesktop ? 28 : 16;
      const stripY = isDesktop ? 20 : 14;

      if (!prefersReduced) {
        gsap.set([headerIconWrapper, headerTitle, headerDesc], { y: headerY });
        gsap.set(omCards, { y: cardY });
        gsap.set(benefitsStrip, { y: stripY });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      // 1. Header Reveal
      if (!prefersReduced) {
        tl.to(headerIconWrapper, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
          .to(headerTitle, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
          .to(headerDesc, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.4");
      } else {
        tl.to([headerIconWrapper, headerTitle, headerDesc], { opacity: 1, duration: 0.6, stagger: 0.1 });
      }

      // 2. O&M Cards Reveal
      if (!prefersReduced) {
        tl.to(omCards, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.14,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(omCards, { opacity: 1, duration: 0.8, stagger: 0.14 }, "-=0.2");
      }

      // 3. Benefits Strip Reveal
      if (!prefersReduced) {
        tl.to(benefitsStrip, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.2");
      } else {
        tl.to(benefitsStrip, { opacity: 1, duration: 0.8 }, "-=0.2");
      }

      // Micro-interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        // O&M Cards Hover
        omCards.forEach(card => {
          const iconWrapper = card.querySelector('div'); // First div is icon wrapper

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -3,
              boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)", // shadow-xl
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: -2, scale: 1.05, duration: 0.25, ease: "power2.out" });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // shadow-lg (original)
              duration: 0.25,
              ease: "power2.out"
            });
            if (iconWrapper) {
              gsap.to(iconWrapper, { y: 0, scale: 1, duration: 0.25, ease: "power2.out" });
            }
          });
        });

        // Benefits Items Hover
        benefitsItems.forEach(item => {
          const iconWrapper = item.querySelector('div'); // First div is icon wrapper
          if (iconWrapper) {
            item.addEventListener('mouseenter', () => {
              gsap.to(iconWrapper, { scale: 1.06, duration: 0.25, ease: "power2.out" });
            });
            item.addEventListener('mouseleave', () => {
              gsap.to(iconWrapper, { scale: 1, duration: 0.25, ease: "power2.out" });
            });
          }
        });
      }
    });

  }, { scope: containerRef });

  const primaryCards = [
    {
      icon: CalendarCheck,
      title: "Preventive & Breakdown Maintenance",
      description: "Planned maintenance programs to minimize downtime and extend system life.",
      items: [
        "Equipment performance checks",
        "Breakdown handling and repairs",
        "Preventive maintenance schedules",
        "Spares and consumables management"
      ]
    },
    {
      icon: Activity,
      title: "Monitoring & Compliance",
      description: "Ensuring systems operate within statutory and environmental norms.",
      items: [
        "Compliance documentation",
        "Safety and performance audits",
        "Sludge handling as per regulations",
        "Water testing (NABL-accredited labs)"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Plant Operations",
      description: "End-to-end operation of water and wastewater treatment plants by trained technical personnel.",
      items: [
        "STP, ETP, WTP & RO",
        "Daily operational reporting",
        "Process monitoring and control",
        "swimming pools, and water bodies"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Optimized Performance",
      description: "Regular tuning ensures systems run at peak efficiency, reducing energy consumption and operational costs."
    },
    {
      icon: Clock,
      title: "Extended Equipment Life",
      description: "Proactive maintenance prevents premature wear and tear, protecting your investment for the long term."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "We handle all environmental norms, audits, and documentation, keeping you fully compliant."
    },
    {
      icon: RefreshCw,
      title: "Priority Support",
      description: "Quick response times and dedicated technical support for any operational issues or breakdowns."
    }
  ];

  return (
    <section ref={containerRef} id="operation-maintenance" className="w-full py-16 lg:py-24">
      <div className="container px-4 mx-auto lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center justify-center mb-6 w-14 h-14 bg-emerald-500 rounded-xl">
            <Settings className="text-white w-7 h-7" />
          </div>
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-slate-900">
            Operation & Maintenance
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-gray-500">
            Comprehensive support services to keep your systems running efficiently for years to come
          </p>
        </div>

        {/* Primary Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {primaryCards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-2xl lg:p-8"
            >
              <div
                className="flex items-center justify-center w-12 h-12 mb-5 rounded-xl"
                style={{ background: 'linear-gradient(180deg, #00A63E 0%, #155DFC 100%)' }}
              >
                <card.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {card.title}
              </h3>

              <p className="mb-5 leading-relaxed text-gray-500">
                {card.description}
              </p>

              <p className="mb-3 text-sm font-semibold text-slate-900">
                Includes:
              </p>

              <ul className="space-y-2">
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AMC Benefits Section */}
        <div className="p-8 shadow-sm bg-gray-50 rounded-2xl lg:p-12">
          <h3 className="mb-10 text-2xl font-bold text-center text-slate-900">
            AMC Benefits
          </h3>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  className="flex items-center justify-center w-12 h-12 mb-4 rounded-xl"
                  style={{ background: 'linear-gradient(180deg, #00A63E 0%, #155DFC 100%)' }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="mb-1 font-semibold text-slate-900">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationMaintenanceSection;
