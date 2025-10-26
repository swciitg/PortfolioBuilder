import React from "react";
import flowerImage2 from "../../images/Vector2.png";

const Option5 = (props) => {
  const { experienceTitle, experience } = props;

  return (
    <section
      id="experience"
      className="relative min-h-screen bg-black text-white py-20 px-6 font-sans"
    >
      {/* Decorative Flowers */}
      <span className="absolute right-10 bottom-10 opacity-20">
        <img className="h-16 w-16" src={flowerImage2} alt="flower" />
      </span>
      <span className="absolute right-4 bottom-24 opacity-10">
        <img className="h-10 w-10" src={flowerImage2} alt="flower" />
      </span>

      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-12">
        {experienceTitle || "Experience"}
      </h2>

      {/* Experience Grid */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {experience && experience.length > 0 ? (
          experience.map((exp, index) => (
            <div
              key={index}
              className="relative border border-yellow-400 rounded-lg p-6 bg-gradient-to-b from-gray-900 to-black hover:shadow-[0_0_15px_#facc15] transition"
            >
              <h3 className="text-2xl font-semibold text-yellow-300 mb-2">
                {exp.experience.title || "Role Title"}
              </h3>
              <p className="text-gray-300 italic mb-2">
                {exp.experience.company}
              </p>
              <p className="text-sm text-gray-400 mb-4">
                {exp.experience.start} -{" "}
                {exp.experience.end ||
                  (exp.experience.presentJob ? "Present" : "")}
              </p>
              <p className="text-gray-200 leading-relaxed">
                {exp.experience.description ||
                  "Worked on various challenging projects and contributed to company goals."}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No experience data available.
          </p>
        )}
      </div>
    </section>
  );
};

export default Option5;
