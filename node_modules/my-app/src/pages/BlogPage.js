import React from 'react';
import Navbar from '../components/Navbar'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import BlogPost from '../components/BlogComponent/BlogPost';

const App = () => {
    return (
        <div>
            <Navbar />
            <BlogPost/>
            <Footer />
        </div>
    );
};

export default App;
