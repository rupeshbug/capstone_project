import React from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative flex justify-between flex-col lg:flex-row py-12 md:py-20 px-5 lg:space-x-20 md:px-32">
      <div className="flex flex-col gap-4 w-[100%] lg:w-[60%] lg:mt-7">
        <h1 className="text-gray-700 text-3xl md:text-5xl md:leading-tight tracking-wider font-semibold">
          <span className="text-teal-600">Transform</span> Your{" "}
          <span className="text-teal-600">Documents</span> with Cutting-Edge{" "}
          <span className="text-yellow-500 animate-pulse">Analysis</span> and
          Insights
        </h1>
        <p className="text-lg text-gray-700 py-2 transition-opacity duration-500 ease-in-out opacity-90 hover:opacity-100">
          Whether you're summarizing lengthy reports, analyzing data patterns,
          or visualizing metrics, our tool simplifies every step of the process.
          Dive into advanced topic modeling to uncover hidden insights and
          trends within your documents. Experience unparalleled efficiency and
          clarity with our state-of-the-art technology designed for
          professionals and enthusiasts alike. Discover the power of effortless
          document analysis and make informed decisions with ease.
        </p>

        {/* New Section */}
        <div className="mt-5 bg-gray-100 rounded-lg p-5 w-[100%] lg:w-[65%] shadow-lg flex flex-col items-center mb-8 lg:mb-0 relative overflow-hidden">
          <h3 className="text-xl font-semibold text-yellow-500 mb-2 flex items-center">
            Explore More
            <Rocket size={32} color="#14b8a6" className="ml-3" />
          </h3>
          <p className="text-lg text-gray-700 text-center mb-4">
            Discover all the features to enhance your experience.
          </p>
          <div className="text-center mt-4 mb-2 animate-bounce">
            <Link
              href="/features"
              className="bg-teal-600 text-white px-7 py-3 text-lg rounded-lg hover:bg-teal-700 transition-transform duration-300 transform hover:scale-105"
            >
              Try It Now
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[40%] text-center">
        <img
          className="w-full h-full rounded-md object-cover"
          src="./heroBackground.png"
          alt="Hero Image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
