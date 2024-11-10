"use client";
import React from "react";
import Popup from "../popup/popup";
import styles from "./calc.module.scss";
import icon_logo_white from "../../../public/full_logo440px_whiteW.svg";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { actions as basicCalcActions } from "@/redux/basic-calc-slice/basic-calc.slice";
import FtlCalc from "./ftl-calc";
import ZdCalc from "./zd-calc";
import ZdPopup from "../popup/zd-popup";




const Calc: React.FC = () => {
    const { calcMode, isPopupVisible } = useAppSelector(
        (store) => store.basicCalc
    );
    const dispatch = useAppDispatch();

    const calcModeClickHandler = (e: any) => {
        dispatch(basicCalcActions.setCalcMode(e.target.value));
    };

    return (
        <>
            {!isPopupVisible ? (
                <>
                    <div className={styles.calc_box}>
                        <div className={styles.title_wrapper}>
                            {/* <Image
                                src={icon_logo_white}
                                alt="логотип"
                                className={styles.title_logo}
                            />
                            <div className={styles.line}></div> */}
                            <h1 className={styles.calc_title}>OUTLOOK — РАССЧИТАТЬ&nbsp;<i>ПЕРЕВОЗКУ</i></h1>
                            <p className={styles.text}>Расчитайте стоимость перевозки прямо на сайте за 30 секунд! Предварительный расчет, скидка до 50% для новых клиентов при оформлении заявки на сайте.</p>  
                        </div>

                        {/* <div className={styles.car_type_wrapper}>
                            {/* <button
                                className={
                                    calcMode === "FTL"
                                        ? styles.calcMode_button_active
                                        : styles.calcMode_button
                                }
                                value="FTL"
                                onClick={calcModeClickHandler}
                            >
                                Автоперевозка
                            </button> 
                            {/* <button
                                className={
                                    calcMode === "ZD"
                                        ? styles.calcMode_button_active
                                        : styles.calcMode_button
                                }
                                value="ZD"
                                onClick={calcModeClickHandler}
                            >
                                Ж/Д перевозка
                            </button> 
                        </div> */}
                        {calcMode === 'FTL' && <div className={styles.input_wrapper_main}>
                            <FtlCalc />
                        </div>}
                        {calcMode === 'ZD' && <div className={styles.input_wrapper_main}>
                            <ZdCalc />
                        </div>}

                        <div className={styles.title_wrapper}>
                            <p
                                className={styles.text}
                            >{`Моментальный расчет перевозки в два клика прямо на сайте! Страховое покрытие на 1 миллион рублей уже включено в стоимость!`}</p>
                        </div>
                    </div>
                </>
            ) : (
                <div className={styles.calc_box}>
                    {isPopupVisible && calcMode === 'FTL' && <Popup />}
                    {isPopupVisible && calcMode === 'ZD' && <ZdPopup />}
                </div>
            )}
        </>
    );
};

export default Calc;
