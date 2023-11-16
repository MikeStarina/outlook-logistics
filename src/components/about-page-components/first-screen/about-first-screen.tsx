import React from "react";
import styles from './about-first-screen.module.css';
import cont3 from '../../../../public/cont3.webp';
import Image from "next/image";





const AboutFirstScreen: React.FC = () => {


    return (
        <section className={styles.screen}>           
                <div className={styles.box}>
                    <p className={styles.box_description}>ОТЛИЧНАЯ&nbsp;<i>ЛОГИСТИКА</i></p>
                    <p className={styles.box_description}>— ЭТО&nbsp;ВСЕГДА</p>
                    <p className={styles.box_description}>ОТЛИЧНАЯ&nbsp;<i>КОМАНДА!</i></p>
                </div>
           
                <div className={styles.bg_circle}>
                    <div className={styles.bg_inner_circle}></div>
                </div>
                <Image src={cont3} alt='container' className={styles.bg_image} />
        </section>
    )
}

export default AboutFirstScreen;