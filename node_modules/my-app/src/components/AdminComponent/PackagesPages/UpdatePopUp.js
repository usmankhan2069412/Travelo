import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdatePopUp = ({ pkg, onClose }) => {
    const [formData, setFormData] = useState({
        id: pkg ? pkg._id : '',
        name: pkg ? pkg.name : '',
        location: pkg ? pkg.location : '',
        duration: pkg ? pkg.duration : '',
        price: pkg ? pkg.price : '',
        description: pkg ? pkg.description : '',
        uploadImage: pkg ? pkg.uploadImage : ''
    });
    const [imagePreview, setImagePreview] = useState(pkg ? pkg.uploadImage : null);

    useEffect(() => {
        if (pkg) {
            setFormData({
                id: pkg._id,
                name: pkg.name,
                location: pkg.location,
                duration: pkg.duration,
                price: pkg.price,
                description: pkg.description,
                uploadImage: ''
            });
            setImagePreview(getImagePath(pkg.uploadImage)); // Use the image path from pkg
        }
    }, [pkg]);

    // Function to get the correct image path
    const getImagePath = (url) => {
        const baseUrl = 'http://localhost:5000';
        return url.startsWith(baseUrl) ? url.replace(baseUrl, '') : url;
    };

    // Handle form data changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle image file change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({ ...prevData, uploadImage: file }));
        setImagePreview(URL.createObjectURL(file)); // Preview the selected file
    };

    // Submit the update form
    const handleUpdate = async () => {
        try {
            const formDataObj = new FormData();
            formDataObj.append('name', formData.name);
            formDataObj.append('location', formData.location);
            formDataObj.append('duration', formData.duration);
            formDataObj.append('price', formData.price);
            formDataObj.append('description', formData.description);
            if (formData.uploadImage) formDataObj.append('uploadImage', formData.uploadImage);

            await axios.put(`http://localhost:5000/package/api/${formData.id}`, formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert("Package updated successfully!");
            onClose(); // Close the popup after update
        } catch (error) {
            console.error("Error updating package:", error);
            alert("Failed to update package");
        }
    };
    console.log(`http://localhost:5000/package/api/${formData.id}`);


    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-50  flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-1/2">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">Update Package</h2>

                {/* Update Form */}
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Package Name"
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Location"
                        className="input-field"
                        required
                    />
                    <input
                        type="text"
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        placeholder="Duration (e.g., 5 days/4 nights)"
                        className="input-field"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price (in PKR)"
                        className="input-field"
                        required
                    />
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Package Description"
                        className="input-field h-32 md:col-span-2"
                        rows="5"
                    />
                    <label htmlFor="fileInput">Upload File not work</label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                    {imagePreview && (
                        <img src={imagePreview} alt="Preview" className="mt-4 h-32 object-cover rounded-lg" />
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end mt-6">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-4">
                        Cancel
                    </button>
                    <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdatePopUp;
