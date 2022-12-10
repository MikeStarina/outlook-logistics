import React from "react";
import styles from './about-screen.module.css';





const AboutScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.digits}>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>100</p>
                    <p className={styles.description}>МАШИН</p>
                </div>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>100</p>
                    <p className={styles.description}>МАШИН</p>
                </div>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>100</p>
                    <p className={styles.description}>МАШИН</p>
                </div>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>100</p>
                    <p className={styles.description}>МАШИН</p>
                </div>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>100</p>
                    <p className={styles.description}>МАШИН</p>
                </div>
            </div>


            <div className={styles.line}></div>
        </section>
    )
}

export default AboutScreen;