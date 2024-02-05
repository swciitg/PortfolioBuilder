import { connect } from "react-redux";
import flowerImage from "./images/Vector.png"
import flowerImage2 from "./images/Vector2.png"
import flowerImage3 from "./images/Vector3.png"
import HalfStar from "./images/half_star.png"
import BlueStar from "./images/bluestar.jpg"
import Scratch from "./images/sratch.png"
import Arrow from "./images/arrow.png"
import FullStarExperience from "./images/fullStarExperience.png"
import HalfStarExperience from "./images/halfSttarExperience.png"

const Code = ({
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
    experienceSection = `
    <section class="w-full h-screen" id="experience" style="font-family:sans-serif">
    <div class="w-full p-24">
      <div><img class="absolute right-16 top-16 h-12 w-12" src=${FullStarExperience} alt="star"/></div>
      <div><img class="absolute right-24 top-24 h-24 w-24" src=${FullStarExperience} alt="star"/></div>
      <div><img class="absolute left-0 bottom-0 h-32 w-32 rotate-90" src=${HalfStarExperience} alt="star"/></div>
      <div class="mt-8 mx-12 text-xl tracking-tight" style="color:rgba(255, 214, 53, 1)">Worked before at</div>
      <div class="mx-12 mt-2 mb-6 text-4xl" style="color:rgba(22, 22, 22, 1)">${experienceTitle}</div>
      <div class="mx-12 mt-16 flex gap-6">
          ${experiences.map(
            (experience) => `
            <div class="w-48 p-3 rounded-lg border" >
              <div class="flex flex-col items-center">
                <img src=${experience.experience.url} class="h-16 w-16 mb-2"/>
                <div class="text-[1.05rem] capitalize"  style="color:rgba(22, 22, 22, 1)">${
                  experience.experience.company
                }</div>
                <div class="mb-1 text-sm capitalize"  style="color:rgba(22, 22, 22, 0.5)">${experience.experience.position}</div>
              </div>
              <div class="text-sm text-gray-400 flex justify-center"><span class="">${
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
    <section class="w-full h-screen" id="education" style="font-family:sans-serif" >
    <div class="w-full px-32 pt-24">
        <div class="w-full mt-2 mb-4 text-4xl" style="font-family:roboto;color:rgba(255, 247, 233, 1)">${educationTitle}</div>
        <span class="absolute right-16 bottom-20"><img class="h-16 w-16" src=${flowerImage2} /></span>
        <span class="absolute right-4 bottom-36"><img class="h-10 w-10" src=${flowerImage2} /></span>
        <div class="w-full mt-8 flex flex-col gap-3" style="font-family:roboto;color:rgba(255, 247, 233, 0.8)">
        ${educations.map(
          (education) => `
        <div class="relative w-[70vw] py-2 pr-2 pl-8 rounded-lg border">
          <div class="">
            <li class="capitalize text-lg my-1 tracking-wide">${education.education.university}</li>
            <div class="flex justify-between text-sm pl-6">
              <div>${education.education.degree}</div>
              <div class="pr-2" style="font-family:roboto;color:rgba(255, 247, 233, 0.6)">CGPA: ${education.education.gpa}</div>
            </div>
            <div class="text-sm capitalize pl-6">${
              education.education.branch
            }</div>
            
          </div>
          <div class="absolute top-0 right-0 p-3 text-sm flex justify-center" style="font-family:roboto;color:rgba(255, 247, 233, 0.6)"><span class="">${
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
    <section class="w-full h-screen" id="skills" style="font-family:sans-serif" >
    <div class="w-full px-32 pt-28">
          <div class="w-full mt-3 mb-2 text-4xl" style="font-family:roboto;color:rgba(22, 22, 22, 1)">${skillsTitle}</div>
          <div><img class="absolute right-24 top-24 h-24 w-24" src=${FullStarExperience} alt="star"/></div>
          <div class="capitalize mb-3">Programming Languages & Tools</div>
          <div class="mt-20 flex">
            ${skills
              .map((skill) => 
                `<div class="w-32 h-24">
                  <div class="h-full pt-2 pb-1 px-2 flex flex-col items-center justify-between">
                    <div class="h-1/2 flex items-center pb-4"><img src="${skill.url}" class="h-16 w-16" /></div>
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
    <section class="w-full h-screen" id="interests" style="font-family:roboto" >
      <div class="w-full px-32 pt-24">
      
          <div class="mt-12 flex flex-col gap-5">
            ${interests.map(
              (interest) => `
              <div class="relative w-[70vw] py-2 pr-2 pl-8 rounded-lg border normal-case min-h-16 flex items-center">
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

  let awardSection;

  if (isAwardsEnabled) {
    awardSection = ` 
    <section class="w-full h-screen" id="awards" style="font-family:Poppins" >
      <div class="w-full px-32 pt-24">
      <i class="fas fa-trophy text-warning text-5xl"></i>
      <div class="ml-0 fa-ul mt-12 flex flex-col gap-4">
        ${awards.map(
          (award) => `
          <div class="relative w-[70vw] py-2 pr-2 pl-8 rounded-lg border normal-case min-h-16 flex items-center">
              <li>
              ${award.award.award}
              </li>
              <div class="text-lg absolute px-2 -top-4 w-fit tracking-wide" style="color:rgba(222, 95, 59, 1);background:rgba(255, 247, 233, 1);border:rgba(150, 147, 127, 0.2)">Achievements</div>
          </div>
        <li>
          
        </li>
        `
        ).join(`
`)}
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
              <body class="bg-black relative" id="page-top">
                <!-- Navigation-->
                ${Navbar}
                <!-- Page Content-->
                <div class="h-screen absolute left-0 top-0">
  
                  
                  <span class="absolute -right-[1050px] bottom-24"><img class="h-16 w-16" src=${flowerImage2} /></span>
                  <span class="absolute -right-[1100px] bottom-36"><img class="h-8 w-8" src=${flowerImage2} /></span>
                  <div class="h-[100vh] absolute top-40 left-0 mx-36" >
                  <div class="text-4xl font-semibold flex gap-3 items-center" style="font-family:roboto;color:rgba(255, 247, 233, 0.6)">
                    <span>Hi, I am</span>
                    <span><img class="h-9 w-9" src=${flowerImage} /></span>
                  </div>
                    <div class="text-9xl mt-1 flex gap-6" style="font-family:roboto;color:rgba(255, 247, 233, 1)">
                      <span class="font-bold uppercase tracking-tight" >${FirstName}</span>
                      <span class="font-bold uppercase tracking-tight" >${LastName}</span>
                    </div>
                    <p class="text-end text-2xl font-semibold capitalize" style="font-family:roboto;color:rgba(255, 247, 233, 0.6)">${Keywords}</p>
                      
                      
                    </div>
                  </div>
  
                  <!-- About-->
                  <div class="absolute top-[100vh] left-0 w-full text-xl h-screen p-40 flex justify-start" id="about">
                    <div class="w-1/2 pt-8 px-10 flex flex-col" ">
                      <div class="mb-3 font-semibold text-2xl" style="font-family:
                      Familjen Grotesk;color:rgba(255, 247, 233, 1)">About</div>
                      <div class="my-2 font-extralight text-[1.05rem] leading-6 tracking-wide" style="font-family:
                      Familjen Grotesk;color:rgba(255, 247, 233, 0.9)">${Description}</div>
  
                      <div class="absolute left-0 bottom-36 h-20 w-20"><img src=${HalfStar} /></div>
                      
                      
                     
                    </div> 
                  
                    <div class="relative h-fit my-auto p-4 border border-red-700 ml-16 rounded-xl flex items-center">
                      <img class="h-72 w-72" src=${Thubmnail}/>
                      <div class="absolute -left-28 -bottom-32 h-40 w-40"><img src=${Arrow} /></div>
                      <div class="absolute -left-[8.5rem] -bottom-20 h-40 w-40 -rotate-[33deg] text-2xl" style="font-family:
                      Roboto;color:rgba(255, 247, 233, 1)">ME</div>
                      <div class="absolute -left-44 -bottom-[6.3rem] h-32 w-32 -rotate-6"><img src=${Scratch} /></div>
                    </div>
                  </div>
  
                  <!-- Experience-->
                  <div class="absolute h-screen top-[200vh] left-0 w-full" style="background:rgba(255, 247, 233, 1)">
                    ${experienceSection}
                  </div
  
                  <!-- Education-->
                  <div class="absolute h-screen top-[300vh] left-0 w-full">
                    ${educationSection}
                  </div>
  
                  <!-- Skills-->
                  <div class="absolute h-screen top-[400vh] left-0 w-full" style="background:rgba(255, 247, 233, 1)">
                    ${skillsSection}
                  </div>
  
                  <!-- Interests-->
                 <div class="absolute h-screen top-[500vh] left-0 w-full">
                    ${interestSection}
                  </div>
  
                  <!-- Awards-->
                  <div class="absolute h-screen top-[600vh] left-0 w-full" style="background:rgba(255, 247, 233, 1)">
                    ${awardSection}
                  </div>
  
                  <!--Projects-->
                  <div class="absolute h-screen top-[700vh] left-0 w-full">
                    ${Projectdesign}
                  </div>
  
                  <div class="absolute h-screen top-[800vh] mb-5" id="touch">
                        ${Address} &bull; ${Phone} &bull;
                        <a href="mailto:${Email}">${Email}</a>
                      </div>
                      
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
                              <i class="fab fa-${Meta[soc][0]} class="text-lg "></i>
                            </a>
                          `
                          )
                          .join("\n")}
                      </div>`
                          : ""
                      }
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
});

export default connect(mapStateToProps)(Code);
