import React from 'react';
import MasonryImagesGallery from '../../components/Image-gallery/MasonryImagesGallery';

const Gallery = () => {
    return (
        <section className="py-12">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="w-full mt-10 text-center mb-8">
                    <h2 className="text-4xl font-bold text-[#0B3954] gallery__title">Visit Our Tour Gallery</h2>
                </div>
                <div className="w-full">
                    <MasonryImagesGallery />
                </div>
            </div>
        </section>
    );
};

export default Gallery;
