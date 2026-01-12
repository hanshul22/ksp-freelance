import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/images/logo.png';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[100%]  max-w-7xl">
      <div className="bg-white rounded-full shadow-lg px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="KSP Hydro Engineers Logo" 
            className="h-10 w-10 object-contain"
          />
          <span className="text-gray-900 font-semibold text-base lg:text-lg">
            KSP Hydro Engineers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-black'
                  : 'text-black hover:text-gray-700'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Contact Button */}
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 bg-white rounded-3xl shadow-lg p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-black'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
