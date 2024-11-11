import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero/Hero";
// import SearchSection from "../components/SearchSection/SearchSection";
import PopularCities from "../components/PopularCities/PopularCities";
import Services from "../components/Services/Services";
import Packages from "../components/Tour_Packages/Packages";
import Gallery from "../components/Gallery/Gallery";

import Login from './Login';
import SignUp from './SignUp';

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
      <Gallery />
      <Footer />
    </>
  );
}

export default HomePage;
