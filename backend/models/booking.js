import  mongoose from 'mongoose';

// Create a schema for the booking
const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // Field is required
        trim: true, // Trim whitespace
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true, // Store email in lowercase
    },
    phone: {
        type: String,
        required: true,
    },
    from_date: {
        type: Date,
        required: true,
    },
    to_date: {
        type: Date,
        required: true,
    },
    num_guests: {
        type: Number,
        required: true,
        min: 1, // Minimum number of guests
    },
    price: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
});

// Create the Booking model
export default mongoose.model('Booking',bookingSchema);


