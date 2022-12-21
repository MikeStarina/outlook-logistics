import React from "react";
import cont1 from '../../../images/cont1.png';
import cont2 from '../../../images/cont2.png';
import cont3 from '../../../images/cont3.png';
import cont4 from '../../../images/cont4.png';


import styles from './features-screen.module.css';





const FeaturesScreen: React.FC = () => {

    


    

    return (
        <section className={styles.screen}>
            <h1 className={styles.title}><i>OUTLOOK</i> УСЛУГИ</h1>
            <div className={styles.cards_block}>
                <div className={styles.card}>
                    <img src={cont1} alt='container' loading='lazy' className={styles.feature_card_cover} width={800} height={600}></img>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>АВТОМОБИЛЬНЫЕ</i> ПЕРЕВОЗКИ</h4>
                        <p className={styles.card_subtitle}>ДО 1,5 ТОНН</p>
                        <p className={styles.card_subtitle}>(ГАЗЕЛЬ)</p>
                    </div>
                    <div className={styles.line}></div>
                    
                </div>
                <div className={styles.card}>
                    <img src={cont1} alt='container' loading='lazy' className={styles.feature_card_cover} width={800} height={600}></img>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>АВТОМОБИЛЬНЫЕ</i> ПЕРЕВОЗКИ</h4>
                        <p className={styles.card_subtitle}>ДО 5 ТОНН</p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <img src={cont1} alt='container' loading='lazy' className={styles.feature_card_cover} width={800} height={600}></img>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>ТЕНТОВЫЕ</i> ПЕРЕВОЗКИ</h4>
                        <p className={styles.card_subtitle}>82 М<sup>3</sup></p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <img src={cont1} alt='container' loading='lazy' className={styles.feature_card_cover} width={800} height={600}></img>
                    <div className={styles.card_title_wrapper}>
                        <h4 className={styles.card_title}><i>НЕГАБАРИТНЫЕ</i> ГРУЗЫ</h4>
                        <p className={styles.card_subtitle}></p>
                    </div>
                    <div className={styles.line}></div>
                </div>
                
                
            </div>
            <button type='button' className={styles.button}>Смотреть все</button>
            <div className={styles.trapezoid}></div>
        </section>
    )
}

export default FeaturesScreen;