import React from "react";
import Link from "next/link";
import styles from './features-screen.module.scss';
import cont2 from '../../../../public/cont2.webp';
import cargo_cover from '../../../../public/cargo_cover.webp';
import sea_cover from '../../../../public/sea_cover.jpg';
import auto_cover from '../../../../public/auto_cover.jpg';
import zd_cover from '../../../../public/zd_cover.jpg';
import ng_cover from '../../../../public/ng_cover.jpg';
import icon_logo_white from '../../../../public/icon_logo_white.svg';
//import { services } from "@/service/services";
import { getServices } from "@/utils/constants";
import Statistics from "@/components/statistics/statistics";
import Image from "next/image";
import carImage from '../../../../public/car-main.png'
import trallImage from '../../../../public/car-main-trall.png'
import trainImage from '../../../../public/car-main-train.png'
import gazImage from '../../../../public/car-main-gazelle.png'
import classNames from "classnames/bind";
const cx = classNames.bind(styles);




const FeaturesScreen: React.FC = async () => {

    const services = await getServices();


    return (
        <section className={cx('screen')}>

                <h2 className={cx('screen__main-title')}>OUTLOOK — ТРАНСПОРТНЫЙ <i>ПАРК</i></h2>
                <p className={cx('screen__subtitle')}>
                Наша инвестпрограмма подразумевает пополнения автопарка раз в 3 месяца и регулярно пересматривается в зависимости от текущих контрактов и динамики рынка.
                Большинство популярных услуг мы оказываем силами собственных мощностей, но мы также гибко оперируем парком исходя из пожеланий наших клиентов.
                </p>
                <div className={cx('screen__transport')}>
                    <div className={cx('screen__card')}>
                        <span className={cx('screen__card-bg')}></span>
                        <div className={cx('screen__card-img-wrapper')}>
                            <Image src={gazImage} alt='' />
                        </div>
                        <div className={cx('screen__card-text-wrapper')}>
                            <p className={cx('screen__card-title')}>ДО 1,5 <i>ТОНН</i></p>
                            <p className={cx('screen__card-subtitle')}>рефрижератор / изотерм / тент</p>

                            {/* <div>
                                <p className={cx('screen__card-text')}>GPS/ГЛОНАСС</p>
                                <p className={cx('screen__card-text')}>+12/-20 градусов</p>
                                <p className={cx('screen__card-text')}>15 европаллет</p>
                                <p className={cx('screen__card-text')}>32 куб. м.</p>
                            </div> */}
                        </div>                        
                    </div>
                    <div className={cx('screen__card')}>
                        <span className={cx('screen__card-bg')}></span>
                        <div className={cx('screen__card-img-wrapper')}>
                            <Image src={carImage} alt='' />
                        </div>
                        <div className={cx('screen__card-text-wrapper')}>
                            <p className={cx('screen__card-title')}>ДО 5 <i>ТОНН</i></p>
                            <p className={cx('screen__card-subtitle')}>рефрижератор / изотерм</p>

                            {/* <div>
                                <p className={cx('screen__card-text')}>GPS/ГЛОНАСС</p>
                                <p className={cx('screen__card-text')}>+12/-20 градусов</p>
                                <p className={cx('screen__card-text')}>15 европаллет</p>
                                <p className={cx('screen__card-text')}>32 куб. м.</p>
                            </div> */}
                        </div>                        
                    </div>

                    <div className={cx('screen__card')}>
                        <span className={cx('screen__card-bg')}></span>
                        <div className={cx('screen__card-img-wrapper')}>
                            <Image src={carImage} alt='' />
                        </div>
                        <div className={cx('screen__card-text-wrapper')}>
                            <p className={cx('screen__card-title')}>ДО 9 <i>ТОНН</i></p>
                            <p className={cx('screen__card-subtitle')}>рефрижератор / изотерм</p>

                            {/* <div>
                                <p className={cx('screen__card-text')}>GPS/ГЛОНАСС</p>
                                <p className={cx('screen__card-text')}>+12/-20 градусов</p>
                                <p className={cx('screen__card-text')}>18 европаллет</p>
                                <p className={cx('screen__card-text')}>40 куб. м.</p>
                            </div> */}
                        </div>                        
                    </div>


                    <div className={cx('screen__card')}>
                        <span className={cx('screen__card-bg')}></span>
                        <div className={cx('screen__card-img-wrapper')}>
                            <Image src={carImage} alt='' />
                        </div>
                        <div className={cx('screen__card-text-wrapper')}>
                            <p className={cx('screen__card-title')}>ДО 20 <i>ТОНН</i></p>
                            <p className={cx('screen__card-subtitle')}>тент</p>

                            {/* <div>
                                <p className={cx('screen__card-text')}>GPS/ГЛОНАСС</p>
                                <p className={cx('screen__card-text')}>32 европаллет</p>
                                <p className={cx('screen__card-text')}>92 куб. м.</p>
                            </div> */}
                        </div>                        
                    </div>
                    <div className={cx('screen__card')}>
                        <span className={cx('screen__card-bg')}></span>
                        <div className={cx('screen__card-img-wrapper')}>
                            <Image src={trallImage} alt='' />
                        </div>
                        <div className={cx('screen__card-text-wrapper')}>
                            <p className={cx('screen__card-title')}>ДО 65 <i>ТОНН</i></p>
                            <p className={cx('screen__card-subtitle')}>трал</p>

                            {/* <div>
                                <p className={cx('screen__card-text')}>GPS/ГЛОНАСС</p>
                                <p className={cx('screen__card-text')}>32 европаллет</p>
                                <p className={cx('screen__card-text')}>92 куб. м.</p>
                            </div> */}
                        </div>                        
                    </div>
                    <div className={cx('screen__card')}>
                        <span className={cx('screen__card-bg')}></span>
                        <div className={cx('screen__card-img-wrapper')}>
                            <Image src={trainImage} alt='' />
                        </div>
                        <div className={cx('screen__card-text-wrapper')}>
                            <p className={cx('screen__card-title')}>RC 20 <i>DC</i></p>
                            <p className={cx('screen__card-subtitle')}>ж/д контейнер 20 футов</p>

                            {/* <div>
                                <p className={cx('screen__card-text')}>GPS/ГЛОНАСС</p>
                                <p className={cx('screen__card-text')}>32 европаллет</p>
                                <p className={cx('screen__card-text')}>92 куб. м.</p>
                            </div> */}
                        </div>                        
                    </div>
                    <div className={cx('screen__card')}>
                        <span className={cx('screen__card-bg')}></span>
                        <div className={cx('screen__card-img-wrapper')}>
                            <Image src={trainImage} alt='' />
                        </div>
                        <div className={cx('screen__card-text-wrapper')}>
                            <p className={cx('screen__card-title')}>RC 40 <i>HC</i></p>
                            <p className={cx('screen__card-subtitle')}>ж/д контейнер 40 футов</p>

                            {/* <div>
                                <p className={cx('screen__card-text')}>GPS/ГЛОНАСС</p>
                                <p className={cx('screen__card-text')}>32 европаллет</p>
                                <p className={cx('screen__card-text')}>92 куб. м.</p>
                            </div> */}
                        </div>                        
                    </div>




                    <div className={cx('screen__last-card')}>
                            <p className={cx('screen__card-title')}>НЕТ <i>НУЖНОГО?</i></p>
                            <p className={cx('screen__card-subtitle')}>посмотрите что мы можем предложить &rarr;</p>
                    </div>
                    
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