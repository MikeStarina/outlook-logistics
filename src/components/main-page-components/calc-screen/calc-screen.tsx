import React from "react";
import styles from './calc-screen.module.css';





const CalcScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>OUTLOOK</i> СТОИМОСТЬ</h2>
            <p className={styles.description}>Заполните форму ниже и мы сразу получите стоимость перевозки!
                Вам останется только подтвердить заявку.
            </p>

            <div className={styles.calc_box}>
                <form className={styles.calc_form}>
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
            </div>

            <div className={styles.circle}>
                <div className={styles.inner_circle}></div>
            </div>
        </section>
    );
}

export default CalcScreen;