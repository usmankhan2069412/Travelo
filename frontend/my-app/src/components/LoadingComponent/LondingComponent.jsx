import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-transparent text-[#F4F1DE]">
      <div className="text-center">
        <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-[#F77F00] mb-4"></div>
        <h1 className="text-3xl poppin-bold font-bold mb-2">Tour Travel</h1>
        <p className="text-lg poppin-medium">Please wait while we load your experience...</p>
      </div>
    </div>
  );
};

export default LoadingComponent;
