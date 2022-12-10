import React from "react";
import styles from './first-screen.module.css';
import full_logo440px_white from '../../../images/full_logo440px_white.svg';





const FirstScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.blur_box}></div>
            <div className={styles.trapezoid}><p>your best logistics partner</p></div>

            <div className={styles.main_text_block}>
                <div className={styles.text_wrapper}>
                    <p className={styles.caption}>Your <i>best</i></p>
                    <p className={styles.caption}><i>logistics</i> partner</p>
                </div>
                <img src={full_logo440px_white} alt='outlook_logo' className={styles.logo}></img>
                <div className={styles.text_wrapper}>
                    <p className={styles.caption}>8<i>(800)</i>888-99-00</p>
                    <p className={styles.caption}>info@<i>outlook</i>-logistics.ru</p>
                </div>
            </div>
            
        </section>
    )
}

export default FirstScreen;