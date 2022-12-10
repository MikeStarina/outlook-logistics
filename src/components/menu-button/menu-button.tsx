import React from "react";
import styles from './menu-button.module.css';





const MenuButton: React.FC = () => {

    return (
        <button type='button' className={styles.menu_button}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </button>
    )
}

export default MenuButton