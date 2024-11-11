import React from 'react';

const ThankYouPage = () => {
  return (
    <div className="bg-fffae5 h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-extrabold text-center text-ffd400 mb-4">
        Thank You!
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">
        We appreciate you reaching out to us. Your message has been sent successfully!
      </p>
      <p className="text-lg text-center text-gray-600 mb-4">
        Our team will get back to you shortly.
      </p>
      <p className="text-lg text-center text-gray-600 mb-8">
        If you need immediate assistance, please email us at <a href="mailto:support@tourtravel.com" className="text-teal-600 underline">support@tourtravel.com</a>.
      </p>
      <a 
        href="/" 
        className="px-6 py-3 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600 transition duration-200"
      >
        Return to Home
      </a>
    </div>
  );
};

export default ThankYouPage;
