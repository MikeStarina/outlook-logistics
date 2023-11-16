'use client'
import React from "react";
//import { useDispatch } from "../..";
import styles from './menu.module.css';
import Link from "next/link";


type TMenuProps = {
    menuVisibility: boolean;
    clickHandler: any;
};


const Menu: React.FC<TMenuProps> = ({menuVisibility, clickHandler}) => {

    const closeClickHandler = () => {
        clickHandler(!menuVisibility);
    }

    return(
        <div className={styles.menu}>
            <div className={styles.close_button} onClick={closeClickHandler} >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>


            <div className={styles.links_wrapper}>
                <Link className={styles.link} href='/' onClick={closeClickHandler}>ГЛАВНАЯ</Link>
                <Link className={styles.link} href='/about' onClick={closeClickHandler}>О КОМПАНИИ</Link>
                <Link className={styles.link} href='/uslugi' onClick={closeClickHandler}>УСЛУГИ</Link>
                <Link className={styles.link} href='/blog' onClick={closeClickHandler}>БЛОГ</Link>
                <Link className={styles.link} href='/contacts' onClick={closeClickHandler}>КОНТАКТЫ</Link>                
            </div>

            <div className={styles.contacts_wrapper}>
                <p className={styles.contacts_item}>info@outlook-logistics.ru</p>
                <a href='tel:+78002010073' className={styles.contacts_item}>8 <i>(800)</i> 201-00-73</a>
                <a href='https://t.me/pnhd_studio' className={styles.contacts_item}>Telegram</a>
                <a href='https://t.me/pnhd_studio' className={styles.contacts_item}>Whatsapp</a>
            </div>
        </div>
    )
}

export default Menu;