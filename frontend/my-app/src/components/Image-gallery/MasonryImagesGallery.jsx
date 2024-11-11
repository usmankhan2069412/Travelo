import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import galleryImages from './galleryImages';

const MasonryImagesGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
      <Masonry gutter='1rem'>
        {galleryImages.map((item, index) => (
          <img
            className='masonry__img rounded-lg transition-transform duration-300 ease-in-out hover:scale-105'
            src={item}
            key={index}
            alt={`Gallery image ${index + 1}`}
            style={{
              width: '100%',
              display: 'block',
              borderRadius: '10px',
            }}
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MasonryImagesGallery;
