import { CREATE_EDUCATION, REMOVE_EDUCATION } from "./actions";

 const educations = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_EDUCATION:{
            const {education} = payload;
            const newEducation = {
                education,
            };
            return state.concat(newEducation);
        }
        case REMOVE_EDUCATION: {
            const {education} = payload;
            return state.filter(obj => obj.education.degree !== education.degree);
        }
        default: 
            return state;
    }
 }
export default educations;