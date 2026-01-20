import { Clock } from 'lucide-react';

const ResponseGuaranteeSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F9FC] rounded-2xl px-12 py-10 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
            {/* Icon and Title */}
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-[#155DFC]" />
              <h3 className="text-lg font-semibold text-[#0A1628]">
                Quick Response Guarantee
              </h3>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-500 text-sm mt-3 text-center">
            We respond to all inquiries within <span className="text-[#155DFC] font-semibold">24 hours</span> on business days. For urgent matters, please call our helpline
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResponseGuaranteeSection;
