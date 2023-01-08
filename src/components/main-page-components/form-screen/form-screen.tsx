import React from "react";
import styles from './form-screen.module.css';
import { useSelector, useDispatch } from "../../..";
import { CLEAR_FORM_DATA, GET_FORM_DATA, sendOrderData } from "../../../services/actions/calc-actions";






const FormScreen: React.FC = () => {

    const dispatch = useDispatch();
    const data = useSelector(store => store.calc);


    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        dispatch({
            type: GET_FORM_DATA,
            payload: e.currentTarget.value,
            id: e.currentTarget.id,
        })
    }

    const submitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch({type: CLEAR_FORM_DATA});
        dispatch(sendOrderData(data));
    }

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>ОСТАЛИСЬ</i> ВОПРОСЫ?</h2>
            <p className={styles.description}>Заполните форму ниже и мы вам перезвоним
            </p>

            <div className={styles.calc_box}>
                <form className={styles.calc_form} onSubmit={submitHandler}>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='from' className={styles.input_label}>Ваше имя:</label>
                        <input type='text' className={styles.input} name='name' id='name' value={data.name} onChange={onChangeHandler}></input>
                       
                    </div>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='to' className={styles.input_label}>Номер телефона:</label>
                        <input type='text' className={styles.input} name='phone' id='phone' value={data.phone} onChange={onChangeHandler}></input>
                       
                    </div>

                    <button type='submit' className={styles.submit_button}>Отправить</button>
                </form>
            </div>

           
        </section>
    )
}

export default FormScreen;