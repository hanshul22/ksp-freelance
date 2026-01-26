import { useRef } from 'react';
import { CircleDot, Shield, Leaf, Users, TrendingUp, Award } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CultureValuesSection = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Selectors
    const header = '.culture-header';
    const cards = gsap.utils.toArray('.value-card');
    const metricsStrip = '.metrics-strip';

    // Initial States
    if (!prefersReduced) {
      gsap.set(header, { opacity: 0, y: 20 });
      gsap.set(cards, { opacity: 0, y: 24 });
      gsap.set(metricsStrip, { opacity: 0, y: 20 });
    } else {
      gsap.set([header, cards, metricsStrip], { opacity: 0 });
    }

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      const { isDesktop } = context.conditions;

      // Adjust initial Y for mobile
      if (!prefersReduced && !isDesktop) {
        gsap.set(header, { y: 12 });
        gsap.set(cards, { y: 14 });
      }

      // Main Scroll Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play reverse play reverse"
        }
      });

      if (!prefersReduced) {
        // Header
        tl.to(header, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        })
          // Cards
          .to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power2.out"
          }, "-=0.4")
          // Metrics
          .to(metricsStrip, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out"
          }, "-=0.2");
      } else {
        // Reduced Motion
        tl.to(header, { opacity: 1, duration: 0.6 })
          .to(cards, { opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.3")
          .to(metricsStrip, { opacity: 1, duration: 0.6 }, "-=0.3");
      }

      // Micro Interactions (Desktop Only)
      if (isDesktop && !prefersReduced) {
        // Value Cards Hover
        cards.forEach((card) => {
          const icon = card.querySelector('.value-icon');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, { y: -4, duration: 0.3, ease: "power2.out", boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" });
            if (icon) gsap.to(icon, { y: -3, scale: 1.05, duration: 0.3, ease: "power2.out" });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out", boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" });
            if (icon) gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });

        // Metric Items Hover
        const metricItems = gsap.utils.toArray('.metric-item');
        metricItems.forEach((item) => {
          const icon = item.querySelector('.metric-icon');

          item.addEventListener('mouseenter', () => {
            if (icon) gsap.to(icon, { scale: 1.06, duration: 0.3, ease: "power2.out" });
          });

          item.addEventListener('mouseleave', () => {
            if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
          });
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="culture-section relative w-full px-4 py-16 overflow-hidden md:px-8 md:py-20">

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="culture-header mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-900">
            Our Culture & Values
          </h2>
          <p className="max-w-3xl mx-auto text-base leading-relaxed md:text-lg text-slate-500">
            At KSP, our culture is shaped by how we think, work, and take responsibility towards our people, and the environment. We believe strong execution, processes, and committed teams are what deliver reliable water infrastructure over decades.
          </p>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Excellence Card */}
          <article className="value-card p-6 text-center bg-white shadow-sm rounded-xl transition-shadow">
            <div className="value-icon flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#155DFC] to-[#0092B8] w-14 h-14 rounded-xl">
              <CircleDot className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Excellence</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Delivering high-quality engineering through precision & expertise
            </p>
          </article>

          {/* Safety First Card */}
          <article className="value-card p-6 text-center bg-white shadow-sm rounded-xl transition-shadow">
            <div className="value-icon flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#155DFC] to-[#0092B8] w-14 h-14 rounded-xl">
              <Shield className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Safety First</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Prioritizing the health, safety, and well-being of people and environment
            </p>
          </article>

          {/* Sustainability Card */}
          <article className="value-card p-6 text-center bg-white shadow-sm rounded-xl transition-shadow">
            <div className="value-icon flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#155DFC] to-[#0092B8] w-14 h-14 rounded-xl">
              <Leaf className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Sustainability</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Designing responsible water solutions that conserve resources
            </p>
          </article>

          {/* Team Spirit Card */}
          <article className="value-card p-6 text-center bg-white shadow-sm rounded-xl transition-shadow">
            <div className="value-icon flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-[#155DFC] to-[#0092B8] w-14 h-14 rounded-xl">
              <Users className="text-white w-7 h-7" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-slate-900">Team Spirit</h3>
            <p className="text-sm leading-relaxed text-slate-500">
              Working collaboratively to drive innovation and long-term success.
            </p>
          </article>
        </div>

        {/* Stats Summary Card */}
        <div className="metrics-strip p-8 bg-white shadow-sm rounded-2xl md:p-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4">
            {/* Stat 1 */}
            <div className="metric-item text-center">
              <TrendingUp className="metric-icon w-8 h-8 mx-auto mb-3 text-green-500" />
              <p className="text-3xl font-bold md:text-4xl text-slate-900">100%</p>
              <p className="mt-1 text-sm text-slate-500">Safety Compliance</p>
            </div>

            {/* Stat 2 */}
            <div className="metric-item text-center">
              <Award className="metric-icon w-8 h-8 mx-auto mb-3 text-blue-500" />
              <p className="text-3xl font-bold md:text-4xl text-slate-900">500+</p>
              <p className="mt-1 text-sm text-slate-500">Projects Delivered</p>
            </div>

            {/* Stat 3 */}
            <div className="metric-item text-center">
              <Users className="metric-icon w-8 h-8 mx-auto mb-3 text-cyan-500" />
              <p className="text-3xl font-bold md:text-4xl text-slate-900">50+</p>
              <p className="mt-1 text-sm text-slate-500">Expert Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureValuesSection;
