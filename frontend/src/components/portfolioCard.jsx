
import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify"
import he from "he";
import Form from "./Form";
import Header from "./Bootstrap/Header";
import Split from "react-split";
import Code from "./Code";
import Preview from "./Preview";
import { Link, useNavigate } from "react-router-dom";
import NavbarDesign1 from "./NavbarDesign1";
import NavbarDesign2 from "./NavbarDesign2";
import NavbarDesign3 from "./NavbarDesign3";
import NavbarDesign4 from "./NavbarDesign4";
import ReactDOMServer from 'react-dom/server';
import portfolioCard from "./navigateCard";
import { connect } from "react-redux";

const PortfolioCard = ({
  experienceTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  educationTitle,
  projectsTitle,
}) => {
  const Navigate = useNavigate();
  

  const data = {
    Dark: true,
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
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      toggleHeader();
    } 
  }, [])

  // toggle theme by adding/removing dark as class on page
  useEffect(()=>{
    if(!initialState.Dark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [initialState.Dark])

  const handleChange = (e) => {
    Object.keys(data.FormData).includes(e.target.name) ?
    (setInitialState((prevState) => {
      return {
        ...prevState,
        FormData: {
          ...initialState.FormData,
          [e.target.name]: e.target.value,
        },
        PreviewMode: false,
      };
   })) 
    : (setInitialState((prevState) => {
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
    }))
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

      const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));
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
    setIsSkillEnabled(!isSkillEnabled)  
  };
  const toggleInterest = () => {
    setisInterestEnabled(!isInterestEnabled)  
  };
  const toggleAward = () => {
    setisAwardsEnabled(!isAwardsEnabled)  
  };
  const toggleProject = () => {
    setisProjectEnabled(!isProjectEnabled)  
  };

const [navbarDesign, setNavbarDesign] = useState('NavbarDesign1');

const handleDesignChange = (design) => {
  setNavbarDesign(design);
};

  let selectedNavbarDesign;
  switch (navbarDesign) {
    case 'NavbarDesign1':
      selectedNavbarDesign =ReactDOMServer.renderToString(<NavbarDesign1
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
        />)
  ;
      break;
    case 'NavbarDesign2':
      selectedNavbarDesign =ReactDOMServer.renderToString(<NavbarDesign2
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
        />)
      break;
    case 'NavbarDesign3':
      selectedNavbarDesign =ReactDOMServer.renderToString(<NavbarDesign3
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
        />)
      break;
    case 'NavbarDesign4':
      selectedNavbarDesign =ReactDOMServer.renderToString(<NavbarDesign4
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
        />)
      break;
    default:
      selectedNavbarDesign =ReactDOMServer.renderToString(<NavbarDesign1
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
        />)
      break;
  }

  return (

    <div className="App w-full  dark:bg-black dark:text-white">
      <Header
        className={` bg-${initialState.Dark ? "white border-b-2" : "black"
          } text-${initialState.Dark ? "black" : "white"
          } flex justify-center h-12 fixed top-0 w-full items-center mb-8`}
      >
        <h1 className="text-2xl text-center inline mx-6 my-0">
          Portfolio Generator
        </h1>
        <button
          className={`btn btn-sm btn-outline-${initialState.Dark ? "primary" : "secondary"
            } rounded-full`}
          onClick={toggleHeader}
        >
          <i
            className={`fa fa-${initialState.Dark ? "sun" : "moon"
              }-o text-xl m-0`}
          ></i>
        </button>
      </Header>
      <Link
        className="pl-4 text-xl font-medium text-blue-500 cursor-pointer"
        to={"/"}
      >
        Home
      </Link>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn me-2" onClick={() => handleDesignChange('NavbarDesign1')}>
          Navbar 1
        </button>
        <button className="btn btn-secondary me-2" onClick={() => handleDesignChange('NavbarDesign2')}>
          Navbar 2
        </button>
        <button className="btn btn-success me-2" onClick={() => handleDesignChange('NavbarDesign3')}>
          Navbar 3
        </button>
        <button className="btn btn-danger" onClick={() => handleDesignChange('NavbarDesign4')}>
          Navbar 4
        </button>
      </div>
      <div className="w-full pl-12 my-1">
        <div className="flex flex-row">
          <div className="p-3 w-1/2">
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
                className={`btn btn-${initialState.Dark ? "success" : "primary"
                  } hover:bg-green-700 bg-green-500 text-white rounded inline-flex items-center mt-2 mx-2 p-3`}
                onClick={() => {
                  download();
                }}
                download={"portfolio.html"}
                href={initialState.fileDownloadUrl}
                disabled={initialState.PreviewMode}
                title="Go to the Code View to download."
              >
                 <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>

                <span>Download</span>
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
          <div className="fixed top-12 right-0 h-screen p-3 w-1/2">
            <ul className="flex">
              <li className="mr-2">
                <span
                  className={`cursor-pointer px-4 py-2 rounded-t-lg ${!initialState.PreviewMode
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
                  className={`cursor-pointer px-4 py-2 rounded-t-lg ${initialState.PreviewMode
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
                isProjectEnabled={isProjectEnabled}
                Navbar={selectedNavbarDesign}
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
  projects: state.projects.map((projectObj) => projectObj.project)});

export default connect(mapStateToProps)(PortfolioCard);
