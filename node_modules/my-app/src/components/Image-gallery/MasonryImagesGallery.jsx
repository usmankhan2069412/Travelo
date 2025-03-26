import React, { useState, startTransition, useEffect, useRef } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryImages';
import { FaSearch, FaTimes, FaChevronLeft, FaChevronRight, FaPlus, FaInfoCircle } from 'react-icons/fa';

const MasonryImagesGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [isLoading, setIsLoading] = useState(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [imageInfo, setImageInfo] = useState(false);
  const modalRef = useRef(null);
  
  // Categories for filtering
  const categories = ['All', 'Mountains', 'Cities', 'Historical', 'Nature'];

  const openModal = (image, index) => {
    startTransition(() => {
      setSelectedImage(image);
      setSelectedIndex(index);
      setIsModalOpen(true);
      // Disable scrolling when modal is open
      document.body.style.overflow = 'hidden';
    });
  };

  const closeModal = () => {
    startTransition(() => {
      setIsModalOpen(false);
    });
    setTimeout(() => {
      startTransition(() => setSelectedImage(null));
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }, 300);
  };
  
  // Navigate to previous image in modal
  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };
  
  // Navigate to next image in modal
  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };
  
  // Toggle zoom on image in modal
  const toggleZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  // Toggle image information display
  const toggleImageInfo = (e) => {
    e.stopPropagation();
    setImageInfo(!imageInfo);
  };

  // Handle click outside of modal content to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  // Filter images based on category and search term
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for smooth transitions
    const timer = setTimeout(() => {
      let filtered = galleryImages;
      
      // Apply category filter
      if (activeCategory !== 'All') {
        filtered = galleryImages.filter(item => 
          item.category === activeCategory
        );
      }
      
      // Apply search filter
      if (searchTerm.trim() !== '') {
        const searchLower = searchTerm.toLowerCase();
        filtered = filtered.filter(item => 
          item.title.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower) ||
          item.location.toLowerCase().includes(searchLower)
        );
      }
      
      setFilteredImages(filtered);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory, searchTerm]);

  return (
    <div className='mt-12 px-4 sm:px-8 pb-16'>
      <div className='text-center'>
        <h2 className='text-4xl font-extrabold text-gray-800 relative inline-block'>
          <span className='relative z-10'>Explore Our Gallery</span>
          <span className='absolute -bottom-2 left-0 w-full h-3 bg-yellow-300 opacity-50 z-0'></span>
        </h2>
        <p className='mt-4 text-gray-600 mb-8 max-w-2xl mx-auto'>
          Discover the beauty of Pakistan through our stunning collection of travel photography.
        </p>
      </div>
      
      {/* Search and filter section */}
      <div className='mb-8 flex flex-col md:flex-row justify-between items-center gap-4'>
        <div className='flex flex-wrap gap-2 justify-center'>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === category 
                ? 'bg-[#0B3954] text-white shadow-md' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className='relative w-full md:w-64'>
          <input
            type='text'
            placeholder='Search gallery...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0B3954] focus:border-transparent'
          />
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>
      </div>
      
      {/* Loading state */}
      {isLoading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0B3954]'></div>
        </div>
      ) : filteredImages.length === 0 ? (
        <div className='text-center py-16'>
          <p className='text-xl text-gray-500'>No images found matching your criteria</p>
          <button 
            onClick={() => {setActiveCategory('All'); setSearchTerm('')}}
            className='mt-4 px-6 py-2 bg-[#0B3954] text-white rounded-md hover:bg-[#0a2d40] transition-colors'
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
          <Masonry gutter='1rem'>
            {filteredImages.map((item, index) => (
              <div 
                key={index} 
                className='group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl animate-zoomIn'
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className='w-full rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105'
                  loading='lazy'
                />
                <div 
                  className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 cursor-pointer'
                  onClick={() => openModal(item.img, index)}
                >
                  <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
                    <h3 className='text-white text-lg font-bold'>{item.title}</h3>
                    <p className='text-gray-200 text-sm'>{item.location}</p>
                    <div className='mt-2 flex items-center'>
                      <span className='inline-block px-2 py-1 text-xs bg-[#0B3954]/80 text-white rounded-full mr-2'>
                        {item.category}
                      </span>
                      <button 
                        className='bg-white/20 hover:bg-white/40 p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110'
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(item.img, index);
                        }}
                        aria-label="View larger"
                      >
                        <FaPlus size={12} className='text-white' />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}

      {/* Enhanced modal for full-screen image view with navigation */}
      {isModalOpen && selectedImage && (
        <div 
          className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 backdrop-blur-md transition-opacity duration-300 animate-fadeIn' 
          onClick={closeModal}
        >
          <div 
            ref={modalRef}
            className='relative max-w-6xl w-full h-full max-h-[90vh] flex items-center justify-center p-4'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous button */}
            <button
              className='absolute left-4 md:left-8 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 animate-slideUp'
              onClick={prevImage}
              aria-label="Previous image"
            >
              <FaChevronLeft size={20} />
            </button>
            
            {/* Image container with animation */}
            <div className={`relative w-full h-full flex items-center justify-center ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}>
              <img 
                src={selectedImage} 
                alt={filteredImages[selectedIndex]?.title || 'Enlarged gallery image'} 
                className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-transform duration-500 ${isZoomed ? 'scale-150' : 'scale-100'}`} 
                onClick={toggleZoom}
              />
              
              {/* Image counter */}
              <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm animate-slideUp'>
                {selectedIndex + 1} / {filteredImages.length}
              </div>

              {/* Image info panel */}
              {imageInfo && (
                <div className='absolute bottom-16 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-md animate-slideUp'>
                  <h3 className='text-xl font-bold mb-2'>{filteredImages[selectedIndex]?.title}</h3>
                  <p className='text-gray-300 mb-2'>{filteredImages[selectedIndex]?.description}</p>
                  <div className='flex items-center'>
                    <span className='inline-block px-2 py-1 text-xs bg-[#0B3954] text-white rounded-full mr-2'>
                      {filteredImages[selectedIndex]?.category}
                    </span>
                    <span className='text-sm text-gray-300'>{filteredImages[selectedIndex]?.location}</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Next button */}
            <button
              className='absolute right-4 md:right-8 z-10 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110 animate-slideUp'
              onClick={nextImage}
              aria-label="Next image"
            >
              <FaChevronRight size={20} />
            </button>
            
            {/* Control buttons */}
            <div className='absolute top-4 right-4 md:top-8 md:right-8 flex space-x-2 animate-slideUp'>
              {/* Info button */}
              <button
                className='bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110'
                onClick={toggleImageInfo}
                aria-label="Toggle image information"
              >
                <FaInfoCircle size={20} />
              </button>
              
              {/* Close button */}
              <button
                className='bg-white/20 hover:bg-white/40 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110'
                onClick={(e) => { e.stopPropagation(); closeModal(); }}
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Gallery footer */}
      <div className='mt-16 text-center'>
        <p className='text-gray-600'>
          © {new Date().getFullYear()} Tour Travel - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default MasonryImagesGallery;
