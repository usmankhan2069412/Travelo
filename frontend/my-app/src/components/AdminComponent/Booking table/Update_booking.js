import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UpdatePopUpForm({ toggle, onFormSubmit, currentUser }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        from_date: '',
        to_date: '',
        num_guests: 1,
        price: 0,
    });

    useEffect(() => {
        if (currentUser) {
            setFormData(currentUser); // Set initial form data to current user data
        }
    }, [currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/bookings/${currentUser._id}`, formData)
            .then(() => {
                onFormSubmit(); // Refresh the booking list
                toggle(); // Close the modal
            })
            .catch((error) => {
                console.error("Error updating booking:", error);
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="bg-white rounded shadow-lg p-6 max-w-lg w-full mx-4">
                <h2 className="text-xl font-bold mb-4">Update Booking</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="date"
                        name="from_date"
                        value={formData.from_date}
                        onChange={handleChange}
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="date"
                        name="to_date"
                        value={formData.to_date}
                        onChange={handleChange}
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="number"
                        name="num_guests"
                        value={formData.num_guests}
                        onChange={handleChange}
                        placeholder="Number of Guests"
                        min="1"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="border p-2 rounded w-full mb-2"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition w-full">
                        Update Booking
                    </button>
                </form>
                <button onClick={toggle} className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-600 transition w-full">Cancel</button>
            </div>
        </div>
    );
}

export default UpdatePopUpForm;
