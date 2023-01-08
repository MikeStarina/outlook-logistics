import React from 'react';
import styles from './popup.module.css';
import { useSelector, useDispatch } from '../..';
import { POPUP_VISIBILITY } from '../../services/actions/utils-actions';
import { CLEAR_FORM_DATA, GET_FORM_DATA, sendOrderData } from '../../services/actions/calc-actions';






const Popup: React.FC = () => {

    const dispatch = useDispatch();
    const orderData = useSelector(store => store.calc);


    const closeButtonHandler = () => {
        dispatch({ type: POPUP_VISIBILITY });
    }


    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        dispatch({
            type: GET_FORM_DATA,
            payload: e.currentTarget.value,
            id: e.currentTarget.id,
        })
    }


    const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({ type: POPUP_VISIBILITY });
        dispatch({ type: CLEAR_FORM_DATA });
        dispatch(sendOrderData(orderData));
    }

    return (
        <section className={styles.popup_container}>

            <form className={styles.popup} onSubmit={onSubmitHandler}>
                <button type='button' className={styles.close_button} onClick={closeButtonHandler}>X</button>
                <p className={styles.form_caption}>Введите номер телефона и расчет будет у вас уже через 5 минут!</p>
                <input type='text' className={styles.input} id='phone' onChange={onChangeHandler} value={orderData.phone}></input>
                <button type='submit' className={styles.submit_button}>Отправить</button>
            </form>

        </section>
    )
}

export default Popup;