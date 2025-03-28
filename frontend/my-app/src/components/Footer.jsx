import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-ffe97f poppin-light  shadow-2xl border-t border-ffd400 text-ffd400">
      <div className="max-w-9xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl poppin-medium font-bold text-ffdd32">MA Tour & Travel</h2>
            <p className="mt-4 text-fff2b2">
              We help you discover the best tour packages and travel experiences across the world with ease and simplicity.
            </p>
            {/* Social Icons */}
            {/* <div className="mt-6 flex space-x-4">
              <a href="#" className="text-ffd819 hover:text-fff2b2 transition-colors">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-ffd819 hover:text-fff2b2 transition-colors">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="#" className="text-ffd819 hover:text-fff2b2 transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-ffd819 hover:text-fff2b2 transition-colors">
                <i className="fas fa-infinity"></i>
              </a>
            </div> */}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-ffe14c uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/about" className="text-ffd819 hover:text-fff2b2 transition-colors">About Us</Link></li>
              {/* <li><Link to="" className="text-ffd819 hover:text-fff2b2 transition-colors">Careers</Link></li> */}
              <li><Link to="/blog" className="text-ffd819 hover:text-fff2b2 transition-colors">Blog</Link></li>
              {/* <li><Link to="#" className="text-ffd819 hover:text-fff2b2 transition-colors">Pricing</Link></li> */}
              <li><Link to="/admin" className="text-ffd819 hover:text-fff2b2 transition-colors">admin</Link></li>

            </ul>
          </div>

          {/* Destinations Links */}
          <div>
            <h3 className="text-sm font-semibold text-ffe14c uppercase tracking-wider">Destinations</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/populardestination" className="text-ffd819 hover:text-fff2b2 transition-colors">Lahore</Link></li>
              <li><Link to="/populardestination" className="text-ffd819 hover:text-fff2b2 transition-colors">Karachi</Link></li>
              <li><Link to="/populardestination" className="text-ffd819 hover:text-fff2b2 transition-colors">Islamabad</Link></li>
              <li><Link to="/populardestination" className="text-ffd819 hover:text-fff2b2 transition-colors">Quetta</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-ffe14c uppercase tracking-wider">Join Our Newsletter</h3>
            <p className="mt-4 text-sm text-fff2b2">Receive weekly updates for the best tour packages.</p>
            <form className="mt-6 flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-l-md bg-fff6cc border border-gray-50 text-gray-800 focus:ring-2 focus:ring-ffd819 focus:border-ffd819" 
              />
              <button 
                type="submit" 
                className="mt-2 sm:mt-0 sm:ml-2 bg-yellow-500 text-white w-[200px] rounded hover:bg-yellow-600 transition-colors duration-200 lg:border lg:border-black lg:text-black lg:hover:bg-gray-100">
                Subscribe
              </button>
              
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-ffd400 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-fff2b2">
          <p>&copy; 2024 MA Tour & Travel. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/populardestination" className="hover:text-ffd819 transition-colors">Terms of Service</Link>
            <Link to="/populardestination" className="hover:text-ffd819 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
