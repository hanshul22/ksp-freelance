import { HeroSection, SwimmingPoolSection, WasteWaterSection, WaterTreatmentSection, FireFightingSection, PumpingSection, ReverseOsmosisSection } from './components';

const Products = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <SwimmingPoolSection />
      <WasteWaterSection />
      <WaterTreatmentSection />
      <FireFightingSection />
      <PumpingSection />
      <ReverseOsmosisSection />
    </div>
  );
};

export default Products;
