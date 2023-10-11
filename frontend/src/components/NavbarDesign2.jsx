import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarDesign2 = ({
  FullName,
  Thubmnail,
  isExperienceEnabled,
  isEducationEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  isProjectEnabled,
  experienceTitle,
  educationTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  projectsTitle,
}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">{FullName}</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={Thubmnail} alt={FullName} />
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
          {isExperienceEnabled ? (
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">{experienceTitle}</a>
            </li>
          ) : null}
          {isEducationEnabled ? (
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">{educationTitle}</a>
            </li>
          ) : null}
          {isSkillEnabled ? (
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">{skillsTitle}</a>
            </li>
          ) : null}
          {isInterestEnabled ? (
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">{interestsTitle}</a>
            </li>
          ) : null}
          {isAwardsEnabled ? (
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">{awardsTitle}</a>
            </li>
          ) : null}
          {isProjectEnabled ? (
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">{projectsTitle}</a>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarDesign2;
