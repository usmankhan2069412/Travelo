import React from 'react';
// import Herovideo from '../../assets/videos/video1.mp4';
import Herovideo from '../../assets/videos/1021.mp4';

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
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

        <p className="mt-4 max-w-xs text-yellow-500 font-bold sm:max-w-md md:max-w-lg mx-auto text-base sm:text-lg md:text-xl transition-opacity duration-500 opacity-90 hover:opacity-100">
          Explore unforgettable destinations with ease. Choose the perfect tour
          and let the journey begin.
        </p>
      </div>
    </div>
  );
};

export default Hero;
