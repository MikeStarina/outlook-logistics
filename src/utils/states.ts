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
export type TOrderState = {
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
        capacity?: string,
        volume?: string,
        icon?: string;
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




export const initialOrderState: TOrderState = {
    from: '',
    to: '',
    phone: '',
    name: '',
    isRef: false,
    price: 0
}