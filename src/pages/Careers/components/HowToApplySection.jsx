import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Mail, Phone, Briefcase, MessageSquare, Send } from 'lucide-react';
import { useToast } from '@/hooks/useToast';
import { sendEmail, TEMPLATES } from '@/lib/emailjs';

gsap.registerPlugin(ScrollTrigger);

const HowToApplySection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const introRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const stepCardRefs = useRef([]);
  const formContainerRef = useRef(null);
  const submitButtonRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { success, error } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const result = await sendEmail(data, TEMPLATES.CAREERS);

      if (result.success) {
        success(result.message);
        e.target.reset();
      }
    } catch (err) {
      error(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  useGSAP(() => {
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(headingRef.current, { opacity: 0, y: 20 });
      gsap.set(introRef.current, { opacity: 0, y: 16 });
      gsap.set(stepCardRefs.current, { opacity: 0, y: 20, scale: 0.98 });
      gsap.set(formContainerRef.current, { opacity: 0, y: 24 });
      gsap.set(submitButtonRef.current, { opacity: 0, y: 10 });

      // Create timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
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
        // Intro text animation
        .to(introRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
        }, '-=0.4')
        // Step cards staggered
        .to(stepCardRefs.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: {
            each: 0.15,
          },
        }, '-=0.3')
        // Form container
        .to(formContainerRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
        }, '-=0.3')
        // Submit button subtle emphasis
        .to(submitButtonRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        }, '-=0.4');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-20 overflow-hidden"
    >
      {/* Background Curved Shape - Desktop */}


      <div className="container relative z-10 px-4 mx-auto lg:px-8">
        {/* Section Heading */}
        <h2
          ref={headingRef}
          className="mb-6 text-2xl font-bold text-center md:text-3xl lg:text-4xl text-slate-900"
        >
          How to Apply
        </h2>

        {/* Introductory Text */}
        <div
          ref={introRef}
          className="max-w-2xl mx-auto mb-10 text-center"
        >
          <p className="mb-4 text-sm leading-relaxed text-gray-600 md:text-base">
            &quot;We are always open to connecting with individuals who are passionate about water
            engineering, sustainability, and execution excellence.
          </p>
          <p className="text-sm leading-relaxed text-gray-600 md:text-base">
            If you believe your skills and mindset align with KSP Hydro,
            <br className="hidden md:block" />
            we&apos;d be happy to hear from you.&quot;
          </p>
        </div>

        {/* Step Indicator Cards */}
        <div
          ref={stepsContainerRef}
          className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 md:gap-6 max-w-3xl mx-auto"
        >
          {/* Step 1 */}
          <div
            ref={(el) => (stepCardRefs.current[0] = el)}
            className="flex items-start gap-4 p-5 rounded-xl bg-cyan-50"
          >
            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full shrink-0 bg-cyan-500">
              1
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-slate-900 md:text-base">
                Fill out the application form
              </h3>
              <p className="text-xs text-gray-600 md:text-sm">
                Complete the form below with your details and area of interest
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            ref={(el) => (stepCardRefs.current[1] = el)}
            className="flex items-start gap-4 p-5 rounded-xl bg-emerald-50"
          >
            <div className="flex items-center justify-center w-8 h-8 text-sm font-bold text-white rounded-full shrink-0 bg-emerald-500">
              2
            </div>
            <div>
              <h3 className="mb-1 text-sm font-bold text-slate-900 md:text-base">
                Email your resume
              </h3>
              <p className="text-xs text-gray-600 md:text-sm">
                Send your resume to:
              </p>
              <a
                href="mailto:proposal@ksphydro.com"
                className="text-xs font-medium text-blue-600 underline md:text-sm"
              >
                proposal@ksphydro.com
              </a>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div
          ref={formContainerRef}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-900">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="user_name"
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your full name"
                  className="w-full py-3 pl-12 pr-4 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Email and Phone - Two columns on desktop */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Email Address */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    required
                    disabled={isSubmitting}
                    placeholder="your.email@example.com"
                    className="w-full py-3 pl-12 pr-4 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-900">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="user_phone"
                    required
                    disabled={isSubmitting}
                    placeholder="+91 98765 43210"
                    className="w-full py-3 pl-12 pr-4 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Area of Interest */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-900">
                Area of Interest <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Briefcase className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="interest"
                  required
                  disabled={isSubmitting}
                  placeholder=""
                  className="w-full py-3 pl-12 pr-4 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-900">
                Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3 left-0 flex items-start pl-4 pointer-events-none">
                  <MessageSquare className="w-5 h-5 text-gray-400" />
                </div>
                <textarea
                  name="message"
                  required
                  disabled={isSubmitting}
                  rows={5}
                  placeholder="Tell us about your experience, skills, and why you'd like to join KSP Hydro..."
                  className="w-full py-3 pl-12 pr-4 text-sm border border-gray-200 rounded-lg bg-white resize-none focus:outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              ref={submitButtonRef}
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center w-full gap-2 py-3.5 text-sm font-semibold text-white bg-blue-600 rounded-lg md:text-base hover:bg-blue-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send className={`w-4 h-4 md:w-5 md:h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              {isSubmitting ? 'Sending Application...' : 'Submit Application'}
            </button>
          </form>

          {/* Required Fields Note */}
          <p className="mt-4 text-xs text-center text-gray-500 md:text-sm">
            <span className="text-red-500">*</span> Required fields
          </p>
        </div>

        {/* Footer Info Text */}
        <p className="max-w-2xl mx-auto mt-8 text-sm text-center text-gray-500 md:text-base">
          Our team reviews every application and will reach out if there is a suitable opportunity.
        </p>
      </div>
    </section>
  );
};

export default HowToApplySection;
