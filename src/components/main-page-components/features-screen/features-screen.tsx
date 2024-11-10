import React from "react";
import Link from "next/link";
import styles from './features-screen.module.scss';
import Statistics from "@/components/statistics/statistics";
import Image from "next/image";
import classNames from "classnames/bind";
import { transportCards } from "@/utils/constants";
const cx = classNames.bind(styles);



const FeaturesScreen: React.FC = async () => {
    return (
        <section className={cx('screen')}>
                <h2 className={cx('screen__main-title')}>OUTLOOK — ТРАНСПОРТНЫЙ <i>ПАРК</i></h2>
                <p className={cx('screen__subtitle')}>
                Наша инвестпрограмма подразумевает пополнения автопарка раз в 3 месяца и регулярно пересматривается в зависимости от текущих контрактов и динамики рынка.
                Большинство популярных услуг мы оказываем силами собственных мощностей, но мы также гибко оперируем парком исходя из пожеланий наших клиентов.
                </p>
                <div className={cx('screen__transport')}>
                    {transportCards.map((card, index) => (
                        <div key={index} className={cx('screen__card')}>
                            <span className={cx('screen__card-bg')}></span>
                            <div className={cx('screen__card-img-wrapper')}>
                                <Image src={card.cover} alt='' />
                            </div>
                            <div className={cx('screen__card-text-wrapper')}>
                                <p className={cx('screen__card-title')}>{card.name}</p>
                                <p className={cx('screen__card-subtitle')}>{card.description}</p>
                            </div>                        
                        </div>
                    ))}

                    <Link href='/transport' className={cx('screen__last-card')}>
                            <p className={cx('screen__card-title')}>НЕТ <i>НУЖНОГО?</i></p>
                            <p className={cx('screen__card-subtitle')}>посмотрите что мы можем предложить &rarr;</p>
                    </Link>
                    
                </div>

                <div className={cx('screen__head')}>
                    <div className={cx('screen__title-wrapper')}>
                        <h3 className={cx('screen__title')}>OUTLOOK — <i>О НАС</i></h3>
                        <p className={cx('screen__lead-text')}>Outlook - современная логистика для бизнеса. Мы нацелены на долгосрочное сотрудничество с глубоким пониманием процессов наших клиентов, надежным, понятным сервисом и работой на результат!</p>

                        <div className={cx('screen__links-wrapper')}>
                            <Link href='/uslugi' className={cx('screen__button')}>Услуги</Link>
                            <Link href='/about' className={cx('screen__button')}>О нас</Link>
                        </div>
                    </div>   
                    
                    <div className={cx('screen__stat-wrapper')}>
                        <Statistics />
                    </div>
                </div>
                          
        </section>
    )
}

export default FeaturesScreen;