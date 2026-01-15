import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { waterDroplet } from '@/assets';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh]">
      
      {/* Background Wave Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg 
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1341 897" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M386.29 779.592C163.314 675.646 27.19 814.553 -13 897L-9.86831 241.078C71.5556 139.325 187.428 133.063 242.233 142.455C297.037 151.848 356.539 109.581 359.671 84.534C373.45 16.9068 404.036 0 417.607 0H1350.85C1358.37 269.256 1353.98 362.661 1350.85 375.707C1334.57 464.624 1249.07 555.733 1208.36 590.172C1146.77 636.092 997.909 713.843 895.189 657.487C792.47 601.131 719.815 654.878 696.327 688.796C598.619 851.602 448.924 817.162 386.29 779.592Z" fill="#EFFAFE"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative pt-24 md:pt-48 mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Mobile Layout: Stacked vertically */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          
          {/* Water Drop - Centered on mobile, right on desktop */}
          <div className="relative flex items-center justify-center w-full lg:w-1/2 lg:order-last">
            <div className="relative w-64 h-64 md:w-full md:max-w-md lg:max-w-2xl xl:max-w-[48rem]">
              {/* Soft Glow Behind Droplet */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)',
                  transform: 'scale(1.2)',
                }}
              />
              
              {/* Water Droplet Image */}
              <div className="relative flex items-center justify-center w-full p-4 md:p-8 aspect-square">
                <img 
                  src={waterDroplet} 
                  alt="Water Droplet" 
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Text Content - Center on mobile, left on desktop */}
          <div className="space-y-5 w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight">
              <span className="text-gray-900">Transform</span>
              <br className="md:hidden" />
              <span className="text-gray-900"> Wastewater Into</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#155DFC] via-[#00B8DB] to-[#00C950]">Reusable & Potable</span>
              <br className="md:hidden" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#155DFC] via-[#00B8DB] to-[#00C950]"> Water</span>
            </h1>

            <p className="text-base leading-relaxed text-gray-600 md:text-lg max-w-xl mx-auto lg:mx-0">
              Engineering excellence in water purification, wastewater treatment, and fire-fighting 
              systems for industries, institutions, and communities.
            </p>

            {/* CTA Buttons - Full width stacked on mobile */}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#155DFC] to-[#0092B8] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-md w-full sm:w-auto"
              >
                Explore Our Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-7 py-3.5 rounded-full text-sm font-semibold border-2 border-blue-600 w-full sm:w-auto"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators Row - Bottom of hero */}
        <div className="pt-10 mt-8 md:mt-12 lg:mt-16">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-16">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gray-600">20+ Years Experience</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gray-600">500+ Projects Delivered</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gray-600">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;