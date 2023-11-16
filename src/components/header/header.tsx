import React, { useState } from "react";
import styles from './header.module.css';
import Link from "next/link";
import Image from "next/image";
import MenuButton from "../menu-button/menu-button";
import Menu from "../menu/menu";
import full_logo440px_white from '../../../public/full_logo440px_white.svg';
import icon_logo from '../../../public/icon_logo.svg';




const Header: React.FC = () => {

    

    return (
        <header className={styles.header}>

             <div className={styles.main_text_block}>
                <Link href='/' className={styles.logo_link}>
                    <Image src={full_logo440px_white} alt='<Большой логотип' className={styles.logo} />
                </Link>
                <Link href='/' className={styles.logo_link}>
                    <Image src={icon_logo} alt='Маленький логотип' className={styles.icon_logo} />
                </Link>
                <div className={styles.text_wrapper}>
                    <a href='tel:+78002010073' className={styles.caption}>8 <i>(800)</i> 201-00-73</a>                   
                </div>
                <div className={styles.text_wrapper}>
                    <a href='https://t.me/pnhd_studio' target='blank' className={styles.caption}>TG</a>                   
                </div>
                <div className={styles.text_wrapper}>
                    <a href='https://t.me/pnhd_studio' target='blank' className={styles.caption}>WA</a>                   
                </div>
                <div className={styles.text_wrapper} id='calc'>                    
                    <a href='mailto:info@outlook-logistics.ru' target='blank' className={styles.caption}>info@<i>outlook</i>-logistics.ru</a>
                </div>
            </div>
            <MenuButton />
        </header>
    );
}

export default Header;