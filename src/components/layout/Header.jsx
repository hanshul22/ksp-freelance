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
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[100%]  max-w-7xl">
      <div className="flex items-center justify-between px-8 py-4 bg-white rounded-full shadow-lg lg:px-12">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="KSP Hydro Engineers Logo" 
            className="object-contain w-10 h-10"
          />
          <span className="text-base font-semibold text-gray-900 lg:text-lg">
            KSP Hydro Engineers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="items-center hidden gap-8 lg:flex">
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
          className="p-2 text-gray-600 lg:hidden hover:text-gray-900"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="p-6 mt-4 space-y-4 bg-white shadow-lg lg:hidden rounded-3xl">
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
            className="block w-full px-6 py-3 text-base font-medium text-center text-white transition-colors bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
