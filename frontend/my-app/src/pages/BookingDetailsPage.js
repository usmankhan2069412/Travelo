import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookingDetails from '../components/Payment/BookingDetails';

const BookingDetailsPage = () => {
    return (
        <>
            <Navbar />
            <BookingDetails />
            <Footer />
        </>
    );
};

export default BookingDetailsPage;