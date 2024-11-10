import React from "react";
import styles from './footer.module.scss';
import classNames from 'classnames/bind';

import Link from "next/link";
import Image from 'next/image';
import full_logo440px_whiteW from '../../../public/full_logo440px_whiteW.svg'
import smallLogo from '../../../public/icon_logo_white.svg'
import vk_logo_white from '../../../public/vk_logo_white.png';
import instagram_logo_white from '../../../public/instagram_logo_white.png';
import strela_small_logo_white from '../../../public/strela_small_logo_white.png';
//import { Link } from "react-router-dom";
const cx = classNames.bind(styles);








const Footer: React.FC = () => {

    return (
        <footer className={cx('footer')}>
            <div className={cx('footer__wrapper')}>
                <Link href='/' className={cx('footer__logo-link')}>
                    <Image src={full_logo440px_whiteW} alt='Большой логотип' className={cx('footer__logo')} />
                    <Image src={smallLogo} alt='Маленький логотип' className={cx('footer__logo', 'footer__logo--small')} />
                </Link>
                <p className={cx('footer__subtitle')}>надежная <i>логистика</i> для бизнеса</p>

                <div className={cx('footer__content')}>
                    <div className={cx('footer__credits')}>
                        <p className={cx('footer__paragraph')}>ООО "Перспектива"</p>
                        <p className={cx('footer__paragraph')}>ИНН: 4706053435</p>
                        <p className={cx('footer__paragraph')}>КПП: 781601001</p>
                       
                    </div>

                    <div className={cx('footer__credits')}>
                        <Link href='/' className={cx('footer__footer-link')}>О нас</Link>
                        <Link href='/' className={cx('footer__footer-link')}>Услуги</Link>
                        <Link href='/' className={cx('footer__footer-link')}>Транспортный парк</Link>
                        <Link href='/' className={cx('footer__footer-link')}>Отраслевые сервисы</Link>
                        <Link href='/' className={cx('footer__footer-link')}>Блог</Link>
                    </div>


                    <div className={cx('footer__credits')}>
                        <Link href='/' className={cx('footer__footer-link')}>Политика конфиденциальности</Link>
                        <Link href='/' className={cx('footer__footer-link')}>Социальная ответственность</Link>
                    </div>


                    <div className={cx('footer__credits')}>
                        <p className={cx('footer__paragraph')}>© 2024</p>
                        <Link href='tel:88002010073' className={cx('footer__footer-link')}>8 800 555 35 35</Link>
                        <Link href='mailto:info@outlook-logistics.ru' className={cx('footer__footer-link')}>info@outlook-logistics.ru</Link>
                    </div>
                </div>


               
                   

                
               
            </div>

            {/* <div className={styles.left_column}>
                <Link href='/about' className={styles.link}>О КОМПАНИИ</Link>
                <Link href='/features' className={styles.link}>УСЛУГИ</Link>
                <Link href='/contacts' className={styles.link}>КОНТАКТЫ</Link>
                <Link href='/' className={styles.link}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
            </div>
            <div className={styles.right_column}>
                <Link href='/'>
                    <Image src={full_logo440px_whiteW} alt='логотип' className={styles.logo} />
                </Link>
               
                <p className={styles.paragraph}>ООО "ПЕРСПЕКТИВА"</p>
                <p className={styles.paragraph}>ИНН: 4706053435</p>
                <p className={styles.paragraph}>КПП: 781601001</p>
                <p className={styles.paragraph}>© 2023</p>
            </div> */}

            
        </footer>
    )
}

export default Footer;