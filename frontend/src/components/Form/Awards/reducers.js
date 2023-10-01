import { CREATE_AWARD, REMOVE_AWARD } from "./actions";

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
        default: 
            return state;
    }
}
export default awards