import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({ price }) => {
    // State for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        from_date: '',
        to_date: '',
        num_guests: 1, // Default value
        price: price ,
    });
    const navigate = useNavigate(); // Initialize useNavigate


    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send form data as JSON
            });

            if (!response.ok) throw new Error('Failed to book tour');
           

            // Alert success message
            alert('Booking successful!');
            navigate('/package/tour-detail/booking');

            // Optionally, clear the form
            setFormData({
                name: '',
                email: '',
                phone: '',
                from_date: '',
                to_date: '',
                num_guests: 1,
                price :price ,
            });
        } catch (error) {
            console.error(error);
            alert('Error: ' + error.message); // Show error message
        }
    };

    return (
        <div className="bg-white mt-10 mb-10 w-full max-w-md p-8 rounded-lg shadow-md mx-auto">
            <h2 className="text-3xl text-center font-bold mb-4 text-ffd400">Book Your Tour</h2>
            <div className="border-t-2 border-ffd819 w-full mx-auto mb-4"></div>

            <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
                {/* Name Field */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="name" className="mb-2 text-lg text-gray-700 font-semibold">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-ffd819"
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="email" className="mb-2 text-lg text-gray-700 font-semibold">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-ffd819"
                    />
                </div>

                {/* Phone Number Field */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="phone" className="mb-2 text-lg text-gray-700 font-semibold">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-ffd819"
                    />
                </div>

                {/* From Date */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="from_date" className="mb-2 text-lg text-gray-700 font-semibold">From:</label>
                    <input
                        type="date"
                        id="from_date"
                        name="from_date"
                        value={formData.from_date}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-ffd819"
                    />
                </div>

                {/* To Date */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="to_date" className="mb-2 text-lg text-gray-700 font-semibold">To:</label>
                    <input
                        type="date"
                        id="to_date"
                        name="to_date"
                        value={formData.to_date}
                        onChange={handleChange}
                        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-ffd819"
                    />
                </div>

                {/* Number of Guests */}
                <div className="flex flex-col mb-4">
                    <label htmlFor="num_guests" className="mb-2 text-lg text-gray-700 font-semibold">
                        No. of Guests:
                    </label>
                    <input
                        type="number"
                        id="num_guests"
                        name="num_guests"
                        value={formData.num_guests}
                        onChange={handleChange}
                        placeholder="Enter the number of guests"
                        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-ffd819"
                        min="1"
                    />
                </div>

                {/* Subtotal */}
                <div className="flex justify-between mb-4 mt-2 text-lg text-gray-700">
                    <span>Subtotal:</span>
                    <span className="font-bold">{price}</span>
                </div>

                {/* Action Buttons */}
                <button
                    type="submit" // Change to submit type
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold mt-4 py-2 px-4 rounded w-full transition-all duration-300 ease-in-out"
                >
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
