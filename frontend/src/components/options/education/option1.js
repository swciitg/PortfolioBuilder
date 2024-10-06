import React from 'react';
import flowerImage2 from "../../images/Vector2.png";

const Option1 = (props) => {
  const { educationTitle, education } = props;

  return (
    <section className="w-full h-screen" id="education" style={{ fontFamily: 'sans-serif' }}>
      <div className="w-full px-4 md:px-32 pt-12 md:pt-24">
        <div
          className="w-full mt-10 md:mt-4 md:pl-24 mb-2 md:mb-4 text-4xl"
          style={{ fontFamily: 'roboto', color: 'rgba(255, 247, 233, 1)' }}
        >
          {educationTitle}
        </div>
        <span className="absolute right-16 bottom-12 md:bottom-20">
          <img className="h-16 w-16" src={flowerImage2} alt="flower" />
        </span>
        <span className="absolute right-2 bottom-28 md:bottom-36">
          <img className="h-10 w-10" src={flowerImage2} alt="flower" />
        </span>
        <div
          className="w-full mt-10 md:px-24 md:mt-8 flex flex-col gap-3"
          style={{ fontFamily: 'roboto', color: 'rgba(255, 247, 233, 0.8)' }}
        >
          {education && education.map((item, index) => (
            <div
              key={index}
              className="relative w-[90vw] md:w-[70vw] py-4 pr-2 pl-2 md:pl-8 rounded-lg border"
            >
              <div>
                <div
                  className="max-w-3/4 capitalize text-lg mt-3 md:mt-1 md:mb-1 tracking-wide"
                >
                  {item.education.university}
                </div>
                <div className="flex justify-between items-center text-sm pl-2 md:pl-6">
                  <div className="leading-5 capitalize">
                    - {item.education.degree}
                  </div>
                  <div
                    className="pr-2 capitalize"
                    style={{ fontFamily: 'roboto', color: 'rgba(255, 247, 233, 0.6)' }}
                  >
                    CGPA : {item.education.gpa}
                  </div>
                </div>
                <div
                  className="text-xs md:text-sm capitalize pl-2 md:pl-6"
                >
                  - {item.education.branch}
                </div>
              </div>
              <div
                className="absolute top-0 right-0 p-2 md:p-3 text-xs md:text-sm flex justify-center"
                style={{ fontFamily: 'roboto', color: 'rgba(255, 247, 233, 0.6)' }}
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