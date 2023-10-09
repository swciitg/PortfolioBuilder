import { CREATE_SKILL, EDIT_SKILL, REMOVE_SKILL } from "./actions";

const skills = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_SKILL:{
            const {skill} = payload;
            const newSkill = {
                skill,
            };
            return state.concat(newSkill);
        }
        case REMOVE_SKILL: {
            const {skill} = payload;
            return state.filter(obj => obj.skill !== skill);
        }
        case EDIT_SKILL: {
            const { oldSkill, newSkill } = payload;
            const index = state.findIndex(obj => obj.skill === oldSkill);
            
            if (index !== -1) {
              const newState = [...state];
              newState[index] = { skill: {skill: newSkill} };
              return newState;
            }
            return state;
        }
        default: 
            return state;
    }
}
export default skills