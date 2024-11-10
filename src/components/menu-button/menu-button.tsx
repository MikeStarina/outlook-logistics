'use client'
import React, { useState } from "react";
import Menu from "../menu/menu";
import styles from './menu-button.module.scss';
import { useAppDispatch } from "@/redux/hooks";
import { actions as utilsActions } from "@/redux/utils-slice/utils";





const MenuButton: React.FC = () => {

    const dispatch = useAppDispatch();


    return (
        <>
            <button type='button' className={styles.menu_button} onClick={() => dispatch(utilsActions.setMenuVisibility(true))}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </button>
        </>
        
    )
};

export default MenuButton