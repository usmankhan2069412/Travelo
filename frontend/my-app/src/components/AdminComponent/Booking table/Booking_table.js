import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UpdatePopUpForm from './Update_booking'; // Ensure this import is present for the popup

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

    // Fetch bookings when the component mounts
    useEffect(() => {
        fetchBookings();
    }, []);

    // Function to fetch all bookings
    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/bookings');
            setBookings(response.data); // Set the fetched bookings to state
        } catch (error) {
            console.error("Error fetching bookings:", error);
        }
    };

    const toggleUpdatePop = () => {
        setUpdateSeen(!updateSeen);
    };

    // Function to handle editing a booking
    const handleEdit = (booking) => {
        setEditBooking(booking); // Set the booking to edit
        setFormData(booking); // Populate form with booking data
        toggleUpdatePop();
    };

    // Function to handle deleting a booking
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/bookings/${id}`); // Delete the booking
            fetchBookings(); // Refresh the booking list
        } catch (error) {
            console.error("Error deleting booking:", error);
        }
    };

    // Function to handle form submission for adding or updating a booking
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            if (editBooking) {
                // Update the existing booking
                await axios.put(`http://localhost:5000/api/bookings/${editBooking._id}`, formData);
            } else {
                // Create a new booking
                await axios.post('http://localhost:5000/api/bookings', formData);
            }
            fetchBookings(); // Refresh the booking list
            resetForm(); // Reset the form after submission
        } catch (error) {
            console.error("Error saving booking:", error);
        }
    };

    // Function to reset the form
    const resetForm = () => {
        setEditBooking(null); // Clear the editing state
        setFormData({ name: '', email: '', phone: '', from_date: '', to_date: '', num_guests: 1, price: 0 }); // Clear the form fields
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Booking Management</h1>
            <form className="mb-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Input fields for booking data */}
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Name"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="date"
                        name="from_date"
                        value={formData.from_date}
                        onChange={(e) => setFormData({ ...formData, from_date: e.target.value })}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="date"
                        name="to_date"
                        value={formData.to_date}
                        onChange={(e) => setFormData({ ...formData, to_date: e.target.value })}
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="number"
                        name="num_guests"
                        value={formData.num_guests}
                        onChange={(e) => setFormData({ ...formData, num_guests: parseInt(e.target.value) })}
                        placeholder="Number of Guests"
                        min="1"
                        className="border p-2 rounded"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
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
                    currentUser={editBooking} // Pass current booking data
                />
            )}
        </div>
    );
};

export default BookingTable;
