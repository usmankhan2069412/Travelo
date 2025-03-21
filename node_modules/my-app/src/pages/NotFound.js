import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-xl mt-4">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/home" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
