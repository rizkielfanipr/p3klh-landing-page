import React from 'react';

const Rectangle = ({ title, description }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Rectangle Background */}
      <div className="absolute inset-0 w-full h-full bg-[rgba(3,52,110,0.3)] z-0"></div>
      
      {/* Text */}
      <div className="relative container mx-auto px-6 py-16 pt-40 z-10 text-center">
        <h1 className="text-2xl font-bold mb-2 text-left opacity-80">{title}</h1>
        <p className="text-md text-left opacity-80">{description}</p>
      </div>

      {/* Ornamen */}
      <div className="absolute right-0 bottom-0 flex">
        {/* Lingkaran Gradient Besar */}
        <div className="w-96 h-96 bg-gradient-to-r from-blue-300 to-blue-500 opacity-40 rounded-full absolute -right-40 -bottom-40 transform scale-150"></div>
        
        {/* Lingkaran dengan Pattern */}
        <div className="relative flex items-center justify-center">
          <div className="w-64 h-64 bg-[rgba(3,52,110,0.2)] border-8 border-blue-400 rounded-full absolute right-10 bottom-10">
            <div className="w-32 h-32 border-4 border-white rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Bentuk Geometris Berlapis */}
        <div className="absolute right-24 bottom-24">
          <div className="w-80 h-80 bg-blue-300 opacity-50 rounded-full -z-10 transform rotate-45"></div>
          <div className="w-64 h-64 bg-blue-400 opacity-50 rounded-full -z-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
