import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import UpdatePopUpForm from './Update_booking';

const BookingTable = () => {
    const [bookings, setBookings] = useState([]);
    const [editBooking, setEditBooking] = useState(null);
    const [updateSeen, setUpdateSeen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        from_date: '',
        to_date: '',
        num_guests: 1,
        price: 0,
    });

    const fetchBookings = useCallback(async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bookings');
            if (response.data) {
                setBookings(response.data);
            }
        } catch (error) {
            console.error("Error fetching bookings:", error.response?.data || error.message);
        }
    }, []);

    useEffect(() => {
        fetchBookings();
        const intervalId = setInterval(fetchBookings, 30000);
        return () => clearInterval(intervalId);
    }, [fetchBookings]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/bookings/${id}`);
            setBookings(prevBookings => prevBookings.filter(booking => booking._id !== id));
        } catch (error) {
            console.error("Error deleting booking:", error.response?.data || error.message);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editBooking) {
                const response = await axios.put(
                    `http://localhost:5000/api/bookings/${editBooking._id}`, 
                    formData
                );
                setBookings(prevBookings => 
                    prevBookings.map(booking => 
                        booking._id === editBooking._id ? response.data : booking
                    )
                );
            } else {
                const response = await axios.post(
                    'http://localhost:5000/api/bookings', 
                    formData
                );
                setBookings(prevBookings => [...prevBookings, response.data]);
            }
            resetForm();
        } catch (error) {
            console.error("Error saving booking:", error.response?.data || error.message);
        }
    };

    const toggleUpdatePop = () => {
        setUpdateSeen(!updateSeen);
    };

    const handleEdit = (booking) => {
        setEditBooking(booking);
        setFormData(booking);
        toggleUpdatePop();
    };

    const resetForm = () => {
        setEditBooking(null);
        setFormData({ name: '', email: '', phone: '', from_date: '', to_date: '', num_guests: 1, price: 0 });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'num_guests' ? parseInt(value) : 
                    name === 'price' ? parseFloat(value) : 
                    value
        }));
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Booking Management</h1>
            <form className="mb-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="date"
                        name="from_date"
                        value={formData.from_date}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="date"
                        name="to_date"
                        value={formData.to_date}
                        onChange={handleInputChange}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="number"
                        name="num_guests"
                        value={formData.num_guests}
                        onChange={handleInputChange}
                        placeholder="Number of Guests"
                        min="1"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        className="border p-2 rounded"
                        required
                    />
                    <button type="submit" className="col-span-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
                        {editBooking ? 'Update Booking' : 'Add Booking'}
                    </button>
                </div>
            </form>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Email</th>
                            <th className="border px-4 py-2">Phone</th>
                            <th className="border px-4 py-2">From</th>
                            <th className="border px-4 py-2">To</th>
                            <th className="border px-4 py-2">Guests</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td className="border px-4 py-2">{booking.name}</td>
                                <td className="border px-4 py-2">{booking.email}</td>
                                <td className="border px-4 py-2">{booking.phone}</td>
                                <td className="border px-4 py-2">{new Date(booking.from_date).toLocaleDateString()}</td>
                                <td className="border px-4 py-2">{new Date(booking.to_date).toLocaleDateString()}</td>
                                <td className="border px-4 py-2">{booking.num_guests}</td>
                                <td className="border px-4 py-2">{booking.price}</td>
                                <td className="border px-4 py-2">
                                    <button onClick={() => handleEdit(booking)} className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 transition mr-2 mb-2">Edit</button>
                                    <button onClick={() => handleDelete(booking._id)} className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {updateSeen && (
                <UpdatePopUpForm 
                    toggle={toggleUpdatePop}
                    onFormSubmit={fetchBookings}
                    currentUser={editBooking}
                />
            )}
        </div>
    );
};

export default BookingTable;
