import React from 'react';
import flowerImage2 from "../../images/Vector2.png";

const Option1 = (props) => {
  const { educationTitle, education } = props;

  return (
    <section className="w-full h-screen bg-gray-900 text-white" id="education" style={{ fontFamily: 'sans-serif' }}>
      <div className="w-full px-4 md:px-32 pt-24 md:pt-32 relative">
        <div className="w-full text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'roboto', color: '#FFF7E9' }}>
            {educationTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-400">Explore My Educational Journey</p>
        </div>
        
        <div className="absolute right-10 bottom-20">
          <img className="h-20 w-20 opacity-50" src={flowerImage2} alt="flower" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {education && education.map((item, index) => (
            <div key={index} className="bg-gray-400 rounded-lg shadow-lg p-3 md:p-4">
              <h2 className="text-2xl font-semibold mb-2">{item.education.university}</h2>
              <p className="text-lg mb-2 md:mb-3">{item.education.degree}</p>
              <p className="text-sm text-gray-400">CGPA: {item.education.gpa}</p>
              <p className="text-sm text-gray-400 mb-2">{item.education.branch}</p>
              <p className="text-sm text-gray-500">
                {`${item.education.start} - ${item.education.end ? item.education.end : item.education.presentJob ? 'Present' : ''}`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Option1;