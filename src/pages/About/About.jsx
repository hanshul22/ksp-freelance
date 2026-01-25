import {
  HeroSection,
  WhoWeAreSection,
  JourneySection,
  QuoteSection,
  CultureValuesSection,
  QualityComplianceSection,
  ClientsSection,
  PartnersSection,
  CTASection,
} from './components';

import { ContactCTA } from '@/components';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with SVG Background */}
      <div className="relative">
        {/* SVG Background Shape - Hidden on mobile */}
        <div className="absolute top-0 left-0 z-0 hidden w-full overflow-hidden pointer-events-none md:block">
          <svg
            className="w-full"
            height="671"
            viewBox="0 0 1340 671"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M386.29 568.702C163.314 478.134 27.19 599.164 -13 671L-9.86831 99.4956C71.5556 10.8375 189.695 29.2859 244.5 37.4697C299.305 45.6535 382.868 15.8235 386 -6H1338H1353.67C1356.94 149.139 1353.46 207.318 1350.85 216.797C1334.57 294.271 1249.07 373.654 1208.36 403.661C1146.77 443.671 997.909 511.415 895.189 462.312C792.47 413.209 719.815 460.039 696.327 489.592C598.619 631.445 448.924 601.437 386.29 568.702Z"
              fill="#EFFAFE"
            />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <HeroSection />
        </div>
      </div>
      <WhoWeAreSection />
      <JourneySection />

      <QuoteSection />
      
      {/* Culture & Quality Section with SVG Background */}
      <div className="relative">
        {/* SVG Background Shape */}
        <div className="absolute  md:-top-28 left-0 z-0 w-full h-[calc(100%+8rem)] md:h-[calc(100%+12rem)] overflow-hidden pointer-events-none">
          <svg
            className="w-full"
            height="1036"
            preserveAspectRatio="none"
            viewBox="0 0 1341 1036"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M390.44 918.092C167.464 814.147 31.34 953.054 -8.84998 1035.5L-5.71829 379.579C75.7056 277.825 191.578 271.563 246.383 280.956C301.187 290.349 360.689 248.081 363.821 223.034C363.821 59.0002 686.907 112.5 700.477 112.5C893.602 119 1294.88 105.6 1355 0V514.207C1338.72 603.124 1253.22 694.233 1212.51 728.673C1150.92 774.593 1002.06 852.343 899.339 795.987C796.62 739.631 723.965 793.378 700.477 827.296C602.769 990.102 453.074 955.663 390.44 918.092Z"
              fill="#EFFAFE"
            />
          </svg>
        </div>

        {/* Content Sections */}
        <div className="relative z-10">
          <CultureValuesSection />
          <QualityComplianceSection />
        </div>
      </div>

      {/* Clients & Partners Section with SVG Background */}
      <div className="relative">
        {/* SVG Background Shape */}
        <div className="absolute -top-20 md:-top-32 left-0 z-0 w-full h-[calc(100%+5rem)] md:h-[calc(100%+8rem)] overflow-hidden pointer-events-none">
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

        {/* Content Sections */}
        <div className="relative z-10">
          <ClientsSection />
          <PartnersSection />
        </div>
      </div>
      <CTASection />
      <ContactCTA />
    </div>
  );
};

export default About;
