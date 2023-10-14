import React from 'react';

const NavbarDesign1 = ({
  FullName,
  Thubmnail,
  experienceTitle,
  educationTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  projectsTitle,
  isExperienceEnabled,
  isEducationEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  isProjectEnabled,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand ms-auto" href="#">
          {FullName}
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            {isExperienceEnabled && (
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  {experienceTitle}
                </a>
              </li>
            )}
            {isEducationEnabled && (
              <li className="nav-item">
                <a className="nav-link" href="#education">
                  {educationTitle}
                </a>
              </li>
            )}
            {isSkillEnabled && (
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  {skillsTitle}
                </a>
              </li>
            )}
            {isInterestEnabled && (
              <li className="nav-item">
                <a className="nav-link" href="#interests">
                  {interestsTitle}
                </a>
              </li>
            )}
            {isAwardsEnabled && (
              <li className="nav-item">
                <a className="nav-link" href="#awards">
                  {awardsTitle}
                </a>
              </li>
            )}
            {isProjectEnabled && (
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  {projectsTitle}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesign1;
