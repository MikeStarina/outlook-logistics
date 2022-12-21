import React from "react";
import styles from './first-screen.module.css';
import full_logo440px_white from '../../../images/full_logo440px_white.svg';
import cont from '../../../images/cont.jpg';






const FirstScreen: React.FC = () => {


    return (
        <section className={styles.screen}>
           
           

            <div className={styles.main_text_block}>
                <img src={full_logo440px_white} alt='outlook_logo' className={styles.logo}></img>
                <div className={styles.text_wrapper}>
                    <p className={styles.caption}>8<i>(800)</i>888-99-00</p>
                   
                </div>
                <div className={styles.text_wrapper}>
                    
                    <p className={styles.caption}>info@<i>outlook</i>-logistics.ru</p>
                </div>
            </div>

            
                <form className={styles.calc_box}>
                    <h1 className={styles.calc_title}> РАССЧИТАТЬ <i>ПЕРЕВОЗКУ</i></h1>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='from' className={styles.input_label}>Откуда:</label>
                        <input type='text' className={styles.input} name='from' id='from'></input>
                        <span className={styles.input_option}>Москва, Санкт-Петербург, Алматы</span>
                    </div>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='to' className={styles.input_label}>Куда:</label>
                        <input type='text' className={styles.input} name='to' id='to'></input>
                        <span className={styles.input_option}>Москва, Санкт-Петербург, Алматы</span>
                    </div>

                    <button type='submit' className={styles.submit_button}>Рассчитать</button>
                </form>
           



           

           
            <div className={styles.bg_circle}>
                <div className={styles.bg_inner_circle}></div>
            </div>
            <img src={cont} alt='container' className={styles.bg_image}></img>
        </section>
    )
}

export default FirstScreen;