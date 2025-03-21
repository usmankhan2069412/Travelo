import React from 'react';
import Navbar from '../components/Navbar';
import PackageSection from '../components/Tour_Packages/PackageSection';
// import SearchSection from '../components/SearchSection/SearchSection';
import Footer from '../components/Footer';



const Package = () => {
    return (
        <>
        <Navbar/>
        {/* <SearchSection/> */}
        <PackageSection/>
        <Footer />
        
        </>
    );
}
export default Package;