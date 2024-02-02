import { TOrderState } from "./states";
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


export const priceCalculatorFunc = (orderData: TOrderState, PRICE_RATIO: number, INSURANCE_PRICE: number, selectedCarType: TCarType | undefined, isRef: boolean): number => {

    
    let price = 0;
    
    if (orderData.distanceType === 'regular') {

        
        price = selectedCarType!.regularBids.bid * orderData.orderDistance!;
        price = isRef ? selectedCarType!.regularBids.bidRef! * orderData.orderDistance! : price;
      


      

    }

    if (orderData.distanceType === 'intraregion') {
        
       
        
        price =  selectedCarType!.intraCityBids.price + (selectedCarType!.intraregionBids.bid * orderData.orderDistance!);
        price = isRef ? selectedCarType!.intraCityBids.priceRef! + (selectedCarType!.intraregionBids.bidRef! * orderData.orderDistance!) : price;
        


        //console.log(`Цена фикс+км ${price_two}`)
        
     
        
    }


    if (orderData.distanceType === 'intracity') {

        price = selectedCarType!.intraCityBids.price;
        price = isRef ? selectedCarType!.intraCityBids.priceRef! : price;
     

    }

    price = price / PRICE_RATIO;
    price = price + INSURANCE_PRICE;
    const vat = ( price * 20 ) / ( 20 + 100 );
    price = price - vat;
    price = Math.round(price);
    


    return price;
}
