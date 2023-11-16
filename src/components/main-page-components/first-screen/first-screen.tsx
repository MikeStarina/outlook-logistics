import React from "react";
import styles from './first-screen.module.css';
import firstScreenBg from '../../../../public/firstScreenBg.jpg';
import Image from "next/image";
import Calc from "../../calc/calc";






const FirstScreen: React.FC = () => {

    return (

       
        <section className={styles.screen} id='calc'>

            
            <Calc />

            <div className={styles.trapezoid_left}></div>
            <div className={styles.trapezoid_right}></div>
            <Image src={firstScreenBg} alt='фоновое изображение' className={styles.bg_image} loading='lazy' decoding="async" />
        </section>
       
    )
}

export default FirstScreen;