import { TUtilsActions, MAIN_MENU_VISIBILITY, POPUP_VISIBILITY, DROPDOWN_VISIBILITY, RESET_DROPDOWN_VISIBILITY } from '../actions/utils-actions';




type TInitialState = {
    isMainMenuActive: boolean;
    isPopupVisible: boolean
    isCalcDropdownFromVisible: boolean,
    isCalcDropdownToVisible: boolean,
}


const initialState: TInitialState = {
    isMainMenuActive: false,
    isPopupVisible: false,
    isCalcDropdownFromVisible: false,
    isCalcDropdownToVisible: false,
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
        case DROPDOWN_VISIBILITY: {
            return {
                ...state,
                isCalcDropdownFromVisible: action.direction === 'from' ? action.payload : state.isCalcDropdownFromVisible,
                isCalcDropdownToVisible: action.direction === 'to' ? action.payload : state.isCalcDropdownToVisible
            }
        }
        case RESET_DROPDOWN_VISIBILITY: {
            return {
                ...state,
                isCalcDropdownFromVisible: false,
                isCalcDropdownToVisible: false
            }
        }
        

        default: return state
    }
}