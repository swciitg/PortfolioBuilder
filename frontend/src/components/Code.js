import { connect } from "react-redux";
import React, { useState } from "react";
import FullStarExperience from "./images/fullStarExperience.png";

const Code = ({
  FullName,
  Thubmnail,
  URL,
  Description,
  Keywords,
  skills,
  projects,
  projectsTitle,
  interests,
  awards,
  Colour,
  skillsTitle,
  interestsTitle,
  isProjectEnabled,
  isSkillEnabled,
  isInterestEnabled,
  isAwardsEnabled,
  Navbar,
  TopPortion,
  EducationDesign,
  ExperienceDesign,
  getInTouch
}) => {
  

  let skillsSection;

  if (isSkillEnabled) {
    skillsSection = `
    <section class="w-full h-screen" id="skills" style="font-family:sans-serif" >
    <div class="w-full px-4 md:px-32 pt-12 md:pt-28">
          <div class="w-full mt-12 md:mt-3 md:pl-24 mb-2 text-4xl" style="font-family:roboto;color:rgba(22, 22, 22, 1)">${skillsTitle}</div>
          <div><img class="absolute right-8 md:right-24 top-20 md:top-24 h-24 w-24" src=${FullStarExperience} alt="star"/></div>
          <div class="capitalize mb-3 md:ml-24">Programming Languages & Tools</div>
          <div class="mt-12 md:mt-20 md:px-24 flex flex-wrap">
            ${skills
              .map((skill) => 
                `<div class="w-28 md:w-36 h-24 md:h-28 py-2 md:py-3">
                  <div class="h-full pt-2 pb-1 px-2 flex flex-col items-center justify-between">
                    <div class="h-1/2 flex items-center px-2 md:pb-4">
                      <img src="${skill.url}" class="h-12 md:h-16 w-12 md:w-16 object-cover" />
                    </div>
                    <div class="h-1/2 flex items-center text-sm text-center leading-3">${skill.name}</div>
                  </div>
                </div>
              `)
              .join('')}
          </div>
        </div>
      </section>
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
    interestSection = ` 
    <section class="w-full h-screen" id="interests" style="font-family:sans-serif" >
        <div class="w-full px-4 md:px-32 pt-12 md:pt-28">
      
          <div class="w-full mt-10 md:px-24 md:mt-8 flex flex-col gap-5">
            ${interests.map(
              (interest) => `
              <div class="relative w-[90vw] md:w-[70vw] py-4 pr-2 pl-2 md:pl-8 rounded-lg border" style="font-family:roboto;color:rgba(255, 247, 233, 0.9)">
              <li>
                ${interest.interest.interest}
              </li>
              <div class="text-lg absolute px-2 -top-4 w-fit tracking-wider" style="color:rgba(255, 247, 233, 1);background:black">${interestsTitle}</div>
              </div>
            `
            ).join(`
      `)}
        </div>
    </div>
  </section>
  <hr class="m-0" />
    
  `;
  } else {
    interestSection = "";
  }

  let projectSection;

  if (isProjectEnabled) {
    projectSection = `
      <!-- Projects -->
      <section class="w-full h-screen" id="projects" style="font-family:sans-serif" >
        <div class="w-full px-4 md:px-32 pt-12 md:pt-28">
          <div class="w-full mt-12 md:mt-3 md:pl-24 mb-2 text-4xl" style="font-family:roboto;color:rgba(255, 247, 233, 0.9)">${projectsTitle}</div>
          <div class="w-full mt-10 md:px-24 md:mt-8 flex flex-col gap-3" style="font-family:roboto;color:rgba(255, 247, 233, 0.8)">
            ${projects &&
              projects
                .map(
                  (project, index) => `
                    <div key=${index} class="relative w-[90vw] md:w-[70vw] p-3 md:p-5 rounded-lg border">
                      <div class="flex justify-between items-center" style="font-family:roboto;color:rgba(255, 247, 233, 0.9)">
                        <div class="text-lg">${project.project.name}</div>
                        <div class="text-sm">
                          ${project.project.timeline}
                        </div>
                      </div>
                      <div class="text-sm flex justify-between items-center" style="font-family:roboto;color:rgba(255, 247, 233, 0.9)">
                        <div>
                          ${project.project.guidedByProfessor 
                            ? `<div><i>${project.project.professorName}</i></div>` 
                            : ""
                          }
                          ${project.project.isClubProject 
                            ? `<div>${project.project.clubName}</div>` 
                            : ""
                          }
                          ${project.project.isSelfProject 
                            ? `<div><i>Self Project</i></div>` 
                            : ""
                          }
                        </div>
                        <div class="flex">
                          ${project.project.githubLink 
                            ? `<a class="hover:text-gray-400" href=${project.project.githubLink} target="_blank">Github</a>` 
                            : ""
                          }
                          <span class="mx-1">|</span>
                          ${project.project.websiteLink 
                            ? `<a class="hover:text-gray-400" href=${project.project.websiteLink} target="_blank">Website</a>` 
                            : ""
                          }
                        </div>
                      </div>
                      <div class="text-sm py-2 leading-5 tracking-wide">
                        <div class="flex">${project.project.description}</div>
                      </div>
                      <div class="text-sm">Key technologies: ${project.project.techStack}</div>
                    </div>
                  `
                )
                .join("\n")}
          </div>
        </div>
      </section>
      <hr class="m-0" />
    `;
  
    const customStyles2 = `
      <style>
        /* Add this CSS to style the project cards */
        .project-card {
          border: 1px solid #ddd;
          border-radius: 5px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .project-top img {
          max-width: 100%;
          max-height: 50vh;
          object-fit: contain;
          margin: 10px 0;
          min-height: 150px;
        }
        .project-bottom {
          background-color: #0074d9; /* Blue background */
          color: #fff; /* White text color */
          padding: 20px;
          position: relative;
        }
        .project-bottom h3 {
          font-size: 1.8rem; /* Bigger font size for project name */
          margin: 0 0 10px;
        }
        .project-bottom .tech-stack,
        .project-bottom .description,
        .project-info {
          margin: 10px 0;
        }
        .date {
          /* Adjust this for desired position */
          position: absolute;
          bottom: 10px;
          right: 10px;
        }
      </style>
    `;
  
    // Add the custom styles to the HTML
    projectSection += customStyles2;
  } else {
    projectSection = "";
  }

  let awardSection;

  if (isAwardsEnabled) {
    awardSection = ` 
    <section class="w-full h-screen" id="awards" style="font-family:sans-serif">
      <div class="w-full px-4 md:px-32 pt-12 md:pt-28">
          <div class="w-full mt-12 md:mt-3 md:pl-24 mb-2 text-4xl" style="font-family:roboto;color:rgba(22, 22, 22, 1)">
              Awards 🏆🏆
          </div>
          <div class="w-full mt-10 md:px-24 md:mt-8 flex flex-col gap-3 md:gap-4">
              <ul>
                  ${awards.map(
                    (award) => `
                    <li class="relative w-[90vw] md:w-[70vw] py-4 pr-2 pl-2 md:pl-8 rounded-lg border normal-case min-h-16 my-4 flex items-center">
                        ${award.award.award}
                        <div class="text-lg absolute px-2 -top-4 w-fit tracking-wide" style="color:rgba(222, 95, 59, 1);background:rgba(255, 247, 233, 1);border:rgba(150, 147, 127, 0.2)">
                            Achievements
                        </div>
                    </li>`
                  ).join('')}
              </ul>
          </div>
      </div>
  </section>
  </div>
    
  `;
  } else {
    awardSection = "";
  }

  return (
    <div className="Code dark:text-gray-100 overflow-y-scroll">
      <pre className="border rounded bg-light p-3 codefile overflow-x-scroll">
        {`<!DOCTYPE html>
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

              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Catamaran&family=Familjen+Grotesk&family=Manrope&family=Montserrat:wght@100&family=Poppins&family=Raleway&family=Roboto:wght@100&family=Rubik&family=Ubuntu&display=swap" rel="stylesheet">
              
              <style>.bg-primary {--bs-bg-opacity: 1; background-color: ${Colour} !important;}
                    .social-icon:hover {background-color: ${Colour} !important;}
                    .text-primary {--bs-text-opacity: 1; color: ${Colour} !important;}
                    a {color: ${Colour};}
                    a:hover {color: ${Colour};}
              </style>
            </head>
            <body class="relative w-full overflow-x-hidden" id="page-top">
            <!-- Navigation-->
            ${Navbar}
             <!-- Home + about-->
              ${TopPortion}

              <!-- Experience-->
              <div class="absolute h-screen top-[200vh] left-0 w-full overflow-x-hidden" style="background:rgba(255, 247, 233, 1)">
                ${ExperienceDesign}
              </div

              <!-- Education-->
              <div class="bg-black absolute h-screen top-[300vh] left-0 w-full">
                ${EducationDesign}
              </div>

              <!-- Skills-->
              <div class="absolute h-screen top-[400vh] left-0 w-full" style="background:rgba(255, 247, 233, 1)">
                ${skillsSection}
              </div>

              <!-- Interests-->
             <div class="bg-black absolute h-screen top-[500vh] left-0 w-full">
                ${interestSection}
              </div>

              <!-- Awards-->
              <div class="absolute h-screen top-[600vh] left-0 w-full" style="background:rgba(255, 247, 233, 1)">
                ${awardSection}
              </div>

              <!--Projects-->
              <div id="projects" class="bg-black absolute h-screen top-[700vh] left-0 w-full">
                ${projectSection}
              </div>

               <div class="absolute h-screen top-[800vh] left-0 w-full" id="touch" style="background:rgba(222, 95, 59, 1)">
                  ${getInTouch}
              </div>
            <script src="https://cdn.tailwindcss.com"></script>
          </body>
        </html>
`}
      </pre>
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
export default connect(mapStateToProps)(Code);
