import React from 'react';

const Topbar = () => {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-gray-900">Welcome back!</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Notifications</span>
            🔔
          </button>
          <div className="flex items-center space-x-2">
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/32"
              alt="User avatar"
            />
            <span className="text-sm font-medium text-gray-700">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
