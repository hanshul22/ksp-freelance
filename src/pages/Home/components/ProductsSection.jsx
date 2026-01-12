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
          {/* Main gradient - blue to light blue to white */}
          <linearGradient id="productsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1E7CF5" />
            <stop offset="25%" stopColor="#4A9DF8" />
            <stop offset="50%" stopColor="#7FBCFB" />
            <stop offset="75%" stopColor="#C5E2FC" />
            <stop offset="100%" stopColor="#EDF6FE" />
          </linearGradient>
        </defs>
        
        {/* White background for wave area */}
        <rect x="0" y="0" width="1440" height="70" fill="#FFFFFF" />
        
        {/* Main gradient background starting below wave */}
        <path
          d="M0 55 
             C120 20, 180 90, 300 55 
             C420 20, 480 90, 600 55 
             C720 20, 780 90, 900 55 
             C1020 20, 1080 90, 1200 55 
             C1320 20, 1380 90, 1440 55
             L1440 900 L0 900 Z"
          fill="url(#productsGradient)"
        />
        
        {/* Light cyan wave stroke */}
        <path
          d="M0 55 
             C120 20, 180 90, 300 55 
             C420 20, 480 90, 600 55 
             C720 20, 780 90, 900 55 
             C1020 20, 1080 90, 1200 55 
             C1320 20, 1380 90, 1440 55"
          stroke="#A8DDF0"
          strokeWidth="5"
          fill="none"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 pt-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
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
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shadow-md">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-gray-900 mb-1.5 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm text-slate-500">
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
