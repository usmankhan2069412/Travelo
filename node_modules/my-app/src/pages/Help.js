import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Link} from 'react-router-dom';
const Help = () => {
    return (
        <>
            <Navbar />
            <div>
                <section class="bg-fff6cc text-gray-900 px-6 py-12 lg:py-20">
                    <div class="container mx-auto">
                        {/* <!-- Section Title --> */}
                        <div class="text-center mb-12">
                            <h2 class="text-4xl lg:text-5xl font-extrabold text-ffd819 leading-snug tracking-wide">
                                How Can We Help You?
                            </h2>
                            <p class="mt-4 text-lg text-gray-700 lg:max-w-2xl mx-auto leading-relaxed">
                                Find answers to your questions, explore our tour plans, or get in touch with our support team.
                            </p>
                        </div>

                        {/* <!-- Help Topics with Icons --> */}
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
                            {/* <!-- FAQs Box --> */}
                            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-question-circle text-4xl text-ffd819 mr-4"></i>
                                    <h3 class="text-2xl font-semibold text-ffd400">Frequently Asked Questions</h3>
                                </div>
                                <p class="text-gray-700 mb-6">
                                    Find quick answers to the most commonly asked questions about tours, subscriptions, and cancellations.
                                </p>
                                <Link to="/help/FAQ" class="text-ffd819 underline hover:text-ffd400 font-medium">Learn More</Link>
                            </div>

                            {/* <!-- Subscription Guide Box --> */}
                            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-map-marked-alt text-4xl text-ffd819 mr-4"></i>
                                    <h3 class="text-2xl font-semibold text-ffd400">Tour Plan Subscription</h3>
                                </div>
                                <p class="text-gray-700 mb-6">
                                    Learn how to choose and subscribe to a tour plan that fits your travel preferences and budget.
                                </p>
                                <Link to ="/package" class="text-ffd819 underline hover:text-ffd400 font-medium">Learn More</Link>
                            </div>

                            {/* <!-- Customer Support Box --> */}
                            <div class="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div class="flex items-center mb-4">
                                    <i class="fas fa-headset text-4xl text-ffd819 mr-4"></i>
                                    <h3 class="text-2xl font-semibold text-ffd400">Customer Support</h3>
                                </div>
                                <p class="text-gray-700 mb-6">
                                    Need assistance? Contact our support team for help with bookings, tour details, or any other queries.
                                </p>
                                <Link to="/contact" class="text-ffd819 underline hover:text-ffd400 font-medium">Contact Us</Link>
                            </div>
                        </div>

                        {/* <!-- Still Need Help Section --> */}
                        <div id="contact-support" class="mt-16 text-center">
                            <h3 class="text-3xl lg:text-4xl font-bold text-ffd819 leading-tight">
                                Still Need Help?
                            </h3>
                            <p class="mt-4 text-lg text-gray-700 lg:max-w-xl mx-auto leading-relaxed">
                                Reach out to our support team for personalized assistance. We’re here to make your travel experience seamless.
                            </p>
                            <a href="mailto:support@tourtravel.com" class="mt-6 inline-block bg-ffd819 text-black py-3 px-8 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300">
                                Email Support
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>

    );
}

export default Help;