import { combineReducers } from "redux";
import { utilsReducer } from "../reducers/utilsReducer";
import { featuresReducer } from "../reducers/features-reducer";
import { calcReducer } from "../reducers/calcReducer";


export const rootReducer = combineReducers({
    utils: utilsReducer,
    features: featuresReducer,
    calc: calcReducer,
})