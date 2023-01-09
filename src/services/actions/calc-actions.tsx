import { apiUrl } from "../../utils/constants";


export const GET_FORM_DATA = 'GET_FORM_DATA';
export const CLEAR_FORM_DATA = 'CLEAR_FORM_DATA';





interface IGetFormData {
    readonly type: typeof GET_FORM_DATA;
    payload: string;
    id: string;
}

interface IClearFormData {
    readonly type: typeof CLEAR_FORM_DATA;
}



export type TCalcActions = IGetFormData | IClearFormData;



export const sendOrderData = (orderData: any) => {

    const data = {data: orderData};
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