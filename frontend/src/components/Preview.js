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
  theme = "default",
  neonAccentColor = "#39ff14",
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

  const isMinimal = theme === "minimalist";
  const isNeon = theme === "neon";
  const neonColor = isNeon ? neonAccentColor : undefined;
  const isDark = theme === "dark";
  const isGradient = theme === "gradient";
  const darkAccent = isDark ? "#ff9900" : undefined;

  return (
    <div
      className={
        isMinimal
          ? "w-full h-full overflow-y-auto bg-white text-black"
          : isNeon
          ? "w-full h-full overflow-y-auto bg-black text-[#39ff14] neon-bg"
          : isDark
          ? "w-full h-full overflow-y-auto bg-black text-white"
          : isGradient
          ? "w-full h-full overflow-y-auto bg-white text-gray-800"
          : "w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"
      }
      style={isNeon ? { boxShadow: "0 0 40px #39ff14 inset" } : {}}
    >
      {/* Hero Section - Compact */}
      <section
        className={
          isMinimal
            ? "relative bg-black text-white px-6 py-10 hero-hover-animation"
            : isNeon
            ? `relative bg-black text-[${neonColor}] px-6 py-10 neon-hero hero-hover-animation`
            : isDark
            ? "relative bg-black text-white px-6 py-10 dark-hero hero-hover-animation"
            : isGradient
            ? "relative bg-white text-gray-800 px-6 py-10 hero-hover-animation"
            : "relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-6 py-10 hero-hover-animation"
        }
        style={isNeon ? { boxShadow: `0 0 40px ${neonColor}` } : {}}
      >
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
                <div className={
                  isMinimal
                    ? "w-24 h-24 md:w-32 md:h-32 rounded-full bg-white text-black border-4 border-white shadow-2xl flex items-center justify-center text-4xl font-bold"
                    : isNeon
                    ? "w-24 h-24 md:w-32 md:h-32 rounded-full bg-black text-[#39ff14] border-4 border-[#39ff14] shadow-2xl flex items-center justify-center text-4xl font-bold neon-glow"
                    : isDark
                    ? "w-24 h-24 md:w-32 md:h-32 rounded-full bg-black text-[#ff9900] border-4 border-[#ff9900] shadow-2xl flex items-center justify-center text-4xl font-bold"
                    : "w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white shadow-2xl flex items-center justify-center text-4xl font-bold"
                }>
                  {FirstName?.[0]?.toUpperCase() || "?"}{LastName?.[0]?.toUpperCase() || ""}
                </div>
              )}
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white"></div>
                    </div>

            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left">
              {isGradient && (
                <div className="moving-green-card p-4 rounded-xl mb-4">
                  <div className="text-white text-sm font-medium">Portfolio Preview</div>
                </div>
              )}
              <h1 className={
                isNeon
                  ? `text-3xl md:text-4xl font-bold mb-2 neon-glow animate-neon`
                  : isDark
                  ? "text-3xl md:text-4xl font-bold mb-2 animate-dark"
                  : isGradient
                  ? "text-3xl md:text-4xl font-extrabold mb-2 text-gray-800"
                  : "text-3xl md:text-4xl font-bold mb-2 animate-fade-in"
              } style={isNeon ? { color: neonColor } : isDark ? { color: darkAccent } : {}}>
                {FullName || "Your Name"}
              </h1>
              <p
                className={isNeon ? `text-lg md:text-xl mb-3 leading-relaxed neon-glow animate-neon typing-anim` : isMinimal ? "text-lg md:text-xl text-white mb-3 leading-relaxed" : isDark ? "text-lg md:text-xl mb-3 leading-relaxed animate-dark typing-anim-dark" : isGradient ? "text-lg md:text-xl mb-3 leading-relaxed text-gray-600" : "text-lg md:text-xl text-white/90 mb-3 leading-relaxed"}
                style={isNeon ? { color: neonColor } : isDark ? { color: darkAccent } : {}}
              >
                <span className={isNeon ? "typing-anim" : isDark ? "typing-anim-dark" : ""}>
                  {Description || "Add your professional tagline or description here"}
                </span>
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start text-xs">
                {Email && (
                  <a href={`mailto:${Email}`} className={
                    isNeon
                      ? `flex items-center gap-1 bg-black px-3 py-1.5 rounded-full neon-glow animate-neon`
                      : isMinimal
                      ? "flex items-center gap-1 bg-white text-black px-3 py-1.5 rounded-full hover:opacity-90 transition-all"
                      : isDark
                      ? "flex items-center gap-1 bg-black text-[#ff9900] border border-[#ff9900] px-3 py-1.5 rounded-full hover:opacity-90 transition-all"
                      : "flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white/30 transition-all"
                  } style={isNeon ? { color: neonColor } : {}}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {Email}
                  </a>
                )}
                {Phone && (
                  <a href={`tel:${Phone}`} className={
                    isNeon
                      ? `flex items-center gap-1 bg-black px-3 py-1.5 rounded-full neon-glow animate-neon`
                      : isMinimal
                      ? "flex items-center gap-1 bg-white text-black px-3 py-1.5 rounded-full hover:opacity-90 transition-all"
                      : isDark
                      ? "flex items-center gap-1 bg-black text-[#ff9900] border border-[#ff9900] px-3 py-1.5 rounded-full hover:opacity-90 transition-all"
                      : "flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white/30 transition-all"
                  } style={isNeon ? { color: neonColor } : {}}>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    {Phone}
                  </a>
                )}
                {Address && (
                  <span className={
                    isNeon
                      ? `flex items-center gap-1 bg-black px-3 py-1.5 rounded-full neon-glow animate-neon`
                      : isMinimal
                      ? "flex items-center gap-1 bg-white text-black px-3 py-1.5 rounded-full"
                      : isDark
                      ? "flex items-center gap-1 bg-black text-[#ff9900] border border-[#ff9900] px-3 py-1.5 rounded-full"
                      : "flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
                  } style={isNeon ? { color: neonColor } : {}}>
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
                    <a href={Socials.LinkedIn} target="_blank" rel="noopener noreferrer" className={
                      isNeon
                        ? `w-8 h-8 bg-black rounded-full flex items-center justify-center neon-glow animate-neon`
                        : isMinimal
                        ? "w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110"
                        : isDark
                        ? "w-8 h-8 bg-black text-[#ff9900] border border-[#ff9900] rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110"
                        : "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                    } style={isNeon ? { color: neonColor } : {}}>
                      <svg className="w-4 h-4" fill={isNeon ? neonColor : isDark ? darkAccent : "currentColor"} viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  )}
                  {Socials.GitHub && (
                    <a href={Socials.GitHub} target="_blank" rel="noopener noreferrer" className={
                      isNeon
                        ? `w-8 h-8 bg-black rounded-full flex items-center justify-center neon-glow animate-neon`
                        : isMinimal
                        ? "w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110"
                        : isDark
                        ? "w-8 h-8 bg-black text-[#ff9900] border border-[#ff9900] rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110"
                        : "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                    } style={isNeon ? { color: neonColor } : {}}>
                      <svg className="w-4 h-4" fill={isNeon ? neonColor : isDark ? darkAccent : "currentColor"} viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                  )}
                  {Socials.Twitter && (
                    <a href={Socials.Twitter} target="_blank" rel="noopener noreferrer" className={
                      isNeon
                        ? `w-8 h-8 bg-black rounded-full flex items-center justify-center neon-glow animate-neon`
                        : isMinimal
                        ? "w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110"
                        : isDark
                        ? "w-8 h-8 bg-black text-[#ff9900] border border-[#ff9900] rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110"
                        : "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                    } style={isNeon ? { color: neonColor } : {}}>
                      <svg className="w-4 h-4" fill={isNeon ? neonColor : isDark ? darkAccent : "currentColor"} viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </a>
                  )}
                  {Socials.Instagram && (
                    <a href={Socials.Instagram} target="_blank" rel="noopener noreferrer" className={
                      isNeon
                        ? `w-8 h-8 bg-black rounded-full flex items-center justify-center neon-glow animate-neon`
                        : isMinimal
                        ? "w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110"
                        : isDark
                        ? "w-8 h-8 bg-black text-[#ff9900] border border-[#ff9900] rounded-full flex items-center justify-center hover:opacity-90 transition-all hover:scale-110"
                        : "w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
                    } style={isNeon ? { color: neonColor } : {}}>
                      <svg className="w-4 h-4" fill={isNeon ? neonColor : isDark ? darkAccent : "currentColor"} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
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
        {isExperienceEnabled && experiences && experiences.length > 0 && (
          <section className="animate-slide-up section-hover-animation">
            <h2 className={
              isMinimal ? "text-2xl font-bold text-black mb-4" :
              isNeon ? "text-2xl font-bold text-[#39ff14] mb-4 neon-glow animate-neon" :
              isDark ? "text-2xl font-bold text-[#ff9900] mb-4" :
              isGradient ? "text-2xl font-bold mb-4 text-gray-800" :
              "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            }>
              {/* Remove colored bar for neon/dark/minimalist */}
              {(theme === "default") && (
                <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></span>
              )}
              {experienceTitle || "Experience"}
            </h2>
            {experiences && experiences.length > 0 ? (
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className={
                      isMinimal ? "bg-white rounded-xl p-4 border border-black/20 slide-left" :
                      isNeon ? `bg-black rounded-xl p-4 border border-[#39ff14] neon-glow slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isDark ? `bg-[#ff9900] rounded-xl p-4 border border-orange-500 text-white slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isGradient ? `rounded-xl p-4 moving-green-card slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      `bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-indigo-200 slide-left${index % 3 === 2 ? ' surprise' : ''}`
                    }
                    style={isNeon ? { color: '#39ff14' } : theme === "dark" ? { color: '#fff' } : {}}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className={
                        isMinimal ? "text-lg font-bold text-black" :
                        isNeon ? "text-lg font-bold text-[#39ff14] neon-glow animate-neon" :
                        theme === "dark" ? "text-lg font-bold text-white" :
                        "text-lg font-bold text-gray-800"
                      }>{exp.experience?.position || "Position"}</h3>
                      <span className={
                        isMinimal ? "text-xs font-semibold bg-gray-100 px-3 py-1 rounded-full mt-1 md:mt-0 w-fit" :
                        isNeon ? "text-xs font-semibold bg-black px-3 py-1 rounded-full mt-1 md:mt-0 w-fit neon-glow animate-neon" :
                        theme === "dark" ? "text-xs font-semibold bg-black border border-[#ff9900] px-3 py-1 rounded-full mt-1 md:mt-0 w-fit text-white" :
                        "text-xs text-indigo-600 font-semibold bg-indigo-50 px-3 py-1 rounded-full mt-1 md:mt-0 w-fit"
                      }>
                        {formatDuration(exp.experience || {})}
                      </span>
                    </div>
                    <p className={
                      isMinimal ? "text-base text-black mb-1 font-medium" :
                      isNeon ? "text-base text-[#39ff14] mb-1 font-medium neon-glow animate-neon" :
                      theme === "dark" ? "text-base text-white mb-1 font-medium" :
                      "text-base text-gray-600 mb-1 font-medium"
                    }>{exp.experience?.company || "Company Name"}</p>
                    <p className={
                      isMinimal ? "text-sm text-black leading-relaxed" :
                      isNeon ? "text-sm text-[#39ff14] leading-relaxed neon-glow animate-neon" :
                      theme === "dark" ? "text-sm text-white leading-relaxed" :
                      "text-sm text-gray-600 leading-relaxed"
                    }>{exp.experience?.desc || ""}</p>
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
        {isEducationEnabled && educations && educations.length > 0 && (
          <section className="animate-slide-up section-hover-animation">
            <h2 className={
              isMinimal ? "text-2xl font-bold text-black mb-4" :
              isNeon ? "text-2xl font-bold text-[#39ff14] mb-4 neon-glow animate-neon" :
              isDark ? "text-2xl font-bold text-[#ff9900] mb-4" :
              isGradient ? "text-2xl font-bold mb-4 text-gray-800" :
              "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            }>
              {(theme === "default") && (
                <span className="w-1.5 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full"></span>
              )}
              {educationTitle || "Education"}
            </h2>
            {educations && educations.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {educations.map((edu, index) => (
                  <div
                    key={index}
                    className={
                      isMinimal ? "bg-white rounded-xl p-4 border border-black/20 slide-left" :
                      isNeon ? `bg-black rounded-xl p-4 border border-[#39ff14] neon-glow slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isDark ? `bg-[#ff9900] rounded-xl p-4 border border-orange-500 text-white slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isGradient ? `rounded-xl p-4 moving-green-card slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      `bg-gradient-to-br from-white to-purple-50 rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-purple-100 slide-left${index % 3 === 2 ? ' surprise' : ''}`
                    }
                    style={isNeon ? { color: '#39ff14' } : theme === "dark" ? { color: '#fff' } : {}}
                  >
                    <div className="flex items-start gap-3">
                      <div className={
                        theme === "default"
                          ? "w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
                          : isDark
                          ? "w-10 h-10 bg-black border border-[#ff9900] rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
                          : "w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0"
                      }>
                        🎓
                      </div>
                      <div className="flex-1">
                        <h3 className={
                          isMinimal ? "text-base font-bold text-black mb-1" :
                          isNeon ? "text-base font-bold text-[#39ff14] mb-1 neon-glow animate-neon" :
                          theme === "dark" ? "text-base font-bold text-white mb-1" :
                          "text-base font-bold text-gray-800 mb-1"
                        }>{edu.education?.degree || "Degree"}</h3>
                        <p className={
                          isMinimal ? "text-sm text-black font-semibold mb-1" :
                          isNeon ? "text-sm text-[#39ff14] font-semibold mb-1 neon-glow animate-neon" :
                          theme === "dark" ? "text-sm text-white font-semibold mb-1" :
                          "text-sm text-gray-600 font-semibold mb-1"
                        }>{edu.education?.university || "Institution"}</p>
                        {edu.education?.branch && (
                          <p className={isDark ? "text-xs text-black/80 mb-1" : "text-xs text-gray-500 mb-1"}>{edu.education.branch}</p>
                        )}
                        <p className={
                          isMinimal ? "text-xs text-black" :
                          isNeon ? "text-xs text-[#39ff14] neon-glow animate-neon" :
                          theme === "dark" ? "text-xs text-white" :
                          "text-xs text-gray-500"
                        }>{formatEducationDuration(edu.education || {})}</p>
                        {edu.education?.gpa && (
                          <p className={isDark ? "text-xs text-black font-semibold mt-1" : "text-xs text-purple-600 font-semibold mt-1"}>GPA: {edu.education.gpa}</p>
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
        {isSkillEnabled && skills && skills.length > 0 && (
          <section className="animate-slide-up section-hover-animation">
            <h2 className={
              isMinimal ? "text-2xl font-bold text-black mb-4" :
              isNeon ? "text-2xl font-bold text-[#39ff14] mb-4 neon-glow animate-neon" :
              isDark ? "text-2xl font-bold text-[#ff9900] mb-4" :
              isGradient ? "text-2xl font-bold mb-4 text-gray-800" :
              "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            }>
              {(theme === "default") && (
                <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full"></span>
              )}
              {skillsTitle || "Skills"}
            </h2>
            {skills && skills.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className={
                      isMinimal ? "bg-white rounded-lg p-3 flex flex-col items-center gap-2 border border-black/20 slide-left" :
                      isNeon ? `bg-black rounded-lg p-3 flex flex-col items-center gap-2 border border-[#39ff14] neon-glow slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isDark ? `bg-[#ff9900] rounded-lg p-3 flex flex-col items-center gap-2 border border-orange-500 text-white slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isGradient ? `rounded-lg p-3 flex flex-col items-center gap-2 moving-green-card slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      `bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-all flex flex-col items-center gap-2 hover:-translate-y-1 border border-gray-100 hover:border-blue-200 slide-left${index % 3 === 2 ? ' surprise' : ''}`
                    }
                    style={isNeon ? { color: '#39ff14' } : theme === "dark" ? { color: '#fff' } : {}}
                  >
                    {skill.url && (
                      <img src={skill.url} alt={skill.name} className="w-10 h-10 object-contain" />
                    )}
                    <p className={isNeon ? `text-xs font-semibold text-center leading-tight neon-glow animate-neon` : isDark ? "text-xs font-semibold text-center leading-tight" : "text-xs font-semibold text-gray-700 text-center leading-tight"} style={isNeon ? { color: neonColor } : isDark ? undefined : {}}>{skill.name}</p>
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
        {isProjectEnabled && projects && projects.length > 0 && (
          <section className="animate-slide-up section-hover-animation">
            <h2 className={
              isMinimal ? "text-2xl font-bold text-black mb-4" :
              isNeon ? "text-2xl font-bold text-[#39ff14] mb-4 neon-glow animate-neon" :
              isDark ? "text-2xl font-bold text-[#ff9900] mb-4" :
              isGradient ? "text-2xl font-bold mb-4 text-gray-800" :
              "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            }>
              {(theme === "default") && (
                <span className="w-1.5 h-6 bg-gradient-to-b from-green-600 to-teal-600 rounded-full"></span>
              )}
              {projectsTitle || "Projects"}
            </h2>
            {projects && projects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {projects.map((proj, index) => (
                  <div
                    key={index}
                    className={
                      isMinimal ? "bg-white rounded-xl p-4 border border-black/20 slide-left" :
                      isNeon ? `bg-black rounded-xl p-4 border border-[#39ff14] neon-glow slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isDark ? `bg-[#ff9900] rounded-xl p-4 border border-orange-500 text-white slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isGradient ? `rounded-xl p-4 moving-green-card group slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      `bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-green-200 group slide-left${index % 3 === 2 ? ' surprise' : ''}`
                    }
                    style={isNeon ? { color: '#39ff14' } : theme === "dark" ? { color: '#fff' } : {}}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={isDark ? "text-lg font-bold text-white" : "text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors"}>{proj.project?.name || "Project Name"}</h3>
                      {proj.project?.timeline && (
                        <span className={isDark ? "text-xs text-white bg-black border border-[#ff9900] px-2 py-1 rounded-full shrink-0 ml-2" : "text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full shrink-0 ml-2"}>{proj.project.timeline}</span>
                      )}
          </div>
                    <p className={isGradient ? "text-sm text-gray-200 mb-3 leading-relaxed" : isDark ? "text-sm text-white mb-3 leading-relaxed" : "text-sm text-gray-600 mb-3 leading-relaxed"}>{proj.project?.description || "Project description"}</p>
                    {proj.project?.techStack && (
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {proj.project.techStack.split(',').map((tech, i) => (
                          <span key={i} className={isGradient ? "text-xs px-2 py-1 rounded-full font-medium gradient-chip" : isDark ? "text-xs bg-black text-white border border-[#ff9900] px-2 py-1 rounded-full font-medium" : "text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full font-medium"}>
                            {tech.trim()}
                          </span>
                        ))}
                        </div>
                    )}
                    <div className="flex gap-3 text-xs">
                      {proj.project?.githubLink && (
                        <a href={proj.project.githubLink} target="_blank" rel="noopener noreferrer" className={isGradient ? "font-medium flex items-center gap-1 gradient-button hover-glow-grad" : (isMinimal ? "text-black hover:opacity-80 transition-colors font-medium flex items-center gap-1" : isDark ? "font-medium flex items-center gap-1 bg-black text-white border border-[#ff9900] px-2 py-1 rounded-full" : "text-gray-600 hover:text-green-600 transition-colors font-medium flex items-center gap-1") }>
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                          GitHub
                        </a>
                      )}
                      {proj.project?.websiteLink && (
                        <a href={proj.project.websiteLink} target="_blank" rel="noopener noreferrer" className={isGradient ? "font-medium flex items-center gap-1 gradient-button hover-glow-grad" : (isMinimal ? "text-black hover:opacity-80 transition-colors font-medium flex items-center gap-1" : isDark ? "font-medium flex items-center gap-1 bg-black text-white border border-[#ff9900] px-2 py-1 rounded-full" : "text-gray-600 hover:text-green-600 transition-colors font-medium flex items-center gap-1") }>
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
        {isAwardsEnabled && awards && awards.length > 0 && (
          <section className="animate-slide-up section-hover-animation">
            <h2 className={
              isMinimal ? "text-2xl font-bold text-black mb-4" :
              isNeon ? "text-2xl font-bold text-[#39ff14] mb-4 neon-glow animate-neon" :
              isDark ? "text-2xl font-bold text-[#ff9900] mb-4" :
              isGradient ? "text-2xl font-bold mb-4 text-gray-800" :
              "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            }>
              {(theme === "default") && (
                <span className="w-1.5 h-6 bg-gradient-to-b from-yellow-600 to-orange-600 rounded-full"></span>
              )}
              {awardsTitle || "Awards & Achievements"}
            </h2>
            {awards && awards.length > 0 ? (
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className={
                      isMinimal ? "bg-white rounded-lg p-4 border border-black/20 flex items-center gap-3 slide-left" :
                      isNeon ? `bg-black rounded-lg p-4 border border-[#39ff14] neon-glow flex items-center gap-3 slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isDark ? `bg-[#ff9900] rounded-lg p-4 border border-orange-500 text-white flex items-center gap-3 slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      isGradient ? `rounded-lg p-4 flex items-center gap-3 moving-green-card slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      `bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-4 shadow-md hover:shadow-lg transition-all border border-yellow-200 flex items-center gap-3 slide-left${index % 3 === 2 ? ' surprise' : ''}`
                    }
                    style={isNeon ? { color: '#39ff14' } : theme === "dark" ? { color: '#fff' } : {}}
                  >
                    <div className="text-2xl">🏆</div>
                    <p className={isNeon ? `text-sm font-semibold flex-1 neon-glow animate-neon` : isDark ? "text-sm font-semibold flex-1" : "text-sm text-gray-800 font-semibold flex-1"} style={isNeon ? { color: neonColor } : isDark ? undefined : {}}>{award.award?.award || "Achievement"}</p>
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
        {isInterestEnabled && interests && interests.length > 0 && (
          <section className="animate-slide-up section-hover-animation">
            <h2 className={
              isMinimal ? "text-2xl font-bold text-black mb-4" :
              isNeon ? "text-2xl font-bold text-[#39ff14] mb-4 neon-glow animate-neon" :
              theme === "dark" ? "text-2xl font-bold text-[#ff9900] mb-4" :
              isGradient ? "text-2xl font-bold mb-4 text-gray-800" :
              "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2"
            }>
              {(theme === "default") && (
                <span className="w-1.5 h-6 bg-gradient-to-b from-pink-600 to-rose-600 rounded-full"></span>
              )}
              {interestsTitle || "Interests"}
            </h2>
            {interests && interests.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className={
                      isMinimal ? "bg-white rounded-full px-4 py-2 border border-black/20 slide-left" :
                      isNeon ? `bg-black rounded-full px-4 py-2 border border-[#39ff14] neon-glow slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      theme === "dark" ? `bg-black rounded-full px-4 py-2 border border-[#ff9900] text-[#ff9900] slide-left${index % 3 === 2 ? ' surprise' : ''}` :
                      `bg-white rounded-full px-4 py-2 shadow-md hover:shadow-lg transition-all border border-pink-200 hover:border-pink-400 slide-left${index % 3 === 2 ? ' surprise' : ''}`
                    }
                    style={isNeon ? { color: '#39ff14' } : theme === "dark" ? { color: '#fff' } : {}}
                  >
                    <p className={isNeon ? `text-sm font-medium neon-glow animate-neon` : isDark ? "text-sm font-medium" : "text-sm text-gray-700 font-medium"} style={isNeon ? { color: neonColor } : isDark ? undefined : {}}>{interest.interest?.interest || "Interest"}</p>
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
        .neon-bg { box-shadow: 0 0 40px var(--neon-color, #39ff14) inset; }
        .neon-glow { text-shadow: 0 0 8px var(--neon-color, #39ff14), 0 0 16px var(--neon-color, #39ff14); }
        .neon-hero { box-shadow: 0 0 40px var(--neon-color, #39ff14); }
        .animate-neon { animation: neon-flicker 1.2s infinite alternate; }
        @keyframes neon-flicker {
          0% { opacity: 1; text-shadow: 0 0 8px var(--neon-color, #39ff14), 0 0 16px var(--neon-color, #39ff14); }
          40% { opacity: 0.85; text-shadow: 0 0 12px var(--neon-color, #39ff14), 0 0 24px var(--neon-color, #39ff14); }
          60% { opacity: 1; text-shadow: 0 0 8px var(--neon-color, #39ff14), 0 0 16px var(--neon-color, #39ff14); }
          100% { opacity: 0.95; text-shadow: 0 0 20px var(--neon-color, #39ff14), 0 0 40px var(--neon-color, #39ff14); }
        }
        /* Moving Green Gradient Cards for Gradient Theme */
        .moving-green-card {
          background: linear-gradient(45deg, #22c55e, #16a34a, #15803d, #14532d);
          background-size: 400% 400%;
          animation: green-gradient-move 3s ease infinite;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .moving-green-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: green-shine 2s infinite;
        }
        @keyframes green-gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes green-shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        /* Section Hover Animations */
        .section-hover-animation {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        .section-hover-animation:hover {
          transform: translateY(-2px);
        }
        .section-hover-animation:hover > * {
          animation: section-content-glow 0.6s ease-out;
        }
        @keyframes section-content-glow {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.01); opacity: 0.95; }
          100% { transform: scale(1); opacity: 1; }
        }
        /* Enhanced card hover animations */
        .section-hover-animation:hover .slide-left {
          transform: translateX(0) scale(1.02);
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .section-hover-animation:hover .moving-green-card {
          box-shadow: 0 8px 25px rgba(34, 197, 94, 0.3);
          transform: translateY(-4px) scale(1.02);
          animation-duration: 2s;
        }
        /* Theme-specific hover effects */
        .section-hover-animation:hover .neon-glow {
          text-shadow: 0 0 12px var(--neon-color, #39ff14), 0 0 24px var(--neon-color, #39ff14), 0 0 36px var(--neon-color, #39ff14) !important;
        }
        .section-hover-animation:hover .animate-dark {
          text-shadow: 0 0 12px #ff9900, 0 0 24px #ff9900, 0 0 36px #ff9900 !important;
        }
        /* Smooth section title animations */
        .section-hover-animation h2 {
          transition: all 0.3s ease;
        }
        .section-hover-animation:hover h2 {
          transform: translateX(5px);
          filter: brightness(1.1);
        }
        /* Hero hover animations */
        .hero-hover-animation {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }
        .hero-hover-animation::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }
        .hero-hover-animation:hover::before {
          left: 100%;
        }
        .hero-hover-animation:hover {
          transform: scale(1.01);
        }
        .hero-hover-animation:hover .group {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        .typing-anim {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid var(--neon-color, #39ff14);
          animation: typing 2.2s steps(30, end), blink-caret 0.7s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: var(--neon-color, #39ff14); }
        }
        /* Dark theme styles */
        .dark-hero { box-shadow: 0 0 40px #ff9900; }
        .animate-dark { animation: dark-flicker 1.2s infinite alternate; color: #ff9900; }
        @keyframes dark-flicker {
          0% { opacity: 1; text-shadow: 0 0 8px #ff9900, 0 0 16px #ff9900; }
          40% { opacity: 0.85; text-shadow: 0 0 12px #ff9900, 0 0 24px #ff9900; }
          60% { opacity: 1; text-shadow: 0 0 8px #ff9900, 0 0 16px #ff9900; }
          100% { opacity: 0.95; text-shadow: 0 0 20px #ff9900, 0 0 40px #ff9900; }
        }
        .typing-anim-dark {
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #ff9900;
          animation: typing 2.2s steps(30, end), blink-caret-dark 0.7s step-end infinite;
        }
        @keyframes blink-caret-dark {
          from, to { border-color: transparent }
          50% { border-color: #ff9900; }
        }
        .slide-left {
          animation: slideLeft 0.7s cubic-bezier(.68,-0.55,.27,1.55) both;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .slide-left:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        @keyframes slideLeft {
          0% { opacity: 0; transform: translateX(-60px) scale(0.95) rotate(-2deg); }
          60% { opacity: 1; transform: translateX(10px) scale(1.03) rotate(2deg); }
          100% { opacity: 1; transform: translateX(0) scale(1) rotate(0deg); }
        }
        .surprise {
          animation: surpriseAnim 1.1s cubic-bezier(.68,-0.55,.27,1.55) both;
        }
        @keyframes surpriseAnim {
          0% { opacity: 0; transform: scale(0.7) rotate(-12deg); }
          40% { opacity: 1; transform: scale(1.15) rotate(8deg); }
          70% { opacity: 1; transform: scale(0.98) rotate(-4deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
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
