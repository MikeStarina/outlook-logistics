import { createSlice } from "@reduxjs/toolkit";
import { carTypes } from "@/utils/constants";
import { TCity, TCarType } from "@/utils/types";


type TInitialState = {
    formData: {
        from: string,
        to: string,
    },
    validCity?: {
        from: TCity,
        to: TCity
    },
    carType: TCarType,
    isRef: boolean,
    orderDistance?: number,
    distanceType: string,
    name: string,
    phone: string,
    price?: number,
}


const initialState = {
    formData: {
        from: '',
        to: '',
    },
    carType: carTypes[0],
    isRef: false,
    name: '',
    phone: '',
    distanceType: '',
} as TInitialState

const ftlCalcSlice = createSlice({
    name: 'FTL_CALC',
    initialState,
    reducers: {
        setFormData: (state, { payload }) => {

            const { name, value} = payload
            return {
                ...state,
                formData: {
                    from: name === 'from' ? value : state.formData.from,
                    to: name === 'to' ? value : state.formData.to,
                }
            }
        },
        setValidCity: (state, { payload }) => {
            return {
                ...state,
                validCity: {
                    from: payload.name === 'from' ? payload.value : state.validCity?.from,
                    to: payload.name === 'to' ? payload.value : state.validCity?.to
                }
            }
        },
        setCarType: (state, { payload }) => {
            return {
                ...state,
                carType: payload,
            }
        },
        setIsRef: (state, { payload }) => {

            return {
                ...state,
                isRef: payload
            }
        },
        setOrderDistance: (state, { payload }) => {

            return {
                ...state,
                orderDistance: payload
            }
        },
        setPrice: (state, { payload }) => {

            return {
                ...state,
                price: payload
            }
        },
        setDistanceType: (state, { payload }) => {

            return {
                ...state,
                distanceType: payload
            }
        },
        setUserData: (state, { payload }) => {
            const { id, value } = payload;
            return {
                ...state,
                name: id === 'name' ? value : state.name,
                phone: id === 'phone' ? value : state.phone
            }
        },
        clearState: () => {

            return initialState;
        },
    }
})


export const { actions, reducer } = ftlCalcSlice;