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

            </div>

            <div className={styles.circle}>
                <div className={styles.inner_circle}></div>
            </div>
        </section>
    );
}

export default CalcScreen;