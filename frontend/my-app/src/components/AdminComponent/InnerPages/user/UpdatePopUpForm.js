import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdatePopUpForm({ toggle, onFormSubmit, currentUser }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        // Set initial form data to current user data
        setFormData(currentUser);
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/contact/${currentUser._id}`, formData)
            .then(() => {
                onFormSubmit(); // Refresh user data after submission
                toggle(); // Close the popup
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4">Update User</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mb-4 p-2 border rounded w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mb-4 p-2 border rounded w-full"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="mb-4 p-2 border rounded w-full"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        className="mb-4 p-2 border rounded w-full"
                        required
                    />
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        >
                            Update
                        </button>
                        <button
                            type="button"
                            onClick={toggle}
                            className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdatePopUpForm;
