'use client'
import React, { ChangeEvent, useState } from "react";
import styles from './main-form.module.scss';
import { TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { sendFormData } from "@/actions/actions";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: "#FFF",
            main: "#FFF",
            dark: "#FFF",
            contrastText: "#fff",
        },
    },
});

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
            const response = await sendFormData(state);
            setState(initialState);
            window.location.href = 'https://outlook-logistics.ru/thanks';
            setDisabled({text: 'РАССЧИТАТЬ', isDisabled: false})
        }

        return (

                <form className={cx('mainForm')} onSubmit={formSubmitHandler}>
                    <p className={cx('mainForm__title')}>РАССЧИТАТЬ <i>ПЕРЕВОЗКУ</i></p>  
                    <div className={cx('mainForm__wrapper')}>
                        <TextField 
                            label='Откуда'
                            className={cx('mainForm__input')}
                            name='from'
                            id='from'
                            size='small'
                            required
                            value={state.from}
                            onChange={inputChangeHandler}
                        />
                        <TextField 
                            label='Куда'
                            className={cx('mainForm__input')}
                            name='to'
                            id='to'
                            size='small'
                            required
                            value={state.to}
                            onChange={inputChangeHandler}
                        />
                        <TextField 
                            label='Телефон'
                            className={cx('mainForm__input')}
                            name='phone'
                            id='phone'
                            size='small'
                            required
                            value={state.phone}
                            onChange={inputChangeHandler}
                        />
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