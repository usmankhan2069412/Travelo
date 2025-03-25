import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51R6FHQBnyNz3YFqgFEqVvW1vBkeMJRDnhOpzUQwnwmDaEjm1yAqeYIivmwJZFTczeOM8BNr3iOQWMbJ6P8ECdVGJ00RpEClrUa');

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
        const { bookingId, paymentIntentId } = req.body;

        // Verify payment status with Stripe
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

        if (paymentIntent.status === 'succeeded') {
            // Update booking status in database
            // Add your booking update logic here
            res.json({ success: true });
        } else {
            res.status(400).json({ error: 'Payment not completed' });
        }
    } catch (error) {
        console.error('Error updating booking payment status:', error);
        res.status(500).json({ error: 'Failed to update payment status' });
    }
};