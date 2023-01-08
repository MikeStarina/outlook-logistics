import { TUtilsActions, MAIN_MENU_VISIBILITY, POPUP_VISIBILITY } from '../actions/utils-actions';




type TInitialState = {
    isMainMenuActive: boolean;
    isPopupVisible: boolean
}


const initialState: TInitialState = {
    isMainMenuActive: false,
    isPopupVisible: false,
}



export const utilsReducer = (state = initialState, action: TUtilsActions) => {
    switch(action.type) {
        case MAIN_MENU_VISIBILITY: {
            
            return {
                ...state,
                isMainMenuActive: !state.isMainMenuActive,
            }
        }

        case POPUP_VISIBILITY: {

            return {
                ...state,
                isPopupVisible: !state.isPopupVisible,
            }
        }
        

        default: return state
    }
}