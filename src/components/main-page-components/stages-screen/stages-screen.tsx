import React from "react";
import styles from './stages-screen.module.css';







const StagesScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>СТАДИИ</i> ЗАКАЗА</h2>

            <p className={styles.description}>Заполните форму ниже и мы сразу получите стоимость перевозки!
                Вам останется только подтвердить заявку.
            </p>

            <div className={styles.cards_block}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>
        </section>
    )
}

export default StagesScreen;