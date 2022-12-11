import React from "react";
import styles from './options-screen.module.css';





const OptionsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
             <div className={styles.cards_block}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>


            <div className={styles.geolabel}>
                
            </div>
        </section>

    )
}

export default OptionsScreen;