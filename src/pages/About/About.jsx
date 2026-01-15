import {
  HeroSection,
  WhoWeAreSection,
  JourneySection,
  DirectorMessageSection,
  CultureValuesSection,
  QualityComplianceSection,
  ClientsSection,
  PartnersSection,
  CTASection,
} from './components';

const About = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhoWeAreSection />
      <JourneySection />

      <div className="relative">
        <div className="absolute inset-0 z-0 w-full h-full mt-20 pointer-events-none md:mt-32 lg:mt-48">
          <svg
            className="w-full h-full"
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

        <div className="relative z-10">
          <DirectorMessageSection />
          <CultureValuesSection />
          <QualityComplianceSection />
        </div>
      </div>

      <ClientsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default About;
