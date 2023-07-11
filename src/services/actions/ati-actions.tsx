import { apiUrl } from "../../utils/constants";
import { SET_ORDER_DISTANCE } from "./calc-actions";
import { POPUP_VISIBILITY } from "./utils-actions";

export const GET_ATI_CITYSEARCH_DATA = 'GET_ATI_CITYSEARCH_DATA'; 





interface IGetAtiCitySearchData {
    readonly type: typeof GET_ATI_CITYSEARCH_DATA;
    payload: [];
    direction: string;
}


export type TAtiActions = IGetAtiCitySearchData;


export const getAtiCitySearchDataFunc = (data: any) => {

    //console.log(data);
    return function(dispatch: any) {
        fetch(`${apiUrl}/api/ati_city_search`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': ''
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then((res) => {
            //console.log(res);
            //console.log(typeof(res.cities));
            dispatch({
                type: GET_ATI_CITYSEARCH_DATA,
                payload: res.cities,
                direction: res.direction
            })
        });
    }
}

export const getDistance = ( distanceData :any) => {


    return function (dispatch: any) {
        fetch(`${apiUrl}/api/ati_distance_calculator`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': ''
            },
            body: JSON.stringify(distanceData)
        }).then(res => res.json())
        .then((res) => {
            dispatch({
                type: SET_ORDER_DISTANCE,
                payload: res.distance
            })
            dispatch({type: POPUP_VISIBILITY})
        });
    }
}