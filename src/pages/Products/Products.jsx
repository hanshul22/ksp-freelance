import {
  HeroSection,
  SwimmingPoolSection,
  WasteWaterSection,
  WaterTreatmentSection,
  FireFightingSection,
  PumpingSection,
  ReverseOsmosisSection,
  ProductsCTASection,
} from './components';
import { ContactCTA } from '@/components';

const Products = () => {
  return (
    <div className="bg-white">
      <HeroSection />

      {/* Swimming Pool Section with SVG Background */}
      <div className="relative">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1340 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M387.29 918.092C164.314 814.147 28.19 953.054 -12 1035.5L-8.86831 379.579C72.5556 277.825 188.428 271.563 243.233 280.956C298.037 290.349 357.539 248.081 360.671 223.034C360.671 59.0002 683.757 112.5 697.327 112.5C890.451 119 1291.73 105.6 1351.85 0V514.207C1335.57 603.124 1250.07 694.233 1209.36 728.673C1147.77 774.593 998.909 852.343 896.189 795.987C793.47 739.631 720.815 793.378 697.327 827.296C599.619 990.102 449.924 955.663 387.29 918.092Z"
              fill="#EFFAFE"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <SwimmingPoolSection />
        </div>
      </div>

      {/* Waste Water Section with SVG Background */}
      <div className="relative mt-2">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1340 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M945.56 918.092C1168.54 814.147 1304.66 953.054 1344.85 1035.5L1341.72 379.579C1260.29 277.825 1144.42 271.563 1089.62 280.956C1034.81 290.349 975.311 248.081 972.179 223.034C972.179 59.0002 649.093 112.5 635.523 112.5C442.399 119 41.1201 105.6 -18.9999 0V514.207C-2.71509 603.124 82.78 694.233 123.492 728.673C185.082 774.593 333.941 852.343 436.661 795.987C539.38 739.631 612.035 793.378 635.523 827.296C733.232 990.102 882.926 955.663 945.56 918.092Z"
              fill="#EFFEEF"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <WasteWaterSection />
        </div>
      </div>

      {/* Water Treatment Section with SVG Background */}
      <div className="relative">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1340 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M387.29 918.092C164.314 814.147 28.19 953.054 -12 1035.5L-8.86831 379.579C72.5556 277.825 188.428 271.563 243.233 280.956C298.037 290.349 357.539 248.081 360.671 223.034C360.671 59.0002 683.757 112.5 697.327 112.5C890.451 119 1291.73 105.6 1351.85 0V514.207C1335.57 603.124 1250.07 694.233 1209.36 728.673C1147.77 774.593 998.909 852.343 896.189 795.987C793.47 739.631 720.815 793.378 697.327 827.296C599.619 990.102 449.924 955.663 387.29 918.092Z"
              fill="#EFFAFE"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <WaterTreatmentSection />
        </div>
      </div>

      {/* Fire Fighting Section with SVG Background */}
      <div className="relative mt-20">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-0 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M953.559 918.092C1176.54 814.147 1312.66 953.054 1352.85 1035.5L1349.72 379.579C1268.29 277.825 1152.42 271.563 1097.62 280.956C1042.81 290.349 983.31 248.081 980.179 223.034C980.179 59.0002 657.093 112.5 643.522 112.5C450.398 119 49.1196 105.6 -11.0004 0V514.207C5.28442 603.124 90.7795 694.233 131.491 728.673C193.081 774.593 341.941 852.343 444.66 795.987C547.38 739.631 620.035 793.378 643.522 827.296C741.231 990.102 890.926 955.663 953.559 918.092Z"
              fill="#FEEDE5"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <FireFightingSection />
        </div>
      </div>

      {/* Pumping Section with SVG Background */}
      <div className="relative mt-20">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-[-30px] left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M387.334 792.635C164.333 702.894 28.1944 822.82 -12 894L-8.86797 327.71C72.5649 239.86 188.45 234.454 243.261 242.563C298.071 250.673 357.58 214.181 360.712 192.557C360.712 50.9378 683.833 97.1273 697.405 97.1273C890.551 102.739 1291.87 91.1698 1352 0V443.941C1335.71 520.708 1250.21 599.367 1209.49 629.1C1147.9 668.745 999.02 735.871 896.289 687.216C793.559 638.561 720.896 684.964 697.405 714.247C599.686 854.805 449.975 825.072 387.334 792.635Z"
              fill="#4F39F6"
              fill-opacity="0.06"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <PumpingSection />
        </div>
      </div>

      {/* Reverse Osmosis Section with SVG Background */}
      <div className="relative mt-20">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M953.559 918.092C1176.54 814.147 1312.66 953.054 1352.85 1035.5L1349.72 379.579C1268.29 277.825 1152.42 271.563 1097.62 280.956C1042.81 290.349 983.31 248.081 980.179 223.034C980.179 59.0002 657.093 112.5 643.522 112.5C450.398 119 49.1196 105.6 -11.0004 0V514.207C5.28442 603.124 90.7795 694.233 131.491 728.673C193.081 774.593 341.941 852.343 444.66 795.987C547.38 739.631 620.035 793.378 643.522 827.296C741.231 990.102 890.926 955.663 953.559 918.092Z"
              fill="#E8EFFF"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <ReverseOsmosisSection />
        </div>
      </div>

      <ProductsCTASection />
      <ContactCTA />
    </div>
  );
};

export default Products;
