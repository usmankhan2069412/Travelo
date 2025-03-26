/**
 * Utility functions for payment processing
 */

/**
 * Format currency amount for display
 * @param {number} amount - Amount in the smallest currency unit (e.g., cents)
 * @param {string} currency - Currency code (default: 'usd')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'usd') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency.toUpperCase(),
    minimumFractionDigits: 2,
  });
  
  // Convert from cents to dollars if needed
  const convertedAmount = amount >= 100 ? amount / 100 : amount;
  return formatter.format(convertedAmount);
};

/**
 * Get user-friendly error message for payment errors
 * @param {Object} error - Error object from Stripe or API
 * @returns {string} User-friendly error message
 */
export const getPaymentErrorMessage = (error) => {
  // Handle Stripe-specific errors
  if (error.type === 'StripeCardError') {
    return error.message || 'Your card was declined.';
  }
  
  if (error.type === 'StripeInvalidRequestError') {
    return 'Invalid payment information. Please check your details and try again.';
  }
  
  if (error.type === 'StripeAPIError') {
    return 'The payment system is currently unavailable. Please try again later.';
  }
  
  // Handle API errors
  if (error.status === 400) {
    return 'Invalid payment request. Please check your information and try again.';
  }
  
  if (error.status === 404) {
    return 'Booking information not found. Please try again.';
  }
  
  // Default error message
  return 'An error occurred during payment processing. Please try again later.';
};

/**
 * Validate payment form data
 * @param {Object} formData - Payment form data
 * @returns {Object} Validation result {isValid, errorMessage}
 */
export const validatePaymentData = (formData) => {
  if (!formData) {
    return { isValid: false, errorMessage: 'Payment data is missing' };
  }
  
  if (!formData._id && !formData.id) {
    return { isValid: false, errorMessage: 'Booking ID is missing' };
  }
  
  if (!formData.price || formData.price <= 0) {
    return { isValid: false, errorMessage: 'Invalid payment amount' };
  }

  if (!formData.name || formData.name.trim().length === 0) {
    return { isValid: false, errorMessage: 'Name is required for payment' };
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    return { isValid: false, errorMessage: 'Valid email is required for payment' };
  }
  
  return { isValid: true, errorMessage: null };
};

export const validateCardElement = (card) => {
  if (!card || !card.complete) {
    return { isValid: false, errorMessage: 'Please complete card details' };
  }
  return { isValid: true, errorMessage: null };
};