import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { PRIMARY_NAV } from '../../data/nav';
import Button from '../ui/Button';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  // Transparent on homepage hero, solid elsewhere or on scroll
  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarBg = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-gray-100 py-4' 
    : isHomePage 
      ? 'bg-transparent text-white py-6' 
      : 'bg-white border-b border-gray-100 py-5';

  const logoColor = (isHomePage && !isScrolled) ? 'text-white' : 'text-gray-900';
  const linkColor = (isHomePage && !isScrolled) 
    ? 'text-white/80 hover:text-white' 
    : 'text-gray-600 hover:text-primary';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tight cursor-pointer">
              <span className={`p-1.5 rounded-lg bg-primary text-white flex items-center justify-center`}>
                <Heart size={18} fill="currentColor" />
              </span>
              <span className={`transition-colors duration-300 ${logoColor}`}>
                Being Kind
              </span>
            </Link>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-8">
              {PRIMARY_NAV.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `
                    relative text-sm font-medium tracking-wide py-2 transition-all duration-200 cursor-pointer ${linkColor}
                    ${isActive ? 'font-bold' : ''}
                  `}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button & Mobile Trigger */}
            <div className="flex items-center gap-4">
              <Link to="/get-involved" className="hidden sm:block">
                <Button 
                  variant={isHomePage && !isScrolled ? 'outline' : 'primary'} 
                  className={isHomePage && !isScrolled ? 'border-white text-white hover:bg-white hover:text-gray-900 bg-transparent' : ''}
                >
                  Donate
                </Button>
              </Link>
              
              <button
                onClick={() => setIsMobileOpen(true)}
                className={`lg:hidden p-2 rounded-lg cursor-pointer hover:bg-gray-100/10 focus-visible:ring-2 focus-visible:ring-primary ${
                  isHomePage && !isScrolled ? 'text-white hover:text-orange-200' : 'text-gray-700 hover:text-gray-900'
                }`}
                aria-label="Open navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
