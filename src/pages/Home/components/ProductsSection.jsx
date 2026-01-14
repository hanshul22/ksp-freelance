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
    <section className="relative py-16 mt-28">
      {/* Light Blue Wave Layer */}
      <div className=" absolute top-0 left-0 w-full h-[200px] -translate-y-6 md:-translate-y-8 z-0 pointer-events-none ">
        <svg 
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1340 126" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M132.298 37.1257C73.4988 5.96105 0 62.227 0 62.227V126H1340V81.1656C1340 81.1656 1284.3 18.5629 1203.83 48.9745C1123.37 79.3861 1083.14 30.0166 1027.82 20.5376C972.506 11.0587 972.506 23.8282 884.307 48.9745C796.109 74.1207 762.841 4.53874e-05 671.934 0C581.028 -4.53873e-05 564.394 39.1006 490.121 48.9745C415.849 58.8483 379.486 20.5376 310.242 20.5376C249.204 20.5376 191.097 68.2904 132.298 37.1257Z" fill="#D7F1F8"/>
        </svg>
      </div>

      {/* Main Blue Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg 
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1340 725"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M132.298 36.3467C73.4988 5.83596 0 47.9468 0 47.9468V721.907L1340 725V64.5734C1340 64.5734 1284.3 18.1733 1203.83 47.9468C1123.37 77.7202 1083.14 29.3867 1027.82 20.1067C972.506 10.8266 972.506 23.3282 884.307 47.9468C796.109 72.5654 762.841 4.44349e-05 671.934 0C581.028 -4.44348e-05 564.394 38.2801 490.121 47.9468C415.849 57.6134 379.486 20.1067 310.242 20.1067C249.204 20.1067 191.097 66.8574 132.298 36.3467Z" fill="url(#paint0_linear_1_94)"/>
          <defs>
            <linearGradient id="paint0_linear_1_94" x1="904.809" y1="116.387" x2="910.993" y2="752.454" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1561F6"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl md:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-wide uppercase text-white/90">
            Our Solutions
          </p>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Our Products
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-white/90">
            Comprehensive water treatment solutions engineered for reliability and sustainability
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {products.map((product) => {
            const Icon = iconMap[product.icon];
            return (
              <div
                key={product.id}
                className="overflow-hidden transition-all duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Icon Badge */}
                  <div className="absolute z-10 top-4 right-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg shadow-md bg-white/90 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900">
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
