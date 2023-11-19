import React from 'react';
import styles from './feedback-screen.module.css';
import scan_one from '../../../images/scan_one.jpg';
import scan_two from '../../../images/scan_two.jpg';
import icon_logo from '../../../../public/icon_logo.svg';
import Image from 'next/image';








const FeedBackScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            {/*
            <div className={styles.feedback_wrapper}>
                <img src={scan_one} alt='feedback' className={styles.feedback_image}></img>
                <img src={scan_two} alt='feedback' className={styles.feedback_image}></img>
                <img src={scan_one} alt='feedback' className={styles.feedback_image}></img>
                <img src={scan_two} alt='feedback' className={styles.feedback_image}></img>
            </div> */}
            <div className={styles.text_wrapper}>
                <p className={styles.text}>
                    "ДЕЛАЕМ БОЛЬШЕ ДРУГИХ, ЧТОБЫ <i>ПЕРЕВОЗКИ</i> БЫЛИ УДОБНЫМИ И БЕЗОПАСНЫМИ, А БИЗНЕС - <i>ЧЕСТНЫМ</i> И ПРЕДСКАЗУЕМЫМ!"
                </p>
                <Image src={icon_logo} alt='логотип' className={styles.logo} />
            </div>
        </section>
    )
}

export default FeedBackScreen;