import React from 'react';
import image1 from '../../assets/images/Lahore.jpg';
import image2 from '../../assets/images/Lahore1.jpg';
import image3 from '../../assets/images/Lahore2.jpg';



const BlogPost = () => {
    return (
        <div className="container mx-auto px-6 py-8">
        {/* Blog Post */}
        <article className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h1 className="text-4xl font-bold mb-4">Discover Lahore: The Heart of Pakistan</h1>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Introduction</h2>
            <p className="text-gray-700 mb-4">
                Lahore, known as the cultural capital of Pakistan, is a city rich in history, tradition, and vibrant life. In this blog post, we will explore the various attractions, delicious food, and the unique culture that makes Lahore a must-visit destination.
            </p>
            <div className='flex flex-col justify-center items-center'>
            <h2 className="text-2xl font-semibold mt-6 mb-2">Attractions</h2>
            <img 
                src={image1}
                alt="Lahore Fort" 
                className="w-full h-auto object-contain rounded-lg mb-4" 
            />
            </div>
            <p className="text-gray-700 mb-4">
                One of the most iconic landmarks in Lahore is the Lahore Fort, a UNESCO World Heritage site. This magnificent structure showcases stunning Mughal architecture and offers a glimpse into the city’s rich history.
            </p>
            <img 
                src={image2}
                alt="Badshahi Mosque" 
                className="w-full h-auto object-contain rounded-lg mb-4" 
            />
            <p className="text-gray-700 mb-4">
                Just a stone's throw away is the Badshahi Mosque, another architectural marvel that attracts visitors from all over the world. Its grandeur and intricate designs are truly breathtaking.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Culinary Delights</h2>
            <img 
                src={image3}
                alt="Lahore Food" 
                className="w-full h-auto object-contain rounded-lg mb-4" 
            />
            <p className="text-gray-700 mb-4">
                Lahore is renowned for its mouth-watering cuisine. From the spicy street food of Gawalmandi to the traditional biryani and nihari, the city offers a plethora of flavors that cater to every palate. Don't miss out on visiting the famous Food Street, where you can indulge in a variety of local dishes.
            </p>

            <h2 className="text-2xl font-semibold mt-6 mb-2">Culture and Festivals</h2>
            <p className="text-gray-700 mb-4">
                The culture of Lahore is a beautiful blend of traditions, art, and music. The city hosts various festivals throughout the year, including the vibrant Basant festival, which celebrates the arrival of spring with kite flying and lively gatherings.
            </p>
            <img 
                src={image1} 
                alt="Basant Festival" 
                className="w-full h-auto object-contain rounded-lg mb-4" 
            />
            
            <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>
            <p className="text-gray-700 mb-4">
                Lahore is more than just a city; it's an experience that leaves a lasting impression on everyone who visits. Whether you are exploring historical sites, savoring delicious food, or immersing yourself in its rich culture, Lahore promises to be an unforgettable destination.
            </p>

            {/* Call to Action */}
            <div className="mt-4">
                <p className="font-semibold">Call to Action:</p>
                <p>Have you visited Lahore? What was your favorite experience? Share your thoughts in the comments below!</p>
            </div>
        </article>
    </div>
    );
};

export default BlogPost;
