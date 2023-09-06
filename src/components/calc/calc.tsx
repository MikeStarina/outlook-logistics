import React, { useState } from 'react';
import styles from './calc.module.css';
import { useSelector, useDispatch } from '../..';
import { GET_FORM_DATA } from '../../services/actions/calc-actions';
import { POPUP_VISIBILITY } from '../../services/actions/utils-actions';
import CalcDropdown from '../calc_dropdown/calcDropdown';
import useDebouncedFunction from '../../utils/useDebounce';
import { GET_ATI_CITYSEARCH_DATA, getAtiCitySearchDataFunc } from '../../services/actions/ati-actions';
import { DROPDOWN_VISIBILITY } from '../../services/actions/utils-actions';
import { getDistance } from '../../services/actions/ati-actions';
import { TCalcState } from '../../services/reducers/calcReducer';
import { useParams } from 'react-router';





const Calc: React.FC = () => {
    const { atiCitySearchDataTo, atiCitySearchDataFrom } = useSelector(store => store.ati);
    const { from, to, validatedCityTo, validatedCityFrom } = useSelector<TCalcState>(store => store.calc);
    const { isCalcDropdownToVisible, isCalcDropdownFromVisible } = useSelector(store => store.utils);
    const dispatch = useDispatch();
    const { id } = useParams();

    

    const titleSwitcher = ( id: string | undefined) => {

        let title = 'РАССЧИТАТЬ ПЕРЕВОЗКУ';

        if (id && id === 'avtomobilnye-perevozki') {
            title = 'АВТОПЕРЕВОЗКИ';
        }
        if (id && id === 'zheleznodorozhnye-perevozki') {
            title = 'ЖЕЛЕЗНОДОРОЖНЫЕ ПЕРЕВОЗКИ';
        }
        if (id && id === 'perevozki-s-okhranoj') {
            title = 'ПЕРЕВОЗКА С ОХРАНОЙ';
        }
        if (id && id === 'perevozka-sbornih-gruzov') {
            title = 'ПЕРЕВОЗКА СБОРНЫХ ГРУЗОВ';
        }
        if (id && id === 'morskie-perevozki') {
            title = 'МОРСКИЕ ПЕРЕВОЗКИ';
        }
        if (id && id === 'multimodalnie-perevozki') {
            title = 'МУЛЬТИМОДАЛЬНЫЕ ПЕРЕВОЗКИ';
        }
        if (id && id === 'opasnie-gruzi') {
            title = 'ОПАСНЫЕ ГРУЗЫ';
        }
        if (id && id === 'perevozki-s-temperaturnim-rezhimom') {
            title = 'ПЕРЕВОЗКИ С ТЕМПЕРАТУРНЫМ РЕЖИМОМ';
        }
        if (id && id === 'konteinernie-perevozki') {
            title = 'КОНТЕЙНЕРНЫЕ ПЕРЕВОЗКИ';
        }
        if (id && id === 'perevozka-stroimaterialov') {
            title = 'ПЕРЕВОЗКА СТРОЙМАТЕРИАЛОВ';
        }
        if (id && id === 'negabaritnie-perevozki') {
            title = 'НЕГАБАРИТНЫЕ ПЕРЕВОЗКИ';
        }
        if (id && id === 'perevozka-tnp') {
            title = 'ГРУЗОПЕРЕВОЗКИ ТНП';
        }
        if (id && id === 'perevozka-tehniki') {
            title = 'ПЕРЕВОЗКА ТЕХНИКИ';
        }
        if (id && id === 'perevozka-transporta') {
            title = 'ПЕРЕВОЗКА ТРАНСПОРТА';
        }
        if (id && id === 'perevozka-metalla') {
            title = 'ПЕРЕВОЗКА МЕТАЛЛА';
        }

        return title;
    }

    const title = titleSwitcher(id);



  

    const setOpacity = (data: any) => {
        data.id === 'from' && data.value !== '' ? dispatch({type: DROPDOWN_VISIBILITY, payload: true, direction: 'from'}) : dispatch({type: DROPDOWN_VISIBILITY, payload: false, direction: 'from'});
        data.id === 'to' && data.value !== '' ? dispatch({type: DROPDOWN_VISIBILITY, payload: true, direction: 'to'}) : dispatch({type: DROPDOWN_VISIBILITY, payload: false, direction: 'to'});
        

        
        const userCityData = {
            userCity: data.value,
            direction: data.id
        }

        userCityData.userCity && dispatch(getAtiCitySearchDataFunc(userCityData))
    }
    const debouncedDropdown = useDebouncedFunction((data: any) => setOpacity(data), 500)

    const onChangeHandler = async (e: React.SyntheticEvent<HTMLInputElement>) => {

        const data: any ={
            id: e.currentTarget.id,
            value: e.currentTarget.value
        }
        
        debouncedDropdown(data);
        
       
        dispatch({
            type: GET_FORM_DATA,
            payload: e.currentTarget.value,
            id: e.currentTarget.id,
        })

        
    }


    const formSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(validatedCityFrom && validatedCityTo) {
            //console.log(validatedCityFrom)
            const distanceData = {
                from: validatedCityFrom,
                to: validatedCityTo
            }

            dispatch(getDistance(distanceData));
        }
    }




    return(
        <form className={styles.calc_box} onSubmit={formSubmitHandler}>
            <h1 className={styles.calc_title}>{title}</h1>
            <div className={styles.input_wrapper}>
                <label htmlFor='from' className={styles.input_label}>Откуда:</label>
                <input type='text' className={styles.input} name='from' id='from' onChange={onChangeHandler} value={from} autoComplete='off'></input>
                {isCalcDropdownFromVisible && <CalcDropdown data={atiCitySearchDataFrom} />}
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='to' className={styles.input_label}>Куда:</label>
                <input type='text' className={styles.input} name='to' id='to' onChange={onChangeHandler} value={to} autoComplete='off'></input>
                {isCalcDropdownToVisible && <CalcDropdown data={atiCitySearchDataTo} />}
            </div>

            <button type='submit' className={styles.submit_button}>Рассчитать</button>
        </form>
    )
}

export default Calc;