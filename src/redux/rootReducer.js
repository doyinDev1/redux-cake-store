import { combineReducers } from "redux";

import cakeReducer from "./cakes/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import puffReducer from './puff/puffReducer'
import usersReducer from './users/usersReducers'
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    puff: puffReducer,
    usersReducer: usersReducer,
})

export default rootReducer