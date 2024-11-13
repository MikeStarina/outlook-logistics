'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from './lead-form.module.scss'
import classNames from 'classnames/bind'
import InputMask from 'react-input-mask'
import { sendFormData } from '@/actions/actions'
const cx = classNames.bind(styles)


const LeadForm: React.FC = () => {

    const ref = useRef(null);   
    const [ callBackData, setCallBackData ] = useState<{ name: string, phone: string }>({
        name: '',
        phone: ''
    });
    const [ formValidity, setFormValidity ] = useState<boolean>(false)

    useEffect(() => {
        let validity = false;
        const { name, phone } = callBackData;
        if (name.length > 3 && phone.length === 17) validity = true
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
        
        sendFormData(callBackData);
        setCallBackData({
            name: '',
            phone: '',
        })
        window.location.href = 'https://outlook-logistics.ru/thanks';
    }

    
    return (
        <div className={cx('form')}>
                <form className={cx('form__calc-form')} onSubmit={submitHandler} ref={ref} >
                    <div className={cx('form__input-wrapper')}>
                        <label htmlFor='name' className={cx('form__input-label')}>Ваше имя:</label>
                        <input type='text' className={cx('form__input')} name='name' id='name' value={callBackData.name} onChange={onChangeHandler} required autoComplete="off"></input>
                       
                    </div>
                    <div className={cx('form__input-wrapper')}>
                        <label htmlFor='phone' className={cx('form__input-label')}>Номер телефона:</label>
                        <InputMask
                            mask="+7 (999) 999-9999"
                            maskChar={null}
                            type="tel"
                            minLength={17}
                            id="phone"
                            name="phone"
                            className={cx('form__input')}
                            required
                            onChange={onChangeHandler}
                            value={callBackData.phone}
                        />
                        
                       
                    </div>

                    <button type='submit' className={cx('form__submit-button')} disabled={!formValidity}>Отправить</button>
                </form>
            </div>
    )
}

export default LeadForm;
