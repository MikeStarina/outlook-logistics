import { CLEAR_FORM_DATA, GET_FORM_DATA, TCalcActions } from '../actions/calc-actions'



type TCalcState = {
    from: string | undefined;
    to: string | undefined;
    phone: string | undefined;
    name: string | undefined;
}

const initialState: TCalcState = {
    from: '',
    to: '',
    phone: '',
    name: '',
}


export const calcReducer = (state = initialState, action: TCalcActions) => {
    switch(action.type) {

        case GET_FORM_DATA: {

            return {
                ...state,
                from: action.id === 'from' ? action.payload : state.from,
                to: action.id === 'to' ? action.payload : state.to,
                phone: action.id === 'phone' ? action.payload : state.phone,
                name: action.id === 'name' ? action.payload : state.name,
            }
        }

        case CLEAR_FORM_DATA: {

            return initialState;
        }

        default: return state;
    }
}

