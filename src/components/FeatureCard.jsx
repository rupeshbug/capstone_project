import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-100 shadow-xl rounded-lg p-6 flex flex-col items-center text-center transition-transform transform cursor-pointer hover:scale-105">
      <div className="flex gap-1 items-center">
        <span>
          <Icon className="text-teal-600 mb-4" size={32} />
        </span>
        <h3 className="text-xl text-gray-800 font-semibold mb-2">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default FeatureCard;
