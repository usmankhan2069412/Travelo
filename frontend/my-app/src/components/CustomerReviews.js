import React from 'react';

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
                    <button className="text-lg font-semibold text-black bg-white duration-500">
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

export default CustomerReviews;