'use client'
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { actions as utilsActions } from "@/redux/utils-slice/utils";
import styles from './menu.module.scss';
import Link from "next/link";





const Menu: React.FC = () => {
    const { menuVisibility } = useAppSelector(state => state.utils);
    const dispatch = useAppDispatch();
    return(
        <>
            {menuVisibility && 
            <div className={styles.menu}>
                <div className={styles.close_button} onClick={() => dispatch(utilsActions.setMenuVisibility(false))} >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>


            <div className={styles.links_wrapper}>
                <Link className={styles.link} href='/' onClick={() => dispatch(utilsActions.setMenuVisibility(false))}>Главная</Link>
                <Link className={styles.link} href='/about' onClick={() => dispatch(utilsActions.setMenuVisibility(false))}>О компании</Link>
                <Link className={styles.link} href='/uslugi' onClick={() => dispatch(utilsActions.setMenuVisibility(false))}>Услуги</Link>
                <Link className={styles.link} href='/calculator' onClick={() => dispatch(utilsActions.setMenuVisibility(false))}>Калькулятор</Link>
                <Link className={styles.link} href='/contacts' onClick={() => dispatch(utilsActions.setMenuVisibility(false))}>Контакты</Link>                
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
            </div>}
        </>
    )
}

export default Menu;