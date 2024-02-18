'use client'
import React, { useState } from 'react';
import CalcDropdown from '../calc_dropdown/calcDropdown';
import Popup from '../popup/popup';
import useDebouncedFunction from '@/utils/useDebounce';
import { getAtiCitySearchDataFunc, getDistance } from '@/actions/actions';
import { TCitiesArray } from '@/utils/types';
import { TOrderState, initialOrderState, TCity } from '@/utils/states';
import styles from './calc.module.css';
import icon_logo_white from '../../../public/full_logo440px_whiteW.svg';
import Image from 'next/image';
import { INSURANCE_PRICE, PRICE_RATIO, carTypes, priceCalculatorFunc } from '../../utils/constants';






const Calc: React.FC = () => {


    // Стейты




    const [ formData, setFormData ] = useState<{ from: string, to: string }>({ from: '', to: '' })
    const [ calcDropdownVisibility, setCalcDropdownVisibility ] = useState<{ to: boolean, from: boolean}>({
        to: false,
        from: false
    });
    const [ atiCitiesData, setAtiCitiesData ] = useState<{ from: Array<TCitiesArray>, to: Array<TCitiesArray> }>({ from: [], to: [] });
    const [ validatedCity, setValidatedCity ] = useState<{ validatedCityTo: TCity | undefined, validatedCityFrom: TCity | undefined, to: string, from: string }>({
        validatedCityTo: undefined,
        validatedCityFrom: undefined,
        to: '',
        from: '',
    })
    const [ orderData, setOrderData] = useState<TOrderState>(initialOrderState);
    const [ popupVisibility, setPopupVisibility ] = useState<boolean>(false);



    // Эта штука устанавливает видимость дропдаунов и запрашивает поиск по введенному городу




    const setOpacity = async (data: { id: string, value: string }) => {
        setCalcDropdownVisibility(
            {
                from: data.id === 'from' && data.value !== '' ? true : false,
                to:  data.id === 'to' && data.value !== ''? true : false
            }
        )
            
        const userCityData = {
            userCity: data.value,
            direction: data.id
        }

        userCityData.userCity && getAtiCitySearchDataFunc(userCityData, setAtiCitiesData, atiCitiesData);
    }


    // дебаунс



    const debouncedDropdown = useDebouncedFunction((data: { id: string, value: string }) => setOpacity(data), 500)





    // Хэндлер инпутов




    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {

        const data: { id: string, value: string } = {
            id: e.currentTarget.id,
            value: e.currentTarget.value
        }
        
        debouncedDropdown(data);

        setFormData(
            {
                from: e.currentTarget.id === 'from' ? e.currentTarget.value : formData.from,
                to: e.currentTarget.id === 'to' ? e.currentTarget.value : formData.to
            }
        )
    }


    // Кликхэндлер для дропдауна


    const onClickHandler = (e: React.SyntheticEvent<HTMLDivElement>, data: any) => {

        const index = parseInt(e.currentTarget.id);
        const city = data[index];

        let newFormData = {
            to: city.direction === 'to' ? city.CityName : formData.to,
            from: city.direction === 'from' ? city.CityName : formData.from
        }        


        setFormData({...newFormData})

        setValidatedCity(
            {
                validatedCityFrom: city.direction === 'from' ? city : validatedCity.validatedCityFrom,
                validatedCityTo: city.direction === 'to' ? city : validatedCity.validatedCityTo,
                from: city.direction === 'from' ? city.cityName : validatedCity.from,
                to: city.direction === 'to' ? city.cityName : validatedCity.to
            }
        )

        setCalcDropdownVisibility({
                from: false,
                to:  false
        })
       
    }


    

    // Сабмит формы с городами



    const formSubmitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validatedCity.validatedCityFrom || !validatedCity.validatedCityTo) return;

        let data = orderData;
        /*
        setOrderData({
            validatedCityFrom: validatedCity.validatedCityFrom,
            validatedCityTo: validatedCity.validatedCityTo,
            ...orderData
        }) */

        const distanceData = {
            from: validatedCity.validatedCityFrom,
            to: validatedCity.validatedCityTo
        }

        const response = await getDistance(distanceData, orderData, setOrderData);

        let type;
        type = distanceData.from?.CityName === distanceData.to?.CityName ? 'intracity' :
        response.distance <= 300 ? 'intraregion' : 'regular';


        data.validatedCityFrom = validatedCity.validatedCityFrom,
        data.validatedCityTo = validatedCity.validatedCityTo,
        data.to = validatedCity.validatedCityTo?.CityName,
        data.from = validatedCity.validatedCityFrom?.CityName,
        data.orderDistance = await response.distance,
        data.distanceType = type,
        data.price = priceCalculatorFunc(data, PRICE_RATIO, INSURANCE_PRICE, data.carType, false)
            
    
        
        setOrderData({...data})

        setFormData({
            from: '',
            to: ''
        })
        //e.currentTarget.reset();
        setPopupVisibility(true);
    } 





   
    return (
        

            <>
            {!popupVisibility ? (<><form className={styles.calc_box} onSubmit={formSubmitHandler}>
                <div className={styles.title_wrapper}>
                    <Image src={icon_logo_white} alt='логотип' className={styles.title_logo} />  
                    <div className={styles.line}></div>                  
                    <h1 className={styles.calc_title}>РАССЧИТАТЬ&nbsp;FTL&nbsp;АВТОПЕРЕВОЗКУ</h1>
                </div>
                
                <div className={styles.wrapper}>
                    <div className={styles.input_wrapper}>
                        {/*<label htmlFor='from' className={styles.input_label}>Откуда:</label>*/}
                        <input type='text' className={styles.input} name='from' id='from' onChange={onChangeHandler} value={formData.from} autoComplete='off' placeholder='Откуда'></input>
                        {calcDropdownVisibility.from && <CalcDropdown onClickHandler={onClickHandler} data={atiCitiesData.from} />}
                    </div>
                    <div className={styles.input_wrapper}>
                        {/*<label htmlFor='to' className={styles.input_label}>Куда:</label>*/}
                        <input type='text' className={styles.input} name='to' id='to' onChange={onChangeHandler} value={formData.to} autoComplete='off' placeholder='Куда'></input>
                        {calcDropdownVisibility.to && <CalcDropdown onClickHandler={onClickHandler} data={atiCitiesData.to} />}
                    </div>

                    <button type='submit' className={styles.submit_button} disabled={!validatedCity.validatedCityFrom || !validatedCity.validatedCityTo}>Рассчитать</button>
                </div>
                <div className={styles.title_wrapper}>                
                    <p className={styles.text}>{`Моментальный расчет перевозки в два клика прямо на сайте! Страховое покрытие на 1 миллион рублей уже включено в стоимость!`}</p>
                </div>
            </form>
            
            </>
            ) : (
                <div className={styles.calc_box}>
                    <Popup 
                        setPopupVisibility={setPopupVisibility}
                        orderData={orderData}
                        setOrderData={setOrderData}
                        popupVisibility={popupVisibility}
                        setValidatedCity={setValidatedCity}
                    />
                </div>
            )}
            </>
        
    );
};

export default Calc;