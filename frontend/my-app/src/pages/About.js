import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import gallery6 from '../assets/images/gallery-06.jpg';
import gallery7 from '../assets/images/gallery-07.jpg';
import worldLogo from '../assets/images/world.png';
import herovideo from '../assets/videos/hero-video.mp4';
import galleryteam1 from '../assets/images/IMG-20231010-WA0004.jpg';
import galleryteam2 from '../assets/images/IMG-20231010-WA0008 - Copy - Copy.jpg';
import galleryteam3 from '../assets/images/IMG-20231011-WA0061.jpg';
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

                        <div className=" mt-22 py-16">
                            <div className="mx-auto max-w-7xl px-6">
                                <div className="max-w-2xl">
                                    <h2 className="text-3xl font-bold text-black">
                                        Meet Our Travel Experts
                                    </h2>
                                    <p className="mt-6 text-lg text-black">
                                        Our team of experienced travel consultants is dedicated to helping you plan the perfect trip. Get to know the passionate professionals behind Global Travel Services.
                                    </p>
                                </div>
                                <ul className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                                    <li>
                                        <div className="relative rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                            <img
                                                alt="Emma Dorsey"
                                                src={galleryteam1} // Placeholder image; replace with actual URL
                                                className="w-full aspect-square object-cover"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-lg font-semibold text-black">Emma Dorsey</h3>
                                        <p className="text-base text-black">Senior Travel Consultant</p>
                                    </li>
                                    <li>
                                        <div className="relative rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                            <img
                                                alt="Liam Wang"
                                                src={galleryteam2} // Placeholder image; replace with actual URL
                                                className="w-full aspect-square object-cover"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-lg font-semibold text-black">Liam Wang</h3>
                                        <p className="text-base text-black">Travel Advisor</p>
                                    </li>
                                    <li>
                                        <div className="relative rounded-3xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                                            <img
                                                alt="Ava Johnson"
                                                src={galleryteam3} // Placeholder image; replace with actual URL
                                                className="w-full aspect-square object-cover"
                                            />
                                        </div>
                                        <h3 className="mt-6 text-lg font-semibold text-black">Ava Johnson</h3>
                                        <p className="text-base text-black">Customer Service Manager</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-8 py-16">
                                <div className="mx-auto max-w-7xl px-6">
                                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                            <p className="text-3xl font-semibold text-black">100+</p>
                                            <p className="text-base text-black">Destinations Explored</p>
                                        </div>
                                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                            <p className="text-3xl font-semibold text-black">10,000+</p>
                                            <p className="text-base text-black">Happy Clients Served</p>
                                        </div>
                                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                                            <p className="text-3xl font-semibold text-black">500+</p>
                                            <p className="text-base text-black">Unique Tours Organized</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <!-- Why Choose Us Section --> */}
                        <div className="pt-16 text-center rounded-lg lg:text-left">
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

            <div className="py-8">
                <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8">
                    <div className="lg:w-1/2">
                        <div className="relative h-80 lg:h-auto lg:w-full">
                            <img
                                alt="Travel Destination"
                                src="https://via.placeholder.com/932x1866" // Placeholder image; replace with actual URL
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="px-6 lg:w-1/2">
                        <div className="mx-auto max-w-2xl pb-16 pt-16 lg:pt-20">
                            <p className="text-base font-semibold text-black">Explore the World</p>
                            <h1 className="mt-2 text-3xl font-bold text-black">Our Commitment to Excellence</h1>
                            <p className="mt-6 text-xl text-black">
                                Crafting unique travel experiences that cater to the diverse needs of our clients, allowing them to discover the beauty of the world and create unforgettable moments.
                            </p>
                            <div className="mt-10 text-base text-black">
                                <div className="mt-8">
                                    <strong className="font-semibold text-black">Personalized Journeys</strong>
                                    <p>At Global Travel Services, we are dedicated to crafting unique travel experiences that cater to the diverse needs of our clients.</p>
                                </div>
                                <div className="mt-8">
                                    <strong className="font-semibold text-black">Quality Assurance</strong>
                                    <p>Our mission is to provide high-quality, personalized travel services that allow our clients to discover the beauty of the world.</p>
                                </div>
                                <div className="mt-8">
                                    <strong className="font-semibold text-black">Memorable Experiences</strong>
                                    <p>We believe in creating unforgettable travel moments that leave a lasting impression.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className=" py-8 px-4">
                <div className="mx-auto max-w-7xl">
                    <figure className="mx-auto max-w-2xl r">
                        <div className="flex flex-first gap-x-1 text-black">
                            <span className="text-2xl text-yellow-500">★★★★★</span>
                        </div>
                        <blockquote className="mt-4 text-2xl font-semibold text-gray-900 leading-9">
                            Traveling with Global Travel Services was an incredible experience. Their expertise and attention to detail made all the difference.
                        </blockquote>
                        <figcaption className="mt-4 flex  gap-x-6 ">
                            <img
                                alt="Jane Doe"
                                src="https://via.placeholder.com/96x96" // Placeholder image; replace with actual URL
                                className="h-12 w-12 rounded-full object-cover"
                            />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-700">Jane Doe</p>
                                <p className="mt-0.5 text-gray-600">Satisfied Client</p>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>


            <Footer />
        </>
    );
};

export default About;
