import React, { useEffect, useState } from "react";
import MasonryImagesGallery from "../../components/Image-gallery/MasonryImagesGallery";
import { FaCamera, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative">
      {/* Parallax Header */}
      <div
        className="relative h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center bg-[#0B3954]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11, 57, 84, 0.7), rgba(11, 57, 84, 0.7)), url(https://images.unsplash.com/photo-1526495124232-a04e1849168c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Floating Camera Icon */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 rounded-full bg-white/10 backdrop-blur-md shadow-lg animate-float"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        >
          <FaCamera className="text-white text-6xl sm:text-8xl" />
        </div>

        {/* Title and Subtitle */}
        <div
          className="text-center px-4 transform transition-transform duration-500 ease-out"
          style={{ transform: `translateY(${offset * 0.3}px)` }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-slideUp">
            Our Gallery
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-slideUp mb-8">
            Explore the breathtaking beauty of Pakistan through our curated collection of stunning photographs.
          </p>

          {/* Buttons */}
          <div className="flex item-center sm:flex-row justify-center ">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              View All Photos <FaArrowRight className="ml-2 inline-block" />
            </button>
            <button className="px-6 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-white"
          style={{
            clipPath: "polygon(0 0, 100% 100%, 100% 100%, 0% 100%)",
            transform: `translateY(${offset * 0.1}px)`,
          }}
        ></div>
      </div>

      {/* Gallery Content */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-4">
          <MasonryImagesGallery />
        </div>
      </div>
    </section>
  );
};

export default Gallery;