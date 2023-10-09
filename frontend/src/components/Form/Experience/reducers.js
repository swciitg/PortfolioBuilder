import { CREATE_EXPERIENCE, REMOVE_EXPERIENCE,UPDATE_EXPERIENCE,UPDATE_SKILLS,UPDATE_AWARDS,UPDATE_INTERESTS,UPDATE_EDUCATION,UPDATE_PROJECTS, EDIT_EXPERIENCE } from "./actions";

const experiences = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_EXPERIENCE:{
            const {experience} = payload;
            const newExperience = {
                experience,
            };
            return state.concat(newExperience);
        }
        case REMOVE_EXPERIENCE: {
            const {experience} = payload;
            return state.filter(exp => exp.experience.position !== experience.position);
        }
        case EDIT_EXPERIENCE: {
          const {oldExperience, newExperience} = payload;
          return state.map((exp) => {
            if ((exp.experience.position === oldExperience.position) && (exp.experience.company === oldExperience.company)) {
              return {
                ...exp,
                experience: newExperience,
              };
            }
            return exp;
          });
        }
        default: 
            return state;
    }
}

const initialState = {
  experienceTitle: "Experience",
  skillsTitle: "Skills",
  interestsTitle: "Interests",
  awardsTitle: "Awards",
  educationTitle: "Education",
  projectsTitle:"Projects"
};

export const titlesReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_EXPERIENCE:
      return {
        ...state,
        experienceTitle: action.payload
      };
    case UPDATE_SKILLS:
      return {
        ...state,
        skillsTitle: action.payload
      };
    case UPDATE_INTERESTS:
      return {
        ...state,
        interestsTitle: action.payload
      };
    case UPDATE_AWARDS:
      return {
        ...state,
        awardsTitle: action.payload
      };
    case UPDATE_EDUCATION:
      return {
        ...state,
        educationTitle: action.payload
      };
      case UPDATE_PROJECTS:
      return {
        ...state,
        projectsTitle: action.payload
      };
    default:
      return state;
  }
};


export default experiences;