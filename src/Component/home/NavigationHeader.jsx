import React from 'react';

const NavigationHeader = () => {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button className="px-3 py-1.5 rounded-full bg-gray-900 text-white text-sm font-medium">
              🔥 For You
            </button>
            <button className="px-3 py-1.5 text-gray-700 text-sm font-medium hover:text-gray-900">
              Following
            </button>
            <button className="px-3 py-1.5 text-gray-700 text-sm font-medium hover:text-gray-900">
              Best of Designbank
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-3 py-1.5 text-gray-700 text-sm font-medium border border-gray-300 rounded-md hover:border-gray-400">
              Vendor Products
            </button>
            <button className="px-3 py-1.5 text-gray-700 text-sm font-medium border border-gray-300 rounded-md hover:border-gray-400">
              Recommended
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;