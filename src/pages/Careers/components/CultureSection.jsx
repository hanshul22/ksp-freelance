import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CultureSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const quoteRef = useRef(null);
  const paragraphRefs = useRef([]);

  useGSAP(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headingRef.current, { opacity: 0, y: 18 });
      gsap.set(quoteRef.current, { opacity: 0, y: 14 });
      gsap.set(paragraphRefs.current, { opacity: 0, y: 12 });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
        defaults: { ease: 'power3.out' },
      });

      // Heading animation
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      })
      // Quoted opening statement
      .to(quoteRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      }, '-=0.3')
      // Remaining paragraphs staggered
      .to(paragraphRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: {
          each: 0.18,
          from: 'start',
        },
      }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full py-16 md:py-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 
          ref={headingRef}
          className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-12"
        >
          Our Culture
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
          <p ref={quoteRef}>
            "At KSP Hydro, we believe technology alone doesn't win; execution does.
          </p>
          
          <p ref={(el) => (paragraphRefs.current[0] = el)}>
            Our strength lies in people who collaborate, take ownership, and deliver with purpose.
          </p>
          
          <p ref={(el) => (paragraphRefs.current[1] = el)}>
            We foster a culture where teams work closely toward shared goals, where learning never stops, and where individual growth directly contributes to organisational success.
          </p>
          
          <p ref={(el) => (paragraphRefs.current[2] = el)}>
            Our people represent KSP Hydro on every site and with every client; that responsibility shapes how we work, think, and grow together."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
