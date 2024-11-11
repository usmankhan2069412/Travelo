import express from 'express';
import {
    createBooking,
    getBookings,
    getBookingById,
    updateBooking,
    deleteBooking
} from '../Controller/booking.controller.js'; // Adjust the path as necessary

const router = express.Router();

// Define routes
router.post('/bookings', createBooking); // Create a new booking
router.get('/bookings', getBookings); // Get all bookings
router.get('/bookings/:id', getBookingById); // Get a booking by ID
router.put('/bookings/:id', updateBooking); // Update a booking by ID
router.delete('/bookings/:id', deleteBooking); // Delete a booking by ID

export default router;
