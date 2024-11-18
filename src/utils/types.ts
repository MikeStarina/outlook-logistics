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





export type TFescoLocations = {
    country_code: number, 
    country_name: string,
    country_name_latin: string,
    country_short_name: string,
    loc_code: null,
    loc_latitude: number,
    loc_longitude: number,
    loc_lt_code: string,
    loc_name: string,
    loc_name_latin: string,
    loc_softship_code: string,
    loc_uid: number,
    text: string,
    text_latin: string,
}

export type TFescoLocationsResponse = {
    parsedCities: {
        message: string,
        data: Array<TFescoLocations>
    }
}


export type TFescoCarTypes =  {
    wte_uid: number,
    ct_code: string,
    wte_description: string,
    ct_comment: string,
    text: string,
    custom_text: string,
    custom_text_latin: string
  }

  export type TCarType = {
    name: string,
    placeholder: string,
    capacity?: string,
    volume?: string,
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



export type TFescoBidsQueryParams = {
    from: number,
    to: number,
    wte: number,
}



export type TFescoBidsDataObject = {
    agr_uid: null | any,
    agrk_name: string,
    clients: null | any
    clients__json: string,
    clnt_name: null | string,
    co: string,
    comment: null | string,
    country_code_from: number,
    country_code_to: number,
    country_name_from: string,
    country_name_latin_from: string,
    country_name_latin_to: string,
    country_name_to: string,
    country_short_name_from: string,
    country_short_name_to: string,
    ct_code: string,
    currency_guard: string, 
    currency_segment1: string,
    currency_segment2: string,
    custr_code: string,
    deliveryterm: string,
    deliveryterm_gate: null | any,
    guard_segment: number, 
    is_train: number,
    le_code: string,
    loc_latitude_from: number,
    loc_latitude_to: number,
    loc_longitude_from: number,
    loc_longitude_to: number,
    loc_name_from: string,
    loc_name_to: string
    loc_uid_gate: null | any,
    loc_uid_gate__info: null | any,
    loc_uid_to_rail: null | any,
    loc_uid_to_rail__info: null | any,
    mrg: null | any,
    podberth: null | any,
    polberth: null | any,
    rail_cond: string,
    rcg_first: number,
    rcg_last: number,
    reqg_loc_uid_from: number,
    reqg_loc_uid_from__info: any,
    reqg_loc_uid_to: number,
    reqg_loc_uid_to__info: any,
    reqg_wte_uid: number,
    reqg_wte_uid__info: any,
    request_type: number,
    ro_add_services: number,
    ro_agrk_uid: number,
    ro_base_tariff: boolean,
    ro_clnt_code_6: null | any
    ro_code: string,
    ro_custr_uid: number,
    ro_date_from: string,
    ro_date_to: string,
    ro_description: string,
    ro_fgr_uid: null | any,
    ro_hide_on_site: boolean,
    ro_is_express: boolean,
    ro_is_public: number
    ro_text: string,
    ro_text_latin: string,
    ro_uid: number,
    roday: number,
    roundtrip: null | any,
    rrg_first: number,
    rrg_last: number,
    segments: string,
    segments__arr: Array<any>,
    segments__json: string,
    service: null | any,
    shipmentmode: null | any,
    sum_guard: number,
    sum_segment1: number,
    sum_segment2: number,
    trans_type: number,
    uuid: string,
}




export type TFescoBidsResponse = {
    data: Array<TFescoBidsDataObject>,
    message: string,
}

export type TOrderState = {
    orderType: string,
    from: string | undefined;
    to: string | undefined;
    phone: string | undefined;
    name: string | undefined;
    validatedCityTo?: TCity | TFescoLocations;
    validatedCityFrom?: TCity | TFescoLocations;
    orderDistance?: number,
    distanceType?: string
    zdCarType?: TFescoCarTypes,
    carType?: TCarType,
    isRef?: boolean,
    price?: number
}

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


export type TAtiCitySearchResponse = {
    direction: string,
    cities: Array<TCity>,
}


export type TDirections = {
    "from": string,
    "to": string,
    "meta_title": string,
    "meta_keywords": string,
    "meta_description": string,
    "content": string,
    "type": string,
    "slug": string
}