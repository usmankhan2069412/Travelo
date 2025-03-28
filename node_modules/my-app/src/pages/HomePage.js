import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
// import SearchSection from "../components/SearchSection/SearchSection";
import PopularCities from "../components/PopularCities/PopularCities";
import Services from "../components/Services/Services";
import Packages from "../components/Tour_Packages/Packages";
import TravelPage from "../pages/Travelpage";
import '../App.css';


function HomePage() {
  return (
    <>
     
      <Navbar />
      <Hero />
      {/* <SearchSection /> */}
      <PopularCities />
      <Services />
      <Packages />
      <TravelPage />
      
      <Footer />
    </>
  );
}

export default HomePage;
