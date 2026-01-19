import { HeroSection, SwimmingPoolSection, WasteWaterSection, WaterTreatmentSection, FireFightingSection } from './components';

const Products = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <SwimmingPoolSection />
      <WasteWaterSection />
      <WaterTreatmentSection />
      <FireFightingSection />
    </div>
  );
};

export default Products;
