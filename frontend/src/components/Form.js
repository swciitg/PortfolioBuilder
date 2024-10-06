import FormGroup from "./Bootstrap/FormGroup";
import SocialMedia from "./Bootstrap/SocialMedia";
import AwardList from "./Form/Awards/AwardList";
import EducationList from "./Form/Education/EducationList";
import ExperienceList from "./Form/Experience/ExperienceList";
import InterestList from "./Form/Interests/InterestList";
import ProjectList from "./Form/Projects/ProjectList";
import SkillsList from "./Form/Skills/SkillsList";
import { SectionTitle } from "./sectionTitle/sectionTitle";

const Form = ({ FormData, onChange, isExperienceEnabled, isEducationEnabled, isSkillEnabled, isInterestEnabled, isAwardsEnabled,
  isProjectEnabled, toggleProject, toggleExperience, toggleEducation, toggleSkill, toggleInterest, toggleAward }) => {
  const Desc = {
    FullName: [
      "text",
      "Full Name",
      "This is your full name. This has been generated using your first and last names.",
    ],
    FirstName: [
      "text",
      "First Name",
      "Please enter your first name or given name.",
    ],
    LastName: ["text", "Last Name", "Please enter your last name or surname"],
    Thubmnail: [
      "text",
      "Your Photo",
      "Please upload your photo in a CDN(Ex. Imgur) and paste the direct image URL here.",
    ],
    URL: [
      "text",
      "Website / Resume Link",
      "Please enter the URL of your website, where this page is going to be hosted",
    ],
    Keywords: [
      "text",
      "Keywords i.e. frontend developer",
      "If someone wants to search for you, what keywords should they use?",
    ],
    Description: ["text", "About you", "Write something nice about you."],
    
    Address: [
      "text",
      "Where are you?",
      "Type in your full address to get kidnapped!",
    ],
    Phone: [
      "text",
      "Phone Number",
      "Please enter your phone number, so we can call you in the midnight!",
    ],
    Email: ["text", "Email Address", "Tell us your primary email address"],

    Socials: {
      Facebook: [
        "text",
        "Facebook Id",
        "Please enter your Facebook handle, so that we can follow your cat videos and food pics!",
      ],
      WhatsApp: [
        "text",
        "WhatsApp Number",
        "Please enter your WhatsApp number, so that we can send you 1000 'Good Morning' messages every day!",
      ],
      Instagram: [
        "text",
        "Instagram Username",
        "Please enter your Instagram username, so that we can double-tap all your photos!",
      ],
      Twitter: [
        "text",
        "Twitter Handle",
        "Please enter your Twitter handle, so that we can retweet your witty thoughts!",
      ],
      LinkedIn: [
        "text",
        "LinkedIn ID",
        "Please enter your LinkedIn ID, so that we can congratulate you on your 'work anniversaries'!",
      ],
      GitHub: [
        "text",
        "GitHub Username",
        "Please enter your GitHub username, so that we can fork your repositories!",
      ],
      StackOverflow: [
        "text",
        "StackOverflow Profile",
        "Please enter your StackOverflow profile, so that we can ask you to solve our coding dilemmas!",
      ],
    },
  };

  const getBorderColor = (fd) => {
    if (FormData[fd].length != 0 && fd !== "Colour") {
      //changed the code here to neglect the theme color section filled
      return "border-lime-500"; // Green color for filled section
    }
    return ""; // No special border color for unfilled section
  };
  return (
    <div className="Form">
        <h1 className="text-xl mb-2 font-bold">Basic Info</h1>
      {Object.keys(FormData).map((fd) =>
        fd !== "Socials" ? (
          Object.keys(Desc).includes(fd) && (
            <FormGroup
              key={fd}
              Label={Desc[fd][1]}
              Type={Desc[fd][0]}
              Id={fd}
              Desc={Desc[fd][2]}
              Value={FormData[fd]}
              Placeholder={`Enter something for ${Desc[fd][1]}`}
              onChange={fd === "FullName" ? () => {} : onChange}
              readOnly={fd === "FullName" ? true : undefined}
              borderColor={getBorderColor(fd)}
            />
          )
        ) : (
          <SocialMedia
            MediaData={Desc[fd]}
            value={FormData[fd]}
            onChange={fd === "FullName" ? () => {} : onChange}
          />
        )
      )}
       <div className={isExperienceEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
        {true ? (
          <>
            <SectionTitle initialTitle="Experience" titleType="experience"/>
            <ExperienceList />
          </>
        ) : (
          <p className="">Experience section is disabled.</p>
        )}
        
        {/* <button className={"text-white  w-full py-1 " + (isExperienceEnabled ? "bg-red-100 hover:bg-red-300 rounded-b-lg":"bg-green-600 hover:bg-green-500 rounded-sm")} onClick={toggleExperience}>
          {isExperienceEnabled ? 'Remove' : 'Add'} Experience Section
        </button> */}
      </div>

      <div className={isEducationEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
        {true ? (
          <>
            <SectionTitle initialTitle="Education" titleType='education'/>
            <EducationList />
          </>
        ) : (
          <p>Education section is disabled.</p>
        )}
        {/* <button className={"text-white  w-full py-1 " + (isEducationEnabled ? "bg-red-100 hover:bg-red-300 rounded-b-lg":"bg-green-600 hover:bg-green-500 rounded-sm")} onClick={toggleEducation}>
          {isEducationEnabled ? 'Remove' : 'Add'} Education Section
        </button> */}
      </div>
      
      <div className={isSkillEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
      {true ? (
          <>
            <SectionTitle initialTitle="Skills" titleType="skills"/>
            <SkillsList />
          </>
        ) : (
          <p>Skills section is disabled.</p>
        )}
        {/* <button className={"text-white  w-full py-1 " + (isSkillEnabled ? "bg-red-100 hover:bg-red-300 rounded-b-lg":"bg-green-600 hover:bg-green-500 rounded-sm")} onClick={toggleSkill}>
          {isSkillEnabled ? 'Remove' : 'Add'} Skills Section
        </button> */}
      </div>

      <div className={isInterestEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
      {true ? (
          <>
           <SectionTitle initialTitle="Interests" titleType="interests"/>
           <InterestList />
          </>
        ) : (
          <p>Interest section is disabled.</p>
        )}
        {/* <button className={"text-white  w-full py-1 " + (isInterestEnabled ? "bg-red-100 hover:bg-red-300 rounded-b-lg":"bg-green-600 hover:bg-green-500 rounded-sm")} onClick={toggleInterest}>
          {isInterestEnabled ? 'Remove' : 'Add'} Interest Section
        </button> */}
      </div>

      <div className={isAwardsEnabled ?"bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
      {true ? (
          <>
           <SectionTitle initialTitle="Awards" titleType="awards"/>
           <AwardList />
          </>
        ) : (
          <p>Awards section is disabled.</p>
        )}
      </div>
      
      <div className={isProjectEnabled ? "bg-white my-8" : "bg-gray-200 my-4 p-2 rounded-lg flex flex-col gap-y-3"}>
      {true ? (
          <>
           <SectionTitle initialTitle="Projects" titleType="projects"/>
           <ProjectList />
          </>
        ) : (
          <p>Projects section is disabled.</p>
        )}
      </div>
    </div>
  );
};

export default Form;
