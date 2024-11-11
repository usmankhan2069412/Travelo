import React from 'react';
// import galleryImg01 from '../../assets/images/gallery-01.jpg';
// import galleryImg02 from '../../assets/images/gallery-02.jpg';
// import galleryImg03 from '../../assets/images/gallery-03.jpg';
// import galleryImg04 from '../../assets/images/gallery-04.jpg';

// Make the gallery dynamic by passing images and other details as props
const ImageGallery = ({ title, imageUrl }) => {
    return (
        <div className="w-full m-auto   px-4 md:px-0 md:w-3/4 lg:w-[800px]">
            <h1 className="text-3xl text-transform: capitalize md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-700 mb-4"> ★★★★★ (348 reviews)</p>
            <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-[650px] rounded-md object-cover mb-4" 
            />
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    <img src={galleryImg02} alt="Image 2" className="w-full rounded-md h-auto object-cover" />
                    <img src={galleryImg03} alt="Image 3" className="w-full rounded-md h-auto object-cover" />
                    <img src={galleryImg04} alt="Image 4" className="w-full rounded-md h-auto object-cover" />
                    <img src={galleryImg01} alt="Image 1" className="w-full rounded-md h-auto object-cover" />
             </div> */}
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full rounded-md h-auto object-cover"
                    />
                ))}
            </div> */}
        </div>
    );
};

export default ImageGallery;

