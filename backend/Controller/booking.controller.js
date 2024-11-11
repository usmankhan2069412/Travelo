import Booking from '../models/booking.js'; // Adjust the path as necessary

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        await newBooking.save();
        return res.status(201).json(newBooking);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Get all bookings
export const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        return res.status(200).json(bookings);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get a booking by ID
export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Update a booking by ID
export const updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        return res.status(200).json(booking);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

// Delete a booking by ID
export const deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByIdAndDelete(req.params.id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }
        return res.status(200).json({ message: 'Booking deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
