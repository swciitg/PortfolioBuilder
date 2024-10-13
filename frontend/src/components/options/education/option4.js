import React from 'react';

const Option4 = ({ educationTitle, education }) => {
  return (
    <section className="w-full h-auto flex justify-center items-center mt-16" id="education" style={{ fontFamily: 'monospace' }}>
      {/* Container for all education content */}
      <div className="relative w-[90%] md:w-[70%] border border-gray-800/[50] rounded-[18px] p-6 bg-black/20">
        
        {/* Education Title sitting on the border with invisible border behind */}
        <div
          className="absolute -top-5 left-1/4 transform -translate-x-1/2 bg-black px-4 text-blue-300 text-2xl"
          style={{ fontFamily: 'monospace', borderTop: 'none' }} // Positioning it on the border
        >
          {educationTitle}
        </div>

        {/* Border styling adjustment*/}
        <div className="border-t-0 pt-6"></div>

        {/* Education List */}
        <div className="mt-1 flex flex-col">
          {education && education.map((item, index) => (
            <div
              key={index}
              className="relative w-full p-4"
              style={{ backgroundColor: 'transparent', color: '#e5e5e5' }}
            >
              {/* University Name and Degree */}
              <div className="flex justify-between items-center">
                <div className="text-sm font-normal">
                  • {item.education.university}
                </div>

                {/* CGPA */}
                <div className="text-sm" style={{ color: '#8ab4f8' }}>
                  CGPA: {item.education.gpa}
                </div>
              </div>

              {/* Degree and Branch */}
              <div className="text-sm mt-2 pl-5">
                - {item.education.degree}, {item.education.branch}
              </div>

              {/* Date */}
              <div className="text-xs mt-1 pl-5">
                {`${item.education.start} - ${item.education.end ? item.education.end : item.education.presentJob ? 'Present' : ''}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Option4;