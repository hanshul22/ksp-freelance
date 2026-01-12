import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { waterDroplet } from '@/assets';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-24 md:pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              <div className="whitespace-normal">Transform Wastewater Into</div>
              <div className="whitespace-normal">
                <span className="text-blue-600">Reusable & Potable</span>
                {' '}
                <span className="text-green-500">Water</span>
              </div>
            </h1>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Engineering excellence in water purification, wastewater treatment, and fire-fighting 
              systems for industries, institutions, and communities.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-medium hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Explore Our Solutions
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-medium border-2 border-blue-600 hover:bg-blue-50 transition-all"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>

          {/* Right Visual - Water Droplet */}
          <div className="relative flex items-center justify-center order-first lg:order-last">
            <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
              {/* Water Droplet Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={waterDroplet} 
                  alt="Water Droplet" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20 pt-8 lg:pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 xl:gap-16">
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-sm md:text-base text-gray-700 font-medium">ISO Certified</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-sm md:text-base text-gray-700 font-medium">20+ Years Experience</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-sm md:text-base text-gray-700 font-medium">500+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
