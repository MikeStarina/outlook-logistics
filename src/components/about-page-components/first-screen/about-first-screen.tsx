import React from "react";
import styles from './about-first-screen.module.css';
import full_logo440px_white from '../../../images/full_logo440px_white.svg';
import icon_logo from '../../../images/icon_logo.svg';
import cont3 from '../../../images/cont3.png';






const AboutFirstScreen: React.FC = () => {


    return (
        <section className={styles.screen}>
           
           

            <div className={styles.main_text_block}>
                <img src={full_logo440px_white} alt='outlook_logo' className={styles.logo}></img>
                <img src={icon_logo} alt='outlook_icon_logo' className={styles.icon_logo}></img>
                <div className={styles.text_wrapper}>
                    <p className={styles.caption}>8<i>(800)</i>888-99-00</p>
                   
                </div>
                <div className={styles.text_wrapper}>
                    
                    <p className={styles.caption}>info@<i>outlook</i>-logistics.ru</p>
                </div>
            </div>

            
                <div className={styles.calc_box}>
                    <h1 className={styles.calc_title}><i>OUTLOOK</i></h1>
                    <p className={styles.box_description}>ОТЛИЧНАЯ&nbsp;<i>ЛОГИСТИКА</i></p>
                    <p className={styles.box_description}>—</p>
                    <p className={styles.box_description}>ЭТО&nbsp;ВСЕГДА</p>
                    <p className={styles.box_description}>ОТЛИЧНАЯ&nbsp;<i>КОМАНДА!</i></p>
                </div>
           



           

           
            <div className={styles.bg_circle}>
                <div className={styles.bg_inner_circle}></div>
            </div>
            <img src={cont3} alt='container' className={styles.bg_image}></img>
        </section>
    )
}

export default AboutFirstScreen;