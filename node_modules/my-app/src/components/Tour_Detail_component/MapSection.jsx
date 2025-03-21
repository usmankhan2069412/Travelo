import React from 'react';
import { FaMapMarkerAlt, FaFlag } from 'react-icons/fa';

const MapSection = () => (
  <div className="w-full md:w-[630px] ml-4 md:ml-20 p-4 my-10 bg-white shadow-lg rounded-lg">
    <h2 className="text-lg font-bold mb-4 flex items-center">
      <FaMapMarkerAlt className="text-blue-500 mr-2" /> Meeting Point Address
    </h2>
    <ul className="list-disc text-sm space-y-2 text-gray-700 mb-4">
      <li className="flex items-start">
        <FaFlag className="text-blue-500 mr-2 mt-1" />
        Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). 
        It's opposite the entrance to Aldgate East Tube Station and the Whitechapel Gallery. 
        Look for a guide wearing SMT attire and holding a red SMT flag.
      </li>
    </ul>
    <a 
      href="https://www.google.com/maps" // Replace with the actual Google Maps link if needed
      className="text-blue-500 hover:text-blue-700" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      Open in Google Maps
    </a>
    <div className="w-full h-0 pb-[56.25%] relative mt-4"> {/* 16:9 aspect ratio for iframe */}
      <iframe
        src="https://www.google.com/maps/embed?pb=..." // Replace with the actual embed link if needed
        className="absolute top-0 left-0 w-full h-full rounded-md border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <img src="/images/image1.jpg" alt="Map" className="w-full mt-4 rounded-md shadow-md" />
  </div>
);

export default MapSection;
