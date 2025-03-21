import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PackageCard from './PackageCard';
import { FiSearch } from 'react-icons/fi';
import _ from 'lodash';

const PackageSection = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState({ location: '' });

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:5000/package/api/', {
          params: searchParams
        });
        setPackages(response.data);
      } catch (err) {
        console.error("Error fetching packages:", err);
        setError("Failed to load packages. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [searchParams]);

  // Debounce function for search input
  const handleSearch = _.debounce((location) => {
    setSearchParams({ location });
  }, 300);

  const onInputChange = (e) => {
    const location = e.target.value;
    handleSearch(location);
  };

  const getImagePath = (url) => {
    const baseUrl = 'http://localhost:5000';
    return url.startsWith(baseUrl) ? url.replace(baseUrl, '') : url;
  };

  return (
    <div className="bg-[#F4F1DE] py-16">
      <h1 className="text-5xl font-bold text-center text-[#0B3954] mb-10">
        <span className="block">Packages</span>
      </h1>
      <p className="text-center text-lg text-[#2C5F2D] mb-12 px-4">
        Discover our exclusive packages tailored to your travel needs. Enjoy unique experiences at amazing prices!
      </p>

      {/* Search Input */}
      <div className="max-w-md mx-auto mb-8 flex items-center space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            id="location"
            name="location"
            className="block w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter location"
            onChange={onInputChange}
          />
          <FiSearch className="absolute top-3 right-3 text-gray-500" size={20} />
        </div>
      </div>

      {/* Loading and Error States */}
      {loading ? (
        <p className="text-center text-lg text-gray-500">Loading packages...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">{error}</p>
      ) : (
        <div className="container  flex flex-wrap justify-center gap-8">
          {packages.length > 0 ? (
            packages.map((pkg) => {
              const imagePath = getImagePath(pkg.uploadImage);
              const imageUrl = `http://localhost:5000${imagePath}`;
              return (
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 m-6 px-2" key={pkg._id}>
                  <div className="flex justify-center">
                    <PackageCard
                      id={pkg._id}
                      name={pkg.name}
                      description={pkg.description}
                      price={pkg.price}
                      location={pkg.location}
                      duration={pkg.duration}
                      imageUrl={imageUrl}
                      searchTerm={searchParams.location} // Pass the search term to highlight
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-lg text-gray-500">No packages found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PackageSection;
