import React from "react";
import styles from './first-screen.module.scss';
import MainForm from "@/components/main-form/main-form";
import classNames from "classnames/bind";
import img from '../../../../public/container_white.png'
import Image from "next/image";
import Link from "next/link";
const cx = classNames.bind(styles);





const FirstScreen: React.FC = () => {

    return (

       
        <section className={cx('screen')}>
            <div className={cx('screen__column', 'screen__column--wide')}>
                <div className={cx('screen__title-wrapper')}>
                    <h1 className={cx('screen__main-title')}>OUTLOOK — надёжная <i>логистика</i> для бизнеса</h1>
                    <p className={cx('screen__subtitle')}>Cпециализируемся на авто и жд перевозках по России и СНГ</p>
                    <div className={cx('screen__buttons-wrapper')}>
                        <Link href='/uslugi' className={cx('screen__button')}>Услуги</Link>
                        <Link href='/' className={cx('screen__button')}>Транспортный парк</Link>
                        <Link href='/about' className={cx('screen__button')}>О нас</Link>
                    </div>
                </div>
                <Image src={img} alt='' />
            </div>
            <div className={cx('screen__column', 'screen__column--thin')}>
                <MainForm />
            </div>
        </section>
       
    )
}

export default FirstScreen;