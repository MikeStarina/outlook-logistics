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
    price: 0,
    carType: {
        name: '1500',   // - Это тип кузова
        placeholder: '1,5 Тонны',
        capacity: '3 х 1,9 х 2 м.',
        volume: '9 куб. м.',
        options: {
            ref: true,
        },
        regularBids: { // - это ставки при дистанции более 300км
            bid: 36, // - ставка за обычный кузов (написать вместо 20)
            bidRef: 42, // - ставка за реф кузов (написать вместо 20)
        },
        intraregionBids: { // - это ставки при дистанции менее 300км
            bid: 36,
            bidRef: 42,
        },
        intraCityBids: {  // - это ставки внутри города
            price: 5000,
            priceRef: 6000,
        }
    },
}