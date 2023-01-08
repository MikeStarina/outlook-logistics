import { combineReducers } from "redux";
import { utilsReducer } from "../reducers/utilsReducer";
import { featuresReducer } from "../reducers/features-reducer";


export const rootReducer = combineReducers({
    utils: utilsReducer,
    features: featuresReducer,
})