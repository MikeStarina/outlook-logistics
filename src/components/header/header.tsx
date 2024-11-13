import styles from './header.module.scss'
import Link from "next/link";
import Image from "next/image";
import MenuButton from "../menu-button/menu-button";
import full_logo440px_white from '../../../public/full_logo440px_white.svg';
import icon_logo from '../../../public/icon_logo.svg';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles)



const Header = () => {

    

    return (
        <header className={cx('header')}>

                <Link href='/' className={cx('header__logo-link')}>
                    <Image src={full_logo440px_white} alt='<Большой логотип' className={cx('header__logo')} />
                    <Image src={icon_logo} alt='Маленький логотип' className={cx('header__logo', 'header__logo--small')} />
                </Link>

                <nav>
                    <ul className={cx('header__menu-list')}>
                        <li><Link href='/about' className={cx('header__menu-link')}>О нас</Link></li>
                        <li><Link href='/uslugi' className={cx('header__menu-link')}>Услуги</Link></li>
                        <li><Link href='/calculator' className={cx('header__menu-link')}>Калькулятор</Link></li>
                        <li><Link href='/contacts' className={cx('header__menu-link')}>Контакты</Link></li>
                    </ul>
                </nav>

              
                <Link href={{pathname: '/', hash: '#callback'}} className={cx('header__button')}>Перезвонить?</Link>
                <div className={cx('header__menu-button-wrapper')}>
                    <MenuButton />
                </div>
                
        </header>
    );
}

export default Header;