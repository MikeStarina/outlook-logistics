import React from "react";
import styles from './temp-page.module.css';
import full_logo440px_white from '../../../images/full_logo440px_white.svg';





const TempPage: React.FC = () => {

    

    
    return (
        <section className={styles.screen}>
            <div className={styles.blur_box}></div>
            <div className={styles.trapezoid}></div>

            <div className={styles.main_text_block}>
                <img src={full_logo440px_white} alt='outlook_logo' className={styles.logo}></img>
                <div className={styles.text_wrapper}>
                    <p className={styles.caption}>+7<i>(952)</i>362-92-22</p>
                    <p className={styles.caption}>info@<i>outlook</i>-logistics.ru</p>
                </div>
            </div>



            <div className={styles.counters_block}>
               <h1 className={styles.temp_title}>МЫ ОБНОВЛЯЕМ СЕРВИС!</h1>
               <p className={styles.temp_subtitle}>Очень скоро все заработает</p>
            </div>


           
        </section>
    )
}

export default TempPage;