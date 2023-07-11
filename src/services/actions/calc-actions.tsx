import { apiUrl } from "../../utils/constants";
import { TCity } from "../reducers/calcReducer";

export const GET_FORM_DATA = 'GET_FORM_DATA';
export const CLEAR_FORM_DATA = 'CLEAR_FORM_DATA';
export const SET_VALIDATED_CITY = 'SET_VALIDATED_CITY'; 
export const SET_ORDER_DISTANCE = 'SET_ORDER_DISTANCE'; 
export const SET_CAR_TYPE = 'SET_CAR_TYPE'; 
export const SET_ORDER_PRICE = 'SET_ORDER_PRICE'; 
export const SET_REF_OPTION = 'SET_REF_OPTIONS'; 
export const UPDATE_PRICE = 'UPDATE_PRICE'; 
export const RESET_ORDER = 'RESET_ORDER'; 




interface ISetValidatedCity {
    readonly type: typeof SET_VALIDATED_CITY;
    payload: TCity;
}


interface IGetFormData {
    readonly type: typeof GET_FORM_DATA;
    payload: string;
    id: string;
}

interface IClearFormData {
    readonly type: typeof CLEAR_FORM_DATA;
}

interface ISetOrderDistance {
    readonly type: typeof SET_ORDER_DISTANCE;
    payload: number
}

interface ISetCarType {
    readonly type: typeof SET_CAR_TYPE;
    payload: {
        name: string,
        placeholder: string,
        options: {
            ref: boolean,
            hydro: boolean,
        }
    }
}

interface ISetOrderPrice {
    readonly type: typeof SET_ORDER_PRICE;
    payload: number
}
interface ISetRefOption {
    readonly type: typeof SET_REF_OPTION;
    payload: boolean
}
interface IUpdatePrice {
    readonly type: typeof UPDATE_PRICE;
    payload: boolean
}
interface IResetOrder {
    readonly type: typeof RESET_ORDER;
}



export type TCalcActions = IGetFormData | IClearFormData | ISetValidatedCity | ISetOrderDistance | ISetCarType | ISetOrderPrice | ISetRefOption | IUpdatePrice | IResetOrder;



export const sendOrderData = (orderData: any) => {
    //console.log(orderData);

    const data = {data: orderData};

    //console.log(data);
    return function (dispatch: any) {
        fetch(`${apiUrl}/api/orders`, {
            method: 'POST',
            headers: { 
                "Content-Type": "application/json",
                "Content-Length": '',
            },
            body: JSON.stringify(data),

        })
        .then(res => res.json())
        
    }
}