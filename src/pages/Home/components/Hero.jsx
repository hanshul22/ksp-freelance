import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { waterDrop } from '@/assets';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-8 md:pt-40 md:pb-16 overflow-hidden">
      
      {/* Background Wave Decoration - Desktop */}
      <div className="absolute inset-0 z-0 hidden pointer-events-none md:block">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1351 897"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0V241.078C71.5556 139.325 187.428 133.063 242.233 142.455C297.037 151.848 356.539 109.581 359.671 84.534C373.45 16.9068 404.036 0 417.607 0H1350.85C1358.37 269.256 1353.98 362.661 1350.85 375.707C1334.57 464.624 1249.07 555.733 1208.36 590.172C1146.77 636.092 997.909 713.843 895.189 657.487C792.47 601.131 719.815 654.878 696.327 688.796C598.619 851.602 448.924 817.162 386.29 779.592C163.314 675.646 27.19 814.553 0 897V0Z" fill="#EFFAFE"/>
        </svg>
      </div>

      {/* Background Wave Decoration - Mobile */}
      <div className="absolute inset-0 z-0 block pointer-events-none md:hidden">
        <svg 
          className="w-full h-full"
          viewBox="0 0 375 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          <path d="M109.455 330.925C48.3317 302.527 11.017 340.476 0 363L0.857977 65.8611C23.1781 38.0626 54.9414 36.3519 69.9646 38.9179C84.9877 41.4839 101.299 29.9369 102.157 23.0942C105.934 4.61883 114.319 0 118.039 0H373.862C375.923 73.5592 374.721 217.022 373.862 220.586C369.398 244.878 345.962 269.768 334.802 279.177C317.919 291.722 277.113 312.963 248.955 297.566C220.798 282.17 200.881 296.854 194.443 306.12C167.659 350.598 126.624 341.189 109.455 330.925Z" fill="#EFFAFE"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 mx-auto max-w-xl md:max-w-4xl lg:max-w-5xl">
        
        {/* Water Drop Illustration */}
        <div className="relative flex items-center justify-center w-full mb-6 md:mb-10">
          <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48">
            {/* Soft Glow Behind Droplet */}
            <div 
              className="absolute inset-0 rounded-full blur-2xl md:blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, rgba(14, 165, 233, 0.06) 50%, transparent 70%)',
                transform: 'scale(1.5)',
              }}
            />
            
            {/* Water Droplet Image */}
            <img
              src={waterDrop}
              alt="Water Droplet"
              className="relative w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Headline Text */}
        <div className="text-center mb-5 md:mb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            <span className="block text-gray-900">Transforming Water</span>
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-[#155DFC] via-[#00B8DB] to-[#00C950] mt-1">
              Enhancing Lives
            </span>
          </h1>
        </div>

        {/* Description Text */}
        <p className="text-center text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm md:max-w-lg mb-6 md:mb-8">
          We design and deliver reliable, cost-effective, and sustainable water and wastewater solutions for governments, industries, institutions, and organization.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs md:max-w-sm">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#155DFC] to-[#0092B8] text-white px-6 py-3.5 rounded-xl text-sm font-semibold shadow-md w-full"
          >
            Explore Our Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3.5 rounded-xl text-sm font-semibold border-2 border-blue-600 w-full"
          >
            Schedule a Consultation
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 md:mt-12 w-full">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 md:gap-x-8 lg:gap-x-12">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-500 rounded-full flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gray-600">20+ Years Experience</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gray-600">500+ Projects Delivered</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-blue-500 rounded-full flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-gray-600">ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
