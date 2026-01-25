import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/images/about.png';

const AboutSection = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Shape - Mobile */}
      <div className="absolute inset-0 -z-10 block md:hidden">
        <svg 
          viewBox="0 0 375 462" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M328.685 445.968C346.5 433.12 365.5 435 374.5 458V142.5C352.359 147.063 340.705 120.507 339.44 108.34C339.44 28.6596 208.912 54.6477 203.429 54.6477C125.407 57.805 23.2887 51.2958 -1 0V249.779C5.5791 292.971 16.5 338.5 30.5 358.5C36.1 366.5 81.5895 414.03 123.088 386.655C164.587 359.28 193.94 385.388 203.429 401.864C242.904 480.948 303.381 464.218 328.685 445.968Z" 
            fill="#EFFEEF"
          />
        </svg>
      </div>

      {/* Background Shape - Desktop */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <svg 
          viewBox="0 0 1400 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M1200 750C1350 700 1400 720 1400 800V200C1350 210 1320 170 1315 150C1315 40 900 80 890 80C750 85 500 75 450 0H0V400C20 480 60 560 100 600C120 620 220 700 320 650C420 600 480 640 500 670C580 800 720 770 800 740C950 680 1100 720 1200 750Z" 
            fill="#EFFEEF"
          />
        </svg>
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl">
        {/* Content Container - Center aligned */}
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <span className="text-xs md:text-sm font-semibold tracking-widest text-blue-600 uppercase mb-4 md:mb-6">
            About KSP Hydro Engineers
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4 md:mb-6 max-w-lg md:max-w-2xl">
            Practical Water Solutions for Real-World Needs
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-slate-600 max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mb-6 md:mb-8">
            KSP Hydro Engineers provides end-to-end water and wastewater solutions, helping industries and communities transform raw and drainage water into safe, reusable, and potable water.
          </p>

          {/* CTA Button */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 text-sm md:text-base text-blue-600 bg-white border-2 border-blue-600 rounded-full font-medium"
          >
            Know More About Us
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </Link>

          {/* Image - Desktop Only */}
          <div className="hidden md:block mt-10 lg:mt-14 w-full max-w-2xl lg:max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-lg">
              <img 
                src={aboutImage} 
                alt="Aerial view of wastewater treatment tanks at KSP Hydro Engineers facility" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
