import React from "react";

const ExperienceTemplate = ({ userData }) => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="text-center py-12 bg-white shadow-sm">
        <h1 className="text-4xl font-bold">{userData.name}</h1>
        <p className="text-lg text-gray-600">{userData.role}</p>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">About</h2>
        <p>{userData.about}</p>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-10 px-8 shadow-inner">
        <h2 className="text-2xl font-semibold mb-6 text-center">Experience</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {userData.experiences && userData.experiences.length > 0 ? (
            userData.experiences.map((exp, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="font-bold text-lg">
                  {exp.experience?.title || "Role Title"}
                </h3>
                <p className="text-gray-600">{exp.experience?.company}</p>
                <p className="text-sm text-gray-500">
                  {exp.experience?.start} -{" "}
                  {exp.experience?.end ||
                    (exp.experience?.presentJob ? "Present" : "")}
                </p>
                <p className="mt-2 text-gray-700">
                  {exp.experience?.description ||
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

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Projects</h2>
        <ul className="space-y-4">
          {userData.projects && userData.projects.length > 0 ? (
            userData.projects.map((project, index) => (
              <li key={index} className="border p-4 rounded shadow-sm">
                <h3 className="font-bold">{project.title}</h3>
                <p>{project.description}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No projects to display.</p>
          )}
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white text-center py-6">
        <p>📧 {userData.email}</p>
      </section>
    </div>
  );
};

export default ExperienceTemplate;
