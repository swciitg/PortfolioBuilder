import { connect } from "react-redux";
import Form from "./Form";
import React, { useEffect } from "react";
import { useState } from "react"
import HomePage from "./home";


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
  Projectdesign,
  Colour,
  experienceTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  educationTitle,
  isExperienceEnabled,
  isEducationEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  Navbar
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
          <ul class="skills-list d-flex flex-wrap p-0">
            ${skills
              .map((skill) => `
                <li class="mr-4 mb-4">
                  <div class="skill-item text-center p-3">
                    ${skill.image ? `<img src="${skill.url}" class="skill-image" />` : ''}
                    <span class="skill-name">${skill.name}</span>
                  </div>
                </li>
              `)
              .join('')}
          </ul>
        </div>
      </section>
      <hr class="m-0" />
    `;
  
    // Add CSS for styling
    const customStyles = `
      <style>
        .skills-list {
          list-style: none;
        }
  
        .skill-item {
          background-color: #ffffff;
          border: 1px solid #ddd;
          border-radius: 5px;
          padding: 10px;
          width: 150px;
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }
  
        .skill-image {
          width: 50px;
          height: 50px;
          margin-bottom: 10px;
        }
  
        .skill-name {
          font-weight: bold;
        }
        .mr-4 {
          margin-right: 20px; /* You can adjust this value to control the spacing */
        }
  
        .mb-4 {
          margin-bottom: 20px; /* You can adjust this value to control the spacing */
        }
      </style>
    `;
  
    // Add the custom styles to the HTML
    skillsSection += customStyles;
  } else {
    skillsSection = '';
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
              ${Navbar}
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
                ${Projectdesign}
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
  skills: state.skills.selectedSkills,
  experienceTitle: state.title.experienceTitle,
  skillsTitle: state.title.skillsTitle,
  interestsTitle: state.title.interestsTitle,
  awardsTitle: state.title.awardsTitle,
  educationTitle: state.title.educationTitle,
})
export default connect(mapStateToProps)(Preview);