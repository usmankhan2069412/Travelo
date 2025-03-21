import React from 'react';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#333] mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
