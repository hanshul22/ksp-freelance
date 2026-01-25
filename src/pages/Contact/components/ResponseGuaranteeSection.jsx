import { Clock } from 'lucide-react';

const ResponseGuaranteeSection = () => {
  return (
    <section className="bg-white pt-2 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F9FC] rounded-2xl px-8 py-8 shadow-sm">
          {/* Icon and Title - Centered */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <Clock className="w-6 h-6 text-[#1E88E5]" />
            <h3 className="text-lg font-semibold text-[#0A1628]">
              Quick Response Guarantee
            </h3>
          </div>
          
          {/* Description - Centered */}
          <p className="text-gray-600 text-sm text-center">
            We respond to all inquiries within <span className="text-[#1E88E5] font-semibold">24 hours</span> on business days. For urgent matters, please call our helpline
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponseGuaranteeSection;
