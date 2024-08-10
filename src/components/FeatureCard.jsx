import React from "react";
import { MoveRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-100 shadow-xl rounded-lg px-6 py-8 flex flex-col items-center text-center transition-transform transform cursor-pointer hover:scale-105">
      <span className="text-left">
        <Icon className="text-teal-600 mb-4" size={40} />
      </span>
      <h3 className="text-xl text-gray-800 font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="mt-6 flex items-center gap-2 font-semibold opacity-80">
        <p className="text-red-500">Learn More</p>
        <MoveRight size={20} className="text-red-500" />
      </div>
    </div>
  );
};

export default FeatureCard;
