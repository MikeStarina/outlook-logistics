import { GET_ATI_CITYSEARCH_DATA, TAtiActions } from "../actions/ati-actions";


export type TCitiesArray = {
    CityId: number;
    CityName: string;
    CityNameEng: string;
    CitySize: number;
    CountryCodeName: string;
    CountryId: number;
    CountryName: string;
    CountryNameEng: string;
    FiasId: string;
    FullName: string;
    FullNameEng: string;
    Id2: string;
    IsRegionalCenter: boolean;
    Latitude: number;
    Longitude: number;
    RegionId: number;
    RegionName: string;
    RegionNameEng: string;
    ShortName: string;
    ShortNameEng: string;
    direction?: string
}



type TInitialState = {
    atiCitySearchDataTo: Array<TCitiesArray>,
    atiCitySearchDataFrom: Array<TCitiesArray>,
}


const initialState: TInitialState = {
    atiCitySearchDataTo: [],
    atiCitySearchDataFrom: [],
}


export const atiDataReducer = (state = initialState, action: TAtiActions) => {
    switch(action.type) {

        

        case GET_ATI_CITYSEARCH_DATA: {

            const data: Array<TCitiesArray> = action.payload;
            data.forEach((item) => {
                item.direction = action.direction;
            })
            
            return {
                ...state,
                atiCitySearchDataTo: action.direction === 'to' ? data : state.atiCitySearchDataTo,
                atiCitySearchDataFrom: action.direction === 'from' ? data : state.atiCitySearchDataFrom
            }
        }

        default: return state;
    }
}