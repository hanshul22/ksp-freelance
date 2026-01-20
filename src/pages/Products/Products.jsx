import { HeroSection, SwimmingPoolSection, WasteWaterSection, WaterTreatmentSection, FireFightingSection, PumpingSection, ReverseOsmosisSection, ProductsCTASection } from './components';

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
      <ProductsCTASection />
    </div>
  );
};

export default Products;
