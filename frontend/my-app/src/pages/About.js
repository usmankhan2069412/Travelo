import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gallery6 from '../assets/images/gallery-06.jpg';
import gallery7 from '../assets/images/gallery-07.jpg';
import worldLogo from '../assets/images/world.png';
import herovideo from '../assets/videos/hero-video.mp4';
import galleryship from '../assets/images/gallery6.jpg';
// import icon from '../assets/icon/image.png';

// import Herovideo from '../../assets/videos/video1.mp4';

const About = () => {
    return (
        <>
            <Navbar />
            <div>
                <section className="bg-fff6cc text-gray-900 px-4 py-16 lg:px-10 lg:py-24">
                    <div className="container mt-12 mx-auto">
                        {/* <!-- About Section --> */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10">
                            {/* <!-- About Text --> */}
                            <div className="lg:w-1/2 space-y-6">
                                <div className="hero__content">
                                    <div className="flex items-center space-x-3">
                                        <h3 className="text-lg tracking-tight font-semibold text-ffd400">
                                            Explore Tour Travel
                                        </h3>
                                        <img src={worldLogo} alt="Tour Travel Logo" className="w-12 h-12" />
                                    </div>
                                    <h1 className="text-4xl tracking-tight font-bold mt-2 text-ffd819 leading-tight">
                                        Discover New Horizons
                                    </h1>
                                    <p className="mt-4 text-gray-700 text-lg">
                                        At Tour Travel, we curate exceptional experiences to satisfy your wanderlust. From beautiful landscapes to immersive cultural experiences, we make your journey truly unforgettable.
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Image & Video Section --> */}
                            <div className="lg:w-[630px] grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
                                {/* <!-- Image 1 --> */}
                                <div className="rounded-3xl overflow-hidden shadow-lg lg:mt-0 mt-8 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img src={gallery6} alt="Travel Destination" className="w-full h-[330px] object-cover" />
                                </div>
                                {/* <!-- Video --> */}
                                <div className="rounded-3xl overflow-hidden shadow-lg lg:mt-0 mt-8 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <video src={herovideo} controls className="w-full h-[330px] object-cover"></video>
                                </div>
                                {/* <!-- Image 2 --> */}
                                <div className="rounded-3xl overflow-hidden shadow-lg lg:mt-0 mt-8 hover:scale-105 transition-transform duration-300 ease-in-out">
                                    <img src={gallery7} alt="Adventure Experience" className="w-full h-[330px] object-cover" />
                                </div>
                            </div>


                        </div>

                        {/* <!-- Why Choose Us Section --> */}
                        <div className="pt-16 text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-ffd400">
                                Why Tour Travel?
                            </h2>
                            <p className="pt-4 text-gray-700 text-lg lg:max-w-xl mx-auto lg:mx-0">
                                We provide unique, personalized travel experiences for every adventurer. Our team's expertise ensures you will explore the world comfortably and securely while making memories that last a lifetime.
                            </p>
                        </div>

                        {/* <!-- Gallery Section --> */}
                        <div className="pt-16">
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img src={galleryship} alt="Gallery" className="w-full h-[650px] bg-cover object-cover border-4 border-ffd400" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;
