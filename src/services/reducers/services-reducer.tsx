import { GET_SERVICES } from "../actions/services-actions";
import { TServicesActions } from "../actions/services-actions";



type TServicesStateObj =  {
        name: string;
        url: string;
        pagePosition: 'primary' | 'secondary';
        metadata?: {
            title: string;
            description: string;
            keywords: string;
        }
}



const initialState: Array<TServicesStateObj> = [
    {
        name: 'Автомобильные перевозки',
        url: 'avtomobilnye-perevozki',
        pagePosition: 'primary',
        metadata: {
            title: 'Автомобильные грузоперевозки в Санкт-Петербурге цена услуги в компании outlook-logistics',
            description: 'Грузовые автомобильные перевозки по России и Санкт-Петербургу цена услуги в логистической компании Outlook Logistics. Заказать машину для перевозки груза дешево на сайте компании.',
            keywords: 'автомобильные перевозки, автомобильные грузоперевозки, санкт-петербург, услуга, заказать, машина, для перевозки, цена'
        }
    },
    {
        name: 'Железнодорожные перевозки',
        url: 'zheleznodorozhnye-perevozki',
        pagePosition: 'primary',
        metadata: {
            title: 'Железнодорожные перевозки грузов в Санкт-Петербурге цены в компании outlook-logistics',
            description: 'ЖД перевозки грузов цены в Санкт-Петербурге в логистической компании Outlook Logistics. Заказать РЖД перевозку грузов и рассчитать стоимость услуги вы можете на сайте компании.',
            keywords: 'железнодорожные перевозки, жд перевозки, ржд перевозки, цена, санкт-петербург, заказать, рассчитать ,цены, стоимость, компания, услуга, грузов'
        }
    },
    {
        name: 'Перевозки с охраной',
        url: 'perevozki-s-okhranoj',
        pagePosition: 'primary',
        metadata: {
            title: 'Вооруженное сопровождение грузов в Санкт-Петербурге цена в компании outlook-logistics',
            description: 'Перевозка грузов с сопровождением и охраной в Санкт-Петербурге цена услуги в транспортной компании Outlook Logistics. Заказать перевозку груза с охраной вы можете на сайте компании.',
            keywords: 'Перевозки с охраной, сопровождение грузов, вооруженное, санкт-петербург, услуга, цена, транспортная компания'
        }
    },
]



export const serviceReducer = (state = initialState, action: TServicesActions) => {
    switch(action) {

        default: return state;
    }
} 