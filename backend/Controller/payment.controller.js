const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import Booking from '../models/booking.js';

export const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency = 'usd' } = req.body;

        // Create a PaymentIntent with the order amount and currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            automatic_payment_methods: {
                enabled: true,
            },
        });

        res.json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: 'Failed to create payment intent' });
    }
};

export const updateBookingPaymentStatus = async (req, res) => {
    try {
        const { bookingId, paymentIntentId, status } = req.body;

        if (!bookingId) {
            return res.status(400).json({ error: 'Booking ID is required' });
        }

        if (!paymentIntentId) {
            return res.status(400).json({ error: 'Payment Intent ID is required' });
        }

        // Verify payment status with Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status === 'succeeded') {
            // Update booking status in database
            const updatedBooking = await Booking.findByIdAndUpdate(
                bookingId,
                {
                    payment_status: status || 'paid',
                    payment_intent_id: paymentIntentId,
                    transaction_id: paymentIntent.id
                },
                { new: true }
            );

            if (!updatedBooking) {
                return res.status(404).json({ error: 'Booking not found' });
            }

            res.json({ success: true, booking: updatedBooking });
        } else {
            // Update booking status to failed if payment wasn't successful
            await Booking.findByIdAndUpdate(
                bookingId,
                { payment_status: 'failed' },
                { new: true }
            );
            res.status(400).json({ error: 'Payment not completed', status: paymentIntent.status });
        }
    } catch (error) {
        console.error('Error updating booking payment status:', error);
        res.status(500).json({ error: 'Failed to update payment status' });
    }
};