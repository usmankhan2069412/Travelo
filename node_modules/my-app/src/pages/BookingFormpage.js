import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BookingForm from '../components/Tour_Detail_component/BookingForm';
import Footer from '../components/Footer';

const BookingFormpage = () => {
    const { id } = useParams();
    const [packageDetail, setPackageDetail] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        const fetchPackageDetail = async () => {
            try {
                const response = await fetch(`http://localhost:5000/package/api/${id}`);

                if (!response.ok) throw new Error('Failed to fetch package details');
                const data = await response.json();
                setPackageDetail(data); // Direct state update here
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Stop loading
            }
        };
        fetchPackageDetail();
    }, [id]);

    // Conditional rendering while loading or if there's an issue fetching
    if (loading) {
        return <div>Loading...</div>; // Add a loading message or spinner here
    }

    if (!packageDetail) {
        return <div>Error loading package details.</div>; // Handle error state here
    }

    return (
        <>
            <Navbar />
            <BookingForm price={packageDetail.price} />
            <Footer />
        </>
    );
};

export default BookingFormpage;
