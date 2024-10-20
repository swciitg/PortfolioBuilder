import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiLink } from "react-icons/fi";

const DropdownCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className={`w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500`}
      >
        {/* Header Section */}
        <div
          className="flex justify-between items-center p-6 cursor-pointer bg-blue-50 hover:bg-blue-100"
          onClick={toggleCard}
        >
          {/* Title Section */}
          <h3 className="text-xl font-semibold text-gray-800">
            <span className="font-bold">Software Engineer Intern</span>
            <span className="font-light"> • Saimon Global Ltd</span>
          </h3>

          {/* Date and Toggle Icon Section */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-600">
              Aug 2022 - Oct 2022
            </span>
            <span
              className={`text-2xl text-gray-600 transform transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
            >
              {isOpen ? "×" : "+"}
            </span>
          </div>
        </div>

        {/* Expandable Content */}
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="p-6 bg-[#0b2c56] text-white">
            {/* Location and Link Section */}
            <div className="flex items-center gap-4 text-sm mb-4">
              <HiOutlineLocationMarker className="text-blue-300" size={24} />
              <span>Remote (Toronto, Canada)</span>
              <a
                href="https://upwork.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-blue-300 hover:text-blue-400"
              >
                <FiLink size={20} />
                <span>upwork.com</span>
              </a>
            </div>

            {/* Description Section */}
            <p className="text-white mb-4 max-w-xl leading-relaxed">
              Top-Rated developer on Upwork specializing in Front-end (React,
              WordPress) technologies with a 100% job success rate and client
              satisfaction rating (based on 150+ Jobs, 2500+ hours).
            </p>

            {/* Icons and Upwork Logo Section */}
            <div className="flex justify-between items-center mt-6">
              {/* Icons Section */}
              <div className="flex gap-4">
                <img
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                  alt="HTML5"
                  className="w-12 h-12"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                  alt="HTML5"
                  className="w-12 h-12"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                  alt="HTML5"
                  className="w-12 h-12"
                />
                <img
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                  alt="HTML5"
                  className="w-12 h-12"
                />
              </div>

              {/* Upwork Logo */}
              <div className="relative bottom-20 mix-blend-multiply">
                <img
                  src="images.png"
                  alt="Upwork Logo"
                  className="w-36"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownCard;
