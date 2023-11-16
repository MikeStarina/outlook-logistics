'use client'
import React, { useState } from "react";
import Menu from "../menu/menu";
import styles from './menu-button.module.css';

type TMenuProps = {
    menuVisibility: boolean;
    clickHandler: any;
};

const Burger: React.FC<TMenuProps> = ({menuVisibility, clickHandler}) => {

    return (
        <button type='button' className={styles.menu_button} onClick={() => clickHandler(!menuVisibility)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </button>
    )
}

const MenuButton: React.FC = () => {

    const [ menuVisibility, setMenuVisibility ] = useState<boolean>(false);

    return (
        <>
            {!menuVisibility && <Burger menuVisibility={menuVisibility} clickHandler={setMenuVisibility} />}
            {menuVisibility && <Menu menuVisibility={menuVisibility} clickHandler={setMenuVisibility} />}
        </>
        
    )
};

export default MenuButton