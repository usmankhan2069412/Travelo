import React, { startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51R6FHQBnyNz3YFqgUjJwvQwh3GYfAuUnbSDkIvPB43Dw2rqG1Pim99wifZj32LR05taYiiEd4q7wgQ6EW1i6p1E300ZiCvJf7y');

const PaymentForm = ({ bookingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    
    // Set loading state before processing payment
    setIsProcessing(true);
    
    // Wrap payment processing in startTransition to prevent UI suspension
    startTransition(async () => {
      try {
      // Create payment intent on the server
      const response = await fetch('http://localhost:5000/api/payment/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: bookingData.price * 100, // Convert to cents
          currency: 'usd',
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm the payment with Stripe
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: bookingData.name,
            email: bookingData.email,
          },
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // Update booking status on the server
          await fetch('http://localhost:5000/api/payment/update-payment-status', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              bookingId: bookingData.id,
              paymentIntentId: result.paymentIntent.id
            }),
          });
          
          // Redirect to thank you page
          navigate('/thank-you');
        }
      }
      } catch (error) {
        console.error('Error:', error);
        alert('Payment failed. Please try again.');
      } finally {
        // Reset loading state after payment processing (success or failure)
        setIsProcessing(false);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
        <div className="space-y-2">
          <p><span className="font-semibold">Name:</span> {bookingData.name}</p>
          <p><span className="font-semibold">Email:</span> {bookingData.email}</p>
          <p><span className="font-semibold">From:</span> {new Date(bookingData.from_date).toLocaleDateString()}</p>
          <p><span className="font-semibold">To:</span> {new Date(bookingData.to_date).toLocaleDateString()}</p>
          <p><span className="font-semibold">Guests:</span> {bookingData.num_guests}</p>
          <p className="text-lg font-bold">Total: ${bookingData.price}</p>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-4">Payment Details</h3>
        <div className="p-4 border rounded-md">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-4 rounded transition-all duration-300 ease-in-out disabled:opacity-50"
      >
        {isProcessing ? 'Processing...' : `Pay $${bookingData.price}`}
      </button>
    </form>
  );
};

const StripePayment = ({ bookingData }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm bookingData={bookingData} />
    </Elements>
  );
};

export default StripePayment;