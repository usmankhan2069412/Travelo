import React, { useState } from 'react';
import { citiesData } from './cityData'; // Import city data

const PopularCities = () => {
  const [selectedCity, setSelectedCity] = useState(citiesData.Lahore); // Default city: Alaska

  const handleCityClick = (cityKey) => {
    setSelectedCity(citiesData[cityKey]); // Update selected city
  };

  return (
    <div id="populardestination" className="bg-[#F4F1DE] py-12">
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#0B3954] mb-4 animate-fadeIn">
          Explore Popular Cities
        </h1>
        <p className="text-center text-[#245225] mb-8 text-lg md:text-xl">
          Discover the beauty and culture of these amazing destinations. Each city offers unique experiences waiting for you.
        </p>
        <div className="flex justify-center space-x-2 mb-8"> {/* Remove flex-wrap to keep in a single line */}
          {Object.keys(citiesData).map((cityKey, index) => (
            <button
              key={index}
              onClick={() => handleCityClick(cityKey)}
              className={`min-w-[80px] px-2 py-2 border rounded-full transition-all duration-300 ease-in-out ${selectedCity.name === citiesData[cityKey].name
                  ? 'bg-[#0B3954] text-white shadow-lg' // Change selected button color
                  : 'bg-white text-[#2C5F2D] border-[#0B3954] hover:bg-[#4f8150] hover:text-white'
                }`}
            >
              {citiesData[cityKey].name}
            </button>
          ))}
        </div>

        {/* Image Section */}
        <div className="mb-8 h-[500px]  flex  justify-center animate-fadeIn">
          <img
            src={selectedCity.image}
            alt={selectedCity.name}
            className="w-full md:w-3/4 lg:w-[900px] h-auto bg-cover rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col md:flex-row justify-between items-start bg-silver-200 p-6 md:p-8 rounded-lg shadow-2xl max-w-3xl mx-auto relative gap-5">
          {/* Left Section: Title and Paragraph */}
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold font-semibold text-[#0B3954] mb-4">{selectedCity.name}</h2>
            <p className="text-[#2C5F2D] mb-6 tracking-tight text-base md:text-lg">{selectedCity.description}</p>
          </div>

          {/* Right Section: Buttons */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {selectedCity.transportOptions.map((option, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-[#324958] text-white rounded-3xl shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-[#4f8150] w-full"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCities;
