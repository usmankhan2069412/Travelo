import React, { useState, startTransition } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryImages';

const MasonryImagesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    startTransition(() => {
      setSelectedImage(image);
      setIsModalOpen(true);
    });
  };

  const closeModal = () => {
    startTransition(() => {
      setIsModalOpen(false);
    });
    setTimeout(() => {
      startTransition(() => setSelectedImage(null));
    }, 300);
  };

  return (
    <div className='mt-12 px-4 sm:px-8'>
      <div className='text-center'>
        <h2 className='text-4xl font-extrabold text-gray-800'>Masonry Images Gallery</h2>
        <p className='mt-4 text-gray-600 mb-8 max-w-2xl mx-auto'>
          Explore a beautiful, responsive masonry gallery built with React and Tailwind CSS.
        </p>
      </div>
      
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter='1rem'>
          {galleryImages.map((item, index) => (
            <img
              key={index}
              src={item}
              alt={`Gallery image ${index + 1}`}
              className='w-full rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 shadow-lg'
              onClick={() => openModal(item)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>

      {/* Modal for full-screen image view with animation */}
      {isModalOpen && selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 backdrop-blur-md transition-opacity duration-300' onClick={closeModal}>
          <div className='relative max-w-4xl w-full p-4 animate-fadeIn'>
            <img src={selectedImage} alt='Enlarged' className='w-full h-auto rounded-lg shadow-2xl' />
            <button
              className='absolute top-4 right-4 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition'
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasonryImagesGallery;
