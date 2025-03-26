import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NewNavbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const navLinks = [
    { to: '/home', text: 'Home' },
    { to: '/about', text: 'About Us' },
    { to: '/populardestination', text: 'Popular Destinations' },
    { to: '/help', text: 'Help' },
    { to: '/imageGallery', text: 'Gallery' },
  ];

  return (
    <header className={`font-sans py-4 fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0B3954]/95 shadow-lg' : 'bg-[#0B3954]'} lg:bg-[#F4F1DE]`}>
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-3 z-20">
            <span className="text-[#FFE156] text-2xl font-bold lg:text-[#0B3954] transition-colors duration-200">
              Tour Travel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.to} className="relative group">
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `text-white lg:text-[#0B3954] hover:text-[#F77F00] transition-colors duration-200 ${isActive ? 'text-[#F77F00]' : ''}`
                    }
                  >
                    {link.text}
                  </NavLink>
                  <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#F77F00] scale-x-0 transition-transform duration-300 transform origin-center group-hover:scale-x-100" />
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="bg-[#ffda33] text-[#0B3954] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#F77F00] transition-all duration-200 hover:shadow-lg lg:border lg:border-[#0B3954] lg:hover:bg-[#2c5065] lg:hover:text-white"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white z-20 p-2 hover:bg-[#0B3954]/20 rounded-lg transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-[#0B3954] transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden z-10`}
          >
            <div className="h-full flex flex-col justify-center px-6 py-20">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `block text-xl text-white py-2 transition-colors duration-200 ${isActive ? 'text-[#F77F00]' : 'hover:text-[#FFE156]'}`
                      }
                      onClick={toggleMobileMenu}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
                <li className="pt-6">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-[#ffd61f] text-[#0B3954] px-6 py-3 rounded-lg font-semibold hover:bg-[#FFE156] transition-colors duration-200"
                    onClick={toggleMobileMenu}
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NewNavbar;