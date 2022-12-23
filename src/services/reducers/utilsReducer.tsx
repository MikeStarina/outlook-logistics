import React from 'react';
import { TUtilsActions, MAIN_MENU_VISIBILITY } from '../actions/utils-actions';




type TInitialState = {
    isMainMenuActive: boolean
}


const initialState: TInitialState = {
    isMainMenuActive: false,
}



export const utilsReducer = (state = initialState, action: TUtilsActions) => {
    switch(action.type) {
        case MAIN_MENU_VISIBILITY: {
           
            return {
                ...state,
                isMainMenuActive: !state.isMainMenuActive,
            }
        }

        default: return state
    }
}