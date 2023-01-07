import React from 'react';
import styles from './calc.module.css';





const Calc: React.FC = () => {

    return(
        <form className={styles.calc_box}>
            <h1 className={styles.calc_title}> РАССЧИТАТЬ <i>ПЕРЕВОЗКУ</i></h1>
            <div className={styles.input_wrapper}>
                <label htmlFor='from' className={styles.input_label}>Откуда:</label>
                <input type='text' className={styles.input} name='from' id='from'></input>
                <span className={styles.input_option}>Москва, Санкт-Петербург, Алматы</span>
            </div>
            <div className={styles.input_wrapper}>
                <label htmlFor='to' className={styles.input_label}>Куда:</label>
                <input type='text' className={styles.input} name='to' id='to'></input>
                <span className={styles.input_option}>Москва, Санкт-Петербург, Алматы</span>
            </div>

            <button type='submit' className={styles.submit_button}>Рассчитать</button>
        </form>
    )
}

export default Calc;