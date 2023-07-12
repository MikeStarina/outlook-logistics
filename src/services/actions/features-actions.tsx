import { AppDispatch } from '../..';


export const GET_FEATURES = 'GET_FEATURES';



interface IGetFeatures {
    readonly type: typeof GET_FEATURES;
}


export function getFeatures(dispatch: AppDispatch) {


    return function (dispatch: AppDispatch) {
        fetch(`http://localhost:1337/api/features`, {
            headers: { 
                "Content-Type": "application/json",
            },
        })
        .then(res => res.json())
        .then((res) => {
        })
    }
} 




export type TFeaturesActions = IGetFeatures;

