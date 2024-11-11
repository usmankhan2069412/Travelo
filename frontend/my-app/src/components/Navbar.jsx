import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import icon from '../assets/icon/image.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="font-sans py-2 shadow-md text-white bg-[#0B3954] sticky top-0 z-50 transition-colors duration-200 lg:bg-[#F4F1DE] lg:text-black">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <nav className="w-full flex items-center justify-between">
          {/* Logo and Title */}
          <Link to="/home" className="flex items-center space-x-2 text-[#FFE156] text-2xl font-bold lg:text-[#0B3954]">
            {/* <img className="w-12 md:w-16 lg:w-20 h-auto" src={icon} alt="Traveloicon" /> */}
            <span className="hidden sm:inline">Tour Travel</span>
          </Link>

          {/* Menu for larger screens */}
          <ul className="hidden md:flex space-x-6 text-white lg:text-[#0B3954]">
            <li className="relative group">
              <NavLink
                to="/home"
                className="hover_link hover:scale-105 transition-transform duration-200 cursor-pointer relative"
                activeClassName="text-[#F77F00]"
              >
                Home
              </NavLink>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0B3954] scale-x-0 transition-transform duration-300 transform origin-center group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <NavLink
                to="/about"
                className="hover_link hover:scale-105 transition-transform duration-200 cursor-pointer relative"
                activeClassName="text-[#F77F00]"
              >
                About Us
              </NavLink>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0B3954] scale-x-0 transition-transform duration-300 transform origin-center group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <NavLink
                to="/populardestination"
                className="hover_link hover:scale-105 transition-transform duration-200 cursor-pointer relative"
                activeClassName="text-[#F77F00]"
              >
                Popular Destinations
              </NavLink>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0B3954] scale-x-0 transition-transform duration-300 transform origin-center group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <NavLink
                to="/package"
                className="hover_link hover:scale-105 transition-transform duration-200 cursor-pointer relative"
                activeClassName="text-[#F77F00]"
              >
                Our Packages
              </NavLink>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0B3954] scale-x-0 transition-transform duration-300 transform origin-center group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <NavLink
                to="/help"
                className="hover_link hover:scale-105 transition-transform duration-200 cursor-pointer relative"
                activeClassName="text-[#F77F00]"
              >
                Help
              </NavLink>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0B3954] scale-x-0 transition-transform duration-300 transform origin-center group-hover:scale-x-100" />
            </li>
            <li className="relative group">
              <NavLink
                to="/login"
                className="hover_link hover:scale-105 bg-gray-200 rounded-md shadow-md px-3 py-2 transition-transform duration-200 cursor-pointer relative"
                activeClassName="text-[#F77F00]"
              >
                AdminPanel
              </NavLink>
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#0B3954] scale-x-0 transition-transform duration-300 transform origin-center group-hover:scale-x-100" />
            </li>
          </ul>

          {/* Contact Us Button */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-[#ffda33] text-[#0B3954] px-4 py-2 rounded hover:bg-[#F77F00] transition-colors duration-200 lg:border lg:border-[#0B3954] lg:hover:bg-[#2c5065] lg:hover:text-white"
          >
            Contact us
          </Link>

          {/* Hamburger Icon for small screens */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white focus:outline-none"
            aria-expanded={isMobileMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>


      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden px-4 py-4 bg-[#0B3954] transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="space-y-4 text-white">
          <li>
            <NavLink to="/home" className="block hover_link hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={toggleMobileMenu}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="block hover_link hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={toggleMobileMenu}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/populardestination" className="block hover_link hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={toggleMobileMenu}>Popular Destinations</NavLink>
          </li>
          <li>
            <NavLink to="/package" className="block hover_link hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={toggleMobileMenu}>Our Packages</NavLink>
          </li>
          <li>
            <NavLink to="/help" className="block hover_link hover:scale-105 transition-transform duration-200 cursor-pointer" onClick={toggleMobileMenu}>Help</NavLink>
          </li>
          <li>
            <Link
              to="/contact"
              className="block bg-[#ffd61f] text-[#0B3954] px-4 py-2 rounded hover:bg-[#b97329] transition-colors duration-200"
            >
              Contact us
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
