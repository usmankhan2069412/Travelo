import React, { startTransition, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { formatCurrency, getPaymentErrorMessage, validatePaymentData } from '../../utils/paymentUtils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Load Stripe outside of component to avoid recreating it on each render
const stripePromise = loadStripe('pk_test_51R6FHQBnyNz3YFqgUjJwvQwh3GYfAuUnbSDkIvPB43Dw2rqG1Pim99wifZj32LR05taYiiEd4q7wgQ6EW1i6p1E300ZiCvJf7y');

// API base URL - can be configured based on environment
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const PaymentForm = ({ bookingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loadingState, setLoadingState] = useState('idle'); // 'idle' | 'validating' | 'processing'

  // Clear error message when booking data changes
  useEffect(() => {
    setErrorMessage('');
  }, [bookingData]);

  // Display error message as toast notification
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  // Display success message and redirect
  useEffect(() => {
    // In your PaymentForm component, update the navigation logic
    if (paymentSuccess) {
        toast.success('Payment successful!', {
          position: "top-right",
          autoClose: 3000
        });
        setTimeout(() => {
          navigate('/thank-you', { replace: true });
        }, 2000);
    }
  }, [paymentSuccess, navigate]);

  // Add validation check for bookingData
  useEffect(() => {
    if (!bookingData) {
      setErrorMessage('Booking data is missing');
      return;
    }
    
    if (!bookingData.price || bookingData.price <= 0) {
      setErrorMessage('Invalid booking amount');
      return;
    }
  }, [bookingData]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');
    setLoadingState('validating');

    try {
      // Validate required booking data
      if (!bookingData?._id && !bookingData?.id) {
        setErrorMessage('Invalid booking reference');
        return;
      }

      if (!bookingData?.price || bookingData.price <= 0) {
        setErrorMessage('Invalid payment amount');
        return;
      }

      if (!stripe || !elements) {
        setErrorMessage('Payment system is not available. Please try again later.');
        return;
      }
      
      // Validate booking data and card details
      const validation = validatePaymentData(bookingData);
      if (!validation.isValid) {
        setErrorMessage(validation.errorMessage);
        return;
      }

      const cardElement = elements.getElement(CardElement);
      if (!cardElement) {
        setErrorMessage('Card element not found');
        return;
      }

      const { error: cardError } = await stripe.createToken(cardElement);
      if (cardError) {
        setErrorMessage(cardError.message);
        return;
      }
      
      // Set loading state before processing payment
      setIsProcessing(true);
      setLoadingState('processing');
      
      // Wrap payment processing in startTransition to prevent UI suspension
      startTransition(async () => {
        try {
          // Create payment intent on the server
          const response = await fetch(`${API_BASE_URL}/api/payment/create-payment-intent`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: Math.round(bookingData.price * 100), // Convert to cents and ensure it's an integer
              currency: 'usd',
              booking_id: bookingData._id || bookingData.id,
              customer_email: bookingData.email,
              customer_name: bookingData.name
            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to create payment intent');
          }

          const { clientSecret } = await response.json();

          // Confirm the payment with Stripe
          const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: {
                name: bookingData.name,
                email: bookingData.email,
                phone: bookingData.phone || '',
              },
            },
          });

          if (result.error) {
            setErrorMessage(getPaymentErrorMessage({ type: 'StripeCardError', message: result.error.message }));
          } else {
            // Inside handleSubmit function, update the success case:
            if (result.paymentIntent.status === 'succeeded') {
              try {
                const updateResponse = await fetch(`${API_BASE_URL}/api/payment/update-payment-status`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    bookingId: bookingData._id || bookingData.id,
                    paymentIntentId: result.paymentIntent.id,
                    status: 'paid'
                  }),
                });
                
                if (!updateResponse.ok) {
                  throw new Error('Failed to update payment status');
                }
                
                // Set success state and show toast immediately
                toast.success('Payment processed successfully!');
                setPaymentSuccess(true);
                
              } catch (error) {
                console.error('Update Error:', error);
                toast.error('Payment recorded but status update failed');
              }
            } else {
              toast.error(`Payment failed: ${result.paymentIntent.status}`);
            }
          }
        } catch (error) {
          console.error('Payment Error:', error);
          setErrorMessage(error.message || 'Payment failed. Please try again.');
        } finally {
          setLoadingState('idle');
          setIsProcessing(false);
        }
      });
    } catch (error) {
      console.error('Payment Error:', error);
      setErrorMessage(error.message || 'Payment failed. Please try again.');
      setLoadingState('idle');
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mx-auto px-4">
      {errorMessage && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Booking Summary</h3>
          <div className="space-y-2">
            <p><span className="font-semibold">Name:</span> {bookingData?.name}</p>
            <p><span className="font-semibold">Email:</span> {bookingData?.email}</p>
            <p><span className="font-semibold">From:</span> {bookingData?.from_date ? new Date(bookingData.from_date).toLocaleDateString() : 'N/A'}</p>
            <p><span className="font-semibold">To:</span> {bookingData?.to_date ? new Date(bookingData.to_date).toLocaleDateString() : 'N/A'}</p>
            <p><span className="font-semibold">Guests:</span> {bookingData?.num_guests || 0}</p>
            <p className="text-lg font-bold">Total: ${bookingData?.price || 0}</p>
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
          disabled={!stripe || loadingState !== 'idle' || !bookingData?.price}
          className={`w-full font-bold py-3 px-4 rounded transition-all duration-300 ease-in-out 
            ${(!stripe || loadingState !== 'idle' || !bookingData?.price) 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-yellow-400 hover:bg-yellow-500 text-gray-800 cursor-pointer'}`}
        >
          {loadingState === 'validating' 
            ? 'Validating...'
            : loadingState === 'processing'
            ? 'Processing Payment...'
            : !bookingData?.price 
            ? 'Invalid Amount'
            : `Pay $${bookingData.price}`}
        </button>
      </form>
      <ToastContainer />
    </div>
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