import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/images/about.png';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        {/* Mobile Layout */}
        <div className="relative block md:hidden">
          {/* Mobile Background Shape */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden -z-10">
            <svg 
              viewBox="0 0 375 462" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full min-h-[400px] object-cover"
              preserveAspectRatio="xMidYMid slice"
            >
              <path 
                d="M328.685 445.968C346.5 433.12 365.5 435 374.5 458V142.5C352.359 147.063 340.705 120.507 339.44 108.34C339.44 28.6596 208.912 54.6477 203.429 54.6477C125.407 57.805 23.2887 51.2958 -1 0V249.779C5.5791 292.971 16.5 338.5 30.5 358.5C36.1 366.5 81.5895 414.03 123.088 386.655C164.587 359.28 193.94 385.388 203.429 401.864C242.904 480.948 303.381 464.218 328.685 445.968Z" 
                fill="#EFFEEF"
              />
            </svg>
          </div>

          {/* Mobile Content - Centered */}
          <div className="relative z-10 flex flex-col items-center px-4 py-8 text-center">
            {/* Label */}
            <span className="mb-5 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              About KSP Hydro Engineers
            </span>

            {/* Heading - Stacked for mobile */}
            <h2 className="text-[32px] font-bold leading-[1.15] text-gray-900 mb-5">
              Practical Water<br />
              Solutions for<br />
              Real-World<br />
              Needs
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-600 max-w-[300px] mb-6">
              KSP Hydro Engineers provides complete water and wastewater solutions from design and execution to long-term operation. We help governments, industries, and institutions convert wastewater into safe, reusable water through reliable, cost-effective systems built for real-world conditions.
            </p>

            {/* CTA Button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-blue-600 transition-all bg-white border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Know More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="items-center hidden gap-8 md:grid lg:grid-cols-2 lg:gap-12">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-lg rounded-2xl">
              <img 
                src={aboutImage} 
                alt="Aerial view of wastewater treatment tanks at KSP Hydro Engineers facility" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Label */}
            <div className="text-sm font-semibold tracking-wide text-blue-600 uppercase">
              About KSP Hydro Engineers
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Practical Water Solutions for Real-World Needs
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed md:text-lg text-slate-600">
              KSP Hydro Engineers provides complete water and wastewater solutions from design and execution to long-term operation. We help governments, industries, and institutions convert wastewater into safe, reusable water through reliable, cost-effective systems built for real-world conditions.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-2 font-medium text-blue-600 transition-all bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Know More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
