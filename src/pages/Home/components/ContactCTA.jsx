import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section 
      className="relative py-12 md:py-16"
      style={{
        background: 'linear-gradient(to right, #155DFC, #00C950)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-5">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">
            Let&apos;s discuss your water solution
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
            Ready to transform your water management? Our team is here to help you find the perfect solution.
          </p>

          {/* CTA Button */}
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-7 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
