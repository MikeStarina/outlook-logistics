import React from "react";
import styles from './footer.module.css';
import Link from "next/link";
import Image from 'next/image';
import full_logo440px_whiteW from '../../../public/full_logo440px_whiteW.svg'
import vk_logo_white from '../../../public/vk_logo_white.png';
import instagram_logo_white from '../../../public/instagram_logo_white.png';
import strela_small_logo_white from '../../../public/strela_small_logo_white.png';
//import { Link } from "react-router-dom";









const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>

            <div className={styles.left_column}>
                <Link href='/about' className={styles.link}>О КОМПАНИИ</Link>
                <Link href='/features' className={styles.link}>УСЛУГИ</Link>
                {/*<Link href='/blog' className={styles.link}>БЛОГ</Link>*/}
                <Link href='/contacts' className={styles.link}>КОНТАКТЫ</Link>
                <Link href='/' className={styles.link}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
            </div>
            <div className={styles.right_column}>
                <Link href='/'>
                    <Image src={full_logo440px_whiteW} alt='логотип' className={styles.logo} />
                </Link>
                <div className={styles.socials_wrapper}>
                    <Link href='https://vk.com/outlook_logistics'>
                        <Image src={vk_logo_white} alt='Логотип Вконтакте' className={styles.social_icon} />                    
                    </Link>
                    {/*
                    <Link href='/'>
                        <Image src={instagram_logo_white} alt='Логотип Инстаграм' className={styles.social_icon} />            
                    </Link>
                    */}
                    <Link href='https://t.me/+4AjbWvlSJJcwOTMy'>
                        <Image src={strela_small_logo_white} alt='Логотип Стрела' className={styles.social_icon} />            
                    </Link>
                    
                        
                </div>
                <p className={styles.paragraph}>ООО "ПЕРСПЕКТИВА"</p>
                <p className={styles.paragraph}>ИНН: 4706053435</p>
                <p className={styles.paragraph}>КПП: 781601001</p>
                <p className={styles.paragraph}>© 2023</p>
            </div>

            
        </footer>
    )
}

export default Footer;