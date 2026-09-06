import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeClass = ({ isActive }) => {
    return isActive ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600 transition-colors';
  };

  return (
    <nav className={`bg-white/80 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md border-b border-slate-100' : 'border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo with pulse icon */}
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
                <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </span>
              <span className="text-xl font-bold text-primary-900">MediCare+</span>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-primary-600 transition-colors'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={activeClass}
            >
              Services
            </NavLink>
            <NavLink
              to="/doctors"
              className={activeClass}
            >
              Doctors
            </NavLink>
            <NavLink
              to="/about"
              className={activeClass}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={activeClass}
            >
              Contact
            </NavLink>
          </div>
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button
              id="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="md:hidden flex items-center justify-center p-2 rounded-md text-black hover:text-gray-700 hover:bg-gray-100"
            >
              <svg className="h-6 w-6 text-black" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {/* CTA Button - now links to Contact section for booking */}
            <NavLink
              to="/contact"
              className="whitespace-nowrap text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-200"
            >
              Book Appointment
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            to="/"
            end
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? 'block px-3 py-2 rounded-md text-base font-medium text-primary-600'
                : 'block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? 'block px-3 py-2 rounded-md text-base font-medium text-primary-600'
                : 'block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/doctors"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? 'block px-3 py-2 rounded-md text-base font-medium text-primary-600'
                : 'block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50'
            }
          >
            Doctors
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? 'block px-3 py-2 rounded-md text-base font-medium text-primary-600'
                : 'block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? 'block px-3 py-2 rounded-md text-base font-medium text-primary-600'
                : 'block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;