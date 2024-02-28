import { createSlice } from "@reduxjs/toolkit";
import { TFescoLocations } from "@/utils/types";
import { TFescoCarTypes } from "@/utils/types";
import { fescoCarTypes } from "@/utils/constants";

type TInitialState = {
    validLocFrom?: TFescoLocations,
    validLocTo?: TFescoLocations,
    locToList?: Array<TFescoLocations>
    locFrom: string,
    locTo: string,
    carType: TFescoCarTypes,
    phone: string,
    name: string,
}


const initialState = {
    carType: fescoCarTypes[0],
    locFrom: '',
    locTo: '',
    phone: '',
    name: '',
} as TInitialState

const basicCalcSlice = createSlice({
    name: 'ZDCALC',
    initialState,
    reducers: {
        setLocFromValue: (state, { payload }) => {
            return {
                ...state,
                locFrom: payload
                }
        },
        setLocToValue: (state, { payload }) => {
            return {
                ...state,
                locTo: payload
                }
        },
        setValidLocToValue: (state, { payload }) => {
            return {
                ...state,
                validLocTo: payload
                }
        },
        setValidLocFromValue: (state, { payload }) => {
            return {
                ...state,
                validLocFrom: payload
                }
        },
        setlocToList: (state, { payload }) => {
            return {
                ...state,
                locFromList: payload
                }
        },
        setUserData: (state, { payload }) => {
            const { id, data } = payload
            return {
                    ...state,
                    phone: id === 'phone' ? data : state.phone,
                    name: id === 'name' ? data : state.name
                }
        },
        setCarTypeData: (state, { payload }) => {
            return {
                ...state,
                carType: payload
                }
        },
        clearState: () => {
            return initialState
        },
    }
}
)


export const { actions, reducer } = basicCalcSlice;