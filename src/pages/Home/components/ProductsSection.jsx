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
    <section className="relative py-20 md:py-28 pb-24 md:pb-32 overflow-hidden">
      {/* SVG Wave Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main gradient - solid blue at top, gradual fade to white */}
          <linearGradient id="productsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0066FF" />
            <stop offset="30%" stopColor="#1A7AF8" />
            <stop offset="55%" stopColor="#5DA3F9" />
            <stop offset="75%" stopColor="#A3CDFB" />
            <stop offset="90%" stopColor="#D6EAFD" />
            <stop offset="100%" stopColor="#EEF6FE" />
          </linearGradient>
        </defs>
        
        {/* White background for wave area */}
        <rect x="0" y="0" width="1440" height="50" fill="#FFFFFF" />
        
        {/* Main gradient background with smooth wave */}
        <path
          d="M0 45 
             C180 15, 270 75, 450 45 
             C630 15, 720 75, 900 45 
             C1080 15, 1170 75, 1350 45
             C1395 38, 1420 42, 1440 45
             L1440 900 L0 900 Z"
          fill="url(#productsGradient)"
        />
        
        {/* Light cyan wave stroke */}
        <path
          d="M0 45 
             C180 15, 270 75, 450 45 
             C630 15, 720 75, 900 45 
             C1080 15, 1170 75, 1350 45
             C1395 38, 1420 42, 1440 45"
          stroke="#B5E3F4"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <p className="text-sm font-semibold text-blue-100 uppercase tracking-widest mb-3">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10">
          {products.map((product) => {
            const Icon = iconMap[product.icon];
            return (
              <div key={product.id} className="group">
                {/* Image Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
                  <div className="relative h-44 bg-gray-100 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-3 right-3 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shadow-md border border-blue-100">
                        <Icon className="w-5 h-5 text-blue-600" strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content - Outside the card */}
                <div className="px-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1 leading-tight">
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
