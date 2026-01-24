import { HeroSection, ContactFormSection, OfficesSection, MapSection, InquirySection, ResponseGuaranteeSection } from './components';
import { ContactCTA } from '@/components';

const Contact = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <ContactFormSection />
      <OfficesSection />
      <MapSection />
      <InquirySection />
      <ResponseGuaranteeSection />
      <ContactCTA />
    </div>
  );
};

export default Contact;