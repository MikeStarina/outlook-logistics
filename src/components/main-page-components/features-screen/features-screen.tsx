import React from "react";
import styles from './features-screen.module.css';




const FeaturesScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}><i>OUTLOOK</i> УСЛУГИ</h1>
            <div className={styles.cards_block}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>
            <button type='button' className={styles.button}>Смотреть все</button>

            <div className={styles.trapezoid}></div>
        </section>
    )
}

export default FeaturesScreen;