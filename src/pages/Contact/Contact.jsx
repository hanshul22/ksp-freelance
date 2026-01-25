import { HeroSection, ContactFormSection, OfficesSection, MapSection, ResponseGuaranteeSection } from './components';

const Contact = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ContactFormSection />
      
      {/* Offices and Map Section with SVG Background */}
      <div className="relative">
        {/* SVG Background - Hidden on mobile, visible on desktop */}
        <div className="hidden lg:block absolute inset-0 w-full overflow-hidden pointer-events-none" style={{ height: '1036px' }}>
          <svg 
            width="1341" 
            height="1036" 
            viewBox="0 0 1341 1036" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="xMidYMid slice"
            style={{ height: '1036px' }}
          >
            <path d="M943.559 918.092C1166.54 814.147 1302.66 953.054 1342.85 1035.5L1339.72 379.579C1258.29 277.825 1142.42 271.563 1087.62 280.956C1032.81 290.349 973.31 248.081 970.179 223.034C970.179 59.0002 647.093 112.5 633.522 112.5C440.398 119 39.1196 105.6 -21.0004 0V514.207C-4.71558 603.124 80.7795 694.233 121.491 728.673C183.081 774.593 331.941 852.343 434.66 795.987C537.38 739.631 610.035 793.378 633.522 827.296C731.231 990.102 880.926 955.663 943.559 918.092Z" fill="#EFFEEF"/>
          </svg>
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <OfficesSection />
          <MapSection />
        </div>
      </div>
      
      <ResponseGuaranteeSection />
    </div>
  );
};

export default Contact;