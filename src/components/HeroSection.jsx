import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row py-12 md:py-20 px-5 lg:space-x-20 md:px-32">
      <div className="flex flex-col gap-4 w-[100%] lg:w-[60%] lg:mt-7">
        <h1 className="text-gray-700 text-3xl md:text-5xl md:leading-tight tracking-wider font-semibold">
          <span className="text-teal-600">Transform</span> Your{" "}
          <span className="text-teal-600">Documents</span> with Cutting-Edge{" "}
          <span className="text-yellow-500">Analysis</span> and Insights
        </h1>
        <p className="text-lg text-gray-700 py-2 tracking-wide">
          Whether you're summarizing lengthy reports, analyzing data patterns,
          or visualizing key metrics, our tool simplifies every step of the
          process. Dive into advanced topic modeling to uncover hidden insights
          and trends within your documents. Experience unparalleled efficiency
          and clarity with our state-of-the-art technology designed for
          professionals and enthusiasts alike. Discover the power of effortless
          document analysis and make informed decisions with ease.
        </p>
        <div className="mt-6 mx-auto mb-8 lg:mx-0 lg:mb-0">
          <Link
            href="/features"
            className="bg-teal-600 text-white px-7 py-3 text-lg rounded-lg hover:bg-teal-700"
          >
            Try It Now
          </Link>
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
