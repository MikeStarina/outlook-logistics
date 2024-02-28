import { createSlice } from "@reduxjs/toolkit";


type TInitialState = {
    calcMode: 'FTL' | 'ZD',
    discount: boolean,
    isPopupVisible: boolean
}


const initialState = {
    calcMode: 'FTL',
    discount: true,
    isPopupVisible: false,
} as TInitialState

const basicCalcSlice = createSlice({
    name: 'CALC',
    initialState,
    reducers: {
        setCalcMode: (state, { payload }) => {
            return {
                ...state,
                calcMode: payload,
                }
        },
        setPopupVisible: (state, { payload }) => {
            return {
                ...state,
                isPopupVisible: payload,
                }
        },
        clearState: () => {
            return initialState
        },
    }
}
)


export const { actions, reducer } = basicCalcSlice;