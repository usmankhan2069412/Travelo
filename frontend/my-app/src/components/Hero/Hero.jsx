import React from 'react';
import { Link } from 'react-router-dom';
// import Herovideo from '../../assets/videos/video1.mp4';
import Herovideo from '../../assets/videos/1021.mp4';
import { motion } from "framer-motion";
import { FaArrowTrendUp } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="poppins-regular" > 
    <div className="relative  h-screen bg-cover bg-center">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src={Herovideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tighter duration-500 transform hover:scale-105 bg-gradient-to-r from-blue-800 via-yellow-600 to-green-700 bg-clip-text text-transparent ">
            We Find The Best Tours For You
        </h1>

        <p className="mt-4 font-extralight max-w-xs text-yellow-500 font-bold sm:max-w-md md:max-w-lg mx-auto text-base sm:text-lg md:text-xl transition-opacity duration-500 opacity-90 hover:opacity-100">
          Explore unforgettable destinations with ease. Choose the perfect tour
          and let the journey begin.
        </p>

        <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Link
        to="/package"
        className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-black bg-white rounded-full transition duration-300 hover:text-white hover:bg-yellow-500 shadow-lg"
      >
        Explore Tours
        <motion.span
          className="text-xl"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaArrowTrendUp />
        </motion.span>
      </Link>
    </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
