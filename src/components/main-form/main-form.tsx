'use client'
import React, { ChangeEvent, useState } from "react";
import styles from './main-form.module.css';
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { sendFormData } from "@/actions/actions";


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

        const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setState({
                ...state,
                [e.target.name]: e.target.value,
            })
        }

        const formSubmitHandler = async (e: any) => {
            e.preventDefault();
            const response = await sendFormData(state);
            setState(initialState);
            window.location.href = 'https://outlook-logistics.ru/thanks';
        }

        return (
            <ThemeProvider theme={darkTheme}>
                <form className={styles.mainForm} onSubmit={formSubmitHandler}>
                    <div className={styles.wrapper}>
                        <h1 className={styles.mainForm_title}>OUTLOOK — ВАШ НАДЕЖНЫЙ ЛОГИСТИЧЕСКИЙ <i>ПАРТНЕР</i></h1>
                        <p className={styles.mainForm_title}>РАССЧИТАТЬ <i>ПЕРЕВОЗКУ</i></p>
                    </div>                   

                    <div className={styles.wrapper}>
                        <TextField 
                            label='Откуда'
                            className={styles.input}
                            name='from'
                            id='from'
                            size='small'
                            required
                            value={state.from}
                            onChange={inputChangeHandler}
                        />
                        <TextField 
                            label='Куда'
                            className={styles.input}
                            name='to'
                            id='to'
                            size='small'
                            required
                            value={state.to}
                            onChange={inputChangeHandler}
                        />
                        <TextField 
                            label='Телефон'
                            className={styles.input}
                            name='phone'
                            id='phone'
                            size='small'
                            required
                            value={state.phone}
                            onChange={inputChangeHandler}
                        />
                        <Button 
                            type='submit'
                            variant="outlined"
                            className={styles.button}
                        >
                            Рассчитать
                        </Button>
                    </div>
                    <div className={styles.wrapper}>
                        <p className={styles.mainForm_text}>Подготовим предварительный рассчет за 15 минут и зафиксируем цену до момента согласования!</p>
                        <p className={styles.mainForm_text}>Скидки до 50% для новых клиентов *</p>
                    </div>
                    
                </form>
            </ThemeProvider>
        )
}

export default MainForm;