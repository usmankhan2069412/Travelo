import React from 'react';

const PaymentMethod = () => {
  return (
    <div className="min-h-screen bg-fffae5 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-ffd400 mb-6">Payment Methods</h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Choose your preferred payment method to complete your purchase.
        </p>

        {/* Payment Methods */}
        <div className="space-y-6">
          {/* Credit/Debit Card Option */}
          <div className="flex items-center border rounded-lg p-4 hover:bg-gray-100 transition duration-200">
            <img
              src="https://img.icons8.com/color/100/000000/credit-card-front.png"
              alt="Credit Card"
              className="h-10 w-10 mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Credit / Debit Card</h3>
              <p className="text-sm text-gray-500">Pay with your Visa, MasterCard, or American Express card.</p>
            </div>
            <button className="px-4 py-2 bg-teal-500 text-white font-bold rounded-full hover:bg-teal-600">
              Pay Now
            </button>
          </div>

          {/* PayPal Option */}
          <div className="flex items-center border rounded-lg p-4 hover:bg-gray-100 transition duration-200">
            <img
              src="https://img.icons8.com/color/100/000000/paypal.png"
              alt="PayPal"
              className="h-10 w-10 mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">PayPal</h3>
              <p className="text-sm text-gray-500">Securely pay with your PayPal account.</p>
            </div>
            <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600">
              Pay with PayPal
            </button>
          </div>

          {/* Bank Transfer Option */}
          <div className="flex items-center border rounded-lg p-4 hover:bg-gray-100 transition duration-200">
            <img
              src="https://img.icons8.com/color/100/000000/bank.png"
              alt="Bank Transfer"
              className="h-10 w-10 mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Bank Transfer</h3>
              <p className="text-sm text-gray-500">Direct bank transfer (account details will be provided).</p>
            </div>
            <button className="px-4 py-2 bg-green-500 text-white font-bold rounded-full hover:bg-green-600">
              Pay via Bank
            </button>
          </div>

          {/* Cash on Delivery Option */}
          <div className="flex items-center border rounded-lg p-4 hover:bg-gray-100 transition duration-200">
            <img
              src="https://img.icons8.com/color/100/000000/money.png"
              alt="Cash on Delivery"
              className="h-10 w-10 mr-4"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Cash on Delivery</h3>
              <p className="text-sm text-gray-500">Pay with cash when your order is delivered.</p>
            </div>
            <button className="px-2 py-2 bg-yellow-500 text-white font-bold rounded-full hover:bg-yellow-600">
              Pay on Delivery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
