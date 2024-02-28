"use client";
import React, { useState, useEffect } from "react";
import styles from "./zd-popup.module.css";
import { fescoCarTypes } from "../../utils/constants";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useCreateOrderMutation, useGetFescoBidsDataQuery } from "@/api/api";
import { actions as zdCalcActions } from "@/redux/zd-calc-slice/zd-calc.slice";
import { TFescoBidsDataObject } from "@/utils/types";
import { actions as basicCalcActions } from "@/redux/basic-calc-slice/basic-calc.slice";
import Button from "@mui/material/Button";

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

const ZdPopup: React.FC = () => {
    const dispatch = useAppDispatch();
    const { calcMode } = useAppSelector(store => store.basicCalc);
    const { validLocFrom, validLocTo, carType, name, phone, locFrom, locTo } = useAppSelector(
        (store) => store.zdCalc
    );
    const queryData = {
        from: validLocFrom!.loc_uid,
        to: validLocTo!.loc_uid,
        wte: carType.wte_uid,
    };
    const { data } = useGetFescoBidsDataQuery(queryData, {refetchOnMountOrArgChange: true});
    const [ createOrder ] = useCreateOrderMutation();

    const [formValidity, setFormValidity] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(60);
    const [isDiscount, setDiscount] = useState<string | null>(() => {
        const discount = localStorage.getItem("discount");
        if (discount === "false") return discount;
        return null;
    });

    const timerFunc = () => {
        if (timer > 0 && !isDiscount) setTimer(timer - 1);
        else {
            localStorage.setItem("discount", "false");
            setDiscount("false");
        }
    };

    const noVatPrice = (data?: TFescoBidsDataObject) => {
        const vat = (data?.sum_segment1!*20)/120;
        const price = data?.sum_segment1! - vat;
        
        return Math.round(price / 0.6);
    }

    const price = noVatPrice(data);
    
      useEffect(() => {
          let validity = formValidity;
          if (name!.length >= 2 && phone!.length >= 11) validity = true;
          else validity = false;
          setFormValidity(validity);
      }, [phone, name]);

    useEffect(() => {
        const interval = setInterval(timerFunc, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [timer]);

    const closeButtonHandler = () => {

        localStorage.setItem("discount", "false");
        dispatch(zdCalcActions.clearState());
        dispatch(basicCalcActions.clearState());
    };

    

    const onChangeUserDataHandler = (e: any) => {
        dispatch(zdCalcActions.setUserData({id: e.currentTarget.name, data: e.currentTarget.value}))       
    };

    


    const carTypeChangeHandler = (e: any) => {
        const validCarType = fescoCarTypes.filter(item => item.custom_text === e.target.value)[0];
        dispatch(zdCalcActions.setCarTypeData(validCarType));
    };

    const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();


        const order = {
            orderType: calcMode,
            from: locFrom,
            to: locTo,
            phone,
            name,
            validatedCityTo: validLocTo,
            validatedCityFrom: validLocFrom,
            zdCarType: carType,
            price,
        }

        createOrder(order);

        
        localStorage.setItem("discount", "false");
        dispatch(zdCalcActions.clearState());
        dispatch(basicCalcActions.clearState());
        window.location.href = "https://outlook-logistics.ru/thanks";

    };

    return (
        <div className={styles.popup}>
            <div className={styles.wrapper}>
                <button
                    type="button"
                    className={styles.close_button}
                    onClick={closeButtonHandler}
                >
                    X
                </button>

                <div className={styles.car_type_wrapper}>
                    <ThemeProvider theme={darkTheme}>
                        <FormControl fullWidth>
                            <TextField
                                select
                                id="carTypesSelect"
                                label="Тип кузова"
                                value={carType.custom_text}
                                onChange={carTypeChangeHandler}
                            >
                                {fescoCarTypes.map((item, index) => (
                                    <MenuItem key={index} id={item.ct_code} value={item.custom_text}>
                                        {item.custom_text}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>
                    </ThemeProvider>
                </div>

                <form className={styles.order_form} onSubmit={onSubmitHandler}>
                    <ThemeProvider theme={darkTheme}>
                        <TextField
                            fullWidth
                            id="phone"
                            name="phone"
                            onChange={onChangeUserDataHandler}
                            value={phone}
                            autoComplete="off"
                            label='Ваш телефон'
                            margin="dense"
                        ></TextField>
                    </ThemeProvider>
                    <ThemeProvider theme={darkTheme}>
                        <TextField
                            fullWidth
                            id="name"
                            name="name"
                            onChange={onChangeUserDataHandler}
                            value={name}
                            autoComplete="off"
                            label='Ваше имя'
                            margin="dense"
                        ></TextField>
                    </ThemeProvider>
                    <ThemeProvider theme={darkTheme}>
                        <Button
                            variant="outlined"
                            type="submit"
                            sx={{ minWidth: "150px", height: '56px', marginTop: '50px'}}     
                            disabled={!formValidity}                       
                        >
                            Отправить
                        </Button>
                    </ThemeProvider>
                </form>
            </div>
            <div className={styles.price_box}>
                <div className={styles.info_wrapper}>
                    <p className={styles.info}>
                        Контейнер — {carType.custom_text}
                    </p>
                    <p className={styles.info}>Город отправления — {validLocFrom?.loc_name}</p>
                    <p className={styles.info}>Город назначения — {validLocTo?.loc_name}</p>
                    <p className={styles.info}>Страховое покрытие — 1 000 000 Р.</p>
                    <p className={styles.info}>Даты — по согласованию</p>
                    {!isDiscount && timer > 0 && (
                        <>
                        <p className={styles.info_discount} id='discount'>Онлайн скидка — 5%</p>
                        <p className={styles.info}>Исчезнет через {timer} сек.</p>
                        <p className={styles.info}>
                            Отправьте заявку, чтобы зафиксировать
                                скидку
                        </p>
                        </>
                    )}
                </div>

                <div className={styles.price_wrapper}>
                    <p className={styles.summary}>Итого:</p>
                    {typeof price === 'number' && price && !isDiscount && timer > 0 && (
                        <p className={styles.old_price}>
                            {price} <i>Р.</i>
                        </p>
                    )}
                    {typeof price === 'number' && price && (
                        <p className={styles.final_price}>
                            {!isDiscount && timer > 0
                                ? Math.round(price * 0.95)
                                : price}{" "}
                            <i>Р.</i>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ZdPopup;
