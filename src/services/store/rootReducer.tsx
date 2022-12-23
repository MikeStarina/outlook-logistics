import { combineReducers } from "redux";
import { utilsReducer } from "../reducers/utilsReducer";


export const rootReducer = combineReducers({
    utils: utilsReducer,
})