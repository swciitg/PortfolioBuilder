import React from "react";

const Preview = ({
  FullName,
  FirstName,
  LastName,
  Thubmnail,
  Description,
  Email,
  Phone,
  Address,
  Socials,
  skills,
  projects,
  projectsTitle,
  interests,
  awards,
  experiences,
  educations,
  skillsTitle,
  interestsTitle,
  experienceTitle,
  educationTitle,
  awardsTitle,
  isProjectEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  isExperienceEnabled,
  isEducationEnabled,
}) => {
  // Helper to format duration
  const formatDuration = (exp) => {
    const start = exp.start || '';
    const end = exp.presentJob ? 'Present' : (exp.end || '');
    return start && end ? `${start} - ${end}` : start || end;
  };

  const formatEducationDuration = (edu) => {
    const start = edu.start || '';
    const end = edu.presentUniversity ? 'Present' : (edu.end || '');
    return start && end ? `${start} - ${end}` : start || end;
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section - Compact */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Image */}
            <div className="relative group shrink-0">
              {Thubmnail ? (
                <img
                  src={Thubmnail}
                  alt={FullName}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-2xl transform transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white shadow-2xl flex items-center justify-center text-4xl font-bold">
                  {FirstName?.[0]?.toUpperCase() || "?"}{LastName?.[0]?.toUpperCase() || ""}
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                    </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-fade-in">
                {FullName || "Your Name"}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-3 leading-relaxed">
                {Description || "Add your professional tagline or description here"}
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs">
                {Email && (
                  <a href={`mailto:${Email}`} className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white/30 transition-all">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {Email}
                  </a>
                )}
                {Phone && (
                  <a href={`tel:${Phone}`} className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white/30 transition-all">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {Phone}
                  </a>
                )}
                {Address && (
                  <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {Address}
                  </span>
                )}
                  </div>

              {/* Social Links */}
              {Socials && (Object.values(Socials).some(val => val)) && (
                <div className="flex gap-2 mt-4 justify-center md:justify-start">
                  {Socials.LinkedIn && (
                    <a href={Socials.LinkedIn} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  )}
                  {Socials.GitHub && (
                    <a href={Socials.GitHub} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                  {Socials.Twitter && (
                    <a href={Socials.Twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  )}
                  {Socials.Instagram && (
                    <a href={Socials.Instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Compact spacing */}
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        
        {/* Experience Section */}
        {isExperienceEnabled && (
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></span>
              {experienceTitle || "Experience"}
            </h2>
            {experiences && experiences.length > 0 ? (
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-indigo-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{exp.experience?.position || "Position"}</h3>
                      <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-3 py-1 rounded-full mt-1 md:mt-0 w-fit">
                        {formatDuration(exp.experience || {})}
                      </span>
                    </div>
                    <p className="text-base text-gray-600 mb-1 font-medium">{exp.experience?.company || "Company Name"}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{exp.experience?.desc || ""}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-gray-300 text-center">
                <div className="text-4xl mb-2">💼</div>
                <p className="text-gray-500 text-sm">Add your work experience using the form on the left</p>
        </div>
            )}
  </section>
        )}

        {/* Education Section */}
        {isEducationEnabled && (
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
              {educationTitle || "Education"}
            </h2>
            {educations && educations.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {educations.map((edu, index) => (
                  <div key={index} className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-purple-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0">
                        🎓
                      </div>
                      <div className="flex-1">
                        <h3 className="text-base font-bold text-gray-800 mb-1">{edu.education?.degree || "Degree"}</h3>
                        <p className="text-sm text-gray-600 font-semibold mb-1">{edu.education?.university || "Institution"}</p>
                        {edu.education?.branch && (
                          <p className="text-xs text-gray-500 mb-1">{edu.education.branch}</p>
                        )}
                        <p className="text-xs text-gray-500">{formatEducationDuration(edu.education || {})}</p>
                        {edu.education?.gpa && (
                          <p className="text-xs text-purple-600 font-semibold mt-1">GPA: {edu.education.gpa}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
            ) : (
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-gray-300 text-center">
                <div className="text-4xl mb-2">🎓</div>
                <p className="text-gray-500 text-sm">Add your education details using the form on the left</p>
        </div>
            )}
      </section>
        )}

        {/* Skills Section */}
        {isSkillEnabled && (
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></span>
              {skillsTitle || "Skills"}
            </h2>
            {skills && skills.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-2 hover:-translate-y-1 border border-gray-100 hover:border-blue-200">
                    {skill.url && (
                      <img src={skill.url} alt={skill.name} className="w-10 h-10 object-contain" />
                    )}
                    <p className="text-xs font-semibold text-gray-700 text-center leading-tight">{skill.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-gray-300 text-center">
                <div className="text-4xl mb-2">🛠️</div>
                <p className="text-gray-500 text-sm">Add your skills using the form on the left</p>
              </div>
            )}
          </section>
        )}

        {/* Projects Section */}
        {isProjectEnabled && (
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-green-600 to-teal-600 rounded-full"></span>
              {projectsTitle || "Projects"}
            </h2>
            {projects && projects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {projects.map((proj, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-green-200 group">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors">{proj.project?.name || "Project Name"}</h3>
                      {proj.project?.timeline && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full shrink-0 ml-2">{proj.project.timeline}</span>
                      )}
          </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{proj.project?.description || "Project description"}</p>
                    {proj.project?.techStack && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proj.project.techStack.split(',').map((tech, i) => (
                          <span key={i} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium">
                            {tech.trim()}
                          </span>
                        ))}
                        </div>
                    )}
                    <div className="flex gap-3 text-xs">
                      {proj.project?.githubLink && (
                        <a href={proj.project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors font-medium flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          GitHub
                        </a>
                      )}
                      {proj.project?.websiteLink && (
                        <a href={proj.project.websiteLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors font-medium flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/></svg>
                          Live
                        </a>
                      )}
          </div>
      </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-gray-300 text-center">
                <div className="text-4xl mb-2">🚀</div>
                <p className="text-gray-500 text-sm">Add your projects using the form on the left</p>
              </div>
            )}
          </section>
        )}

        {/* Awards Section */}
        {isAwardsEnabled && (
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-orange-600 rounded-full"></span>
              {awardsTitle || "Awards & Achievements"}
            </h2>
            {awards && awards.length > 0 ? (
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div key={index} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-all border border-yellow-200 flex items-center gap-3">
                    <div className="text-2xl">🏆</div>
                    <p className="text-sm text-gray-800 font-semibold flex-1">{award.award?.award || "Achievement"}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-gray-300 text-center">
                <div className="text-4xl mb-2">🏆</div>
                <p className="text-gray-500 text-sm">Add your awards and achievements using the form on the left</p>
              </div>
            )}
          </section>
        )}

        {/* Interests Section */}
        {isInterestEnabled && (
          <section className="animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-pink-600 to-rose-600 rounded-full"></span>
              {interestsTitle || "Interests"}
            </h2>
            {interests && interests.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <div key={index} className="bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all border border-pink-200 hover:border-pink-400">
                    <p className="text-sm text-gray-700 font-medium">{interest.interest?.interest || "Interest"}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border-2 border-dashed border-gray-300 text-center">
                <div className="text-4xl mb-2">💡</div>
                <p className="text-gray-500 text-sm">Add your interests using the form on the left</p>
              </div>
            )}
          </section>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Preview;
