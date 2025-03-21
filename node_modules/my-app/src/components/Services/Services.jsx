import React from 'react';
import ServiceCard from './ServiceCard'; // Correct import
import { FaHiking, FaShieldAlt, FaMapSigns, FaHeadset } from 'react-icons/fa'; // Importing new icons

const Services = () => {
  return (
    <section className="bg-[#F4F1DE] py-16"> {/* Light beige background */}
      <h2 className="text-4xl font-bold text-center text-[#0B3954] mb-8"> {/* Deep blue heading */}
        We Offer the Best Services
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Service Cards */}
          <ServiceCard 
            title="Guided Tours" 
            description="Explore diverse destinations with our expert-guided tours." 
            icon={<FaHiking className="text-4xl text-[#2C5F2D]" />} 
          />
          <ServiceCard 
            title="Travel Insurance" 
            description="Stay protected with comprehensive travel insurance for peace of mind." 
            icon={<FaShieldAlt className="text-4xl text-[#2C5F2D]" />} 
          />
          <ServiceCard 
            title="Custom Itineraries" 
            description="Craft your personalized travel itineraries based on your preferences." 
            icon={<FaMapSigns className="text-4xl text-[#2C5F2D]" />} 
          />
          <ServiceCard 
            title="24/7 Support" 
            description="Experience hassle-free travel with our dedicated 24/7 customer support." 
            icon={<FaHeadset className="text-4xl text-[#2C5F2D]" />} 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
