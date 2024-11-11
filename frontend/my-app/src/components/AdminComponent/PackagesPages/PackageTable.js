import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UpdatePopUp from './UpdatePopUp'; // Assuming this is where your UpdatePopUp component is defined

const PackageTable = () => {
    const [packages, setPackages] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Fetch packages from API
    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axios.get('http://localhost:5000/package/api');
                setPackages(response.data);
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        };
        fetchPackages();
    }, []);

    // Handle delete
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Do you want to delete this package?");
        if (confirmDelete) {
            try {
                console.log("Attempting to delete package with ID:", id);
                await axios.delete(`http://localhost:5000/package/api/${id}`);
                alert('Package deleted successfully!');
                setPackages(packages.filter((pkg) => pkg._id !== id)); // Update package list
            } catch (error) {
                console.error("Error deleting package:", error);
                alert('Failed to delete package');
            }
        } else {
            alert('Package deletion canceled');
        }
    };
    

    // Open the update popup
    const openPopup = (pkg) => {
        setSelectedPackage(pkg);
        setIsPopupOpen(true);
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Package List</h2>
            
            {/* Package Table */}
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Name</th>
                        <th className="border border-gray-300 p-2">Location</th>
                        <th className="border border-gray-300 p-2">Duration</th>
                        <th className="border border-gray-300 p-2">Price</th>
                        <th className="border border-gray-300 p-2">Image</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg) => (
                        <tr key={pkg._id}>
                            <td className="border border-gray-300 p-2">{pkg.id}</td>
                            <td className="border border-gray-300 p-2">{pkg.name}</td>
                            <td className="border border-gray-300 p-2">{pkg.location}</td>
                            <td className="border border-gray-300 p-2">{pkg.duration}</td>
                            <td className="border border-gray-300 p-2">${pkg.price}</td>
                            <td className="border border-gray-300 p-2">
                                <img src={pkg.uploadImage} alt={pkg.name} className="w-20 h-20 object-cover"/>
                            </td>
                            <td className="border border-gray-300 p-2">
                                <button onClick={() => openPopup(pkg)} className="bg-yellow-500 text-white px-4 py-1 rounded-lg mb-2 hover:bg-yellow-600 transition duration-200 mr-2">Edit</button>
                                <button onClick={() => handleDelete(pkg._id)} className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition duration-200">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Popup for Update */}
            {isPopupOpen && (
                <UpdatePopUp 
                    pkg={selectedPackage}
                    onClose={() => setIsPopupOpen(false)}
                />
            )}
        </div>
    );
};

export default PackageTable;
