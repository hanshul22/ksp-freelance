import { Droplet, Recycle, Factory, Settings } from 'lucide-react';
import { products } from '@/data/products';

const ProductsSection = () => {
  const iconMap = {
    droplet: Droplet,
    recycle: Recycle,
    factory: Factory,
    settings: Settings,
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* SVG Wave Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="50%" stopColor="#3B8BF5" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        {/* Main gradient background */}
        <rect x="0" y="60" width="1440" height="740" fill="url(#waveGradient)" />
        {/* Wavy top border - light blue stroke */}
        <path
          d="M0 80 Q60 40 120 80 T240 80 T360 80 T480 80 T600 80 T720 80 T840 80 T960 80 T1080 80 T1200 80 T1320 80 T1440 80 L1440 0 L0 0 Z"
          fill="#FFFFFF"
        />
        <path
          d="M0 80 Q60 40 120 80 T240 80 T360 80 T480 80 T600 80 T720 80 T840 80 T960 80 T1080 80 T1200 80 T1320 80 T1440 80"
          stroke="#B8E0F0"
          strokeWidth="6"
          fill="none"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3">
            Our Solutions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Products
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            Comprehensive water treatment solutions engineered for reliability and sustainability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => {
            const Icon = iconMap[product.icon];
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
