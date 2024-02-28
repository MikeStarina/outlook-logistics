import { TOrderState } from "./types"




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