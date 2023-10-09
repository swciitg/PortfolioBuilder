import { connect } from "react-redux";
import Form from "./Form";

const Preview = ({
  FullName,
  Thubmnail,
  URL,
  Description,
  Keywords,
  FirstName,
  LastName,
  Address,
  Phone,
  Email,
  Socials,
  experiences,
  educations,
  skills,
  interests,
  awards,
  projects,
  Colour,
  experienceTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  educationTitle,
  projectsTitle,
  isExperienceEnabled,
  isEducationEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  isProjectEnabled
}) => {
  const Meta = {
    Facebook: ["facebook-f", "https://fb.me/"],
    WhatsApp: ["whatsapp", "https://wa.me/"],
    Instagram: ["instagram", "https://instagr.am/"],
    Twitter: ["twitter", "https://twitter.com/"],
    LinkedIn: ["linkedin-in", "https://linkedin.com/in/"],
    GitHub: ["github", "https://github.com/"],
    StackOverflow: ["stack-overflow", "https://stackoverflow.com/u/"],
  };

  const navbar = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">
                  <span class="d-block d-lg-none">${FullName}</span>
                  <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="${Thubmnail}" alt="${FullName}" /></span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav">
                  <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                  ${isExperienceEnabled ? `<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">${experienceTitle}</a></li>` : ''}
                  ${isEducationEnabled ? `<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">${educationTitle}</a></li>` : ''}
                  ${isSkillEnabled ? `<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">${skillsTitle}</a></li>`: ''}
                  ${isInterestEnabled ? `<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">${interestsTitle}</a></li>` : ''}
                  ${isAwardsEnabled ? `<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">${awardsTitle}</a></li>` : ''} 
                  ${isProjectEnabled ? `<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#projects">${projectsTitle}</a></li>` : ''}                  
                  </ul>
                </div>
              </nav>`;
  let experienceSection;

  if (isExperienceEnabled) {
    experienceSection = `<section class="resume-section" id="experience">
    <div class="resume-section-content">
      <h2 class="mb-5">${experienceTitle}</h2>
      ${experiences.map(
        (experience) => `
      <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div class="flex-grow-1">
          <h3 class="mb-0">${experience.experience.position}</h3>
          <div class="subheading mb-3">${
            experience.experience.company
          }</div>
          <p>${experience.experience.desc}</p>
        </div>
        <div class="flex-shrink-0"><span class="text-primary">${
          experience.experience.start
        } - ${
          experience.experience.end
            ? experience.experience.end
            : experience.experience.presentJob
            ? "Present"
            : ""
        }</span></div>
      </div>
      `
      ).join(`
`)}
    </div>
  </section>
  <hr class="m-0" />
  `;
  } else {
    experienceSection = "";
  }

  
  let educationSection;
  if (isEducationEnabled) {
    educationSection = `
    <section class="resume-section" id="education">
      <div class="resume-section-content">
        <h2 class="mb-5">${educationTitle}</h2>
        ${educations.map(
          (education) => `
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="flex-grow-1">
            <h3 class="mb-0">${education.education.university}</h3>
            <div class="subheading mb-3">${
              education.education.degree
            }</div>
            <p>GPA: ${education.education.gpa}</p>
          </div>
          <div class="flex-shrink-0"><span class="text-primary">${
            education.education.start
          } - ${
            education.education.end
              ? education.education.end
              : education.education.presentJob
              ? "Present"
              : ""
          }</span></div>
        </div>
        `
        ).join(`
`)}
      </div>
    </section>
    <hr class="m-0" />
  `;
  } else {
    educationSection = "";
  }

  let skillsSection;

  if (isSkillEnabled) {
    skillsSection = `
    <section class="resume-section" id="skills">
                  <div class="resume-section-content">
                    <h2 class="mb-5">${skillsTitle}</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="fa-ul mb-0">
                      ${skills.map(
                        (skill) => `
                      <li>
                        <span class="fa-li"><i class="fas fa-check"></i></span>
                        ${skill.skill.skill}
                      </li>
                      `
                      ).join(`
          `)}
                    </ul>
                  </div>
                </section>
                <hr class="m-0" />
  `;
  } else {
    skillsSection = "";
  }
  
  let interestSection;

  if (isInterestEnabled) {
    interestSection = ` <section class="resume-section" id="interests">
    <div class="resume-section-content">
      <h2 class="mb-5">${interestsTitle}</h2>
      ${interests.map(
        (interest) => `
      <p>${interest.interest.interest}</p>
      `
      ).join(`
`)}
    </div>
  </section>
  <hr class="m-0" />
    
  `;
  } else {
    interestSection = "";
  }

  let awardSection;

  if (isAwardsEnabled) {
    awardSection = ` <section class="resume-section" id="awards">
    <div class="resume-section-content">
      <h2 class="mb-5">${awardsTitle}</h2>
      <ul class="fa-ul mb-0">
        ${awards.map(
          (award) => `
        <li>
          <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
          ${award.award.award}
        </li>
        `
        ).join(`
`)}
      </ul>
    </div>
  </section>
</div>
    
  `;
  } else {
    awardSection = "";
  }
  
  // Inside the ProjectSection component in your Preview component

  let projectSection;

if (isProjectEnabled) {
  projectSection = `
    <!-- Projects-->
    <section class="resume-section" id="projects">
      <div class="resume-section-content">
        <h2 class="mb-5">${projectsTitle}</h2>
        ${projects.map(
          (project) => `
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="flex-grow-1">
            <h3 class="mb-0">${project.project.name}</h3>
            <div class="subheading mb-3">${project.project.techStack}</div>
            <p>${project.project.description}</p>
            <!-- Professor's Name -->
            ${project.project.guidedByProfessor ? `
              <div class="mb-3">
                <strong>Guided by Professor: </strong>
                ${project.project.guidedByProfessor ? 'Yes' : 'No'}
              </div>
            ` : ''}
            <!-- Professor's Name -->
            ${project.project.guidedByProfessor && project.project.professorName ? `
              <div class="mb-3">
                <strong>Professor's Name: </strong>
                ${project.project.professorName}
              </div>
            ` : ''}
            <!-- Club Project -->
            ${project.project.isClubProject ? `
              <div class="mb-3">
                <strong>Club Project: </strong>
                Yes
              </div>
            ` : ''}
            <!-- Club Name -->
            ${project.project.isClubProject && project.project.clubName ? `
              <div class="mb-3">
                <strong>Club Name: </strong>
                ${project.project.clubName}
              </div>
            ` : ''}
            <!-- Self-Project -->
            ${project.project.isSelfProject ? `
              <div class="mb-3">
                <strong>Self-Project: </strong>
                Yes
              </div>
            ` : ''}
            <!-- Website Link -->
            ${project.project.websiteLink ? `
              <div class="mb-3">
                <strong>Website Link: </strong>
                <a href="${project.project.websiteLink}" target="_blank">${project.project.websiteLink}</a>
              </div>
            ` : ''}
            <!-- GitHub Link -->
            ${project.project.githubLink ? `
              <div class="mb-3">
                <strong>GitHub Link: </strong>
                <a href="${project.project.githubLink}" target="_blank">${project.project.githubLink}</a>
              </div>
            ` : ''}
            <!-- Image -->
            ${project.project.image ? `
              <div class="mb-3">
                <img src="${project.project.image}" alt="${project.project.name}" class="img-fluid">
              </div>
            ` : ''}
          </div>
          <div class="flex-shrink-0"><span class="text-primary">${project.project.timeline}</span></div>
        </div>
        `
        ).join("\n")}
      </div>
    </section>
    <hr class="m-0" />
  `;
} else {
  projectSection = "";
}

  




  const finalHTML = `<!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <meta name="author" content="${FullName}" />
              <link rel="icon" type="image/x-icon" href="${Thubmnail}" />
              <meta property="og:title" content="${FullName}" />
              <meta property="og:site_name" content="${FullName}'s Portfolio" />
              <meta property="og:url" content="${URL}" />
              <meta property="og:description" content="${Description}" />
              <meta property="og:type" content="website" />
              <meta property="og:image" content="${Thubmnail}" />
              <meta name="title" content="${FullName}'s Portfolio" />
              <meta name="description" content="${Description}" />
              <meta name="keywords" content="${Keywords}" />
              <meta property="twitter:card" content="summary_large_image" />
              <meta property="twitter:url" content="${URL}" />
              <meta property="twitter:title" content="${FullName}'s Portfolio" />
              <meta property="twitter:description" content="${Description}" />
              <meta property="twitter:image" content="${Thubmnail}" />
              <title>${FullName}'s Portfolio</title>

              <!-- Font Awesome icons (free version)-->
              <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" crossorigin="anonymous"></script>
              <!-- Google fonts-->
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500;700&display=swap" rel="stylesheet"
    type="text/css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet"
    type="text/css">
              <!-- Core theme CSS (includes Bootstrap)-->
              <link href="https://startbootstrap.github.io/startbootstrap-resume/css/styles.css" rel="stylesheet" />
              <style>.bg-primary {--bs-bg-opacity: 1; background-color: ${Colour} !important;}
                    .social-icon:hover {background-color: ${Colour} !important;}
                    .text-primary {--bs-text-opacity: 1; color: ${Colour} !important;}
                    a {color: ${Colour};}
                    a:hover {color: ${Colour};}
              </style>
            </head>
            <body id="page-top">
              <!-- Navigation-->
           ${navbar}
              <!-- Page Content-->
              <div class="container-fluid p-0">
                <!-- About-->
                <section class="resume-section" id="about">
                  <div class="resume-section-content">
                    <h1 class="mb-0">
                      ${FirstName}
                      <span class="text-primary">${LastName}</span>
                    </h1>
                    <div class="subheading mb-5">
                      ${Address} &bull; ${Phone} &bull;
                      <a href="mailto:${Email}">${Email}</a>
                    </div>
                    <p class="lead mb-5">${Description}</p>
                    ${
                      Object.keys(Socials).some(
                        (soc) => Socials[soc].length > 0
                      )
                        ? `
                    <div class="social-icons">
                      ${Object.keys(Socials)
                        .filter((soc) => Socials[soc].length > 0)
                        .map(
                          (soc) => `
                          <a class="social-icon" href="${Meta[soc][1]}${Socials[soc]}">
                            <i class="fab fa-${Meta[soc][0]}"></i>
                          </a>
                        `
                        )
                        .join("\n")}
                    </div>`
                        : ""
                    }
                    
                  </div>
                </section>
                <hr class="m-0" />
                <!-- Experience-->
                ${experienceSection}
                <!-- Education-->
                ${educationSection}
                <!-- Skills-->
                ${skillsSection}
                <!-- Interests-->
               ${interestSection}
                <!-- Awards-->
                ${awardSection}
                <!--Projects-->
                ${projectSection}
              <!-- Bootstrap core JS-->
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
              <!-- Core theme JS-->
              <script src="https://startbootstrap.github.io/startbootstrap-resume/js/scripts.js"></script>
            </body>
          </html>
`;
  return (
    <div className="Preview h-screen w-full">
      <br />
      <iframe
        className="w-full h-[85vh] border rounded-md"
        src={`data:text/html,${encodeURIComponent(finalHTML)}`}
        frameborder="0"
        title="Preview"
      ></iframe>
    </div>
  );
};

const mapStateToProps = (state) => ({
  experiences: state.experiences,
  educations: state.educations,
  awards: state.awards,
  interests: state.interests,
  skills: state.skills,
  experienceTitle: state.title.experienceTitle,
  skillsTitle: state.title.skillsTitle,
  interestsTitle: state.title.interestsTitle,
  awardsTitle: state.title.awardsTitle,
  educationTitle: state.title.educationTitle,
  projectsTitle: state.title.projectsTitle,
  projects: state.projects.map((projectObj) => projectObj.project)});

export default connect(mapStateToProps)(Preview);
