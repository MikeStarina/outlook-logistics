import React from 'react';
import styles from './calc.module.css';
import { useSelector, useDispatch } from '../..';
import { GET_FORM_DATA } from '../../services/actions/calc-actions';
import { POPUP_VISIBILITY } from '../../services/actions/utils-actions';





const Calc: React.FC = () => {

    const { from, to } = useSelector(store => store.calc);
    const dispatch = useDispatch();


    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
       
        dispatch({
            type: GET_FORM_DATA,
            payload: e.currentTarget.value,
            id: e.currentTarget.id,
        })
    }


    const formSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({ type: POPUP_VISIBILITY });

    }




    return(
        <form className={styles.calc_box} onSubmit={formSubmitHandler}>
            <h1 className={styles.calc_title}> РАССЧИТАТЬ <i>ПЕРЕВОЗКУ</i></h1>
            <div className={styles.input_wrapper}>
                <label htmlFor='from' className={styles.input_label}>Откуда:</label>
                <input type='text' className={styles.input} name='from' id='from' onChange={onChangeHandler} value={from}></input>
                {/*<span className={styles.input_option}>Москва, Санкт-Петербург, Алматы</span>*/}
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='to' className={styles.input_label}>Куда:</label>
                <input type='text' className={styles.input} name='to' id='to' onChange={onChangeHandler} value={to}></input>
                {/*<span className={styles.input_option}>Москва, Санкт-Петербург, Алматы</span>*/}
            </div>

            <button type='submit' className={styles.submit_button}>Рассчитать</button>
        </form>
    )
}

export default Calc;