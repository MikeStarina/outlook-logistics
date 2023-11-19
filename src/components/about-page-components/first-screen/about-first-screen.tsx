import React from "react";
import styles from './about-first-screen.module.css';
import Image from "next/image";
import aboutSlideFour from '../../../../public/aboutSlideFour.jpg';
import full_logo440px_whiteW from '../../../../public/full_logo440px_whiteW.svg';





const AboutFirstScreen: React.FC = () => {


    return (
        <section className={styles.main_screen}>
        <Image
          src={aboutSlideFour}
          alt="фоновое изображение"
          className={styles.bg_image}
        />
        <div className={styles.title_wrapper}>
          <Image
            src={full_logo440px_whiteW}
            alt="логотип"
            className={styles.title_logo}
          />
          <div className={styles.line}></div>
          <h1 className={styles.title}>КОМАНДА</h1>
        </div>
      </section>
    )
}

export default AboutFirstScreen;