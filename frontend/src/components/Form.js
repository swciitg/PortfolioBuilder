import { Provider } from "react-redux";
import FormGroup from "./Bootstrap/FormGroup";
import AwardList from "./Form/Awards/AwardList";
import EducationList from "./Form/Education/EducationList";
import ExperienceList from "./Form/Experience/ExperienceList";
import InterestList from "./Form/Interests/InterestList";
import SkillsList from "./Form/Skills/SkillsList";
import Header from './Bootstrap/Header';
import SectionTitleEdit from './Form/SectionTitleEdit'; 
import PortfolioCard from "./portfolioCard";

const Form = ({ FormData, onChange, experienceTitle,educationTitle,skillsTitle, handleExperienceTitleChange ,handleSkillsTitleChange,handleEducationTitleChange}) => {
  const Desc = {
    FullName: [
      "text",
      "Full Name",
      "This is your full name. This has been generated using your first and last names."
    ],
    FirstName: [
      "text",
      "First Name",
      "Please enter your first name or given name."
    ],
    LastName: ["text", "Last Name", "Please enter your last name or surname"],
    Thubmnail: [
      "text",
      "Your Photo",
      "Please upload your photo in a CDN(Ex. Imgur) and paste the direct image URL here."
    ],
    URL: [
      "text",
      "Website link",
      "Please enter the URL of your website, where this page is going to be hosted"
    ],
    Description: ["text", "About you", "Write something nice about you."],
    Keywords: [
      "text",
      "Keywords",
      "If someone wants to search for you, what keywords should they use?"
    ],
    Address: [
      "text",
      "Where are you?",
      "Type in your full address to get kidnapped!"
    ],
    Phone: [
      "text",
      "Phone Number",
      "Please enter your phone number, so we can call you in the midnight!"
    ],
    Email: ["text", "Email Address", "Tell us your primary email address"],
    Colour: [
      "color",
      "Theme Colour",
      "Please choose the colour for your portfolio"
    ]
    
  };

  

  return (
    <div className="Form">
      <h1 className="text-xl mb-2 font-bold">Basic Info</h1>
      {Object.keys(FormData).map(
        fd =>
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
            />
          )
      )}
       
      <h3 className='mt-5 mb-2 mx-3'><SectionTitleEdit title={experienceTitle} onTitleChange={handleExperienceTitleChange} /></h3>
      <ExperienceList />
      <h3 className='mt-5 mb-2 mx-3'><SectionTitleEdit title={educationTitle} onTitleChange={handleEducationTitleChange} /></h3>
      <EducationList />
      <h3 className='mt-5 mb-2 mx-3'><SectionTitleEdit title={skillsTitle} onTitleChange={handleSkillsTitleChange}/></h3>
      <SkillsList />
      <h3 className='mt-5 mb-2 mx-3'>Interests</h3>
      <InterestList />
      <h3 className='mt-5 mb-2 mx-3'>Awards</h3>
        <AwardList />
      </div>
    
  );
};

export default Form;
