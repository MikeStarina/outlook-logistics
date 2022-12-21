import React from "react";
import styles from './options-screen.module.css';





const OptionsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
             <div className={styles.cards_block}>
                <div className={styles.card}>
                   
                        <h4 className={styles.card_title}><i>5</i>&nbsp;ЛЕТ</h4>
                        <p className={styles.card_subtitle}>Экспертизы в логистике. Мы знаем что делать с вашим грузом</p>
                  
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                   
                        <h4 className={styles.card_title}>СТРАХОВАНИЕ</h4>
                        <p className={styles.card_subtitle}>Базовое страхование перевозки уже включено в стоимость</p>
                 
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                   
                        <h4 className={styles.card_title}><i>ЦЕНООБРАЗОВАНИЕ</i></h4>
                        <p className={styles.card_subtitle}>Персональный подход к ценообразованию для постоянных клиентов</p>
                  
                   
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                   
                        <h4 className={styles.card_title}><i>SMART</i>&nbsp;КОНТРОЛЬ</h4>
                        <p className={styles.card_subtitle}>Удобно видеть состояние и статус перевозки</p>
                    
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                   
                        <h4 className={styles.card_title}>ДОКУМЕНТЫ</h4>
                        <p className={styles.card_subtitle}>Не волнуйтесь за документы перевозки. Всегда отправим вам их</p>
                    
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                   
                        <h4 className={styles.card_title}><i>МАРШРУТЫ</i></h4>
                        <p className={styles.card_subtitle}>Работаем со сложными и непопулярными маршрутами перевозок</p>
                    
                    <div className={styles.line}></div>
                </div>
                
            </div>


            <div className={styles.geolabel}>
                
            </div>
        </section>

    )
}

export default OptionsScreen;