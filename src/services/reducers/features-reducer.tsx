import React from "react";
import { TFeaturesActions } from "../actions/features-actions";


type TItem = {
    id: number;
    title: string;
    description?: string;
    truck_params?: {
        size?: string;
        weight?: string;
        volume?: string;
        capacity?: string;
    }
} | undefined;

type TInitialState = Array<TItem | undefined>



const initialState: TInitialState = [
    {
        id: 0,
        title: 'АВТОПЕРЕВОЗКИ ОТ 20 ТОНН',
        description: '',
        truck_params: {
            size: 'ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 13,62 х 2,48 х 2,73',
            weight: 'ГРУЗОПОДЬЕМНОСТЬ: 20 ТОНН',
            volume: 'ОБЪЕМ: 90 м3',
            capacity: 'ВМЕСТИМОСТЬ: 33 ЕВРОПАЛЛЕТ',
        },
    },
    {
        id: 1,
        title: 'АВТОПЕРЕВОЗКИ ДО 5 ТОНН',
        description: '',
        truck_params: {
            size: 'ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 6,2 х 2,48 х 2,73',
            weight: 'ГРУЗОПОДЬЕМНОСТЬ: 5 ТОНН',
            volume: 'ОБЪЕМ: 30 м3',
            capacity: 'ВМЕСТИМОСТЬ: 15 ЕВРОПАЛЛЕТ',
        },
    },
    {
        id: 2,
        title: 'АВТОПЕРЕВОЗКИ ДО 1,5 ТОНН',
        description: '',
        truck_params: {
            size: 'ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 3 х 1,9 х 2',
            weight: 'ГРУЗОПОДЬЕМНОСТЬ: 1,5 ТОННы',
            volume: 'ОБЪЕМ: 9 м3',
            capacity: 'ВМЕСТИМОСТЬ: 5 ЕВРОПАЛЛЕТ',
        },
    },
    {
        id: 3,
        title: 'РЕФРИЖЕРАТОРНЫЕ ПЕРЕВОЗКИ',
        description: '',
        truck_params: {
            size: 'АВТОМАШИНЫ 1,5, 5 ИЛИ 20 ТОНН',
            weight: 'ТЕМПЕРАТУРНЫЙ РЕЖИМ ОТ -20 ДО +20 ГРАДУСОВ',
            volume: 'АВТОНОМНАЯ РЕЗЕРВНАЯ СИСТЕМА',
            capacity: 'ГАРАНТИЯ СОХРАННОСТИ ГРУЗА',
        },
    },
    {
        id: 4,
        title: 'НЕГАБАРИТНЫЕ ПЕРЕВОЗКИ',
        description: '',
        truck_params: {
            size: 'КОНИКИ, АВТОПЛАТФОРМЫ, АВТОКРАНЫ',
            weight: 'ЛЮБОЙ ВЕС И ОБЪЕМ',
            volume: 'ИНДИВИДУАЛЬНЫЙ РАСЧЕТ',
            capacity: 'ДОПОЛНИТЕЛЬНОЕ СТРАХОВАНИЕ',
        },
    },
    {
        id: 5,
        title: 'ПЕРЕВОЗКИ С ОХРАНОЙ',
        description: '',
        truck_params: {
            size: 'ВЫСОКАЯ НАДЕЖНОСТЬ',
            weight: 'ДОПОЛНИТЕЛЬНОЕ СТРАХОВАНИЕ',
            volume: 'УСИЛЕННАЯ ВООРУЖЕННАЯ ОХРАНА',
            capacity: 'КОНТРОЛЬ ПЕРЕВОЗКИ НА ВСЕХ ЭТАПАХ',
        },
    },
]



export const featuresReducer = (state = initialState, action: TFeaturesActions) => {
    switch (action) {



        default: return state;
    }
}