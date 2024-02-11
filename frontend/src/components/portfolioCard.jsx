import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import he from "he";
import Form from "./Form";
import Header from "./Bootstrap/Header";
import Code from "./Code";
import Preview from "./Preview";
import { useNavigate } from "react-router-dom";
import NavbarDesign1 from ".././components/options/navbar/NavbarDesign1";
import NavbarDesign2 from ".././components/options/navbar/NavbarDesign2";
import NavbarDesign3 from ".././components/options/navbar/NavbarDesign3";
import NavbarDesign4 from ".././components/options/navbar/NavbarDesign4";
import ReactDOMServer from "react-dom/server";
import { connect } from "react-redux";
import TopPortion1 from './options/about/option1';
import TopPortion2 from './options/about/option2';
import TopPortion3 from './options/about/option3';
import TopPortion4 from './options/about/option4';
import Experience1 from "./options/experience/option1";
import Experience2 from "./options/experience/option2";
import Experience3 from "./options/experience/option3";
import Experience4 from "./options/experience/option4";
import EducationDesign1 from './options/education/option1'
import EducationDesign2 from './options/education/option2'
import EducationDesign3 from './options/education/option3'
import EducationDesign4 from './options/education/option4'

const PortfolioCard = (state,{
  experienceTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  educationTitle,
  projectsTitle,
  selectedDesign,
  projects
}) => {
  const Navigate = useNavigate();

  const data = {
    FormData: {
      FirstName: "",
      LastName: "",
      Thubmnail: "",
      URL: "",
      Description: "",
      Keywords: "",
      Address: "",
      Phone: "",
      Email: "",
      Colour: "#5538BC",
      Socials: {
        Facebook: "",
        WhatsApp: "",
        Instagram: "",
        Twitter: "",
        LinkedIn: "",
        GitHub: "",
        StackOverflow: "",
      },
    },
    fileDownloadUrl: null,
    PreviewMode: false,
  };
  const [initialState, setInitialState] = useState(data);
  

  const handleChange = (e) => {
    Object.keys(data.FormData).includes(e.target.name)
      ? setInitialState((prevState) => {
          return {
            ...prevState,
            FormData: {
              ...initialState.FormData,
              [e.target.name]: e.target.value,
            },
            PreviewMode: false,
          };
        })
      : setInitialState((prevState) => {
          return {
            ...prevState,
            FormData: {
              ...initialState.FormData,
              Socials: {
                ...initialState.FormData.Socials,
                [e.target.name]: e.target.value,
              },
            },
            PreviewMode: false,
          };
        });
  };

  const clickHandler = async () => {
    Navigate("/main");
  };

  const download = async () => {
    try {
      let output = he.decode(
        document.getElementsByClassName("codefile")[0].innerHTML
      );
      
      const blob = new Blob([output]);
      const fileDownloadUrl2 = URL.createObjectURL(blob);

      setInitialState((prevState) => {
        return {
          ...prevState,
          fileDownloadUrl: fileDownloadUrl2,
        };
      });

      const resolveAfter3Sec = new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );
      // Show a success toast and wait for it to close
      await toast.promise(resolveAfter3Sec, {
        pending: "Downloading...",
        success: "File downloaded successfully!",
        error: "An error occurred while downloading.",
        position: "top-right",
        autoClose: 3100, // Adjust the duration as needed
      });
    } catch (error) {
      // Handle any errors that occur during the download process
      console.error("Download error:", error);
    }
  };

  const [isExperienceEnabled, setIsExperienceEnabled] = useState(true);
  const [isSkillEnabled, setIsSkillEnabled] = useState(true);
  const [isEducationEnabled, setIsEducationEnabled] = useState(true);
  const [isInterestEnabled, setisInterestEnabled] = useState(true);
  const [isAwardsEnabled, setisAwardsEnabled] = useState(true);
  const [isProjectEnabled, setisProjectEnabled] = useState(true);

  const toggleExperience = () => {
    setIsExperienceEnabled(!isExperienceEnabled);
  };

  const toggleEducation = () => {
    setIsEducationEnabled(!isEducationEnabled);
  };
  const toggleSkill = () => {
    setIsSkillEnabled(!isSkillEnabled);
  };
  const toggleInterest = () => {
    setisInterestEnabled(!isInterestEnabled);
  };
  const toggleAward = () => {
    setisAwardsEnabled(!isAwardsEnabled);
  };
  const toggleProject = () => {
    setisProjectEnabled(!isProjectEnabled);
  };

  const [navbarDesign, setNavbarDesign] = useState("NavbarDesign1");

  const handleDesignChange = (design) => {
    setNavbarDesign(design);
  };


  const [topPortion, setTopPortion] = useState("Option1");
    const handleTopPortionChange = (design) => {
      setTopPortion(design);
    };
  let selectedTopPortionDesign;

  switch(topPortion) {
    case "Option1":
      selectedTopPortionDesign = ReactDOMServer.renderToString(
        <TopPortion1
          {...initialState.FormData}
        />
      );
      break;
    case "Option2":
      selectedTopPortionDesign = ReactDOMServer.renderToString(
        <TopPortion2 
          {...initialState.FormData}
        />
      );
      break;
    case "Option3":
      selectedTopPortionDesign = ReactDOMServer.renderToString(
        <TopPortion3 
          {...initialState.FormData}
        />
      );
      break;
    case "Option4":
      selectedTopPortionDesign = ReactDOMServer.renderToString(
        <TopPortion4 
          {...initialState.FormData}
        />
      );
      break;
  }

  const [experienceSection, setExperienceSection] = useState("Option1");
    const handleExperienceChange = (design) => {
      setExperienceSection(design);
    };
  let selectedExperienceDesign;

  switch(experienceSection) {
    case "Option1":
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience1 
          experienceTitle = {state.experienceTitle}
          experience = {state.experiences}
        />
      );
      break;
    case "Option2":
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience2 
          experienceTitle = {state.experienceTitle}
          experience = {state.experiences}
        />
      );
      break;
    case "Option3":
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience3 
          experienceTitle = {state.experienceTitle}
          experience = {state.experiences}
        />
      );
      break;
    case "Option4":
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience4 
          experienceTitle = {state.experienceTitle}
          experience = {state.experiences}
        />
      );
      break;
  }

  const [educationSection, setEducationSection] = useState("Option1");
    const handleEducationChange = (design) => {
      setEducationSection(design);
    };

  let selectedEducationDesign;
  switch(educationSection) {
    case "Option1":
      selectedEducationDesign = ReactDOMServer.renderToString(
        <EducationDesign1
        educationTitle = {state.educationTitle}
        education = {state.educations}
        />
      );
      break;
    case "Option2":
      selectedEducationDesign = ReactDOMServer.renderToString(
        <EducationDesign2 
        educationTitle = {state.educationTitle}
        education = {state.educations}
        />
      );
      break;
    case "Option3":
      selectedEducationDesign = ReactDOMServer.renderToString(
        <EducationDesign3 
        educationTitle = {state.educationTitle}
        education = {state.educations}
        />
      );
      break;
    case "Option4":
      selectedEducationDesign = ReactDOMServer.renderToString(
        <EducationDesign4 
          educationTitle = {state.educationTitle}
          education = {state.educations}
        />
      );
      break;
  }

  

  let selectedNavbarDesign;
  switch (navbarDesign) {
    case "NavbarDesign1":
      selectedNavbarDesign = ReactDOMServer.renderToString(
        <NavbarDesign1
          FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          isEducationEnabled={isEducationEnabled}
          isExperienceEnabled={isExperienceEnabled}
          isSkillEnabled={isSkillEnabled}
          isAwardsEnabled={isAwardsEnabled}
          isInterestEnabled={isInterestEnabled}
          isProjectEnabled={isProjectEnabled}
          experienceTitle={experienceTitle}
          educationTitle={educationTitle}
          skillsTitle={skillsTitle}
          interestsTitle={interestsTitle}
          awardsTitle={awardsTitle}
          projectsTitle={projectsTitle}
        />
      );
      break;
    case "NavbarDesign2":
      selectedNavbarDesign = ReactDOMServer.renderToString(
        <NavbarDesign2
          FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          isEducationEnabled={isEducationEnabled}
          isExperienceEnabled={isExperienceEnabled}
          isSkillEnabled={isSkillEnabled}
          isAwardsEnabled={isAwardsEnabled}
          isInterestEnabled={isInterestEnabled}
          isProjectEnabled={isProjectEnabled}
          experienceTitle={experienceTitle}
          educationTitle={educationTitle}
          skillsTitle={skillsTitle}
          interestsTitle={interestsTitle}
          awardsTitle={awardsTitle}
          projectsTitle={projectsTitle}
        />
      );
      break;
    case "NavbarDesign3":
      selectedNavbarDesign = ReactDOMServer.renderToString(
        <NavbarDesign3
          FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          isEducationEnabled={isEducationEnabled}
          isExperienceEnabled={isExperienceEnabled}
          isSkillEnabled={isSkillEnabled}
          isAwardsEnabled={isAwardsEnabled}
          isInterestEnabled={isInterestEnabled}
          isProjectEnabled={isProjectEnabled}
          experienceTitle={experienceTitle}
          educationTitle={educationTitle}
          skillsTitle={skillsTitle}
          interestsTitle={interestsTitle}
          awardsTitle={awardsTitle}
          projectsTitle={projectsTitle}
        />
      );
      break;
    case "NavbarDesign4":
      selectedNavbarDesign = ReactDOMServer.renderToString(
        <NavbarDesign4
          FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          isEducationEnabled={isEducationEnabled}
          isExperienceEnabled={isExperienceEnabled}
          isSkillEnabled={isSkillEnabled}
          isAwardsEnabled={isAwardsEnabled}
          isInterestEnabled={isInterestEnabled}
          isProjectEnabled={isProjectEnabled}
          experienceTitle={experienceTitle}
          educationTitle={educationTitle}
          skillsTitle={skillsTitle}
          interestsTitle={interestsTitle}
          awardsTitle={awardsTitle}
          projectsTitle={projectsTitle}
        />
      );
      break;
    default:
      selectedNavbarDesign = ReactDOMServer.renderToString(
        <NavbarDesign1
          FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
          isEducationEnabled={isEducationEnabled}
          isExperienceEnabled={isExperienceEnabled}
          isSkillEnabled={isSkillEnabled}
          isAwardsEnabled={isAwardsEnabled}
          isInterestEnabled={isInterestEnabled}
          isProjectEnabled={isProjectEnabled}
          experienceTitle={experienceTitle}
          educationTitle={educationTitle}
          skillsTitle={skillsTitle}
          interestsTitle={interestsTitle}
          awardsTitle={awardsTitle}
        />
      );
      break;
  }

  let projectSection;

  if (isProjectEnabled) {
    if (selectedDesign === "design1") {
      projectSection = `
          <!-- Projects -->
          <section class="w-full h-screen" id="projects" style="font-family:Poppins" >
            <div class="w-full px-4 md:px-32 pt-12 md:pt-24">
            <div class="w-full mt-10 md:mt-2 md:pl-24 mb-4 text-3xl" style="font-family:roboto;color:rgba(255, 247, 233, 1)">${projectsTitle}</div>
            <div class="w-full mt-4 md:pl-24 flex flex-col gap-y-2" style="font-family:roboto;color:rgba(255, 247, 233, 0.8)">
              ${projects
                .map(
                  (project) => `

                  <div class="project-card border flex flex-col gap-y-1 p-2 md:p-3">
                    
                        <div class="flex justify-between items-center" style="font-family:roboto;color:rgba(255, 247, 233, 0.9)">
                          <div class="text-lg">${project.project.name}</div>
                          <div class="text-sm">
                            ${project.project.timeline}
                          </div>  
                        </div>
                        <div class="text-sm flex justify-between items-center" style="font-family:roboto;color:rgba(255, 247, 233, 0.9)">
                          <div>
                            ${project.project.guidedByProfessor 
                              ? 
                              `<div class=""><i>${project.project.professorName}</i></div>`
                              :
                              ""
                            }

                            ${project.project.isClubProject
                              ?
                              `<div class="">${project.project.clubName}</div>`
                              :
                              ""
                            }
                            ${project.project.isSelfProject 
                              ?
                              `<div class=""><i>Self Project</i></div>`
                              :
                              ""
                            }
                          </div>
                          <div class="flex">
                            ${
                              project.project.githubLink
                                ? 
                                `<a class="hover:text-gray-400" href=${project.project.githubLink} target="_blank">Github</a>`
                                : ""
                            }
                            <span class="mx-1">|</span>
                            ${
                              project.project.websiteLink
                              ?
                              `<a class="hover:text-gray-400" href=${project.project.websiteLink} target="_blank">Website</a>`
                              : ""
                            }
                          </div>
                        </div>
                        
                        <div class="text-sm leading-5 tracking-wide">
                          <div class="flex ">${project.project.description.slice(0,200)} <span class="text-blue-200 hover:text-blue-300  cursor-pointer">read more...</span></div>
                          
                        </div>
                        <div class="text-sm">Technology Stack : ${
                          project.project.techStack
                        }</div>
                        
                    </div>
                  </div>
                  </div>
                </div>
              `
                )
                .join("\n")}
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
              min-height:150px;
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
      
            /* Add more CSS for styling links, headers, and other elements as desired */
          </style>
        `;

      // Add the custom styles to the HTML
      projectSection += customStyles2;
    } 
    else if (selectedDesign == "design2") {
      projectSection = `
    <!-- Projects -->
    <section class="resume-section" id="projects">
      <div class="container-fluid p-0">
        <h2 class="mb-5 text-black">${projectsTitle}</h2>
        <div class="col-lg-12 mb-5">
          ${projects
            .map(
              (project) => `
            <div class="col-lg-12 mb-5">
              <div class="project-card lg:max-w-[10000px] md:max-h-[500px] flex border-[1px] border-solid border-[#ddd] rounded-[5px] mb-[20px] relative overflow-hidden">
                <div class="project-image mh-[100%] object-contain max-w-[100%] grow shrink basis-0 items-center justify-center relative min-w-[220px] ">


               


                  <img src="${project.project.image}" alt="${
                project.project.name
              }" class="img-fluid">
                </div>
                <div class="project-details md:max-w-[600px] mt-[10px] mb-0 mx-0 break-words bg-[#0074d9] text-[1.8rem]  text-white p-[20px] flex flex-col justify-between max-h-[1000px] max-w-[300px] overflow-hidden">
                  <h3 class="text-white break-words mt-0 mb-[10px] mx-0 text-[1.8rem] ">${project.project.name}</h3>
                  <p class="tech-stack mt-[10px] mb-0 break-words text-white"><strong>Technology Stack: </strong>${
                    project.project.techStack
                  }</p>
                  <p class="description break-words mt-[10px] mb-0  text-white">${
                    project.project.description
                  }</p>
                  <div class="project-info">
                    <div class="mb-3 text-white"><strong>Guided by Professor: </strong>${
                      project.project.guidedByProfessor ? "Yes" : "No"
                    }</div>
                    ${
                      project.project.professorName
                        ? `
                      <div class="mb-3 text-white"><strong>Professor's Name: </strong>${project.project.professorName}</div>
                    `
                        : ""
                    }
                    <div class="mb-3 text-white"><strong>Club Project: </strong>${
                      project.project.isClubProject ? "Yes" : "No"
                    }</div>
                    ${
                      project.project.clubName
                        ? `
                      <div class="mb-3 text-white"><strong>Club Name: </strong>${project.project.clubName}</div>
                    `
                        : ""
                    }
                    <div class="mb-3 text-white"><strong>Self-Project: </strong>${
                      project.project.isSelfProject ? "Yes" : "No"
                    }</div>
                    <div class="date text-white" style="position: absolute; bottom: 0; right: 0;"><strong>Date: </strong>${
                      project.project.timeline
                    }</div>
                    <div class="dropdown dropup text-white">
                      <button class="btn btn-secondary dropdown-toggle" type="button" id="projectLinks" data-bs-toggle="dropdown" data-bs-placement="top" aria-expanded="false">
                        Links
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="projectLinks">
                        ${
                          project.project.websiteLink
                            ? `
                          <li><a class="dropdown-item" href="${project.project.websiteLink}" target="_blank">Visit Website</a></li>
                        `
                            : ""
                        }
                        ${
                          project.project.githubLink
                            ? `
                          <li><a class="dropdown-item" href="${project.project.githubLink}" target="_blank">GitHub Repository</a></li>
                        `
                            : ""
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `
            )
            .join("\n")}
        </div>
      </div>
    </section>
    <hr class="m-0" />`;

      const customStyles2 = `
    <style>
    /* Add this CSS to style the project cards */
   
    .project-card {
      display: flex;
      border: 1px solid #ddd;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      margin-bottom: 20px; /* Added margin for spacing between project cards */
    }
    
    .project-image {
      flex: 1;
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      min-width:220px;
    }
    
    .project-image img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain; /* Fit image within available space */
    }
    
    .project-date {
      position: absolute;
      bottom: 10px; /* Adjust this value for the desired vertical position */
      right: 10px; /* Adjust this value for the desired horizontal position */
    }
    
    .project-details {
      background-color: #0074d9;
      color: #fff;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-height: 1000px; /* Adjust the maximum height as needed */
      max-width: 300px;
      overflow: hidden;
    }
    
    .project-details h3 {
      font-size: 1.8rem; /* Bigger font size for project name */
      margin: 0 0 10px;
      word-wrap: break-word;
    }
    
    .project-details .tech-stack,
    .project-details .description,
    .project-info {
      margin: 10px 0;
      word-wrap: break-word;
     
    }
    
    .link-button {
      background-color: #fff;
      color: #000; /* Black text color */
      border: none;
      border-radius: 20px;
      padding: 5px 15px;
      cursor: pointer;
    }
    
    .link-button:hover {
      background-color: #007BFF; /* Blue on hover */
      color: #fff;
    }
    /* Center the projects */
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
@media screen and (min-width: 768px) {
  .project-card{
    max-height: 500px; /* Adjusted max-height for larger screens */
  }
  .project-details
  {
    max-width:600px;
  }
  @media screen and (min-width: 1024px) {
    .project-card {
      max-width: 10000px; /* Adjusted max-width for larger screens */
    }
  }
}
    /* Add more CSS for styling links, headers, and other elements as desired */
    
    </style>
    `;

      // Add the custom styles to the HTML
      projectSection += customStyles2;
    } else {
      projectSection = "";
    }
  }

  // const buttonStyle = {
  //   margin: "0 10px",
  //   padding: "10px 20px",
  //   border: "none",
  //   borderRadius: "5px",
  //   cursor: "pointer",
  // };


  return (
    <div className="w-full h-screen overflow-y-hidden">
      <Header/>
      

      {/* navbar edit/options */}
      <div className="w-full text-sm md:text-lg z-10 top-[4.2rem] flex gap-4 px-2 md:px-4 py-2 bg-gray-200">
        <button
        className="cursor-pointer px-2 md:px-4 py-1 md:py-2 rounded-sm"
          style={{
            background:
              navbarDesign === "NavbarDesign1" ? "lightblue" : "white",
            color: navbarDesign === "NavbarDesign1" ? "black" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign1")}
        >
          Navbar 1
        </button>
        <button
          className="cursor-pointer px-2 md:px-4 py-2 rounded-sm"
          style={{
            background:
              navbarDesign === "NavbarDesign2" ? "lightgreen" : "white",
            color: navbarDesign === "NavbarDesign2" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign2")}
        >
          Navbar 2
        </button>
        <button
        className="cursor-pointer px-2 md:px-4 py-2 rounded-sm"
          style={{
            background:
              navbarDesign === "NavbarDesign3" ? "lightblue" : "white",
            color: navbarDesign === "NavbarDesign3" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign3")}
        >
          Navbar 3
        </button>
        <button
          className="cursor-pointer px-2 md:px-4 py-2 rounded-sm"
          style={{
            background: navbarDesign === "NavbarDesign4" ? "red" : "white",
            color: navbarDesign === "NavbarDesign4" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign4")}
        >
          Navbar 4
        </button>
      </div>

      <div className="w-full px-2 md:px-4 absolute top-36 overflow-y-hidden">
        <div className="flex flex-col border py-2 px-2 md:px-4 mt-2 rounded-lg">
          <div className="w-1/2 h-[26.8rem] overflow-y-scroll px-1 md:px-2">
          <div className="flex justify-between2 gap-1 border p-1 rounded-md text-white text-sm items-center my-2">
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleTopPortionChange("Option1")}
              style={{
                background:
                  topPortion === "Option1" ? "lightblue" : "white",
                  color: topPortion === "Option1" ? "white" : "black",
              }}  
            >About Deisgn 1</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleTopPortionChange("Option2")}
              style={{
                background:
                  topPortion === "Option2" ? "lightblue" : "white",
                  color: topPortion === "Option2" ? "white" : "black",
              }} 
            >About Deisgn 2</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleTopPortionChange("Option3")}
              style={{
                background:
                  topPortion === "Option3" ? "lightblue" : "white",
                  color: topPortion === "Option3" ? "white" : "black",
              }} 
            >About Design 3</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleTopPortionChange("Option4")}
              style={{
                background:
                  topPortion === "Option4" ? "lightblue" : "white",
                  color: topPortion === "Option4" ? "white" : "black",
              }} 
            >About Design 4</div>
          </div>

          <div className="flex gap-1 border p-1 rounded-md text-white text-sm items-center my-2">
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleExperienceChange("Option1")}
              style={{
                background:
                  experienceSection === "Option1" ? "lightblue" : "white",
                  color: experienceSection === "Option1" ? "white" : "black",
              }}  
            >Experience Deisgn 1</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleExperienceChange("Option2")}
              style={{
                background:
                  experienceSection === "Option2" ? "lightblue" : "white",
                  color: experienceSection === "Option2" ? "white" : "black",
              }} 
            >Experience Deisgn 2</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleExperienceChange("Option3")}
              style={{
                background:
                  experienceSection === "Option3" ? "lightblue" : "white",
                  color: experienceSection === "Option3" ? "white" : "black",
              }} 
            >Experience Design 3</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleExperienceChange("Option4")}
              style={{
                background:
                  experienceSection === "Option4" ? "lightblue" : "white",
                  color: experienceSection === "Option4" ? "white" : "black",
              }} 
            >Experience Design 4</div>
          </div>

          <div className="flex gap-1 border p-1 rounded-md justify-between text-white text-sm items-center my-2">
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleEducationChange("Option1")}
              style={{
                background:
                  educationSection === "Option1" ? "lightblue" : "white",
                  color: educationSection === "Option1" ? "white" : "black",
              }}  
            >Education Deisgn 1</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleEducationChange("Option2")}
              style={{
                background:
                  educationSection === "Option2" ? "lightblue" : "white",
                  color: educationSection === "Option2" ? "white" : "black",
              }} 
            >Education Deisgn 2</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleEducationChange("Option3")}
              style={{
                background:
                  educationSection === "Option3" ? "lightblue" : "white",
                  color: educationSection === "Option3" ? "white" : "black",
              }} 
            >Education Design 3</div>
            <div 
              className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border" 
              onClick={() => handleEducationChange("Option4")}
              style={{
                background:
                  educationSection === "Option4" ? "lightblue" : "white",
                  color: educationSection === "Option4" ? "white" : "black",
              }} 
            >Education Design 4</div>
          </div>

            <Form
              FormData={{
                FullName: `${initialState.FormData.FirstName} ${initialState.FormData.LastName}`,
                ...initialState.FormData,
              }}
              onChange={handleChange}
              isEducationEnabled={isEducationEnabled}
              isExperienceEnabled={isExperienceEnabled}
              isSkillEnabled={isSkillEnabled}
              isInterestEnabled={isInterestEnabled}
              isAwardsEnabled={isAwardsEnabled}
              isProjectEnabled={isProjectEnabled}
              toggleExperience={toggleExperience}
              toggleEducation={toggleEducation}
              toggleSkill={toggleSkill}
              toggleInterest={toggleInterest}
              toggleAward={toggleAward}
              toggleProject={toggleProject}
            />
            <a
              className="text-xl cursor-pointer"
              download={"portfolio.html"}
              href={initialState.fileDownloadUrl}
            >
              <div className="flex justify-center">
                <button
                  className={`btn btn-${
                    initialState.Dark ? "success" : "primary"
                  } bg-green-700 hover:bg-green-800 text-white mb-2 p-2 w-1/2 mx-auto rounded-md font-medium cursor-pointer`}
                  onClick={() => {
                    download();
                  }}
                  download={"portfolio.html"}
                  href={initialState.fileDownloadUrl}
                  disabled={initialState.PreviewMode}
                  title="Go to the Code View to download."
                >
                  Download
                </button>
              </div>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme={initialState.Dark ? "dark" : "light"}
              />
            </a>
          </div>
          <div className="p-3 w-full h-full overflow-y-scroll border border-gray-400 rounded-md">
            <ul className="flex">
              <li className="mr-2">
                <span
                  className={`cursor-pointer px-2 md:px-4 py-2 rounded-t-lg ${
                    !initialState.PreviewMode
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setInitialState((prevState) => {
                      return {
                        ...prevState,
                        PreviewMode: false,
                      };
                    });
                  }}
                >
                  Code
                </span>
              </li>
              <li>
                <span
                  className={`cursor-pointer px-2 md:px-4 py-2 rounded-t-lg ${
                    initialState.PreviewMode
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setInitialState((prevState) => {
                      return {
                        ...prevState,
                        PreviewMode: true,
                      };
                    });
                  }}
                >
                  Preview
                </span>
              </li>
            </ul>
            {initialState.PreviewMode ? (
              <Preview
                {...initialState.FormData}
                FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
                EducationDesign={selectedEducationDesign}
                ExperienceDesign={selectedExperienceDesign}
                isSkillEnabled={isSkillEnabled}
                isAwardsEnabled={isAwardsEnabled}
                isInterestEnabled={isInterestEnabled}
                Navbar={selectedNavbarDesign}
                TopPortion={selectedTopPortionDesign}
                Projectdesign={projectSection}
              />
            ) : (
              <Code
                {...initialState.FormData}
                FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
                isEducationEnabled={isEducationEnabled}
                isExperienceEnabled={isExperienceEnabled}
                isSkillEnabled={isSkillEnabled}
                isAwardsEnabled={isAwardsEnabled}
                isInterestEnabled={isInterestEnabled}
                isProjectEnabled={isProjectEnabled}
                Navbar={selectedNavbarDesign}
                Projectdesign={projectSection}
              />
            )}
          </div>
        </div>
      </div>
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
  projectsTitle: state.title.projectsTitle,
  selectedDesign: state.projects.selectedDesign,
  projects: state.projects.items.map((projectObj) => projectObj.project)});

export default connect(mapStateToProps)(PortfolioCard);