import React from 'react';

const NavbarDesign3 = ({
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
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand" href="#">
          {FullName}
        </a>
        <div className="d-flex">
          <a className="nav-link me-3" href="#about">
            About
          </a>
          {isExperienceEnabled && (
            <a className="nav-link me-3" href="#experience">
              {experienceTitle}
            </a>
          )}
          {isEducationEnabled && (
            <a className="nav-link me-3" href="#education">
              {educationTitle}
            </a>
          )}
          {isSkillEnabled && (
            <a className="nav-link me-3" href="#skills">
              {skillsTitle}
            </a>
          )}
          {isInterestEnabled && (
            <a className="nav-link me-3" href="#interests">
              {interestsTitle}
            </a>
          )}
          {isAwardsEnabled && (
            <a className="nav-link me-3" href="#awards">
              {awardsTitle}
            </a>
          )}
          {isProjectEnabled && (
            <a className="nav-link me-3" href="#projects">
              {projectsTitle}
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesign3;
