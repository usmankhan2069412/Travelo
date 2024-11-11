import React from 'react';
import destination1 from '../../assets/images/Lahore1.jpg';
import destination2 from '../../assets/images/Karachi1.jpeg';
import destination3 from '../../assets/images/Balochistan.jpg';
import destination4 from '../../assets/images/Islamabad.jpg'; // Example destination image
import {Link} from 'react-router-dom';

const PopularDestinations = () => {
  return (
    <div className="bg-fffae5 py-16">
      <h1 className="text-5xl font-extrabold text-center text-ffd400 mb-10">
        Popular Destinations
      </h1>
      <p className="text-center text-lg text-gray-600 mb-12">
        Explore the world’s most exciting places. Discover unforgettable experiences in these stunning destinations!
      </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {/* Destination Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={destination1} alt="Destination 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Lahore</h2>
            <p className="text-gray-600">Discover the Rich Heritage and Vibrant Culture of Lahore City.</p>
            <Link to="/blog">Learn more...</Link>
          </div>
        </div>
         
        {/* Destination Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={destination2} alt="Destination 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Karachi</h2>
            <p className="text-gray-600">
            Explore the Dynamic Energy and Coastal Charm of Karachi City</p>
          </div>
        </div>

        {/* Destination Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={destination3} alt="Destination 3" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Quetta</h2>
            <p className="text-gray-600">Unveil the Cultural Heritage and Natural Beauty of Quetta City.</p>
          </div>
        </div>

        {/* Destination Card 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={destination4} alt="Destination 4" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Islamabad</h2>
            <p className="text-gray-600">
            Experience the Serenity and Modern Elegance of Islamabad City.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
