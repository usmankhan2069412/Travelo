import React from 'react';
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons
import { Link } from 'react-router-dom';

const SearchSection = () => {
  return (
    <div className="bg-[#F4F1DE] py-10"> {/* Background in light beige */}
      <div className="max-w-5xl mx-auto p-4 md:p-6">
        {/* Main Search Container */}
        <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white shadow-lg rounded-lg border border-[#0B3954]"> {/* Deep blue border */}

          {/* Location Section */}
          <div className="flex items-center space-x-3 w-full md:w-auto mb-4 md:mb-0">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-[#2C5F2D] h-6 w-6 mr-2" /> {/* Green icon */}
                <span className="font-semibold text-xl text-[#2C5F2D]">Location</span> {/* Green text */}
              </div>
              <input
                type="text"
                className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] transition duration-300 ease-in-out"
                placeholder="Enter your location"
                aria-label="Location"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-l h-12 md:mx-4"></div>

          {/* Guests Section */}
          <div className="flex items-center space-x-3 w-full md:w-auto mb-4 md:mb-0">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <FaUsers className="text-[#2C5F2D] h-6 w-6 mr-2" /> {/* Green icon */}
                <span className="font-semibold text-xl text-[#2C5F2D]">Guests</span> {/* Green text */}
              </div>
              <input
                type="number"
                className="w-full px-4 py-2 text-gray-700 placeholder-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] transition duration-300 ease-in-out"
                placeholder="Number of guests"
                aria-label="Guests"
                min="1"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-l h-12 md:mx-4"></div>

          {/* Date Section */}
          <div className="flex items-center space-x-3 w-full md:w-auto mb-4 md:mb-0">
            <div className="flex flex-col">
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-[#2C5F2D] h-6 w-6 mr-2" /> {/* Green icon */}
                <label htmlFor="date-picker" className="font-semibold text-xl text-[#2C5F2D]">Date</label> {/* Green text */}
              </div>
              <input
                type="date"
                id="date-picker"
                className="w-full px-4 py-2 text-gray-500 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] transition duration-300 ease-in-out"
                aria-label="Date"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>
          </div>

          <Link to="/package">
            <button className="ml-6 px-6 py-3 bg-[#FFE156] text-[#0B3954] font-bold rounded-full shadow-md hover:bg-[#F77F00] transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#F77F00]">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
