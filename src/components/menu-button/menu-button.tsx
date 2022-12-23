import React from "react";
import styles from './menu-button.module.css';


type TMenuButton = {
    clickHandler: () => void;
}


const MenuButton: React.FC<TMenuButton> = ({ clickHandler }) => {

    return (
        <button type='button' className={styles.menu_button} onClick={clickHandler}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </button>
    )
}

export default MenuButton