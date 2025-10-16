import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import he from "he";
import Form from "./Form";
import Header from "./Bootstrap/Header";
import Preview from "./Preview";
import NavbarDesign1 from ".././components/options/navbar/NavbarDesign1";
import NavbarDesign2 from ".././components/options/navbar/NavbarDesign2";
import NavbarDesign3 from "./options/navbar/NavbarDesign3";
import NavbarDesign4 from ".././components/options/navbar/NavbarDesign4";
import ReactDOMServer from "react-dom/server";
import { connect } from "react-redux";
import TopPortion1 from "./options/about/option1";
import TopPortion2 from "./options/about/option2";
import TopPortion3 from "./options/about/option3";
import TopPortion4 from "./options/about/option4";
import Experience1 from "./options/experience/option1";
import Experience2 from "./options/experience/option2";
import Experience3 from "./options/experience/option3"; 
import Experience4 from "./options/experience/option4";
import EducationDesign1 from "./options/education/option1";
import EducationDesign2 from "./options/education/option2";
import EducationDesign3 from "./options/education/option3";
import EducationDesign4 from "./options/education/option4";
import GetInTouch from "./options/getInTouch/option1";
import Code from "./Code";

const PortfolioCard = ({
  experiences,
  educations,
  awards,
  interests,
  skills,
  experienceTitle,
  skillsTitle,
  interestsTitle,
  awardsTitle,
  educationTitle,
  projectsTitle,
  projects: projectsFromRedux,
}) => {
  const projects =
    projectsFromRedux &&
    projectsFromRedux.length > 0 &&
    projectsFromRedux.map((projectObj) => projectObj.project);

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
    PreviewMode: true,
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

  const download = async () => {
    try {
      const codeFileElements = document.getElementsByClassName("codefile");

      // Check if the element exists
      if (codeFileElements.length > 0) {
        let output = he.decode(codeFileElements[0].innerHTML);

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
      } else {
        throw new Error("Codefile element not found.");
      }
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

  // Theme selection state
  // 'default' reflects the app's existing color palette without overrides
  const [selectedTheme, setSelectedTheme] = useState("default");
  // Neon accent color state
  const [neonAccentColor, setNeonAccentColor] = useState("#39ff14");
  const [showNeonDropdown, setShowNeonDropdown] = useState(false);

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
    if (theme !== "neon") setShowNeonDropdown(false);
  };

  const neonColors = [
    { name: "Green", value: "#39ff14" },
    { name: "Red", value: "#ff1744" },
    { name: "Blue", value: "#00e6ff" },
    { name: "Yellow", value: "#ffe600" },
    { name: "Pink", value: "#ff00c8" },
    { name: "Orange", value: "#ff9100" },
    { name: "Purple", value: "#a259ff" },
    { name: "Cyan", value: "#00ffd0" },
    { name: "White", value: "#ffffff" },
  ];

  const [topPortion, setTopPortion] = useState("Option1");
  const handleTopPortionChange = (design) => {
    setTopPortion(design);
  };
  let selectedTopPortionDesign;

  switch (topPortion) {
    case "Option1":
      selectedTopPortionDesign = ReactDOMServer.renderToString(
        <TopPortion1 {...initialState.FormData} />
      );
      break;
    case "Option2":
      selectedTopPortionDesign = ReactDOMServer.renderToString(
        <TopPortion2 {...initialState.FormData} />
      );
      break;
    case "Option3":
      selectedTopPortionDesign = ReactDOMServer.renderToString(
        <TopPortion3 {...initialState.FormData} />
      );
      break;
    case "Option4":
      selectedTopPortionDesign = ReactDOMServer.renderToString(
        <TopPortion4 {...initialState.FormData} />
      );
      break;
  }

  const [experienceSection, setExperienceSection] = useState("Option1");

  const handleExperienceChange = (design) => setExperienceSection(design);

  let selectedExperienceDesign;

  switch (experienceSection) {
    case "Option1":
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience1
          experienceTitle={experienceTitle}
          experience={experiences}
        />
      );
      break;
    case "Option2":
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience2
          experienceTitle={experienceTitle}
          experience={experiences}
        />
      );
      break;
    case "Option3": 
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience3
          experienceTitle={experienceTitle}
          experience={experiences}
        />
      );
      break;
      case "Option4": 
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience4
          experienceTitle={experienceTitle}
          experience={experiences}
        />
      );
      break;
    default:
      selectedExperienceDesign = ReactDOMServer.renderToString(
        <Experience1
          experienceTitle={experienceTitle}
          experience={experiences}
        />
      );
      break;
  }

  const [educationSection, setEducationSection] = useState("Option1");
  const handleEducationChange = (design) => {
    setEducationSection(design);
  };

  let selectedEducationDesign;
  switch (educationSection) {
    case "Option1":
      selectedEducationDesign = ReactDOMServer.renderToString(
        <EducationDesign1
          educationTitle={educationTitle}
          education={educations}
        />
      );
      break;
    case "Option2":
      selectedEducationDesign = ReactDOMServer.renderToString(
        <EducationDesign2
          educationTitle={educationTitle}
          education={educations}
        />
      );
      break;
    case "Option3":
      selectedEducationDesign = ReactDOMServer.renderToString(
        <EducationDesign3
          educationTitle={educationTitle}
          education={educations}
        />
      );
      break;
    case "Option4":
      selectedEducationDesign = ReactDOMServer.renderToString(
        <EducationDesign4
          educationTitle={educationTitle}
          education={educations}
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
          experiences={experiences || []}
          educations={educations || []}
          skills={skills}
          awards={awards}
          interests={interests}
          projects={projects}
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
          experiences={experiences}
          educations={educations}
          skills={skills}
          awards={awards}
          interests={interests}
          projects={projects}
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
          experiences={experiences}
          educations={educations}
          skills={skills}
          awards={awards}
          interests={interests}
          projects={projects}
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
          experiences={experiences}
          educations={educations}
          skills={skills}
          awards={awards}
          interests={interests}
          projects={projects}
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
          experiences={experiences}
          educations={educations}
          skills={skills}
          awards={awards}
          interests={interests}
          projects={projects}
        />
      );
      break;
  }

  let getInTouchDesign = ReactDOMServer.renderToString(
    <GetInTouch {...initialState.FormData} />
  );

  return (
    <div className="w-full h-full overflow-y-hidden">
      <Header />

      {/* navbar edit/options */}
      <div className="w-full text-sm md:text-lg z-10 flex gap-4 px-2 md:px-10 py-3 bg-gray-200">
        <button
          className="cursor-pointer px-2 md:px-3 py-1 rounded-sm"
          style={{
            background:
              navbarDesign === "NavbarDesign1" ? "lightblue" : "white",
            color: navbarDesign === "NavbarDesign1" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign1")}
        >
          Navbar 1
        </button>
        <button
          className="cursor-pointer px-2 md:px-3 py-1 rounded-sm"
          style={{
            background: navbarDesign === "NavbarDesign2" ? "violet" : "white",
            color: navbarDesign === "NavbarDesign2" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign2")}
        >
          Navbar 2
        </button>
        <button
          className="cursor-pointer px-2 md:px-3 py-1 rounded-sm"
          style={{
            background:
              navbarDesign === "NavbarDesign3" ? "lightgray" : "white",
            color: navbarDesign === "NavbarDesign3" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign3")}
        >
          Navbar 3
        </button>
        <button
          className="cursor-pointer px-2 md:px-3 py-1 rounded-sm"
          style={{
            background: navbarDesign === "NavbarDesign4" ? "red" : "white",
            color: navbarDesign === "NavbarDesign4" ? "white" : "black",
          }}
          onClick={() => handleDesignChange("NavbarDesign4")}
        >
          Navbar 4
        </button>
        
        {/* Theme Selection Boxes (always visible) */}
        <div className="flex gap-2 ml-4 border-l-2 border-gray-400 pl-4 flex-wrap">
          <div
            className="cursor-pointer px-3 py-1 rounded-sm border hover:scale-[1.02] transition-transform"
            style={{
              background: selectedTheme === "default" ? "#ffffff" : "white",
              color: selectedTheme === "default" ? "#111" : "black",
              border: selectedTheme === "default" ? "2px solid #111" : "1px solid #dee2e6",
            }}
            onClick={() => handleThemeChange("default")}
          >
            Default
          </div>
          <div
            className="cursor-pointer px-3 py-1 rounded-sm border hover:scale-[1.02] transition-transform"
            style={{
              background: selectedTheme === "minimalist" ? "#f8f9fa" : "white",
              color: selectedTheme === "minimalist" ? "#495057" : "black",
              border: selectedTheme === "minimalist" ? "2px solid #6c757d" : "1px solid #dee2e6",
            }}
            onClick={() => handleThemeChange("minimalist")}
          >
            Minimalist
          </div>
          <div
            className="cursor-pointer px-3 py-1 rounded-sm border hover:scale-[1.02] transition-transform"
            style={{
              background: selectedTheme === "dark" ? "#212529" : "white",
              color: selectedTheme === "dark" ? "white" : "black",
              border: selectedTheme === "dark" ? "2px solid #495057" : "1px solid #dee2e6",
            }}
            onClick={() => handleThemeChange("dark")}
          >
            Dark
          </div>
           <div style={{ position: "relative" }}>
             <div
               className="cursor-pointer px-3 py-1 rounded-sm border hover:scale-[1.02] transition-transform"
               style={{
                 background: selectedTheme === "neon" ? neonAccentColor : "white",
                 color: selectedTheme === "neon" ? "#000" : "black",
                 border: selectedTheme === "neon" ? `2px solid ${neonAccentColor}` : "1px solid #dee2e6",
                 boxShadow: selectedTheme === "neon" ? `0 0 8px ${neonAccentColor}` : "none",
               }}
               onClick={() => {
                 handleThemeChange("neon");
                 setShowNeonDropdown((prev) => !prev);
               }}
             >
               Neon
               <span style={{ marginLeft: 8, fontSize: 12, color: selectedTheme === "neon" ? neonAccentColor : "#888" }}>
                 ▼
               </span>
             </div>
             {selectedTheme === "neon" && showNeonDropdown && (
               <div style={{ position: "absolute", top: "110%", left: 0, zIndex: 10, background: "#222", borderRadius: 8, boxShadow: "0 2px 8px #000", padding: 8, minWidth: 120 }}>
                 {neonColors.map((c) => (
                   <div
                     key={c.value}
                     className="cursor-pointer px-2 py-1 rounded-sm mb-1"
                     style={{ background: c.value, color: c.value === "#ffffff" ? "#222" : "#fff", border: neonAccentColor === c.value ? "2px solid #fff" : "1px solid #333" }}
                     onClick={() => {
                       setNeonAccentColor(c.value);
                       setShowNeonDropdown(false);
                     }}
                   >
                     {c.name}
                   </div>
                 ))}
               </div>
             )}
           </div>
          <div
            className="cursor-pointer px-3 py-1 rounded-sm border hover:scale-[1.02] transition-transform"
            style={{
              background: selectedTheme === "gradient" ? "linear-gradient(45deg, #667eea 0%, #764ba2 100%)" : "white",
              color: selectedTheme === "gradient" ? "white" : "black",
              border: selectedTheme === "gradient" ? "2px solid #667eea" : "1px solid #dee2e6",
            }}
            onClick={() => handleThemeChange("gradient")}
          >
            Gradient
          </div>
        </div>
      </div>

      <div className="w-full h-full px-2 absolute top-36 overflow-y-hidden py-2 md:py-3">
        <div className="w-full h-full flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-[26.8rem] md:h-full overflow-y-scroll border py-2 px-2 md:px-4 my-2 mx-2 md:my-0 rounded-lg">
            <div className="flex justify-between2 gap-1 border p-1 rounded-md text-white text-sm items-center my-2">
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleTopPortionChange("Option1")}
                style={{
                  background: topPortion === "Option1" ? "lightblue" : "white",
                  color: topPortion === "Option1" ? "white" : "black",
                }}
              >
                About Deisgn 1
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleTopPortionChange("Option2")}
                style={{
                  background: topPortion === "Option2" ? "lightblue" : "white",
                  color: topPortion === "Option2" ? "white" : "black",
                }}
              >
                About Deisgn 2
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleTopPortionChange("Option3")}
                style={{
                  background: topPortion === "Option3" ? "lightblue" : "white",
                  color: topPortion === "Option3" ? "white" : "black",
                }}
              >
                About Design 3
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleTopPortionChange("Option4")}
                style={{
                  background: topPortion === "Option4" ? "lightblue" : "white",
                  color: topPortion === "Option4" ? "white" : "black",
                }}
              >
                About Design 4
              </div>
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
              >
                Experience Deisgn 1
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleExperienceChange("Option2")}
                style={{
                  background:
                    experienceSection === "Option2" ? "lightblue" : "white",
                  color: experienceSection === "Option2" ? "white" : "black",
                }}
              >
                Experience Deisgn 2
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleExperienceChange("Option3")}
                style={{
                  background:
                    experienceSection === "Option3" ? "lightblue" : "white",
                  color: experienceSection === "Option3" ? "white" : "black",
                }}
              >
                Experience Design 3
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleExperienceChange("Option4")}
                style={{
                  background:
                    experienceSection === "Option4" ? "lightblue" : "white",
                  color: experienceSection === "Option4" ? "white" : "black",
                }}
              >
                Experience Design 4
              </div>
            </div>

            <div className="flex gap-1 border p-1 rounded-md justify-start text-white text-sm items-center my-2">
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleEducationChange("Option1")}
                style={{
                  background:
                    educationSection === "Option1" ? "lightblue" : "white",
                  color: educationSection === "Option1" ? "white" : "black",
                }}
              >
                Education Deisgn 1
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleEducationChange("Option2")}
                style={{
                  background:
                    educationSection === "Option2" ? "lightblue" : "white",
                  color: educationSection === "Option2" ? "white" : "black",
                }}
              >
                Education Deisgn 2
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleEducationChange("Option3")}
                style={{
                  background:
                    educationSection === "Option3" ? "lightblue" : "white",
                  color: educationSection === "Option3" ? "white" : "black",
                }}
              >
                Education Design 3
              </div>
              <div
                className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border"
                onClick={() => handleEducationChange("Option4")}
                style={{
                  background:
                    educationSection === "Option4" ? "lightblue" : "white",
                  color: educationSection === "Option4" ? "white" : "black",
                }}
              >
                Education Design 4
              </div>
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
          <div className="p-3 w-full md:w-1/2 h-[26.8rem] md:h-full overflow-y-scroll border py-2 px-2 md:px-4 mb-2 rounded-lg">
            <ul className="flex mb-1">
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
              <li className="mr-2">
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
                experiences={experiences}
                educations={educations}
                theme={selectedTheme}
                neonAccentColor={neonAccentColor}
                isEducationEnabled={isEducationEnabled}
                isExperienceEnabled={isExperienceEnabled}
                isSkillEnabled={isSkillEnabled}
                isInterestEnabled={isInterestEnabled}
                isAwardsEnabled={isAwardsEnabled}
                isProjectEnabled={isProjectEnabled}
                projectsTitle={projectsTitle}
                projects={projects}
                skills={skills}
                awards={awards}
                interests={interests}
                skillsTitle={skillsTitle}
                interestsTitle={interestsTitle}
                experienceTitle={experienceTitle}
                educationTitle={educationTitle}
                awardsTitle={awardsTitle}
              />
            ) : (
              <Code
                {...initialState.FormData}
                FullName={`${initialState.FormData.FirstName} ${initialState.FormData.LastName}`}
                EducationDesign={selectedEducationDesign}
                ExperienceDesign={selectedExperienceDesign}
                theme={selectedTheme}
                neonAccentColor={neonAccentColor}
                isEducationEnabled={isEducationEnabled}
                isExperienceEnabled={isExperienceEnabled}
                isSkillEnabled={isSkillEnabled}
                isInterestEnabled={isInterestEnabled}
                isAwardsEnabled={isAwardsEnabled}
                isProjectEnabled={isProjectEnabled}
                Navbar={selectedNavbarDesign}
                getInTouch={getInTouchDesign}
                TopPortion={selectedTopPortionDesign}
                projectsTitle={projectsTitle}
                projects={projects}
                skills={skills}
                awards={awards}
                interests={interests}
                experiences={experiences}
                educations={educations}
                skillsTitle={skillsTitle}
                interestsTitle={interestsTitle}
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
  projects: state.projects.items,
});

export default connect(mapStateToProps)(PortfolioCard);
