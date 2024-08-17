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
                <Link className={styles.link} href='/calculator' onClick={closeClickHandler}>КАЛЬКУЛЯТОР</Link>
                <Link className={styles.link} href='/contacts' onClick={closeClickHandler}>КОНТАКТЫ</Link>                
            </div>

            <div className={styles.contacts_wrapper}>
                <p className={styles.contacts_item}>info@outlook-logistics.ru</p>
                <a href='tel:+78002010073' className={styles.contacts_item}>8 <i>(800)</i> 201-00-73</a>
                <a href='https://t.me/OUTLOOK_LOGISTICS' className={styles.contacts_item} target="blank">Telegram</a>
                <a href='https://api.whatsapp.com/send?phone=79223671541' className={styles.contacts_item} target="blank">Whatsapp</a>
                <Link className={styles.contacts_item} href={{pathname: '/', hash: 'callback'}}>Перезвонить?</Link>
                {/* <p className={styles.contacts_item}>—</p> */}
                {/* <a href='https://vk.com/outlook_logistics' className={styles.contacts_item} target="blank">VK</a>
                <a href='https://t.me/+4AjbWvlSJJcwOTMy' className={styles.contacts_item} target="blank">СТРЕЛА</a> */}
            </div>
        </div>
    )
}

export default Menu;