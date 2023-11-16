'use client'
import React, { useState } from "react";
import { sendFormData } from "@/actions/actions";
import styles from './form-screen.module.css';


const FormScreen: React.FC = () => {

   
    const [ callBackData, setCallBackData ] = useState<{ name: string, phone: string }>({
        name: '',
        phone: ''
    });



    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {

        setCallBackData({
            name: e.currentTarget.id === 'name' ? e.currentTarget.value : callBackData.name,
            phone: e.currentTarget.id === 'phone' ? e.currentTarget.value : callBackData.phone,
        })
    }

    const submitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = sendFormData(callBackData);
        e.currentTarget.reset();
    }

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>ОСТАЛИСЬ</i> ВОПРОСЫ?</h2>
            <p className={styles.description}>Заполните форму ниже и мы вам перезвоним
            </p>

            <div className={styles.calc_box}>
                <form className={styles.calc_form} onSubmit={submitHandler}>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='from' className={styles.input_label}>Ваше имя:</label>
                        <input type='text' className={styles.input} name='name' id='name' value={callBackData.name} onChange={onChangeHandler}></input>
                       
                    </div>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='to' className={styles.input_label}>Номер телефона:</label>
                        <input type='text' className={styles.input} name='phone' id='phone' value={callBackData.phone} onChange={onChangeHandler}></input>
                       
                    </div>

                    <button type='submit' className={styles.submit_button}>Отправить</button>
                </form>
            </div>

           
        </section>
    )
}

export default FormScreen;