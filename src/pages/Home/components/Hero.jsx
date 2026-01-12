import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { waterDroplet, heroVector } from '@/assets';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] overflow-hidden" style={{ background: 'linear-gradient(135deg, #E0F4F8 0%, #EAF7FA 50%, #F0FAFB 100%)' }}>
      
      {/* Background Wave Decoration */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${heroVector})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
        }}
      />

      {/* Abstract Organic Shapes - Top Left */}
      <div 
        className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        }}
      />
      
      {/* Abstract Organic Shapes - Bottom Right */}
      <div 
        className="absolute -bottom-48 -right-48 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.06) 0%, transparent 70%)',
        }}
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 xl:px-16 pt-36 lg:pt-44 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Text Block */}
          <div className="space-y-5">
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight">
              <span className="text-gray-900">Transform Wastewater Into</span>
              <br />
              <span className="text-blue-600">Reusable & Potable</span>{' '}
              <span className="text-green-500">Water</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              Engineering excellence in water purification, wastewater treatment, and fire-fighting 
              systems for industries, institutions, and communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
              >
                Explore Our Solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-7 py-3.5 rounded-lg text-sm font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Right Column - Water Drop Illustration */}
          <div className="relative flex items-center justify-center order-first lg:order-last">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Soft Glow Behind Droplet */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)',
                  transform: 'scale(1.2)',
                }}
              />
              
              {/* Water Droplet Image */}
              <div className="relative w-full aspect-square flex items-center justify-center p-8">
                <img 
                  src={waterDroplet} 
                  alt="Water Droplet" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Row */}
        <div className="mt-20 lg:mt-28 pt-8">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 lg:gap-16">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
              <span className="text-base text-gray-600 font-medium">ISO Certified</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-sm" />
              <span className="text-base text-gray-600 font-medium">20+ Years Experience</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm" />
              <span className="text-base text-gray-600 font-medium">500+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
