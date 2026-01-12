import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { waterDroplet, heroVector } from '@/assets';

const Hero = () => {
  return (
    <section className="relative min-h-[95vh] overflow-hidden">
      
      {/* Soft Aqua Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #E8F6FA 0%, #F0FAFC 50%, #E6F4F8 100%)',
        }}
      />
      
      {/* Top Right Wave Shape */}
      <div 
        className="absolute pointer-events-none"
        style={{
          top: '-5%',
          right: '-10%',
          width: '60%',
          height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(180, 220, 235, 0.4) 0%, rgba(200, 235, 245, 0.2) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
      />
      
      {/* Bottom Left Wave Shape */}
      <div 
        className="absolute pointer-events-none"
        style={{
          bottom: '-10%',
          left: '-15%',
          width: '50%',
          height: '60%',
          background: 'radial-gradient(ellipse at center, rgba(180, 220, 235, 0.3) 0%, rgba(200, 235, 245, 0.15) 50%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
        }}
      />
      
      {/* Curved Wave Border at Top */}
      <div 
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '80%',
          height: '200px',
          background: 'linear-gradient(180deg, rgba(200, 230, 245, 0.5) 0%, transparent 100%)',
          borderRadius: '0 0 0 100%',
        }}
      />

   

      {/* Main Content */}
      <div className="relative pt-48 mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-12 lg:flex-row lg:gap-0">
          
          {/* Left Content - Text Block */}
          <div className="space-y-5">
            <h1 className="  text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.15] tracking-tight w-[900px]">
              <span className="text-gray-900">Transform Wastewater Into</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#155DFC] via-[#00B8DB] to-[#00C950]">Reusable & Potable Water</span>{' '}
            </h1>

            <p className="w-[600px] text-base leading-relaxed text-gray-600 md:text-lg">
              Engineering excellence in water purification, wastewater treatment, and fire-fighting 
              systems for industries, institutions, and communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3 pt-1 sm:flex-row">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#155DFC] to-[#0092B8] text-white px-7 py-3.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg"
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
            <div className="relative w-[32rem] lg:max-w-2xl xl:max-w-[48rem]">
              {/* Soft Glow Behind Droplet */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.08) 50%, transparent 70%)',
                  transform: 'scale(1.2)',
                }}
              />
              
              {/* Water Droplet Image */}
              <div className="relative flex items-center justify-center w-full p-8 aspect-square">
                <img 
                  src={waterDroplet} 
                  alt="Water Droplet" 
                  className="object-contain w-full h-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Row */}
        <div className="pt-8 mt-12 lg:mt-16">
          <div className="flex flex-col flex-wrap justify-center gap-8 sm:flex-row lg:gap-16">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
              <span className="text-base font-medium text-gray-600">ISO Certified</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full shadow-sm" />
              <span className="text-base font-medium text-gray-600">20+ Years Experience</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm" />
              <span className="text-base font-medium text-gray-600">500+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;