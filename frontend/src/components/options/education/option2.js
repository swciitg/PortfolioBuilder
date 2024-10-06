import React from 'react';
import flowerImage2 from "../../images/Vector2.png";

const Option1 = (props) => {
  const { educationTitle, education } = props;

  return (
    <section className="w-full h-screen bg-gray-900" id="education" style={{ fontFamily: 'sans-serif' }}>
      <div className="w-full px-4 md:px-32 pt-12 md:pt-24">
        <div
          className="w-full mt-10 md:mt-4 md:pl-24 pb-2 mb-2 md:mb-4 text-4xl border-b-2 border-yellow-500"
          style={{ fontFamily: 'roboto', color: 'rgba(255, 247, 233, 1)' }}
        >
          {educationTitle}
        </div>
        <div className="relative w-full mt-10 md:mt-8 flex flex-col gap-6">
          <span className="absolute right-16 bottom-0">
            <img className="h-16 w-16 transform rotate-12" src={flowerImage2} alt="flower" />
          </span>
          <span className="absolute right-2 bottom-10 md:bottom-16">
            <img className="h-10 w-10 transform -rotate-12" src={flowerImage2} alt="flower" />
          </span>
          {education && education.map((item, index) => (
            <div
              key={index}
              className="relative w-[90vw] md:w-[70vw] p-6 rounded-lg shadow-lg bg-gray-800 text-white"
            >
              <div>
                <div className="text-lg md:text-xl capitalize font-semibold mb-2">
                  {item.education.university}
                </div>
                <div className="flex justify-between items-center text-sm md:text-base">
                  <div className="leading-5 capitalize">
                    {item.education.degree}
                  </div>
                  <div
                    className="pr-2 capitalize text-yellow-400"
                    style={{ fontFamily: 'roboto' }}
                  >
                    CGPA : {item.education.gpa}
                  </div>
                </div>
                <div className="text-xs md:text-sm capitalize">
                  {item.education.branch}
                </div>
              </div>
              <div
                className="absolute top-0 right-0 p-2 md:p-3 text-xs md:text-sm bg-yellow-500 text-gray-900 rounded-bl-lg"
                style={{ fontFamily: 'roboto' }}
              >
                <span>
                  {`${item.education.start} - ${item.education.end ? item.education.end : item.education.presentJob ? 'Present' : ''}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Option1;