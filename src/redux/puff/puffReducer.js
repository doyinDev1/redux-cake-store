import { BUY_PUFF } from "./puffTypes";

const initialState = {
    numOfPuffs: 10
}

const puffReducer = (state = initialState, action) => {

switch(action.type){
    case BUY_PUFF: return{
        ...state,
        numOfPuffs: state.numOfPuffs - 1,
    }
    default: return state
}
}


export default puffReducer;