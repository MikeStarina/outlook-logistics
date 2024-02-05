'use client'
import React, { useState, useRef, useEffect } from "react";
import { sendFormData } from "@/actions/actions";
import styles from './form-screen.module.css';
import InputMask from 'react-input-mask';


const FormScreen: React.FC = () => {

    const ref = useRef(null);
    const [ callBackData, setCallBackData ] = useState<{ name: string, phone: string }>({
        name: '',
        phone: ''
    });
    const [ formValidity, setFormValidity ] = useState<boolean>(false)

    useEffect(() => {
        let validity = formValidity;
        const { name, phone } = callBackData;
        if (name.length > 3 && phone.length === 17) validity = true
        else validity = false;
        setFormValidity(validity);
    }, [callBackData])



    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        

        setCallBackData({
            name: e.currentTarget.id === 'name' ? e.currentTarget.value : callBackData.name,
            phone: e.currentTarget.id === 'phone' ? e.currentTarget.value : callBackData.phone,
        })
    }

    const submitHandler = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const response = await sendFormData(callBackData);
        setCallBackData({
            name: '',
            phone: '',
        })
        window.location.href = 'https://outlook-logistics.ru/thanks';
    }

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>ОСТАЛИСЬ</i> ВОПРОСЫ?</h2>
            <p className={styles.description}>Заполните форму ниже и мы вам перезвоним
            </p>

            <div className={styles.calc_box}>
                <form className={styles.calc_form} onSubmit={submitHandler} ref={ref}>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='name' className={styles.input_label}>Ваше имя:</label>
                        <input type='text' className={styles.input} name='name' id='name' value={callBackData.name} onChange={onChangeHandler} required autoComplete="off"></input>
                       
                    </div>
                    <div className={styles.input_wrapper}>
                        <label htmlFor='phone' className={styles.input_label}>Номер телефона:</label>
                        <InputMask
                            mask="+7 (999) 999-9999"
                            maskChar={null}
                            type="tel"
                            minLength={17}
                            id="phone"
                            name="phone"
                            className={styles.input}
                            required
                            onChange={onChangeHandler}
                            value={callBackData.phone}
                        />
                        
                       
                    </div>

                    <button type='submit' className={styles.submit_button} disabled={!formValidity}>Отправить</button>
                </form>
            </div>

           
        </section>
    )
}

export default FormScreen;