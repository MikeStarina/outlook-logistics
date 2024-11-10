import { TFescoCarTypes, TOrderState, TCarType } from "./types";
import { TServicesStateObj } from "@/service/services";
import { TItem } from "@/service/features";
import carImage from '../../public/car-main.png';
import trallImage from '../../public/car-main-trall.png';
import trainImage from '../../public/car-main-train.png';
import gazImage from '../../public/car-main-gazelle.png';


//export const apiUrl = 'http://localhost:9000';
//export const apiUrl = 'http://95.163.236.246:9000';
export const apiUrl = 'https://outlook-logistics.ru';

export const INSURANCE_PRICE = 1000 //ПОКРЫВАЕТ 1 000 000 Р.
export const PRICE_RATIO = 0.8


export const fescoCarTypes: Array<TFescoCarTypes> = [
    {
      wte_uid: 29,
      ct_code: "20DC",
      wte_description: "(&le;24t)",
      ct_comment: "20' dry cargo",
      text: "20' dry cargo (≤24t) (20DC)",
      custom_text: "20 фут, универс. (20’ DС) до 24 т",
      custom_text_latin: "20 ft, dry container ≤24t (20’ DС)"
    },
    {
      wte_uid: 30,
      ct_code: "20DC-1",
      wte_description: "(>24t, &le;28t)",
      ct_comment: "20' dry cargo",
      text: "20' dry cargo (>24t, ≤28t) (20DC)",
      custom_text: "20 фут, универс. (20’ DС) 24-28 т",
      custom_text_latin: "20 ft, dry container 24-28t (20’ DС)"
    },
    {
      wte_uid: 42,
      ct_code: "40HC",
      wte_description: " ",
      ct_comment: "40' high cube",
      text: "40' high cube   (40HC)",
      custom_text: "40 фут, высокий (40’ HC) ≤ 28т",
      custom_text_latin: "40 ft, high cube (40’ HC) ≤ 28т"
    }
  ]

export const getServices = async (): Promise<Array<TServicesStateObj>> => {
    const data: Array<TServicesStateObj> = await fetch(`${apiUrl}/api/services/`, {
        next: { revalidate: 3600 },
        method: 'GET'
    }).then(res => res.json());

    //const data: Array<TServicesStateObj> = [];

    if (!data) {
        return [];
    }
    return data;
}
export const getFeatures = async (): Promise<Array<TItem>> => {
    const data: Array<TItem> = await fetch(`${apiUrl}/api/features/`, {
        next: { revalidate: 3600 },
        method: 'GET'
    }).then(res => res.json());

    //const data: Array<TItem> = [];

    if (!data) {
        return [];
    }

    return data;
}


export const carTypes: Array<TCarType> = [
    {
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
    {
        name: '5000',
        placeholder: '5 Тонн',
        capacity: '6,2 х 2,48 х 2,73 м.',
        volume: '30 куб. м.',
        options: {
            ref: true,
        },
        regularBids: {
            bid: 60,
            bidRef: 65,
        },
        intraregionBids: {
            bid: 60,
            bidRef: 65,
        },
        intraCityBids: {
            price: 8500,
            priceRef: 9500,
        }
    },
    {
        name: '20000',
        placeholder: '20 Тонн',
        capacity: '13,62 х 2,48 х 2,73 м.',
        volume: '90 куб. м.',
        options: {
            ref: true,
        },
        regularBids: {
            bid: 91,
            bidRef: 108,
        },
        intraregionBids: {
            bid: 91,
            bidRef: 108,
        },
        intraCityBids: {
            price: 17000,
            priceRef: 19000,
        }
    },
    {
        name: 'trall',
        placeholder: 'Тралл',
        options: {
            ref: false,
        },
        regularBids: {
            bid: 160,
        },
        intraregionBids: {
            bid: 160,
        },
        intraCityBids: {
            price: 24000,
        }
    },
]


export const priceCalculatorFunc = (distance: number | undefined , PRICE_RATIO: number, INSURANCE_PRICE: number, selectedCarType: TCarType | undefined, isRef: boolean): {price: number, distanceType: string} => {


    let price = 0;
    const distanceType = distance && distance === 0 ? 'intracity' : distance && distance <= 300 ? 'intraregion' : 'regular'

    if (distanceType === 'regular') {


        price = selectedCarType!.regularBids.bid * distance!;
        price = isRef ? selectedCarType!.regularBids.bidRef! * distance! : price;





    }

    if (distanceType === 'intraregion') {



        price = selectedCarType!.intraCityBids.price + (selectedCarType!.intraregionBids.bid * distance!);
        price = isRef ? selectedCarType!.intraCityBids.priceRef! + (selectedCarType!.intraregionBids.bidRef! * distance!) : price;




    }


    if (distanceType === 'intracity') {

        price = selectedCarType!.intraCityBids.price;
        price = isRef ? selectedCarType!.intraCityBids.priceRef! : price;


    }

    price = price / PRICE_RATIO;
    price = price + INSURANCE_PRICE;
    const vat = (price * 20) / (20 + 100);
    price = price - vat;
    price = Math.round(price);



    return {price, distanceType};
}



export const transportCards = [
    {
        name: 'ДО 1,5 ТОНН',
        description: 'рефрижератор / изотерм / тент',
        cover: gazImage,
        quantity: 20,
        features: [
            'Температурный режим +12/-20 градусов',
            'Контроль соблюдения температурного режима',
            'Мониторинг GPS/ГЛОНАСС',
            '5 европаллет / 12 кубических метров'
        ]
    },
    {
        name: 'ДО 5 ТОНН',
        description: 'рефрижератор / изотерм',
        cover: carImage,
        quantity: 9,
        features: [
            'Температурный режим +12/-20 градусов',
            'Контроль соблюдения температурного режима',
            'Мониторинг GPS/ГЛОНАСС',
            '15 европаллет / 32 кубических метра'
        ]
    },
    {
        name: 'ДО 9 ТОНН',
        description: 'рефрижератор / изотерм',
        cover: carImage,
        quantity: 4,
        features: [
            'Температурный режим +12/-20 градусов',
            'Контроль соблюдения температурного режима',
            'Мониторинг GPS/ГЛОНАСС',
            '18 европаллет / 40 кубических метров'
        ]
    },
    {
        name: 'ДО 20 ТОНН',
        description: 'тент',
        cover: carImage,
        quantity: 3,
        features: [
            'Мониторинг GPS/ГЛОНАСС',
            '32 европаллет / 92 кубических метра'
        ]
    },
    {
        name: 'ДО 65 ТОНН',
        description: 'трал',
        cover: trallImage,
        quantity: 7,
        features: [
            'Длинна 10+3 метра',
            'Ширинна до 3 метров',
            'Мониторинг GPS/ГЛОНАСС'
        ]
    },
    {
        name: 'RC 20 DC',
        description: 'ж/д контейнер 20 футов',
        cover: trainImage,
        quantity: null,
        features: [
            'Различные варианты загрузки',
            'Реф/Изотерм',
            '11 европаллет / 38 кубических метров'
        ]
    },
    {
        name: 'RC 40 HC',
        description: 'ж/д контейнер 40 футов',
        cover: trainImage,
        quantity: null,
        features: [
            'Различные варианты загрузки',
            '25 европаллет / 75 кубических метров'
        ]
    }
];
