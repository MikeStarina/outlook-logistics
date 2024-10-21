'use client'
import React from "react";
import styles from './uslugi.module.scss';
import classNames from "classnames/bind";
import { getServices } from "@/utils/constants";
const cx = classNames.bind(styles);





const Uslusgi: React.FC = async () => {

    const services = await getServices();
    console.log(services[0]);

    return (
        <section className={cx('screen')}>
                <div className={cx('screen__title-wrapper')}>
                    <h2 className={cx('screen__title')}>OUTLOOK — логистические <i>услуги</i></h2>
                    <p className={cx('screen__subtitle')}>
                        Трудно охватить весь спектр услуг в логистике. Вот список наших топ-компетенций - то, что у нас получается лучше всего.
                        По этим услугам мы накопили огромную экспертизу и можем предложить лучший сервис и условия, но мы открыты для нового и готовы сделать предложение на любой запрос!
                    </p>
                </div>


                <div className={cx('screen__carousel')}>
                    <div className={cx('screen__carousel-wrapper')}>
                        {services && services.map((a, i) =>
                            <div className={cx('screen__card')} key={i}>
                                {a.name}
                            </div>
                        )}
                    </div>
                </div>
            
        </section>
    )
}

export default Uslusgi;

