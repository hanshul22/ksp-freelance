import { Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesCTASection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <Bell className="w-12 h-12 text-blue-600 mb-6" />
          
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Ready to Get Started?
          </h2>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed mb-8">
            Let's discuss how our services can help you achieve your water management goals
          </p>
          
          {/* Button Group */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg text-center"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-medium rounded-lg text-center"
            >
              Request AMC Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTASection;
