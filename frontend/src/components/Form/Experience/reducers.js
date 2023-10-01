import { CREATE_EXPERIENCE, REMOVE_EXPERIENCE } from "./actions";

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
        default: 
            return state;
    }
}
export default experiences;