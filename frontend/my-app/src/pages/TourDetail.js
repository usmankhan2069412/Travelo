import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ImageGallery from '../components/Tour_Detail_component/ImageGallery';
import BookingForm from '../components/Tour_Detail_component/BookingForm';
import Footer from '../components/Footer';
// import DescriptionSection from '../components/Tour_Detail_component/DescriptionSection';
// import ActivitySection from '../components/Tour_Detail_component/ActivitySection';
// import IncludesSection from '../components/Tour_Detail_component/IncludesSection';
// import SafetySection from '../components/Tour_Detail_component/SafetySection';
import MapSection from '../components/Tour_Detail_component/MapSection';
// import TagItem from '../components/Tour_Detail_component/TagItem';
import { FiCheckCircle } from 'react-icons/fi';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { FaBus, FaLandmark, FaInfoCircle } from 'react-icons/fa';
import { FaShieldAlt, FaVirus, FaUsers, FaClipboardList } from 'react-icons/fa';

const TourDetail = () => {
    const { id } = useParams();
    const [packageDetail, setPackageDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPackageDetail = async () => {
            try {
                const response = await fetch(`http://localhost:5000/package/api/${id}`);
                
                if (!response.ok) throw new Error('Failed to fetch package details');
                const data = await response.json();
                setPackageDetail(data); // Direct state update here
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        fetchPackageDetail();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!packageDetail) return <Navigate to="/" replace />;

     // Function to get the correct image path
     const getImagePath = (url) => {
        const baseUrl = 'http://localhost:5000';
        return url.startsWith(baseUrl) ? url.replace(baseUrl, '') : url;
    };

  // Use the image path from packageDetail
  const imagePath = getImagePath(packageDetail.uploadImage); 
  const imageUrls = `http://localhost:5000/${imagePath}`;
  console.log(imageUrls);
  

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center md:flex-row">
                <ImageGallery imageUrl={imageUrls} title={packageDetail.name} />
                <BookingForm price={packageDetail.price} />
            </div>
            <div>
                <div>
                    <div className="flex bg-gray-200 ml-20 p-4 w-[630px] rounded-lg shadow-lg h-92 gap-4 justify-between">
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <FiCheckCircle className="h-5 w-5" />
                                <h3 className="text-md text-black ml-2">Free Cancellation</h3>
                            </div>
                            <p className="text-gray-700 ml-4 text-sm">
                                Cancel up to 24 hours in advance to receive a full refund.
                            </p>
                            <div className="flex items-center">
                                <FiCheckCircle className="h-5 w-5" />
                                <h3 className="text-md text-black ml-2">Instant Booking</h3>
                            </div>
                            <p className="text-gray-700 ml-4 text-sm">
                                Secure your spot with instant confirmation.
                            </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center">
                                <FiCheckCircle className="h-5 w-5" />
                                <h3 className="text-md text-black ml-2">Mobile Tickets</h3>
                            </div>
                            <p className="text-gray-700 ml-4 text-sm">
                                Use your phone to easily access your ticket.
                            </p>
                            <div className="flex items-center">
                                <FiCheckCircle className="h-5 w-5" />
                                <h3 className="text-md text-black ml-2">Free Cancellation</h3>
                            </div>
                            <p className="text-gray-700 ml-4 text-sm">
                                Cancel up to 24 hours in advance to receive a full refund.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-1 rounded-lg w-[630px] ml-32 my-4 bg-gray-300" />
                {/* Description */}
                <div className="w-[630px]  ml-20 mt-8 bg-[#faedcd]/50 p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-semibold mb-4">Description</h1>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        {packageDetail.description}
                    </p>
                </div>
                {/* Activity */}
                <div className="w-[630px] ml-20 mt-10 mb-6 p-4 bg-white shadow-lg rounded-lg">
                    <h1 className="font-sans font-semibold text-2xl mb-2">Activity</h1>
                    <h2 className="font-sans font-semibold text-xl mb-4">What You Will Do</h2>
                    <div className="space-y-2 text-sm text-gray-700">
                        <ul className="list-disc pl-5">
                            <li className="flex items-center my-1">
                                <FaBus className="text-blue-500 mr-2" />
                                Discover London on board a classic Routemaster vintage double-decker bus
                            </li>
                            <li className="flex items-center my-1">
                                <FaBus className="text-blue-500 mr-2" />
                                Discover London on board a vintage double-decker bus
                            </li>
                            <li className="flex items-center my-1">
                                <FaLandmark className="text-blue-500 mr-2" />
                                Explore iconic landmarks and enjoy the scenic views of London
                            </li>
                            <li className="flex items-center my-1">
                                <FaInfoCircle className="text-blue-500 mr-2" />
                                Learn about London’s history with an expert guide on a double-decker bus
                            </li>
                        </ul>
                    </div>
                    <div className="border-2 rounded-lg my-4 w-full bg-gray-300" />
                </div>


                {/* include not include  */}
                <div className="w-[630px] ml-20 mb-4 p-4 bg-white shadow-lg rounded-lg">
                    <h1 className="font-sans font-semibold text-2xl mb-4">What's Included or Not Included</h1>
                    <div className="flex flex-col md:flex-row md:space-x-8">
                        {/* Includes Section */}
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-bold flex items-center">
                                <FaCheckCircle className="text-green-500 mr-2" /> Includes
                            </h3>
                            <ul className="list-disc pl-5 text-sm">
                                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Double-decker Routemaster tour</li>
                                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Short trip along the River Thames</li>
                                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Changing of the Guard</li>
                                <li className="flex items-center"><FaCheckCircle className="text-green-500 mr-2" /> Gratuities</li>
                            </ul>
                        </div>

                        {/* Not Included Section */}
                        <div className="flex flex-col space-y-2">
                            <h3 className="text-lg font-bold flex items-center">
                                <FaTimesCircle className="text-red-500 mr-2" /> Not Included
                            </h3>
                            <ul className="list-disc pl-5 text-sm">
                                <li className="flex items-center"><FaTimesCircle className="text-red-500 mr-2" /> Meals and drinks</li>
                                <li className="flex items-center"><FaTimesCircle className="text-red-500 mr-2" /> Personal expenses</li>
                                <li className="flex items-center"><FaTimesCircle className="text-red-500 mr-2" /> Entry to certain attractions</li>
                                <li className="flex items-center"><FaTimesCircle className="text-red-500 mr-2" /> Hotel pick-up and drop-off</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-2 rounded-lg my-4 w-full bg-gray-300" />
                </div>
                {/* Safety section */}
                <section className="w-[630px] ml-20 p-4 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Safety</h2>
                    <h3 className="text-lg font-semibold mb-2">Health Precautions</h3>
                    <ul className="space-y-2 list-disc text-sm text-gray-700">
                        <li className="flex items-center">
                            <FaShieldAlt className="text-blue-500 mr-2" />
                            All required protective equipment is provided
                        </li>
                        <li className="flex items-center">
                            <FaVirus className="text-blue-500 mr-2" />
                            All areas that customers touch are frequently cleaned
                        </li>
                        <li className="flex items-center">
                            <FaUsers className="text-blue-500 mr-2" />
                            You must keep social distance while in vehicles
                        </li>
                        <li className="flex items-center">
                            <FaClipboardList className="text-blue-500 mr-2" />
                            The number of visitors is limited to reduce crowds
                        </li>
                    </ul>
                    <div className="border-2 rounded-lg my-4 w-full bg-gray-300" />
                </section>
                {/* Map section */}
                <MapSection/>
            </div>
            <Footer />
        </>
    );
};

export default TourDetail;
