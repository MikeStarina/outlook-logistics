'use client'
import React, { Suspense } from "react";
import styles from './form-screen.module.scss';
import LeadForm from '@/components/lead-form/lead-form';
import classNames from 'classnames/bind';
import Link from 'next/link';
const cx = classNames.bind(styles);
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';


const FormScreen: React.FC = () => {

   

    return (
        <section className={cx('screen')} id='callback'>
            <div className={cx('screen__wrapper')}>
                <div className={cx('screen__column', 'screen__column--left')}>
                    <div className={cx('screen__title-wrapper')}>
                        <h2 className={cx('screen__title')}>
                            Остались <i>вопросы?</i>
                        </h2>
                        <p className={cx('screen__subtitle')}>
                            Оставьте заявку и наши специалисты свяжутся с вами в ближайшее время!
                        </p>
                    </div>
                    <div className={cx('screen__links-wrapper')}>
                        <Link href='/' className={cx('screen__link')}>
                                О нас
                        </Link>
                        <Link href='/' className={cx('screen__link')}>
                            

                                Парк

                        </Link>
                        <Link href='/' className={cx('screen__link')}>
                          
                                Услуги

                        </Link>
                    </div>
                    <div className={cx('screen__contacts-wrapper')}>
                        <Link href='tel:+78002010073' className={cx('screen__contacts_text')}>
                            8 (800) 201-00-73
                        </Link>
                        <Link href='https://t.me/OUTLOOK_LOGISTICS' className={cx('screen__contacts_text')} target="blank">
                            Telegram
                        </Link>
                        <Link href='https://api.whatsapp.com/send?phone=79223671541' className={cx('screen__contacts_text')} target="blank">
                            Whatsapp
                        </Link>
                        <p className={cx('screen__contacts_text')}>
                            info@outlook-logistics.ru
                        </p>
                        <p className={cx('screen__contacts_text')}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C4.064 0 0.8 3.264 0.8 7.2C0.8 12.4 8 16 8 16C8 16 15.2 12.4 15.2 7.2C15.2 3.264 11.936 0 8 0ZM8 9.6C6.672 9.6 5.6 8.528 5.6 7.2C5.6 5.872 6.672 4.8 8 4.8C9.328 4.8 10.4 5.872 10.4 7.2C10.4 8.528 9.328 9.6 8 9.6Z" fill="currentColor"/>
                            </svg>
                        </p>
                        <p className={cx('screen__contacts_text')}>
                            г. Санкт-Петербург, Софийская ул. 14, офис 309
                        </p>
                        <p className={cx('screen__contacts_text')}>По будням с 9 до 18</p>
                    </div>
                </div>
                <div className={cx('screen__column', 'screen__column--right')}>
                    <div className={cx('screen__calc-box')}>
                        <LeadForm />
                    </div>
                </div>

            </div>

            <div className={cx('screen__map_block')}>
                <Suspense fallback={null}>
                    
                    <YMaps>
                        <Map defaultState={{ center: [ 59.879510, 30.397140 ], zoom: 15 }} instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }} width={'100%'} height={'100%'} className={styles.map}>
                            <Placemark defaultGeometry={[ 59.879510, 30.397140 ]} />
                            <ZoomControl />
                        </Map>
                    </YMaps>
                    
                </Suspense>
            </div>
        </section>
    )
}

export default FormScreen;