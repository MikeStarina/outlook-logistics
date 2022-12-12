import React from "react";
import styles from './about-screen.module.css';
import CEO from '../../../images/CEO.png';





const AboutScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.digits}>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>100+</p>
                    <p className={styles.description}>МАШИН</p>
                </div>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>50</p>
                    <p className={styles.description}>СОТРУДНИКОВ</p>
                </div>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>2000+</p>
                    <p className={styles.description}>КЛИЕНТОВ</p>
                </div>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>5 ЛЕТ</p>
                    <p className={styles.description}>ОПЫТА</p>
                </div>
                <div className={styles.digits_wrapper}>
                    <p className={styles.counter}>1300+</p>
                    <p className={styles.description}>ГОРОДОВ</p>
                </div>
            </div>


            <div className={styles.line}></div>


            <div className={styles.about_block}>
                <div className={styles.left_column}>
                    <div className={styles.avatar_wrapper}>
                        <img src={CEO} alt='CEO photo' className={styles.avatar}></img>
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Самусенко А.В.</p>
                        <p className={styles.credits}>Генеральный Директор</p>
                    </div>
                    
               
                </div>

                <div className={styles.right_column}>
                    <p className={styles.text}>Мы понимаем бизнес. Перевозки и их надежность - важная составляющая успешной работы и актуальность этой компоненты в условиях глобальных рынков и ускоренных до максимума процессах сейчас высока как никогда.

Скорость, точность и безопасность перевозок - три базовые ценности, которые мы успешно предоставляем своим клиентам из года в год.

Будь то единичная перевозка или сложные логистические проекты - наши ценности остаются неизменными - это та основа, на которой мы привыкли строить отношения с нашими партнерами. Добро пожаловать!



</p>
                   
                    <div className={styles.buttons_wrapper}>
                        <button type="button" className={styles.button}>О Нас</button>
                        <button type="button" className={styles.button}>О Команде</button>
                    </div>
                </div>

            </div>

            
        </section>
    )
}

export default AboutScreen;