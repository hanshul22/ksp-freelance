import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import aboutImage from '@/assets/images/about.png';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="px-4 mx-auto max-w-7xl md:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
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
              Transforming Water for a Sustainable Future
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed md:text-lg text-slate-600">
              KSP Hydro Engineers provides end-to-end water and wastewater solutions, 
              helping industries and communities transform raw and drainage water into 
              safe, reusable, and potable water. With proven technologies and sustainable 
              practices, we deliver reliable systems from design to maintenance.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 transition-all bg-white border-2 border-blue-600 rounded-lg bfont-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
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
