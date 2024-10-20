import React from "react";

const timelineData = [
  {
    date: "Oct–Nov 2018",
    title: "SchoolBit",
    role: "Junior Intern",
    description:
      "I started working on an Android app called 'SchoolBit' (which was implemented in XYZ through ABC and ORS) that connected to my school system and showed absences, summaries, grades, etc...",
  },
  {
    date: "Oct–Nov 2018",
    title: "SchoolBit",
    role: "Junior Intern",
    description:
      "I started working on an Android app called 'SchoolBit' (which was implemented in XYZ through ABC and ORS) that connected to my school system and showed absences, summaries, grades, etc...",
  },
  {
    date: "Oct–Nov 2018",
    title: "SchoolBit",
    role: "Junior Intern",
    description:
      "I started working on an Android app called 'SchoolBit' (which was implemented in XYZ through ABC and ORS) that connected to my school system and showed absences, summaries, grades, etc...",
  },
];

const Timeline = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-5xl font-extrabold text-center mb-12">experience.</h2>

      <div className="relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-gray-300"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Circle on the Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white border-4 border-black-500 w-8 h-8 rounded-full"></div>

            {/* Content Card */}
            <div
              className={`w-5/12 bg-white shadow-lg p-6 rounded-lg ${
                index % 2 === 0 ? "mr-8" : "ml-8"
              }`}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{item.role}</p>
              <p className="text-gray-700 ">{item.description}</p>
            </div>

            {/* Date */}
            <div className="absolute text-gray-600 text-sm -translate-y-10 transform left-1/2 -translate-x-1/2">
              {item.date}
            </div>
          </div>
        ))}
      </div>

      {/* View Resume Link */}
      <div className="text-center mt-8">
        <a href="#" className="text-blue-500 hover:underline">
          View full resume →
        </a>
      </div>
    </div>
  );
};

export default Timeline;
