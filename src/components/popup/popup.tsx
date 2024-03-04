"use client";
import React, { useState, useEffect } from "react";
import styles from "./popup.module.css";
import {
    INSURANCE_PRICE,
    PRICE_RATIO,
    carTypes,
    priceCalculatorFunc,
} from "../../utils/constants";
//import Image from 'next/image';
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { actions as ftlCalcActions } from "@/redux/ftl-calc-slice/ftl-calc.slice";
import { actions as basicCalcActions } from "@/redux/basic-calc-slice/basic-calc.slice";
import { useCreateOrderMutation, useGetAtiDistanceDataQuery } from "@/api/api";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

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

const Popup: React.FC<any> = () => {
    const dispatch = useAppDispatch();
    const { calcMode } = useAppSelector(store => store.basicCalc);

    const { carType, isRef, validCity, name, phone, price, distanceType, orderDistance } = useAppSelector(
        (store) => store.ftlCalc
    );
    const [ createOrder ] = useCreateOrderMutation();
    const { data: distance } = useGetAtiDistanceDataQuery({
        from: validCity!.from!.CityId!,
        to: validCity!.to!.CityId!,
    });

   
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

    useEffect(() => {
        const priceParams = priceCalculatorFunc(
            distance,
            PRICE_RATIO,
            INSURANCE_PRICE,
            carType,
            isRef
        );
        dispatch(ftlCalcActions.setPrice(priceParams.price));
        dispatch(ftlCalcActions.setDistanceType(priceParams.distanceType));
        distance && dispatch(ftlCalcActions.setOrderDistance(distance));
    }, [distance, isRef, carType]);

    const closeButtonHandler = () => {
        localStorage.setItem("discount", "false");
        dispatch(ftlCalcActions.clearState());
        dispatch(basicCalcActions.clearState());
    };

    const onChangeRefHandler = (e: any) => {
        dispatch(ftlCalcActions.setIsRef(e.target.checked));
    };
    const onChangeUserDataHandler = (e: any) => {
        dispatch(ftlCalcActions.setUserData({ id: e.target.id, value: e.target.value}));
    };

    const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const order = {
            orderType: calcMode,
            from: validCity?.from.CityName,
            to: validCity?.to.CityName,
            phone,
            name,
            validatedCityTo: validCity?.to,
            validatedCityFrom: validCity?.from,
            orderDistance,
            distanceType, 
            carType,
            isRef,
            price,
        }

        createOrder(order);
        
        
        dispatch(ftlCalcActions.clearState());
        dispatch(basicCalcActions.clearState());
        localStorage.setItem("discount", "false");
        window.location.href = "https://outlook-logistics.ru/thanks";
    };

    const carTypeChangeHandler = (e: any) => {
        const validCarType = carTypes.filter(
            (item) => item.placeholder === e.target.value
        )[0];
        dispatch(ftlCalcActions.setCarType(validCarType));
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
                                value={carType.placeholder}
                                onChange={carTypeChangeHandler}
                            >
                                {carTypes.map((item, index) => (
                                    <MenuItem key={index} id={item.name} value={item.placeholder}>
                                        {item.placeholder}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </FormControl>

                        <FormControlLabel
                            sx={{ color: "rgba(255,255,255,.75)" }}
                            control={
                                <Switch
                                    checked={isRef}
                                    onChange={onChangeRefHandler}
                                    disabled={!carType?.options?.ref}
                                />
                            }
                            label="Рефрижератор"
                        ></FormControlLabel>
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
                            label="Ваш телефон"
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
                            label="Ваше имя"
                            margin="dense"
                        ></TextField>
                    </ThemeProvider>
                    <ThemeProvider theme={darkTheme}>
                        <Button
                            variant="outlined"
                            type="submit"
                            sx={{ minWidth: "150px", height: "56px", marginTop: "50px" }}
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
                        Кузов — {carType.placeholder}
                        {isRef && " Реф"}
                    </p>

                    <p className={styles.info}>Габариты — {carType.capacity}</p>

                    <p className={styles.info}>Объем — {carType.volume}</p>

                    <p className={styles.info}>
                        Расстояние перевозки — {distance && distance}
                    </p>
                    <p className={styles.info}>
                        Город отправления — {validCity?.from.CityName}
                    </p>
                    <p className={styles.info}>
                        Город назначения — {validCity?.to.CityName}
                    </p>
                    <p className={styles.info}>Страховое покрытие — 1 000 000 Р.</p>
                    <p className={styles.info}>Даты — по согласованию</p>
                    {!isDiscount && timer > 0 && (
                        <>
                            <p className={styles.info_discount} id="discount">
                                Онлайн скидка — 5%
                            </p>
                            <p className={styles.info}>Исчезнет через {timer} сек.</p>
                            <p className={styles.info}>
                                Отправьте заявку, чтобы зафиксировать скидку
                            </p>
                        </>
                    )}
                </div>

                <div className={styles.price_wrapper}>
                    <p className={styles.summary}>Итого:</p>
                    {price! > 0 && !isDiscount && timer > 0 && (
                        <p className={styles.old_price}>
                            {price!} <i>Р.</i>
                        </p>
                    )}
                    {price! > 0 && (
                        <p className={styles.final_price}>
                            {!isDiscount && timer > 0 ? Math.round(price! * 0.95) : price}{" "}
                            <i>Р.</i>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Popup;
