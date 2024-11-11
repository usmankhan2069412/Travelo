import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const WrapUpPage = () => (
  <div className="bg-white py-12 px-6 lg:px-20 text-gray-800">
    {/* Header Section */}
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-[#0B3954]">Thank You for Choosing Tour Travel!</h1>
      <p className="mt-4 text-lg text-gray-700">
        Your adventure awaits! Whether you're planning a relaxing getaway or an adventurous exploration, we’re here to make your trip unforgettable.
      </p>
    </div>

    {/* Our Services Summary */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
      <div className="p-6 border rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-[#F77F00]">Expert Guides</h3>
        <p className="mt-2 text-gray-600">
          Our professional guides ensure you experience the best of each destination.
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-[#2C5F2D]">Custom Packages</h3>
        <p className="mt-2 text-gray-600">
          Tailor-made packages for every kind of traveler, whether solo or group.
        </p>
      </div>
      <div className="p-6 border rounded-lg shadow-sm">
        <h3 className="text-xl font-bold text-[#FFE156]">Best Prices</h3>
        <p className="mt-2 text-gray-600">
          Enjoy competitive pricing without compromising on quality or experience.
        </p>
      </div>
    </div>

    {/* Call to Action */}
    <div className="bg-[#0B3954] text-white py-8 px-6 text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold">Ready to Plan Your Next Adventure?</h2>
      <p className="mt-4 text-lg">
        Contact us today to start planning your perfect getaway or explore our packages.
      </p>
      <a href="/contact" className="mt-6 inline-block bg-[#F77F00] text-white py-3 px-6 rounded-md font-bold hover:bg-[#d86900]">
        Get In Touch
      </a>
    </div>

    {/* Contact Information */}
    <div className="mt-16 text-center">
      <h3 className="text-xl font-bold text-[#0B3954]">Contact Us</h3>
      <div className="mt-4 flex justify-center space-x-6">
        <div className="flex items-center">
          <FaPhoneAlt className="text-[#F77F00] mr-2" />
          <span className="text-gray-600">+92-XXX-XXXXXXX</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-[#F77F00] mr-2" />
          <span className="text-gray-600">info@tourtravel.com</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-[#F77F00] mr-2" />
          <span className="text-gray-600">Lahore, Pakistan</span>
        </div>
      </div>
    </div>
  </div>
);

export default WrapUpPage;
