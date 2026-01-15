import Header from '@/components/layout/Header';
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
      <Header />
      <HeroSection />
      <WhoWeAreSection />
      <JourneySection />
      <DirectorMessageSection />
      <CultureValuesSection />
      <QualityComplianceSection />
      <ClientsSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
};

export default About;
