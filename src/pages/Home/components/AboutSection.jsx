import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/images/about.png';

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Desktop Background Vector - Right side organic shape */}
      <div className="absolute inset-0 hidden md:block -z-10 overflow-hidden">
        <svg 
          viewBox="0 0 1340 1036" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-[70%] h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          <path 
            d="M945.56 918.092C1168.54 814.147 1304.66 953.054 1344.85 1035.5L1341.72 379.579C1260.29 277.825 1144.42 271.563 1089.62 280.956C1034.81 290.349 975.311 248.081 972.179 223.034C972.179 59.0002 649.093 112.5 635.523 112.5C442.399 119 41.1201 105.6 -18.9999 0V514.207C-2.71509 603.124 82.78 694.233 123.492 728.673C185.082 774.593 333.941 852.343 436.661 795.987C539.38 739.631 612.035 793.378 635.523 827.296C733.232 990.102 882.926 955.663 945.56 918.092Z" 
            fill="#EFFEEF"
          />
        </svg>
      </div>

      <div className="px-4 mx-auto max-w-7xl md:px-8">
        {/* Mobile Layout */}
        <div className="relative block md:hidden">
          {/* Mobile Background Shape */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden -z-10">
            <svg 
              viewBox="0 0 375 462" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full min-h-[500px] object-cover"
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
            <span className="mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              About KSP Hydro Engineers
            </span>

            {/* Heading - Stacked for mobile */}
            <h2 className="text-[28px] font-bold leading-[1.2] text-gray-900 mb-4">
              Practical Water<br />
              Solutions for<br />
              Real-World Needs
            </h2>

            {/* Description */}
            <p className="text-sm leading-relaxed text-slate-600 max-w-[320px] mb-6">
              KSP Hydro Engineers provides end-to-end water and wastewater solutions, helping industries and communities transform raw and drainage water into safe, reusable, and potable water.
            </p>

            {/* CTA Button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-blue-600 bg-white border-2 border-blue-600 rounded-full font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Know More About Us
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Image */}
            <div className="mt-10 w-full px-2">
              <div className="relative overflow-hidden rounded-3xl shadow-xl">
                <img 
                  src={aboutImage} 
                  alt="Aerial view of wastewater treatment tanks at KSP Hydro Engineers facility" 
                  className="object-cover w-full h-auto aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="items-center hidden gap-12 md:grid lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden shadow-xl rounded-3xl">
              <img 
                src={aboutImage} 
                alt="Aerial view of wastewater treatment tanks at KSP Hydro Engineers facility" 
                className="object-cover w-full h-full aspect-[4/3]"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Label */}
            <div className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              About KSP Hydro Engineers
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-[44px] lg:leading-[1.15]">
              Practical Water Solutions for Real-World Needs
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed md:text-lg text-slate-600">
              KSP Hydro Engineers provides end-to-end water and wastewater solutions, helping industries and communities transform raw and drainage water into safe, reusable, and potable water.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 font-medium text-blue-600 bg-white border-2 border-blue-600 rounded-full hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
