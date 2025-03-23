import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import image1 from '../assets/images/gallery-01.jpg';
import image2 from '../assets/images/gallery-02.jpg';
import image3 from '../assets/images/gallery-03.jpg';

// Gallery Item Component
const GalleryItem = ({ image, index, onPreviewClick }) => (
  <div
    className="relative overflow-hidden rounded-3xl transition-all duration-300 ease-in-out h-full cursor-pointer group"
  >
    <img
      src={image}
      alt={`Gallery image ${index + 1}`}
      className="w-full h-full object-cover rounded-3xl bg-slate-100 transition-all duration-300 ease-in-out scale-100 group-hover:scale-105"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button
        onClick={() => onPreviewClick(image)}
        className=" text-white bg-transparent py-2 hover:bg-transparent px-6 rounded-lg  transition-colors duration-300 font-medium"
      >
        Preview
      </button>
    </div>
  </div>
);

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onPreviewClick: PropTypes.func.isRequired,
};

// Gallery Section Component
const GallerySection = ({ images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = useCallback((image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImage(null);
  }, []);

  // Close modal on Escape key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') closeModal();
    };
    if (isModalOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen, closeModal]);

  return (
    <>
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto py-10 px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-5xl font-semibold text-slate-900">
              Discover the World's Wonders
            </h2>
            <div className="mt-6 space-y-4">
              <p className="text-base font-normal text-slate-700">
                Embark on a journey to explore the most beautiful destinations around the globe. 
                Our gallery showcases breathtaking landscapes and vibrant cultures.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 h-[24rem]">
            {images.map((image, index) => (
              <GalleryItem
                key={index}
                image={image}
                index={index}
                onPreviewClick={openModal}
              />
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview modal"
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeModal}
              className="absolute  right-4 w-auto text-white text-3xl font-bold bg-transparent hover:bg-transparent   "
              aria-label="Close modal"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

GallerySection.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Video Section Component
const VideoSection = () => {
  const [isVideoError, setIsVideoError] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col gap-6 md:w-1/2">
            <h1 className="text-5xl sm:text-6xl text-center font-semibold text-slate-900">
              Discover the Wonders the World
            </h1>
            <p className="text-base text-center font-normal text-slate-700">
              Join us on an incredible journey as we explore breathtaking destinations and 
              create unforgettable memories. Watch our video to see the magic of travel come to life.
            </p>
          </div>
          <div className="mt-8 w-full lg:w-2/3">
            <div className="w-full rounded-lg overflow-hidden">
              {isVideoError ? (
                <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-lg">
                  <p className="text-red-500">Failed to load video. Please try again later.</p>
                </div>
              ) : (
                <video
                  className="w-full"
                  controls
                  loop
                  preload="auto"
                  controlsList="nodownload nofullscreen noplaybackrate"
                  disablePictureInPicture
                  src="https://aibuildcdn-dev.geesdev.com/assets/onepage/file-video/8c72db80-27ab-4854-867d-3b90ad89a0a5.mp4?flushId="
                  onError={() => setIsVideoError(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// FAQ Item Component
const FAQItem = ({ question, answer }) => (
    <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">
      <h4 className="text-lg font-semibold text-slate-900 mb-2">{question}</h4>
      <p className="text-base text-slate-600">{answer}</p>
    </div>
  );
  
  FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  };
const GlobalHubSection = () => {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Title and Description */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
              <h2 className="text-4xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="mr-3">🌍</span> Discover Our Global Hub
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Visit our headquarters and embark on a journey to explore the world with us. Our team is ready to help you plan your next unforgettable adventure.
              </p>
              <p className="text-base font-semibold text-slate-900">
                🌐 Global Travel Services HQ
              </p>
            </div>
  
            {/* Right Side: Map */}
            <div className="h-96 w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509506!2d144.9537353153167!3d-37.81627977975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f1a4b1c1b!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1697041234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Travel Services HQ Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const FAQSection = () => {
    const faqs = [
      {
        question: "How do I book a trip with Global Travel Services?",
        answer:
          "Booking a trip with us is simple! Visit our 'Services' page, choose your desired package, and follow the booking instructions. For further assistance, contact our support team.",
      },
      {
        question: "What destinations do you offer?",
        answer:
          "We offer travel packages to a wide range of global destinations, including popular tourist spots and hidden gems. Explore our 'Services' page to find out more.",
      },
      {
        question: "Can I customize my travel itinerary?",
        answer:
          "Yes, we offer customizable itineraries to suit your preferences. Contact our travel consultants through the 'About Us' page for personalized travel plans.",
      },
    ];
    return(
        <section className=" py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Title and Description */}
          <div>
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to the most common inquiries about our global travel services and experiences.
            </p>
          </div>

          {/* Right Side: FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
            <div className="mt-6">
              <a
                href="/faq"
                className="text-sky-600 font-semibold hover:text-sky-800 transition-colors duration-200"
              >
                View all FAQs →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    );
}
const CustomerReviews = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            Customer's Review
          </h3>
          <p className="mt-4 text-center text-slate-700 lg:text-lg">
            Discover what our clients have to say about their unforgettable travel experiences 
            with Global Travel Services.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-6 gap-8">
          {[
            {
              name: "Alex Johnson",
              role: "Adventure Enthusiast",
              feedback: "Global Travel Services made my dream vacation a reality! Their attention to detail and exceptional service ensured I had the most unforgettable experience.",
              rating: 5
            },
            {
              name: "Samantha Lee",
              role: "Cultural Explorer",
              feedback: "From start to finish, Global Travel Services exceeded my expectations. The team curated an amazing itinerary that showcased the best of each destination.",
              rating: 5
            },
            {
              name: "Michael Brown",
              role: "Luxury Traveler",
              feedback: "I was impressed by the professionalism and dedication of Global Travel Services. They took care of every detail, allowing me to relax and enjoy my trip.",
              rating: 4
            },
            {
              name: "Emily Thompson",
              role: "Eco-Tourism Advocate",
              feedback: "Global Travel Services' commitment to sustainable tourism practices aligned perfectly with my values. They helped me discover eco-friendly destinations and experiences that were both enriching and responsible.",
              rating: 5
            },
            {
              name: "David Chen",
              role: "Business Traveler",
              feedback: "As a frequent business traveler, I appreciate Global Travel Services' efficiency and attention to detail. Their seamless arrangements and 24/7 support made my international business trips stress-free and productive.",
              rating: 5
            },
            {
              name: "Sarah Wilson",
              role: "Family Vacation Planner",
              feedback: "Global Travel Services made our family vacation a breeze! They catered to all our needs, from kid-friendly activities to adult relaxation. It was the perfect balance for everyone.",
              rating: 5
            }
          ].map((review, index) => (
            <div key={index}>
              <div className="rounded-3xl h-full flex flex-col gap-6 p-6 bg-white shadow-lg transition-transform duration-300 hover:scale-105">
                <div className="flex items-center pb-6 border-b border-gray-200">
                  <img 
                    className="h-14 w-14 rounded-full object-cover aspect-[1/1]"
                  />
                  <div className="pl-4">
                    <button className="text-lg font-semibold text-black bg-white hover:bg-white duration-500">
                      {review.name}
                    </button>
                    <p className="text-gray-500 text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-600 text-base leading-relaxed">
                    {review.feedback}
                  </p>
                  <ul className="flex items-center gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        aria-hidden="true"
                        className={`w-5 h-5 ${starIndex < review.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 576 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                      </svg>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
// Main TravelPage Component
const TravelPage = () => {
  const images = [image1, image2, image3];

  return (
    <div>
      <GallerySection images={images} />
      <VideoSection />
      <FAQSection />
      <CustomerReviews /> 
      <GlobalHubSection />
    </div>
  );
};

export default TravelPage;