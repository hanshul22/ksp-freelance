import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/images/about.png';

const AboutSection = () => {
  return (
    <section className="relative py-12 md:py-24 overflow-hidden">
      {/* Left Organic Shape */}
      <div className="absolute left-0 top-1/2 -translate-y-1/4 -z-10 pointer-events-none">
        <svg 
          width="120" 
          height="300" 
          viewBox="0 0 120 300" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-auto md:w-28 lg:w-32"
        >
          <path 
            d="M-60 0C20 30 80 80 90 150C100 220 60 270 -60 300V0Z" 
            fill="#EFFEEF"
          />
        </svg>
      </div>

      {/* Right Organic Shape - Top */}
      <div className="absolute right-0 top-0 -z-10 pointer-events-none">
        <svg 
          width="100" 
          height="200" 
          viewBox="0 0 100 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-auto md:w-24 lg:w-28"
        >
          <path 
            d="M100 0C40 20 20 60 30 100C40 140 80 170 100 200V0Z" 
            fill="#EFFEEF"
          />
        </svg>
      </div>

      {/* Right Organic Shape - Bottom (near image) */}
      <div className="absolute right-0 bottom-20 md:bottom-32 -z-10 pointer-events-none">
        <svg 
          width="80" 
          height="180" 
          viewBox="0 0 80 180" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-auto md:w-20 lg:w-24"
        >
          <path 
            d="M80 0C30 20 10 50 20 90C30 130 60 160 80 180V0Z" 
            fill="#EFFEEF"
          />
        </svg>
      </div>

      {/* Left Organic Shape - Bottom (near image) */}
      <div className="absolute left-0 bottom-10 md:bottom-20 -z-10 pointer-events-none">
        <svg 
          width="100" 
          height="220" 
          viewBox="0 0 100 220" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-auto md:w-24 lg:w-28"
        >
          <path 
            d="M-20 0C50 30 70 80 60 120C50 160 20 190 -20 220V0Z" 
            fill="#EFFEEF"
          />
        </svg>
      </div>

      <div className="relative z-10 px-6 mx-auto max-w-md md:max-w-4xl lg:max-w-5xl">
        {/* Content Container - Center aligned */}
        <div className="flex flex-col items-center text-center">
          {/* Label */}
          <span className="text-xs md:text-sm font-semibold tracking-[0.15em] text-blue-600 uppercase mb-4 md:mb-5">
            About KSP Hydro Engineers
          </span>

          {/* Heading - Mobile specific line breaks */}
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-gray-900 mb-5 md:mb-6">
            <span className="block md:inline">Practical Water</span>{' '}
            <span className="block md:inline">Solutions for</span>{' '}
            <span className="block md:inline">Real-World Needs</span>
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg leading-[1.7] text-gray-600 max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-2xl mb-6 md:mb-8">
            KSP Hydro Engineers provides end-to-end water and wastewater solutions, helping industries and communities transform raw and drainage water into safe, reusable, and potable water.
          </p>

          {/* CTA Button */}
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm md:text-base text-blue-600 bg-white border-2 border-blue-600 rounded-full font-medium"
          >
            Know More About Us
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Image */}
          <div className="mt-8 md:mt-12 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl">
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl">
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
