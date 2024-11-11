import React, { useState } from 'react';
import { FaBook, FaInfoCircle, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PackageCard = ({ id, name, description, location, duration, price, imageUrl, onBookNow }) => {  
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => setShowFullDescription(prev => !prev);

    const renderDescription = () => {
        if (showFullDescription) {
            return (
                <span>
                    {description}
                    <span 
                        onClick={toggleDescription} 
                        className="text-[#F77F00] cursor-pointer ml-1 font-semibold"
                    >
                        Show Less
                    </span>
                </span>
            );
        } 
        return (
            <span>
                {description.length > 150 ? `${description.slice(0, 150)}...` : description}
                <span 
                    onClick={toggleDescription} 
                    className="text-[#F77F00] cursor-pointer ml-1 font-semibold"
                >
                    See More
                </span>
            </span>
        );
    };

    return (
        <div className="flex justify-center mb-2 px-3 py-2">
            <div className="bg-[#F4F1DE] rounded-xl z-10 shadow-md max-w-sm w-[350px] h-auto transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out relative">
                <div className="relative">
                    <img 
                        src={imageUrl || '/default-image.jpg'} 
                        alt={name} 
                        className="w-full h-56 object-cover rounded-t-xl" 
                    />
                    <div className="absolute inset-0 bg-black opacity-30 rounded-t-xl"></div>
                </div>

                <div className="m-4 space-y-3">
                    <h2 className="text-2xl font-bold tracking-tighter text-[#0B3954]">{name}</h2>
                    <div className="flex items-center text-lg text-[#2C5F2D] font-medium mb-2">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{location}</span>
                    </div>

                    {/* Description with "See More" functionality */}
                    <p className={`text-gray-600 mb-3`}>
                        {renderDescription()}
                    </p>

                    <div className="flex justify-between items-center mb-4">
                        <p className="text-lg font-semibold text-[#F77F00]">Price: <span className='text-[#0B3954]'>Rs {price}</span></p>
                        <div className="flex items-center text-gray-500">
                            <FaClock className="mr-1" />
                            <span>{duration}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-4 space-x-4">
                        <Link to={`/package/booking-form/${id}`}>
                            <button 
                                onClick={onBookNow} 
                                className="flex items-center bg-[#F77F00] text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-[#0B3954]"
                            >
                                <FaBook className="mr-2" /> Book Now
                            </button>
                        </Link>
                        <Link to={`/package/${id}`}>
                            <button 
                                className="flex items-center text-[#0B3954] font-semibold py-2 px-4 rounded-lg border border-[#0B3954] transition duration-300 hover:bg-[#0B3954] hover:text-white"
                            >
                                <FaInfoCircle className="mr-2" /> More Info
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PackageCard;
