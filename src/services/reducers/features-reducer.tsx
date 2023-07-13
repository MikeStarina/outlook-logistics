import React from "react";
import { TFeaturesActions } from "../actions/features-actions";


type TItem = {
    slug: string;
    serviceType: string;
    name: string;
    title: string;
    description?: string;
    truck_params?: {
        size?: string;
        weight?: string;
        volume?: string;
        capacity?: string;
    }
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
} | undefined;

type TInitialState = Array<TItem | undefined>



const initialState: TInitialState = [
    {
        slug: '20-tonn',
        serviceType: 'avtomobilnye-perevozki',
        name: 'АВТОПЕРЕВОЗКИ 20 ТОНН',
        title: 'Автоперевозки 20 тонн',
        description: '',
        truck_params: {
            size: 'ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 13,62 х 2,48 х 2,73',
            weight: 'ГРУЗОПОДЬЕМНОСТЬ: 20 ТОНН',
            volume: 'ОБЪЕМ: 90 м3',
            capacity: 'ВМЕСТИМОСТЬ: 33 ЕВРОПАЛЛЕТ',
        },
        metaTitle: 'Грузоперевозки 20 тонн фурами в Санкт-Петербурге цены в логистической компании outlook-logistics',
        metaDescription: 'Грузоперевозки 20 тонн фурами по Санкт-Петербургу и России цены в логистической компании Outlook. Автоперевозка 20 тонн рассчитать стоимость услуги вы можете на сайте компании.',
        metaKeywords: 'грузоперевозки 20 тонн, фурами, автоперевозки 20 тонн, санкт-петербург, услуга, цена, рассчитать, стоимость, логистическая компания',
    },
    {
        slug: '5-tonn',
        serviceType: 'avtomobilnye-perevozki',
        name: 'АВТОПЕРЕВОЗКИ 5 ТОНН',
        title: 'Автоперевозки 5 тонн',
        description: '',
        truck_params: {
            size: 'ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 6,2 х 2,48 х 2,73',
            weight: 'ГРУЗОПОДЬЕМНОСТЬ: 5 ТОНН',
            volume: 'ОБЪЕМ: 30 м3',
            capacity: 'ВМЕСТИМОСТЬ: 15 ЕВРОПАЛЛЕТ',
        },
        metaTitle: 'Грузоперевозки 5 тонн в Санкт-Петербурге цены в логистической компании outlook-logistics',
        metaDescription: 'Грузоперевозки 5 тонн по России и Санкт-Петербургу цены в логистической компании Outlook. Заказать грузоперевозку 5 тонн вы можете на сайте транспортной компании.',
        metaKeywords: 'грузоперевозки 5 тонн, санкт-петербург, цена, логистическая компания, заказать, автоперевозка, перевозка, 5 т'
    },
    {
        slug: '1-5-tonn',
        serviceType: 'avtomobilnye-perevozki',
        name: 'АВТОПЕРЕВОЗКИ 1,5 ТОНН',
        title: 'Автоперевозки 1.5 тонны',
        description: '',
        truck_params: {
            size: 'ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 3 х 1,9 х 2',
            weight: 'ГРУЗОПОДЬЕМНОСТЬ: 1,5 ТОННы',
            volume: 'ОБЪЕМ: 9 м3',
            capacity: 'ВМЕСТИМОСТЬ: 4 ЕВРОПАЛЛЕТ',
        },
        metaTitle: 'Грузоперевозки 1.5 тонны в Санкт-Петербурге цены в логистической компании outlook-logistics',
        metaDescription: 'Перевозка 1.5 тонн по России и Санкт-Петербургу цены в логистической компании Outlook. Заказать грузоперевозку 1.5 тонн недорого вы можете на сайте транспортной компании.',
        metaKeywords: 'грузоперевозки 1.5 тонн, санкт-петербург, цена, логистическая компания, заказать, автоперевозка, перевозка, 1.5 т',
    },
    {
        slug: 'negabaritnye',
        serviceType: 'avtomobilnye-perevozki',
        name: 'НЕГАБАРИТНЫЕ ПЕРЕВОЗКИ',
        title: 'Негабаритные перевозки',
        description: '',
        truck_params: {
            size: 'АВТОМАШИНЫ 1,5, 5 ИЛИ 20 ТОНН',
            weight: 'ТЕМПЕРАТУРНЫЙ РЕЖИМ ОТ -20 ДО +20 ГРАДУСОВ',
            volume: 'АВТОНОМНАЯ РЕЗЕРВНАЯ СИСТЕМА',
            capacity: 'ГАРАНТИЯ СОХРАННОСТИ ГРУЗА',
        },
        metaTitle: 'Перевозка негабаритных грузов автотранспортом в Санкт-Петербурге цены в компании outlook-logistics',
        metaDescription: 'Автомобильные негабаритные перевозки в Санкт-Петербурге цена в транспортной компании Outlook Logistics. Авто перевозки негабаритных грузов заказать услугу недорого на сайте компании.',
        metaKeywords: 'негабаритные перевозки, санкт-петербург, цена, россия, заказать, логистическая компания, автомобильные, авто перевозки'
    },
    {
        slug: 'refrizheratornye',
        serviceType: 'avtomobilnye-perevozki',
        name: 'РЕФРИЖЕРАТОРНЫЕ ПЕРЕВОЗКИ',
        title: 'Рефрижераторные перевозки',
        description: '',
        truck_params: {
            size: 'АВТОМАШИНЫ 1,5, 5 ИЛИ 20 ТОНН',
            weight: 'ТЕМПЕРАТУРНЫЙ РЕЖИМ ОТ -20 ДО +20 ГРАДУСОВ',
            volume: 'АВТОНОМНАЯ РЕЗЕРВНАЯ СИСТЕМА',
            capacity: 'ГАРАНТИЯ СОХРАННОСТИ ГРУЗА',
        },
        metaTitle: 'Грузоперевозки 1.5 тонны в Санкт-Петербурге цены в логистической компании outlook-logistics',
        metaDescription: 'Перевозка 1.5 тонн по России и Санкт-Петербургу цены в логистической компании Outlook. Заказать грузоперевозку 1.5 тонн недорого вы можете на сайте транспортной компании.',
        metaKeywords: 'грузоперевозки 1.5 тонн, санкт-петербург, цена, логистическая компания, заказать, автоперевозка, перевозка, 1.5 т'
    },
    {
        slug: 'kontejnernye',
        serviceType: 'zheleznodorozhnye-perevozki',
        name: 'КОНТЕЙНЕРНЫЕ ПЕРЕВОЗКИ',
        title: 'Контейнерные перевозки (железнодорожные)',
        description: '',
        truck_params: {
            size: '',
            weight: '',
            volume: '',
            capacity: 'ГАРАНТИЯ СОХРАННОСТИ ГРУЗА',
        },
        metaTitle: 'Контейнерные ЖД перевозки цены в Санкт-Петеребурге в транспортной компании outlook-logistics',
        metaDescription: 'Контейнерные РЖД перевозки грузов в Санкт-Петербурге цены в логистической компании Outlook Logistics. Заказать контейнерные перевозки ЖД транспортом рассчитать услугу на сайте.',
        metaKeywords: 'контейнерные жд перевозки, контейнерные ржд перевозки, санкт-петербург, цены, рассчитать, жд траспорт, заказать, услуга, транспортная компания'
    },
    
]



export const featuresReducer = (state = initialState, action: TFeaturesActions) => {
    switch (action) {



        default: return state;
    }
}