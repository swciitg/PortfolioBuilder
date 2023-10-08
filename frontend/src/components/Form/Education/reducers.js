import { CREATE_EDUCATION, EDIT_EDUCATION, REMOVE_EDUCATION } from "./actions";

const educations = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_EDUCATION: {
            const { education } = payload;
            const newEducation = {
                education,
            };
            return state.concat(newEducation);
        }
        case REMOVE_EDUCATION: {
            const { education } = payload;
            return state.filter(obj => obj.education.degree !== education.degree);
        }
        case EDIT_EDUCATION: {
            const { oldEducation, newEducation } = payload;
            return state.map((obj) => {
                if ((obj.education.university === oldEducation.university) && (obj.education.degree === oldEducation.degree)) {
                    return {
                        ...obj,
                        education: newEducation,
                    };
                }
                return obj;
            }) 
        }
        default:
            return state;
    }
}
export default educations;