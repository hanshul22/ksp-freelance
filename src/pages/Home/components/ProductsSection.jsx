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
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-blue-600 to-blue-500 overflow-hidden">
      {/* Wavy Top Border */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'polygon(0 0, 0 100%, 2% 95%, 4% 90%, 6% 88%, 8% 90%, 10% 95%, 12% 100%, 14% 95%, 16% 90%, 18% 88%, 20% 90%, 22% 95%, 24% 100%, 26% 95%, 28% 90%, 30% 88%, 32% 90%, 34% 95%, 36% 100%, 38% 95%, 40% 90%, 42% 88%, 44% 90%, 46% 95%, 48% 100%, 50% 95%, 52% 90%, 54% 88%, 56% 90%, 58% 95%, 60% 100%, 62% 95%, 64% 90%, 66% 88%, 68% 90%, 70% 95%, 72% 100%, 74% 95%, 76% 90%, 78% 88%, 80% 90%, 82% 95%, 84% 100%, 86% 95%, 88% 90%, 90% 88%, 92% 90%, 94% 95%, 96% 100%, 98% 95%, 100% 90%, 100% 0)'
      }}></div>

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
