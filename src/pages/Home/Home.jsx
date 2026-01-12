import Header from '@/components/layout/Header';
import {
  Hero,
  AboutSection,
  SectorsSection,
  ProductsSection,
  ServicesSection,
  WhyChooseUs,
  ClientsSection,
  ContactCTA,
} from './components';


const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <SectorsSection />
      <ProductsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ClientsSection />
      <ContactCTA />
    </div>
  );
};

export default Home;
