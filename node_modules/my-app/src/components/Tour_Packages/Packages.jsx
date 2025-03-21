import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import PackageCard from './PackageCard';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
const NextArrow = ({ onClick }) => (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#F77F00] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#F4F1DE] transition-all duration-300" onClick={onClick}>
        <i className="fas fa-arrow-right text-2xl text-[#0B3954]"></i>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#F77F00] p-3 rounded-full shadow-lg cursor-pointer hover:bg-[#F4F1DE] transition-all duration-300" onClick={onClick}>
        <i className="fas fa-arrow-left text-2xl text-[#0B3954]"></i>
    </div>
);

// Function to get the correct image path
const getImagePath = (url) => {
    const baseUrl = 'http://localhost:5000'; // Define your base URL
    // Check if the URL starts with the base URL and return just the path
    return url.startsWith(baseUrl) ? url.replace(baseUrl, '') : url; 
};

const Packages = () => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPackages = async () => {
        try {
            const response = await axios.get('http://localhost:5000/package/api/');
            setPackages(response.data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch packages.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPackages();
    }, []);

    const shouldShowSlider = packages.length > 3;

    const settings = {
        dots: true,
        infinite: shouldShowSlider,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="bg-[#F4F1DE] py-16">
            <h1 className="text-5xl font-bold text-center text-[#0B3954] mb-10">
                <span className="block">Packages</span>
            </h1>
            <p className="text-center text-lg text-[#2C5F2D] mb-12 px-4">
                Discover our exclusive packages tailored to your travel needs. Enjoy unique experiences at amazing prices!
            </p>
            <div className="relative container mx-auto px-4">
                {shouldShowSlider ? (
                    <Slider {...settings}>
                        {packages.map((pkg) => {
                            const imagePath = getImagePath(pkg.uploadImage); // Get the path
                            const imageUrl = `http://localhost:5000${imagePath}`; // Construct full URL
                            console.log('Image URL:', imageUrl); // Log for debugging
                            return (
                                <div className="px-4" key={pkg._id}>
                                    <div className="flex justify-center">
                                        <PackageCard
                                            id={pkg._id}
                                            name={pkg.name}
                                            description={pkg.description}
                                            price={pkg.price}
                                            location={pkg.location}
                                            duration={pkg.duration}
                                            imageUrl={imageUrl} // Pass the constructed URL
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                ) : (
                    <div className="flex justify-center flex-wrap">
                        {packages.map((pkg) => {
                            const imagePath = getImagePath(pkg.uploadImage); // Get the path
                            const imageUrl = `http://localhost:5000${imagePath}`; // Construct full URL
                            console.log('Image URL:', imageUrl); // Log for debugging
                            return (
                                <div className="px-4" key={pkg._id}>
                                    <PackageCard
                                        id={pkg._id}
                                        name={pkg.name}
                                        description={pkg.description}
                                        price={pkg.price}
                                        location={pkg.location}
                                        duration={pkg.duration}
                                        imageUrl={imageUrl} // Pass the constructed URL
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Packages;
