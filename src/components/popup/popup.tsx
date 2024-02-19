"use client";
import React, { useState, useEffect } from "react";
import styles from "./popup.module.css";
import {
    INSURANCE_PRICE,
    PRICE_RATIO,
    carTypes,
    priceCalculatorFunc,
} from "../../utils/constants";
import { sendOrderData } from "@/actions/actions";
import { TCarType } from "../../utils/constants";
import { TOrderState, initialOrderState } from "@/utils/states";
//import Image from 'next/image';
import truck1500 from "../../../public/truck1500.svg";
import truck5000 from "../../../public/truck5000.svg";
import truck20000 from "../../../public/truck20000.svg";
import truckTrall from "../../../public/truckTrall.svg";
import InputMask from "react-input-mask";

const carIcons = [truck1500, truck5000, truck20000, truckTrall];

const Popup: React.FC<any> = ({
    setPopupVisibility,
    orderData,
    setOrderData,
    setValidatedCity,
}) => {
    const [stepTwoData, setStepTwoData] = useState<TOrderState>(orderData);
    const [formValidity, setFormValidity] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(60);
    const [isDiscount, setDiscount] = useState<string | null>(() => {
        const discount = localStorage.getItem('discount')
        if (discount === 'false') return null
        return null
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
        const { name, phone } = stepTwoData;
        if (name!.length >= 2 && phone!.length === 17) validity = true;
        else validity = false;
        setFormValidity(validity);
    }, [stepTwoData.phone, stepTwoData.name]);

    useEffect(() => {
        const interval = setInterval(timerFunc, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [timer]);

    const closeButtonHandler = () => {
        setStepTwoData({ ...initialOrderState });
        setOrderData({ ...initialOrderState });
        setPopupVisibility(false);
        setValidatedCity({
            validatedCityTo: undefined,
            validatedCityFrom: undefined,
            to: "",
            from: "",
        });
        localStorage.setItem("discount", "false");
    };

    const onClickHandler = (e: React.SyntheticEvent<HTMLDivElement>) => {
        const { id } = e.currentTarget;
        const selectedCarType: TCarType | undefined = carTypes.find(
            (item) => item.name === id
        );

        const price = priceCalculatorFunc(
            orderData,
            PRICE_RATIO,
            INSURANCE_PRICE,
            selectedCarType,
            false
        );

        let updatedData = stepTwoData;
        updatedData.carType = selectedCarType;
        updatedData.price = price;
        updatedData.isRef = false;

        setStepTwoData({ ...updatedData });
    };

    const onChangeRefHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const price = priceCalculatorFunc(
            orderData,
            PRICE_RATIO,
            INSURANCE_PRICE,
            stepTwoData.carType,
            e.currentTarget.checked
        );
        let updatedData = stepTwoData;
        updatedData.isRef = e.currentTarget.checked;
        updatedData.price = price;
        setStepTwoData({ ...updatedData });
    };
    const onChangeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
        let updatedData = stepTwoData;
        updatedData.name =
            e.currentTarget.id === "name" ? e.currentTarget.value : updatedData.name;
        updatedData.phone =
            e.currentTarget.id === "phone"
                ? e.currentTarget.value
                : updatedData.phone;
        setStepTwoData({ ...updatedData });
    };

    const onSubmitHandler = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPopupVisibility(false);
        sendOrderData(stepTwoData);
        localStorage.setItem("discount", "false");
        window.location.href = "https://outlook-logistics.ru/thanks";
    };

    const distance =
        orderData!.orderDistance! > 0
            ? `${orderData.orderDistance} км.`
            : "Внутригородская";
    //console.log(stepTwoData)
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

                {/*<p className={styles.form_caption}>{`Расстояние перевозки: ${distance}`}</p>*/}
                <p className={styles.form_caption}>Выберите тип кузова:</p>

                <div className={styles.car_type_wrapper}>
                    {carTypes.map((item, index) => {
                        //console.log(item);
                        return (
                            <div
                                className={
                                    stepTwoData &&
                                        stepTwoData.carType &&
                                        stepTwoData.carType!.name === item.name
                                        ? styles.car_icon_selected
                                        : styles.car_icon
                                }
                                key={index}
                                id={item.name}
                                onClick={onClickHandler}
                            >
                                {/*<Image src={carIcons[index]} alt='Иконка типа автомобиля' className={styles.car_image} />*/}
                                <p className={styles.icon_caption}>{item.placeholder}</p>
                            </div>
                        );
                    })}
                </div>

                <form className={styles.ref_checkbox_wrapper}>
                    <input
                        className={styles.ref_checkbox}
                        type="checkbox"
                        id="refCheckbox"
                        name="refCheckbox"
                        onChange={onChangeRefHandler}
                        disabled={!stepTwoData?.carType?.options.ref}
                        checked={stepTwoData?.isRef || false}
                    ></input>
                    <label
                        htmlFor="refCheckbox"
                        className={
                            stepTwoData?.carType?.options.ref
                                ? styles.input_ref_label
                                : styles.input_ref_label_disabled
                        }
                    >
                        Рефрижератор
                    </label>
                </form>

                <form className={styles.order_form} onSubmit={onSubmitHandler}>
                    <label htmlFor="phone" className={styles.input_userdata_label}>
                        Ваш телефон:
                    </label>
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
                        value={stepTwoData.phone}
                    />
                    {/*<input type='text' className={styles.input} id='phone' onChange={onChangeHandler} value={stepTwoData.phone} autoComplete='off'></input>*/}
                    <label htmlFor="name" className={styles.input_userdata_label}>
                        Ваше имя:
                    </label>
                    <input
                        type="text"
                        className={styles.input}
                        id="name"
                        onChange={onChangeHandler}
                        value={stepTwoData.name}
                        autoComplete="off"
                    ></input>
                    <button
                        type="submit"
                        className={styles.submit_button}
                        disabled={!formValidity}
                    >
                        Отправить
                    </button>
                </form>
            </div>
            <div className={styles.price_box}>
                <div className={styles.info_wrapper}>
                    <p className={styles.info}>
                        Кузов — {stepTwoData?.carType?.placeholder}{" "}
                        {stepTwoData?.isRef && "Реф"}
                    </p>
                    {stepTwoData?.carType?.capacity && (
                        <p className={styles.info}>
                            Габариты — {stepTwoData?.carType?.capacity}
                        </p>
                    )}
                    {stepTwoData?.carType?.volume && (
                        <p className={styles.info}>
                            Объем — {stepTwoData?.carType?.volume}
                        </p>
                    )}
                    <p className={styles.info}>Расстояние перевозки — {distance}</p>
                    <p className={styles.info}>Город отправления — {stepTwoData?.from}</p>
                    <p className={styles.info}>Город назначения — {stepTwoData?.to}</p>
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
                    {orderData!.price! > 0 && !isDiscount && timer > 0 && (
                        <p className={styles.old_price}>
                            {stepTwoData!.price!} <i>Р.</i>
                        </p>
                    )}
                    {orderData!.price! > 0 && (
                        <p className={styles.final_price}>
                            {!isDiscount && timer > 0
                                ? Math.round(stepTwoData!.price! * 0.95)
                                : stepTwoData.price}{" "}
                            <i>Р.</i>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Popup;
