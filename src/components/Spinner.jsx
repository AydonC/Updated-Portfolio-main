import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background with a nice gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-500 opacity-80 backdrop-blur-sm"></div>

      <div className="flex flex-col items-center justify-center space-y-4 z-10">
        {/* Pulsing Logo */}
        <img
          src="/logoMain.png"
          alt="Loading Logo"
          className="w-32 h-32 object-contain animate-pulse"
        />

        {/* "Welcome" text with a fade-in animation */}
        <div className="text-white text-3xl font-semibold animate-fadeIn">Debugging...</div>
      </div>
    </div>
  );
};

export default Spinner;
