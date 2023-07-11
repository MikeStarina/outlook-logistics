import { TCalcState } from "../services/reducers/calcReducer";
import truck1500 from '../images/truck1500.svg';
import truck5000 from '../images/truck5000.svg';
import truck20000 from '../images/truck20000.svg';
import truckTrall from '../images/truckTrall.svg';



//export const apiUrl = 'http://localhost:9000';
//export const apiUrl = 'http://95.163.236.246:9000';
export const apiUrl = 'https://outlook-logistics.ru';

export const INSURANCE_PRICE=1000 //ПОКРЫВАЕТ 1 000 000 Р.
export const PRICE_RATIO=0.8




export type TCarType = {
    name: string,
    placeholder: string,
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

export const carTypes: Array<TCarType> = [
    {
        name: '1500',   // - Это тип кузова
        placeholder: '1,5 Т',
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
        placeholder: '5 Т',
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
        placeholder: '20 Т',
        options: {
            ref: true,
        },
        regularBids: {
            bid: 91,
            bidRef: 108,
        },
        intraregionBids: {
            bid: 158,
            bidRef: 176,
        },
        intraCityBids: {
            price: 17000,
            priceRef: 19000,
        }
    },
    {
        name: 'trall',
        placeholder: 'ТРАЛЛ',
        options: {
            ref: false,
        },
        regularBids: {
            bid: 160,
        },
        intraregionBids: {
            bid: 220,
        },
        intraCityBids: {
            price: 24000,
        }
    },
]


export const priceCalculatorFunc = (orderData: TCalcState, PRICE_RATIO: number, INSURANCE_PRICE: number, selectedCarType: TCarType | undefined, isRef: boolean): number => {

    
    let price = 0;
    
    if (orderData.distanceType === 'regular') {

        
        price = selectedCarType!.regularBids.bid * orderData.orderDistance!;
        price = isRef ? selectedCarType!.regularBids.bidRef! * orderData.orderDistance! : price;
      


      

    }

    if (orderData.distanceType === 'intraregion') {

        price = selectedCarType!.intraregionBids.bid * orderData.orderDistance!;
        price = isRef ? selectedCarType!.intraregionBids.bidRef! * orderData.orderDistance! : price;
     

    }


    if (orderData.distanceType === 'intracity') {

        price = selectedCarType!.intraCityBids.price;
        price = isRef ? selectedCarType!.intraCityBids.priceRef! : price;
     

    }

    price = price / PRICE_RATIO;
    price = price + INSURANCE_PRICE;
    price = Math.round(price);
    


    return price;
}
