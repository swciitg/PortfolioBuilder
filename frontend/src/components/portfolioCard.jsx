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
import Experience5 from "./options/experience/option5";
import ExperienceTemplate from "./templates/ExperienceTemplate"; // ✅ NEW IMPORT
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
      ? setInitialState((prevState) => ({
          ...prevState,
          FormData: {
            ...prevState.FormData,
            [e.target.name]: e.target.value,
          },
        }))
      : setInitialState((prevState) => ({
          ...prevState,
          FormData: {
            ...prevState.FormData,
            Socials: {
              ...prevState.FormData.Socials,
              [e.target.name]: e.target.value,
            },
          },
        }));
  };

  const download = async () => {
    try {
      const codeFileElements = document.getElementsByClassName("codefile");

      if (codeFileElements.length > 0) {
        let output = he.decode(codeFileElements[0].innerHTML);
        const blob = new Blob([output]);
        const fileDownloadUrl2 = URL.createObjectURL(blob);

        setInitialState((prevState) => ({
          ...prevState,
          fileDownloadUrl: fileDownloadUrl2,
        }));

        const resolveAfter3Sec = new Promise((resolve) =>
          setTimeout(resolve, 3000)
        );

        await toast.promise(resolveAfter3Sec, {
          pending: "Downloading...",
          success: "File downloaded successfully!",
          error: "An error occurred while downloading.",
          position: "top-right",
          autoClose: 3100,
        });
      } else {
        throw new Error("Codefile element not found.");
      }
    } catch (error) {
      console.error("Download error:", error);
    }
  };

  const [isExperienceEnabled, setIsExperienceEnabled] = useState(true);
  const [isSkillEnabled, setIsSkillEnabled] = useState(true);
  const [isEducationEnabled, setIsEducationEnabled] = useState(true);
  const [isInterestEnabled, setisInterestEnabled] = useState(true);
  const [isAwardsEnabled, setisAwardsEnabled] = useState(true);
  const [isProjectEnabled, setisProjectEnabled] = useState(true);

  const toggleExperience = () => setIsExperienceEnabled(!isExperienceEnabled);
  const toggleEducation = () => setIsEducationEnabled(!isEducationEnabled);
  const toggleSkill = () => setIsSkillEnabled(!isSkillEnabled);
  const toggleInterest = () => setisInterestEnabled(!isInterestEnabled);
  const toggleAward = () => setisAwardsEnabled(!isAwardsEnabled);
  const toggleProject = () => setisProjectEnabled(!isProjectEnabled);

  const [navbarDesign, setNavbarDesign] = useState("NavbarDesign1");
  const handleDesignChange = (design) => setNavbarDesign(design);

  const [selectedTheme, setSelectedTheme] = useState("default");
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
  const handleTopPortionChange = (design) => setTopPortion(design);

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

      case "Option5":
    selectedExperienceDesign = ReactDOMServer.renderToString(
      <ExperienceTemplate
        userData={{
          name: `${initialState.FormData.FirstName} ${initialState.FormData.LastName}`,
          role: "Full Stack Developer",
          about:
            initialState.FormData.Description ||
            "Passionate developer building impactful projects.",
          experiences,
          projects: projects || [],
          email: initialState.FormData.Email || "example@email.com",
        }}
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
  const handleEducationChange = (design) => setEducationSection(design);

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

  let getInTouchDesign = ReactDOMServer.renderToString(
    <GetInTouch {...initialState.FormData} />
  );

  return (
    <div className="w-full h-full overflow-y-hidden">
      <Header />

      {/* your existing navbar/theme buttons remain unchanged */}

      {/* ✅ Experience Section Buttons */}
<div className="flex flex-wrap gap-2 border p-2 rounded-md text-sm items-center my-2 bg-gray-50">
  <div
    className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border transition"
    onClick={() => handleExperienceChange("Option1")}
    style={{
      background: experienceSection === "Option1" ? "lightblue" : "white",
      color: experienceSection === "Option1" ? "white" : "black",
    }}
  >
    Experience Design 1
  </div>

  <div
    className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border transition"
    onClick={() => handleExperienceChange("Option2")}
    style={{
      background: experienceSection === "Option2" ? "lightblue" : "white",
      color: experienceSection === "Option2" ? "white" : "black",
    }}
  >
    Experience Design 2
  </div>

  <div
    className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border transition"
    onClick={() => handleExperienceChange("Option3")}
    style={{
      background: experienceSection === "Option3" ? "lightblue" : "white",
      color: experienceSection === "Option3" ? "white" : "black",
    }}
  >
    Experience Design 3
  </div>

  <div
    className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border transition"
    onClick={() => handleExperienceChange("Option4")}
    style={{
      background: experienceSection === "Option4" ? "lightblue" : "white",
      color: experienceSection === "Option4" ? "white" : "black",
    }}
  >
    Experience Design 4
  </div>

  {/* ✅ NEW BUTTON */}
  <div
    className="p-2 rounded-md bg-blue-400 cursor-pointer hover:scale-[1.02] border transition"
    onClick={() => handleExperienceChange("Option5")}
    style={{
      background: experienceSection === "Option5" ? "lightblue" : "white",
      color: experienceSection === "Option5" ? "white" : "black",
    }}
  >
    Experience Design 5
  </div>
</div>

      {/* ✅ Below your experience buttons, show Form + Preview */}
      <div className="p-4">
        {/* The form where user data is entered */}
        <Form
          FormData={{
            FullName: `${initialState.FormData.FirstName} ${initialState.FormData.LastName}`,
            ...initialState.FormData,
          }}
          onChange={handleChange}
        />

        {/* ✅ Download Button */}
        <a
          className="text-xl cursor-pointer"
          download={"portfolio.html"}
          href={initialState.fileDownloadUrl}
        >
          <div className="flex justify-center my-4">
            <button
              className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md"
              onClick={download}
            >
              Download
            </button>
          </div>
          <ToastContainer position="top-right" autoClose={3000} />
        </a>

        {/* ✅ Show the selected experience design preview */}
        <div className="mt-4 border-t pt-4">
          <Preview
            {...initialState.FormData}
            experiences={experiences}
            educations={educations}
            projects={projects}
            experienceTitle={experienceTitle}
            educationTitle={educationTitle}
          />

          {/* ✅ Renders the selected experience section, including Design 5 */}
          <div dangerouslySetInnerHTML={{ __html: selectedExperienceDesign }} />
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
