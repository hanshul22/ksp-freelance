import { Waves, Droplets, Filter, Flame, RotateCcw, Layers } from 'lucide-react';
import wavesBg from '@/assets/images/products-wave-bg.png';

const categories = [
  { icon: Waves, label: 'Swimming Pool' },
  { icon: Droplets, label: 'Wastewater' },
  { icon: Filter, label: 'Water Treatment' },
  { icon: Flame, label: 'Fire Fighting' },
  { icon: RotateCcw, label: 'Pumping' },
  { icon: Layers, label: 'Reverse Osmosis' },
];

const HeroSection = () => {
  return (
    <section className="relative bg-white pt-40 pb-28 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background wave image */}
      <div className="absolute inset-0 z-0">
        <img
          src={wavesBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Hero Content */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A1628] mb-6">
            Our Products
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Comprehensive water treatment and infrastructure solutions engineered for excellence
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mt-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-100"
            >
              <category.icon className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-[#0A1628]">{category.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
