import { CLEAR_FORM_DATA, GET_FORM_DATA, TCalcActions, SET_VALIDATED_CITY, SET_ORDER_DISTANCE, SET_CAR_TYPE, SET_ORDER_PRICE, SET_REF_OPTION, UPDATE_PRICE, RESET_ORDER } from '../actions/calc-actions'
import { priceCalculatorFunc, INSURANCE_PRICE, PRICE_RATIO } from '../../utils/constants';


export type TCity = {
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

export type TCalcState = {
    from: string | undefined;
    to: string | undefined;
    phone: string | undefined;
    name: string | undefined;
    validatedCityTo?: TCity;
    validatedCityFrom?: TCity;
    orderDistance?: number,
    distanceType?: string
    carType?: {
        name: string,
        placeholder: string,
        icon: string;
        options: {
            ref: boolean,
        },
        regularBids: {
            bid: number,
            bidRef?: number,
        },
        intraregionBids: {
            bid: number,
            bidRef?: number,
        },
        intraCityBids: {
            price: number,
            priceRef?: number,
        }
    }
    isRef?: boolean,
    price?: number
}

const initialState: TCalcState = {
    from: '',
    to: '',
    phone: '',
    name: '',
    isRef: false,
    price: 0
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

        case SET_VALIDATED_CITY: {

            return {
                ...state,
                validatedCityTo: action.payload.direction === 'to' ? action.payload : state.validatedCityTo,
                validatedCityFrom: action.payload.direction === 'from' ? action.payload : state.validatedCityFrom,
                to: action.payload.direction === 'to' ? action.payload.CityName : state.to,
                from: action.payload.direction === 'from' ? action.payload.CityName : state.from
            }
        }
        case SET_ORDER_DISTANCE: {

            let type;
            type = state.validatedCityFrom?.CityName === state.validatedCityTo?.CityName ? 'intracity' :
            action.payload <= 300 ? 'intraregion' : 'regular';


            return {
                ...state,
                orderDistance: action.payload,
                distanceType: type,
            }
        }

        case SET_CAR_TYPE: {

            return {
                ...state,
                carType: action.payload,
                isRef: false
            }
        }
        case SET_ORDER_PRICE: {

            return {
                ...state,
                price: action.payload
            }
        }
        case SET_REF_OPTION: {

            return {
                ...state,
                isRef: action.payload,                  
            }
        }

        case UPDATE_PRICE: {

            return {
                ...state,
                price: priceCalculatorFunc(state, PRICE_RATIO, INSURANCE_PRICE, state.carType, action.payload)
            }
        }

        case RESET_ORDER: {
            return initialState;
        }

        default: return state;
    }
}

