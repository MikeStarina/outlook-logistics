import React from "react";
import styles from './form-screen.module.css';






const FormScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>ОСТАЛИСЬ</i> ВОПРОСЫ?</h2>
            <p className={styles.description}>Заполните форму ниже и мы вам перезвоним
            </p>

            <div className={styles.calc_box}>
                <form className={styles.calc_form}>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='from' className={styles.input_label}>Ваше имя:</label>
                        <input type='text' className={styles.input} name='from' id='from'></input>
                       
                    </div>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='to' className={styles.input_label}>Номер телефона:</label>
                        <input type='text' className={styles.input} name='to' id='to'></input>
                       
                    </div>

                    <button type='submit' className={styles.submit_button}>Отправить</button>
                </form>
            </div>

           
        </section>
    )
}

export default FormScreen;