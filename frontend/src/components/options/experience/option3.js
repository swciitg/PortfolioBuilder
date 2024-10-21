import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiLink } from "react-icons/fi";

const Option3 = ({ experience }) => {
  const [openIndexes, setOpenIndexes] = useState([]); // Track which cards are open

  const toggleCard = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index) // Close the card if open
        : [...prevIndexes, index] // Open the card if closed
    );
  };

  const getValidHostname = (link) => {
    try {
      return new URL(link).hostname;
    } catch {
      return "Invalid URL"; // Handle invalid URLs gracefully
    }
  };

  return (
    <div className=" m-2 flex flex-col items-center min-h-screen bg-gray-100">
      {experience &&
        experience.map((item, index) => (
          <div
            key={index}
            className="mt-16 w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 mb-6"
          >
            {/* Header Section */}
            <div
              className="flex justify-between items-center p-6 cursor-pointer bg-blue-50 hover:bg-blue-100"
              onClick={() => toggleCard(index)}
            >
              {/* Title Section */}
              <h3 className="text-xl font-semibold text-gray-800">
                <span className="font-bold">
                  {item.experience.position || "Position Unavailable"}
                </span>
                <span className="font-light">
                  {" • "}
                  {item.experience.company || "Company Unavailable"}
                </span>
              </h3>

              {/* Date and Toggle Icon Section */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-gray-600">
                  {`${item.experience.start} - ${
                    item.experience.end
                      ? item.experience.end
                      : item.experience.presentJob
                      ? "Present"
                      : "N/A"
                  }`}
                </span>
                <span
                  className={`text-2xl text-gray-600 transform transition-transform duration-300 ${
                    openIndexes.includes(index) ? "rotate-45" : ""
                  }`}
                >
                  {openIndexes.includes(index) ? "×" : "+"}
                </span>
              </div>
            </div>

            {/* Expandable Content */}
            <div
              className={`transition-all duration-500 ${
                openIndexes.includes(index) ? "max-h-[500px]" : "max-h-0"
              } overflow-hidden`}
            >
              <div className="p-6 bg-[#0b2c56] text-white">
                {/* Location and Link Section */}
                <div className="flex items-center gap-4 text-sm mb-4">
                  <HiOutlineLocationMarker className="text-blue-300" size={24} />
                  <span>{item.experience.location || "Location Unavailable"}</span>

                  {item.experience.link && (
                    <a
                      href={item.experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-300 hover:text-blue-400"
                    >
                      <FiLink size={20} />
                      <span>{getValidHostname(item.experience.link)}</span>
                    </a>
                  )}
                </div>

                {/* Description Section */}
                <p className="text-white mb-4 max-w-xl leading-relaxed">
                  {item.experience.desc || "Description not available."}
                </p>

                {/* Icons and Logo Section */}
                <div className="flex justify-between items-center mt-6">
                  {/* Icons Section */}
                  <div className="flex gap-4">
                    {item.experience.icons?.map((icon, i) => (
                      <img
                        key={i}
                        src={icon}
                        alt={`icon-${i}`}
                        className="w-12 h-12"
                      />
                    ))}
                  </div>

                  {/* Company Logo */}
                  {item.experience.logo && (
                    <div className="relative bottom-20 mix-blend-multiply">
                      <img
                        src={item.experience.logo}
                        alt={`${item.experience.company} Logo`}
                        className="w-36"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Option3;
