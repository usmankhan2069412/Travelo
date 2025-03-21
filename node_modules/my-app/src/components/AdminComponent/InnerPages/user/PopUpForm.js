import React, { useState } from 'react';
import axios from 'axios';

const PopUpForm = ({ toggle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/contact', formData);
        toggle(); // Close the form on successful submission
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-40 z-50 transition-opacity duration-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
                <h2 className="text-2xl font-semibold mb-6 text-gray-700 text-center">Add Contact</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:outline-none"
                        placeholder="Name" 
                        required 
                    />

                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:outline-none" 
                        placeholder="Email" 
                        required 
                    />

                    <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:outline-none" 
                        placeholder="Subject" 
                        required 
                    />

                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-lg p-3 w-full focus:border-blue-500 focus:outline-none" 
                        placeholder="Message" 
                        rows="4" 
                        required 
                    />

                    <div className="flex justify-between mt-4">
                        <button 
                            type="submit" 
                            className="bg-blue-600 text-white rounded-lg py-2 px-4 hover:bg-blue-700 w-full mr-2"
                        >
                            Submit
                        </button>
                        <button 
                            type="button" 
                            onClick={toggle} 
                            className="bg-gray-400 text-white rounded-lg py-2 px-4 hover:bg-gray-500 w-full ml-2"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopUpForm;
