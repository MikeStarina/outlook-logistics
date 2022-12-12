import React from "react";
import styles from './options-screen.module.css';





const OptionsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
             <div className={styles.cards_block}>
                <div className={styles.card}>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>БОЛЕЕ</i> 5 ЛЕТ</h4>
                        <p className={styles.card_subtitle}>ЭКСПЕРТИЗЫ В ЛОГИСТИКЕ</p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>БАЗОВОЕ</i> СТРАХОВАНИЕ</h4>
                        <p className={styles.card_subtitle}>УЖЕ ВКЛЮЧЕНО В СТОИМОСТЬ</p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>АВТОМОБИЛЬНЫЕ</i> ПЕРЕВОЗКИ</h4>
                        <p className={styles.card_subtitle}>ДО 1,5 ТОНН</p>
                        <p className={styles.card_subtitle}>(ГАЗЕЛЬ)</p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>УМНЫЙ</i> КОНТРОЛЬ</h4>
                        <p className={styles.card_subtitle}>ВОДИТЕЛЕЙ</p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                
            </div>


            <div className={styles.geolabel}>
                
            </div>
        </section>

    )
}

export default OptionsScreen;