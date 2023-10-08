import { CREATE_AWARD, EDIT_AWARD, REMOVE_AWARD } from "./actions";

const awards = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_AWARD:{
            const {award} = payload;
            const newAward = {
                award,
            };
            return state.concat(newAward);
        }
        case REMOVE_AWARD: {
            const {award} = payload;
            return state.filter(obj => obj.award !== award);
        }
        case EDIT_AWARD: {
            const {oldAward, newAward} = payload;
            const index = state.findIndex(obj => obj.award === oldAward);
            
            if (index !== -1) {
              const newState = [...state];
              newState[index] = { award: {award: newAward} };
              return newState;
            }
            return state;
        }
        default: 
            return state;
    }
}
export default awards