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
import NavbarDesign1 from "./NavbarDesign1";
import NavbarDesign2 from "./NavbarDesign2";
import NavbarDesign3 from "./NavbarDesign3";
import NavbarDesign4 from "./NavbarDesign4";
import ReactDOMServer from "react-dom/server";
import { connect } from "react-redux";

const PortfolioCard = ({
  experienceTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  educationTitle,
  projectsTitle,
  selectedDesign,
  projects,
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
  const toggleHeader = () => {
    setInitialState((prevState) => {
      return {
        ...prevState,
        Dark: !initialState.Dark,
      };
    });
  };

  // to store previous theme on refresh
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
      toggleHeader();
    }
  }, []);

  // toggle theme by adding/removing dark as class on page
  useEffect(() => {
    if (!initialState.Dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [initialState.Dark]);

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
          <section class="resume-section" id="projects">
            <div class="container-fluid p-0">
              <h2 class="mb-5 text-black">${projectsTitle}</h2>
              ${projects
                .map(
                  (project) => `


             

                <div class="project-card mb-5 border-[1px] borer-solid overflow-hidden flex flex-col">
                  <div class="project-top max-w-[100%] object-contain m-[10px] min-h-[150px] ">
                    <img class="max-w-[100%] object-contain m-[10px] min-h-[150px]" src="${project.project.image}" alt="${
                    project.project.name
                  }" class="img-fluid">
                  </div>
                  <div class="project-bottom  mt-[10px] mb-[10px] text-[1.8rem] bg-primary bg-[#0074d9] text-white p-[20px] relative ">
                    <div class="project-details">
                      <h3 class="text-white mx-0 mt-[10px] text-[1.8rem]">${project.project.name}</h3>
                      <p class="tech-stack mt-[10px] mb-0 text-white"><strong>Technology Stack: </strong>${
                        project.project.techStack
                      }</p>
                      <p class="description mt-10px mb-0 text-white">${
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
                        <div class="date mb-10 mr-10 absolute text-white"><strong>Date: </strong>${
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
      <div className="w-full  z-10 top-[4.2rem] flex gap-4 pl-4 py-2 bg-gray-200">
        <button
        className="cursor-pointer px-4 py-2 rounded-sm"
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
          className="cursor-pointer px-4 py-2 rounded-sm"
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
        className="cursor-pointer px-4 py-2 rounded-sm"
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
          className="cursor-pointer px-4 py-2 rounded-sm"
          style={{
            background: navbarDesign === "NavbarDesign4" ? "red" : "white",
            color: navbarDesign === "NavbarDesign4" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign4")}
        >
          Navbar 4
        </button>
      </div>

      <div className="w-full px-4 absolute top-36 overflow-y-hidden">
        <div className="flex flex-col border py-2 px-4 rounded-lg">
          <div className="w-full h-[26.8rem] overflow-y-scroll px-2">
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
              <button
                className={`btn btn-${
                  initialState.Dark ? "success" : "primary"
                } bg-green-700 hover:bg-green-800 text-white mb-2 p-2 w-1/2 rounded-sm font-medium cursor-pointer`}
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
          <div className="p-3 w-full h-[6200px] overflow-y-scroll">
            <ul className="flex">
              <li className="mr-2">
                <span
                  className={`cursor-pointer px-4 py-2 rounded-t-lg ${
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
                  className={`cursor-pointer px-4 py-2 rounded-t-lg ${
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
                isEducationEnabled={isEducationEnabled}
                isExperienceEnabled={isExperienceEnabled}
                isSkillEnabled={isSkillEnabled}
                isAwardsEnabled={isAwardsEnabled}
                isInterestEnabled={isInterestEnabled}
                Navbar={selectedNavbarDesign}
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