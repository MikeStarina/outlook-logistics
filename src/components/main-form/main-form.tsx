'use client'
import React from 'react'
import { ChangeEvent, useState } from "react";
import styles from './main-form.module.scss';
import { sendFormData } from "@/actions/actions";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);



const initialState = {
    from: '',
    to: '',
    phone: '',
}

const MainForm: React.FC = () => {

        const [ state, setState ] = useState<{from:string,to:string,phone:string}>(initialState);
        const [ disabled, setDisabled ] = useState<{text: string, isDisabled: boolean}>({text: 'Рассчитать', isDisabled: false});

        const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setState({
                ...state,
                [e.target.name]: e.target.value,
            })
        }

        const formSubmitHandler = async (e: any) => {
            e.preventDefault();
            setDisabled({text: 'ОТПРАВКА...', isDisabled: true})
            sendFormData(state);
            setState(initialState);
            window.location.href = 'https://outlook-logistics.ru/thanks';
            setDisabled({text: 'РАССЧИТАТЬ', isDisabled: false})
        }

        return (

                <form className={cx('mainForm')} onSubmit={formSubmitHandler}>
                    <p className={cx('mainForm__title')}>РАССЧИТАТЬ <i>ПЕРЕВОЗКУ</i></p>  
                    <div className={cx('mainForm__wrapper')}>
                        <input
                            type='text'
                            name='from'
                            id='from'
                            placeholder="Откуда *"
                            required
                            className={cx('mainForm__input')}
                            value={state.from}
                            onChange={inputChangeHandler}
                        >
                        </input>
                        <input
                            placeholder='Куда *'
                            className={cx('mainForm__input')}
                            name='to'
                            id='to'
                            required
                            value={state.to}
                            onChange={inputChangeHandler}
                        >
                        </input>
                        <input
                            placeholder='Телефон *'
                            className={cx('mainForm__input')}
                            name='phone'
                            id='phone'
                            required
                            value={state.phone}
                            onChange={inputChangeHandler}
                        >
                        </input>
                        <button
                            type='submit'
                            className={cx('mainForm__button')}
                            disabled={disabled.isDisabled}
                        >
                            {disabled.text}
                        </button>
                    </div>
                    <div className={cx('mainForm__text-wrapper')}>
                        <p className={cx('mainForm__text')}>Подготовим предварительный рассчет за 15 минут и зафиксируем цену до момента согласования!</p>
                        <p className={cx('mainForm__text')}>Скидки до 50% для новых клиентов *</p>
                    </div>
                    
                </form>
        )
}

export default MainForm;