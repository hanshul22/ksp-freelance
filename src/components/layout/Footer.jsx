import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#000D1B' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 lg:gap-32">
          {/* Left Column - Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="KSP Hydro Engineers Logo" 
                className="h-11 w-11"
              />
              <div className="text-base font-semibold leading-tight">
                KSP Hydro Engineers Pvt. Ltd.
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sustainable water and wastewater treatment solutions engineered for 
              industries, institutions, and communities.
            </p>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/about" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                About Us
              </Link>
              <Link 
                to="/products" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Our Products
              </Link>
              <Link 
                to="/services" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Services
              </Link>
            </nav>
          </div>

          {/* Right Column - Contact */}
          <div className="space-y-4">
            <h3 className="text-base font-semibold">Contact</h3>
            <div className="flex flex-col space-y-3">
              <a 
                href="tel:+91XXXXXXXXXX" 
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </a>
              <a 
                href="mailto:info@ksphydro.com" 
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>info@ksphydro.com</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Address</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="text-center md:text-left">
            © 2026 KSP Hydro Engineers Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link 
              to="/privacy-policy" 
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
