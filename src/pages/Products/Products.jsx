import { HeroSection, SwimmingPoolSection, WasteWaterSection, WaterTreatmentSection, FireFightingSection, PumpingSection } from './components';

const Products = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <SwimmingPoolSection />
      <WasteWaterSection />
      <WaterTreatmentSection />
      <FireFightingSection />
      <PumpingSection />
    </div>
  );
};

export default Products;
