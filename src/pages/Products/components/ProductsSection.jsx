import {
  Droplets,
  CheckCircle,
  Filter,
  GitBranch,
  Recycle,
  FlaskConical,
  Layers,
  GlassWater,
  SlidersHorizontal,
  Cpu,
  RefreshCw,
  Activity,
  Settings,
} from 'lucide-react';
import ProductsData from '@/data/ProductsData';

// Icon mapping based on headerIcon.type
const iconMap = {
  'droplets': Droplets,
  'filter': Filter,
  'recycle': Recycle,
  'flask': FlaskConical,
  'layers': Layers,
  'glass-water': GlassWater,
  'sliders': SlidersHorizontal,
  'cpu': Cpu,
  'refresh': RefreshCw,
  'activity': Activity,
  'settings': Settings,
};

// SVG paths for desktop
const desktopSvgPaths = {
  right: "M953.559 918.092C1176.54 814.147 1312.66 953.054 1352.85 1035.5L1349.72 379.579C1268.29 277.825 1152.42 271.563 1097.62 280.956C1042.81 290.349 983.31 248.081 980.179 223.034C980.179 59.0002 657.093 112.5 643.522 112.5C450.398 119 49.1196 105.6 -11.0004 0V514.207C5.28442 603.124 90.7795 694.233 131.491 728.673C193.081 774.593 341.941 852.343 444.66 795.987C547.38 739.631 620.035 793.378 643.522 827.296C741.231 990.102 890.926 955.663 953.559 918.092Z",
  left: "M387.29 918.092C164.314 814.147 28.19 953.054 -12 1035.5L-8.86831 379.579C72.5556 277.825 188.428 271.563 243.233 280.956C298.037 290.349 357.539 248.081 360.671 223.034C360.671 59.0002 683.757 112.5 697.327 112.5C890.451 119 1291.73 105.6 1351.85 0V514.207C1335.57 603.124 1250.07 694.233 1209.36 728.673C1147.77 774.593 998.909 852.343 896.189 795.987C793.47 739.631 720.815 793.378 697.327 827.296C599.619 990.102 449.924 955.663 387.29 918.092Z",
};

// SVG paths for mobile
const mobileSvgPaths = {
  right: "M243.669 445.968C317.567 395.476 362.68 462.951 376 503V185C349.015 135.573 309.575 131.913 291.412 136.476C273.249 141.038 253.529 120.507 252.491 108.34C252.491 28.6596 145.416 54.6477 140.918 54.6477C76.9142 57.805 19.9247 51.2958 0 0V250.5C5.397 293.692 8.50748 331.271 22 348C42.4118 370.306 59.4573 380.375 93.5 353C127.543 325.625 133.134 385.388 140.918 401.864C173.301 480.948 222.912 464.218 243.669 445.968Z",
  left: "M132.331 445.968C58.4331 395.476 13.3196 462.951 0 503V185C26.9851 135.573 66.4248 131.913 84.5878 136.476C102.751 141.038 122.471 120.507 123.509 108.34C123.509 28.6596 230.584 54.6477 235.082 54.6477C299.086 57.805 356.075 51.2958 376 0V250.5C370.603 293.692 367.493 331.271 354 348C333.588 370.306 316.543 380.375 282.5 353C248.457 325.625 242.866 385.388 235.082 401.864C202.699 480.948 153.088 464.218 132.331 445.968Z",
};

// SVG fill colors
const svgFillColors = {
  right: "#EFFAFE",
  left: "#EFFEEF",
};

const ProductSection = ({ product }) => {
  const IconComponent = iconMap[product.headerIcon.type] || Droplets;
  const { sections, svg: svgDirection } = product;

  return (
    <section id={product.slug} className="relative py-20 md:mb-36">
      <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none ">
        {/* Desktop SVG */}

        <svg
          className="hidden w-full md:block"
          height="1,035"
          preserveAspectRatio="none"
          viewBox="0 0 1340 1036"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={desktopSvgPaths[svgDirection]}
            fill={svgFillColors[svgDirection]}
          />
        </svg>

        {/* mobile SVG */}

        <svg
          className="block w-full mt-9 md:hidden"
          height="503"
          viewBox="0 0 376 503"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={mobileSvgPaths[svgDirection]}
            fill={svgFillColors[svgDirection]}
          />
        </svg>
      </div>
      <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="mb-12 text-center">
          {/* Icon */}
          <div 
            className="inline-flex items-center justify-center mb-6 w-14 h-14 rounded-xl"
            style={{ backgroundColor: product.headerIcon.bgColor }}
          >
            <IconComponent className="text-white w-7 h-7" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">
            {product.title}
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-500 md:text-lg">
            {product.subtitle}
          </p>
        </div>

        {/* Top Information Cards */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
          {/* Card 1 - What It Is */}
          <div className="p-6 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-xl">
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{sections.whatItIs.title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              {sections.whatItIs.description}
            </p>
          </div>

          {/* Card 2 - Where It's Used */}
          <div className="p-6 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-xl">
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{sections.whereItsUsed.title}</h3>
            <ul className="space-y-2">
              {sections.whereItsUsed.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="flex-shrink-0 w-4 h-4 text-green-500" />
                  <span className="text-sm text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 - Advantages */}
          <div className="p-6 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-xl">
            <h3 className="text-lg font-semibold text-[#0A1628] mb-3">{sections.advantages.title}</h3>
            <ul className="space-y-2">
              {sections.advantages.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#155DFC] flex-shrink-0" />
                  <span className="text-sm text-gray-500">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Overview Section */}
        <div className="p-8 border border-gray-100 shadow-md bg-white/80 backdrop-blur-md rounded-xl">
          <h3 className="text-xl font-bold text-[#0A1628] mb-6">
            Process Overview & Benefits
          </h3>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left - Treatment Process */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GitBranch className="w-5 h-5 text-[#155DFC]" />
                <span className="text-sm font-semibold text-[#0A1628]">
                  {sections.processOverview.title}
                </span>
              </div>

              <ul className="space-y-3">
                {sections.processOverview.steps.map((step, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-[#155DFC] text-white text-xs font-bold rounded-full flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm text-gray-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right - Key Benefits */}
            <div className="bg-[#F0F9FF] rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[#0A1628] mb-4">{sections.keyBenefits.title}</h4>
              <ul className="space-y-4">
                {sections.keyBenefits.items.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-[#0A1628] block">
                        {benefit}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  return (
    <>
      {ProductsData.map((product) => (
        <ProductSection key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductsSection;
