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
        case EDIT_SKILL: { // Handle the "Edit Skill" action
            const { oldSkill, newSkill } = payload; //obj.skill === oldSkill
            const index = state.findIndex(obj => obj.skill === oldSkill);
            
            if (index !== -1) {
              // Create a copy of the state array and update the skill at the specified index
              console.log(state)
              const newState = [...state];
              newState[index] = { skill: {skill: newSkill} };
              console.log(newState)
              return newState;
            }
            return state; // If the skill to edit is not found, return the original state
        }
        default: 
            return state;
    }
}
export default skills