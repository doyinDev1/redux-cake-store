import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
    numOficeCreams: 10
}

const iceCreamReducer = (state = initialState, action) => {

switch(action.type){
    case BUY_ICECREAM: return{
        ...state,
        numOficeCreams: state.numOficeCreams - 1,
    }
    default: return state
}
}


export default iceCreamReducer;