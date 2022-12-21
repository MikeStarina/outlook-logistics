import React from "react";
import styles from './first-screen.module.css';
import full_logo440px_white from '../../../images/full_logo440px_white.svg';






const FirstScreen: React.FC = () => {


    return (
        <section className={styles.screen}>
            <div className={styles.blur_box}></div>
            <div className={styles.trapezoid}></div>

            <div className={styles.main_text_block}>
                <img src={full_logo440px_white} alt='outlook_logo' className={styles.logo}></img>
                <div className={styles.text_wrapper}>
                    <p className={styles.caption}>8<i>(800)</i>888-99-00</p>
                    <p className={styles.caption}>info@<i>outlook</i>-logistics.ru</p>
                </div>
            </div>



            <div className={styles.counters_block}>
                <div className={styles.counter_box}>
                    
                    <p className={styles.counter}>1120</p>
                    <div className={styles.bottom_wrapper}>
                        <p className={styles.counter_caption}><i>ТОНН</i> ГРУЗА В ПУТИ</p>
                       
                    </div>
                </div>
                <div className={styles.counter_box}>
                   
                    <p className={styles.counter}>60</p>
                    <div className={styles.bottom_wrapper}>
                        <p className={styles.counter_caption}><i>МАШИН</i> В ПУТИ</p>
                        
                    </div>
                </div>
                <div className={styles.counter_box}>
                   
                    <p className={styles.counter}>15</p>
                    <div className={styles.bottom_wrapper}>
                        <p className={styles.counter_caption}><i>ЗАКАЗОВ</i> СЕГОДНЯ</p>
                       
                    </div>
                </div>
                <div className={styles.counter_box}>
                   
                    <p className={styles.counter}>20</p>
                    <div className={styles.bottom_wrapper}>
                        <p className={styles.counter_caption}><i>МАШИН</i> СВОБОДНО</p>
                       
                    </div>
                </div>
            </div>

           
            <button type='button' className={styles.calc_button}>Рассчитать</button>
            
        </section>
    )
}

export default FirstScreen;