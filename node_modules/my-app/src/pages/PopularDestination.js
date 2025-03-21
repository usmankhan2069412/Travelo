import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PopularDestinations from '../components/Tour_Packages/PopularDestination';

const PopularDestination = () => {
    return (
        <>
        <Navbar />
        <PopularDestinations/>
        <Footer />
        </>
    );
}

export default PopularDestination;