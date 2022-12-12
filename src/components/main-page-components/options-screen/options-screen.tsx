import React from "react";
import styles from './options-screen.module.css';





const OptionsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
             <div className={styles.cards_block}>
                <div className={styles.card}>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>БОЛЕЕ</i> 5 ЛЕТ</h4>
                        <p className={styles.card_subtitle}>Экспертизы в логистике</p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>БАЗОВОЕ</i> СТРАХОВАНИЕ</h4>
                        <p className={styles.card_subtitle}>Уже включено в стоимость</p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>ЦЕНООБРАЗОВАНИЕ</i> ПЕРЕВОЗКИ</h4>
                        <p className={styles.card_subtitle}>Персональный подход</p>
                  
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>SMART</i> КОНТРОЛЬ</h4>
                        <p className={styles.card_subtitle}>Водителей</p>
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