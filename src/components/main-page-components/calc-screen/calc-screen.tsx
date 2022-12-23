import React from "react";
//import bgvideo from '../../../images/bgvideo.mp4';
import vehicle from '../../../images/vehicle.jpg';
import styles from './calc-screen.module.css';





const CalcScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
           

            <div className={styles.types_box}>
                <div className={styles.column}>
                    <img className={styles.image} alt='фура' src={vehicle}></img>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.column_title}>ВИДЫ <i>ПЕРЕВОЗОК</i></h3>
                    <div className={styles.text_wrapper}>
                        <p className={styles.link}>АВТОМОБИЛЬНЫЕ ПЕРЕВОЗКИ</p>
                        <p className={styles.link}>МОРСКИЕ ПЕРЕВОЗКИ</p>
                        <p className={styles.link}>АВИА ПЕРЕВОЗКИ</p>
                        <p className={styles.link}>МУЛЬТИМОБАЛЬНЫЕ ПЕРЕВОЗКИ</p>
                        <p className={styles.link}>FTL / СБОРНЫЙ ГРУЗ</p>
                    </div>
                </div>
               
            </div>

            <div className={styles.circle}>
                <div className={styles.inner_circle}></div>
            </div>
        </section>
    );
}

export default CalcScreen;