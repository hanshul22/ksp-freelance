import {
  HeroSection,
  HowWeWorkSection,
  DesignEngineeringSection,
  ErectionCommissioningSection,
  OperationMaintenanceSection,
  ServiceProcessSection,
  WhyChooseUsSection,
  ServicesCTASection,
} from './components';
import { ContactCTA } from '@/components';

const Services = () => {
  return (
    <main>
      <HeroSection />
      <HowWeWorkSection />

      {/* Design & Erection Sections with SVG Background */}
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

        {/* Content Sections */}
        <div className="relative z-10">
          <DesignEngineeringSection />
        </div>
      </div>

      {/* Erection & Commissioning Section with SVG Background */}
      <div className="relative mt-20">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-5 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
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
              fill="#FEEDE5"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <ErectionCommissioningSection />
        </div>
      </div>

      {/* Operation & Maintenance Section with SVG Background */}
      <div className="relative mt-20">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-[-35px] left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M388.29 918.092C165.314 814.147 29.19 953.054 -11 1035.5L-7.86831 379.579C73.5556 277.825 189.428 271.563 244.233 280.956C299.037 290.349 358.539 248.081 361.671 223.034C361.671 59.0002 684.757 112.5 698.327 112.5C891.451 119 1292.73 105.6 1352.85 0V514.207C1336.57 603.124 1251.07 694.233 1210.36 728.673C1148.77 774.593 999.909 852.343 897.189 795.987C794.47 739.631 721.815 793.378 698.327 827.296C600.619 990.102 450.924 955.663 388.29 918.092Z"
              fill="#E5F6EC"
            />
          </svg>
        </div>

        {/* Content Section */}
        <div className="relative z-10">
          <OperationMaintenanceSection />
        </div>
      </div>

      <ServiceProcessSection />

      {/* Why Choose Us Section with SVG Background */}
      <div className="relative">
        {/* SVG Background Shape */}
        <div className="absolute -top-8 md:-top-16 left-0 z-0 w-full h-[calc(100%+2rem)] md:h-[calc(100%+4rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full h-full"
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
          <WhyChooseUsSection />
        </div>
      </div>

      <ServicesCTASection />
      <ContactCTA />
    </main>
  );
};

export default Services;
