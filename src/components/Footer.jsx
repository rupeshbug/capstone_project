import React from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  ChartNoAxesCombined,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-gray-100 text-gray-800 py-6 px-5 lg:px-32">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-3 mb-5 lg:mb-0">
          <h1 className="text-3xl font-bold">Intextify</h1>
          <span className="text-teal-500">
            <ChartNoAxesCombined size={32} />
          </span>
        </div>

        {/* Middle links */}
        <div className="flex gap-8 mb-5 lg:mb-0">
          <a href="/about" className="hover:text-teal-500">
            About
          </a>
          <a href="/features" className="hover:text-teal-500">
            Features
          </a>
          <a href="/legal-privacy" className="hover:text-teal-500">
            Legal and Privacy
          </a>
        </div>
        {/* Right side social icons */}
        <div className="flex gap-7">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-500"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-500"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-500"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>

      <div className="text-center mt-6 text-gray-400">
        <hr className="border-gray-600 mb-2" />
        <p className="mt-4 font-semibold">Intextify @2024</p>
      </div>
    </footer>
  );
};

export default Footer;
