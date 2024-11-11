import React, { useState } from 'react';
import axios from 'axios';

const PackageCardForm = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
        price: '',
        imageUrl: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Create Package
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/package-card', formData, {
                headers: { 'Content-Type': 'application/json' }
            });
            alert('Package created successfully!');
            setFormData({ id: '', name: '', description: '', price: '', imageUrl: '' });
        } catch (error) {
            console.error("Error creating package:", error);
            alert('Failed to create package');
        }
    };

    // Edit Package
    const handleEdit = async () => {
        if (!formData.id) {
            alert('Please provide an ID to edit');
            return;
        }
        try {
            await axios.put(`http://localhost:5000/package-card/${formData.id}`, formData, {
                headers: { 'Content-Type': 'application/json' }
            });
            alert('Package edited successfully!');
        } catch (error) {
            console.error("Error editing package:", error);
            alert('Failed to edit package');
        }
    };

    // Delete Package
    const handleDelete = async () => {
        if (!formData.id) {
            alert('Please provide an ID to delete');
            return;
        }
        try {
            await axios.delete(`http://localhost:5000/package-card/${formData.id}`);
            alert('Package deleted successfully!');
            setFormData({ id: '', name: '', description: '', price: '', imageUrl: '' });
        } catch (error) {
            console.error("Error deleting package:", error);
            alert('Failed to delete package');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">Manage Package</h2>
            <form onSubmit={handleCreate} className="space-y-4">
                <input
                    type="number"
                    name="id"
                    placeholder="Package ID"
                    value={formData.id}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Package Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                />
                <input
                    type="text"
                    name="imageUrl"
                    placeholder="Image URL"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Create Package
                </button>
            </form>

            <div className="mt-6 flex justify-between space-x-4">
                <button
                    onClick={handleEdit}
                    className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                >
                    Edit Package
                </button>
                <button
                    onClick={handleDelete}
                    className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                    Delete Package
                </button>
            </div>
        </div>
    );
};

export default PackageCardForm;
