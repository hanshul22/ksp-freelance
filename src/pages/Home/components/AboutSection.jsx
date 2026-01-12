import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/images/about.png';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src={aboutImage} 
                alt="Aerial view of wastewater treatment tanks at KSP Hydro Engineers facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Label */}
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
              About KSP Hydro Engineers
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transforming Water for a Sustainable Future
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              KSP Hydro Engineers provides end-to-end water and wastewater solutions, 
              helping industries and communities transform raw and drainage water into 
              safe, reusable, and potable water. With proven technologies and sustainable 
              practices, we deliver reliable systems from design to maintenance.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
