import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiLink } from "react-icons/fi";

const Option4 = ({ experience = [], resumeURL = "#" }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleCard = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };

  const getValidHostname = (link) => {
    try {
      return new URL(link).hostname;
    } catch {
      return "Invalid URL";
    }
  };

  return (
    <div className="container mx-auto p-8 bg-[#fffaf0] min-h-screen">
      <h2 className="text-5xl font-extrabold text-center mb-12">Experience</h2>

      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

        {experience.length > 0 ? (
          experience.map((item, index) => (
            <div
              key={index}
              className={`mb-12 flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-black w-8 h-8 rounded-full z-10"></div>

              <div
                className={`w-5/12 bg-white shadow-lg p-6 rounded-lg transition-transform duration-300 hover:scale-105 ${
                  index % 2 === 0 ? "mr-8" : "ml-8"
                }`}
              >
                <div
                  className="cursor-pointer"
                  onClick={() => toggleCard(index)}
                >
                  <h3 className="text-lg font-semibold sm:text-xs">
                    {item.experience.position || "Position Unavailable"}
                    {" • "}
                    <span className="font-light sm:text-xs">
                      {item.experience.company || "Company Unavailable"}
                    </span>
                  </h3>
                  <div className="text-sm text-gray-500 mb-2 sm:text-xs">
                    {`${item.experience.start || "N/A"} - ${
                      item.experience.end
                        ? item.experience.end
                        : item.experience.presentJob
                        ? "Present"
                        : "N/A"
                    }`}
                  </div>
                </div>

                {/* Expandable Content */}
                {openIndexes.includes(index) && (
                  <div className="mt-4">
                    {/* Location and Link */}
                    <div className="flex items-center gap-4 text-sm mb-4 ">
                      <HiOutlineLocationMarker
                        className="text-blue-300 sm:text-xs"
                        size={24}
                      />
                      <span>
                        {item.experience.location || "Location Unavailable"}
                      </span>

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

                    {/* Description */}
                    <p className="text-gray-700 mb-4 sm:text-xs">
                      {item.experience.desc || "Description not available."}
                    </p>

                    {/* Icons Section */}
                    {item.experience.icons?.length > 0 && (
                      <div className="flex gap-4 mt-4">
                        {item.experience.icons.map((icon, i) => (
                          <img
                            key={i}
                            src={icon}
                            alt={`icon-${i}`}
                            className="w-12 h-12"
                          />
                        ))}
                      </div>
                    )}

                    {/* Company Logo */}
                    {item.experience.logo && (
                      <div className="mt-6">
                        <img
                          src={item.experience.logo}
                          alt={`${item.experience.company} Logo`}
                          className="w-36 mx-auto"
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No experience data available.
          </p>
        )}
      </div>

      {/* View Resume Link */}
      <div className="text-center mt-8">
        <a
          href={resumeURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View full resume →
        </a>
      </div>
    </div>
  );
};

export default Option4;
