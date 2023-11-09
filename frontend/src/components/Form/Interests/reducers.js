import { CREATE_INTEREST, EDIT_INTEREST, REMOVE_INTEREST } from "./actions";

const interests = (state=[], action) =>{
    const {type, payload} = action;

    switch(type){
        case CREATE_INTEREST:{
            const {interest} = payload;
            const newInterest = {
                interest,
            };
            return state.concat(newInterest);
        }
        case REMOVE_INTEREST: {
            const {interest} = payload;
            return state.filter(obj => obj.interest !== interest);
        }
        case EDIT_INTEREST: {
            const {oldInterest, newInterest} = payload;
            const index = state.findIndex(obj => obj.interest === oldInterest);
            
            if (index !== -1) {
              const newState = [...state];
              newState[index] = { interest: {interest: newInterest} };
              return newState;
            }
            return state;
        }
        default: 
            return state;
    }
}
export default interests;