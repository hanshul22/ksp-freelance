import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/images/about.png';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f0fdf4]">
      <div className="px-6 mx-auto max-w-7xl md:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          {/* Content - Appears first on mobile */}
          <div className="space-y-5 order-1 lg:order-2 text-center lg:text-left">
            {/* Label */}
            <div className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              About KSP Hydro Engineers
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-5xl">
              Transforming Water for a Sustainable Future
            </h2>

            {/* Description */}
            <p className="text-lg leading-relaxed text-slate-600">
              KSP Hydro Engineers provides end-to-end water and wastewater solutions, 
              helping industries and communities transform raw and drainage water into 
              safe, reusable, and potable water.
            </p>

            {/* CTA Button */}
            <div className="pt-1 flex justify-center lg:justify-start">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-blue-600 bg-white border-2 border-blue-500 rounded-lg text-sm font-medium"
              >
                Know More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image - Appears second on mobile, first on desktop */}
          <div className="relative order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="relative overflow-hidden shadow-lg rounded-2xl">
              <img 
                src={aboutImage} 
                alt="Aerial view of wastewater treatment tanks at KSP Hydro Engineers facility" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
