import { createSlice, PayloadAction } from "@reduxjs/toolkit";



const initialState = {
    menuVisibility: false,
}

const utilsSlice = createSlice({
    name: 'utils',
    initialState,
    reducers: {
        setMenuVisibility: (state, action: PayloadAction<boolean>) => {
            return {
                ...state,
                menuVisibility: action.payload,
            }
        },
    },
});

export const { actions, reducer } = utilsSlice;
