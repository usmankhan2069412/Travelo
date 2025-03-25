import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StripePayment from './StripePayment';

const BookingDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState(null);

    useEffect(() => {
        // Get booking data from location state
        if (location.state && location.state.bookingData) {
            setBookingData(location.state.bookingData);
        } else {
            // If no booking data is found, redirect to home
            navigate('/');
        }
    }, [location, navigate]);

    if (!bookingData) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-center mb-8 text-ffd400">Complete Your Booking</h1>
            
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left side - Payment Form */}
                <div className="w-full md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Payment Details</h2>
                        <StripePayment bookingData={bookingData} />
                    </div>
                </div>
                
                {/* Right side - Booking Summary */}
                <div className="w-full md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Booking Summary</h2>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Name:</span>
                                <span>{bookingData.name}</span>
                            </div>
                            
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Email:</span>
                                <span>{bookingData.email}</span>
                            </div>
                            
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Phone:</span>
                                <span>{bookingData.phone}</span>
                            </div>
                            
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">From Date:</span>
                                <span>{new Date(bookingData.from_date).toLocaleDateString()}</span>
                            </div>
                            
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">To Date:</span>
                                <span>{new Date(bookingData.to_date).toLocaleDateString()}</span>
                            </div>
                            
                            <div className="flex justify-between border-b pb-2">
                                <span className="font-semibold">Number of Guests:</span>
                                <span>{bookingData.num_guests}</span>
                            </div>
                            
                            <div className="flex justify-between pt-2">
                                <span className="font-bold text-lg">Total Amount:</span>
                                <span className="font-bold text-lg">${bookingData.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;