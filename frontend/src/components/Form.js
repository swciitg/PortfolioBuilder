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
  isProjectEnabled,toggleProject,toggleExperience,toggleEducation,toggleSkill,toggleInterest,toggleAward }) => {
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
      "Website link",
      "Please enter the URL of your website, where this page is going to be hosted",
    ],
    Description: ["text", "About you", "Write something nice about you."],
    Keywords: [
      "text",
      "Keywords",
      "If someone wants to search for you, what keywords should they use?",
    ],
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
    Colour: [
      "color",
      "Theme Colour",
      "Please choose the colour for your portfolio",
    ],

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
       <div>
        {isExperienceEnabled ? (
          <>
            <SectionTitle initialTitle="Experience" titleType="experience"/>
            <ExperienceList />
          </>
        ) : (
          <p>Experience section is disabled.</p>
        )}
        
        <button onClick={toggleExperience}>
          {isExperienceEnabled ? 'Remove' : 'Add'} Experience
        </button>
      </div>

      <div>
        {isEducationEnabled ? (
          <>
            <SectionTitle initialTitle="Education" titleType='education'/>
            <EducationList />
          </>
        ) : (
          <p>Education section is disabled.</p>
        )}
        <button onClick={toggleEducation}>
          {isEducationEnabled ? 'Remove' : 'Add'} Education
        </button>
      </div>
      
      <div>
      {isSkillEnabled ? (
          <>
            <SectionTitle initialTitle="Skills" titleType="skills"/>
            <SkillsList />
          </>
        ) : (
          <p>Skills section is disabled.</p>
        )}
        <button onClick={toggleSkill}>
          {isSkillEnabled ? 'Remove' : 'Add'} Skills
        </button>
      </div>

      <div>
      {isInterestEnabled ? (
          <>
           <SectionTitle initialTitle="Interests" titleType="interests"/>
           <InterestList />
          </>
        ) : (
          <p>Interest section is disabled.</p>
        )}
        <button onClick={toggleInterest}>
          {isInterestEnabled ? 'Remove' : 'Add'} Interest
        </button>
      </div>

      <div>
      {isAwardsEnabled ? (
          <>
           <SectionTitle initialTitle="Awards" titleType="awards"/>
           <AwardList />
          </>
        ) : (
          <p>Awards section is disabled.</p>
        )}
        <button onClick={toggleAward}>
          {isAwardsEnabled ? 'Remove' : 'Add'} Awards
        </button>
      </div>
      <div>
      {isProjectEnabled ? (
          <>
           <SectionTitle initialTitle="Projects" titleType="projects"/>
           <ProjectList />
          </>
        ) : (
          <p>Projects section is disabled.</p>
        )}
        <button onClick={toggleProject}>
          {isProjectEnabled ? 'Remove' : 'Add'} Projects
        </button>
      </div>
    </div>
  );
};

export default Form;