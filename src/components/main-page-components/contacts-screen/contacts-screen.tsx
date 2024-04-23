'use client'
import React, { Suspense } from "react";
import styles from './contacts-screen.module.css';
import Image from "next/image";
import Link from "next/link";
import vk_logo_black from '../../../../public/vk_logo_black.png';
import instagram_logo_black from '../../../../public/instagram_logo_black.png';
import strela_small_logo_black from '../../../../public/strela_small_logo_black.png';
//const YMaps = lazy(() => import('@pbe/react-yandex-maps').then(({ YMaps }) => ({ default: YMaps })));
//const Map = lazy(() => import('@pbe/react-yandex-maps').then(({ Map }) => ({ default: Map })));
//const Placemark = lazy(() => import('@pbe/react-yandex-maps').then(({ Placemark }) => ({ default: Placemark })));
//const ZoomControl = lazy(() => import('@pbe/react-yandex-maps').then(({ ZoomControl }) => ({ default: ZoomControl })));
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';







const ContactsScreen: React.FC = () => {
   

    return (
        <section className={styles.screen}>
            <div className={styles.contacts_block}>
                <h3 className={styles.contacts_title}>КОНТАКТЫ</h3>
                <div className={styles.wrapper}>
                    <a href='tel:+78002010073' className={styles.contacts_text}>8 (800) 201-00-73</a>
                    <a href='https://t.me/OUTLOOK_LOGISTICS' className={styles.contacts_text} target="blank">Telegram</a>
                    <a href='https://api.whatsapp.com/send?phone=79223671541' className={styles.contacts_text} target="blank">Whatsapp</a>
                    <p className={styles.contacts_text}>info@outlook-logistics.ru</p>
                    <p className={styles.contacts_text}>—</p>
                    <p className={styles.contacts_text}>г. Санкт-Петербург, Софийская ул. 14, офис 309</p>
                    <p className={styles.contacts_text}>По будням с 9 до 18</p>
                    <div className={styles.socials_wrapper}>
                        {/* <Link href='https://vk.com/outlook_logistics'>
                            <Image src={vk_logo_black} alt='Логотип вконтакте' className={styles.social_logo} />
                        </Link> */}
                        {/*
                        <Link href='/'>
                            <Image src={instagram_logo_black} alt='Логотип инстаграм' className={styles.social_logo} />
                        </Link>
                        */}
                        {/* <Link href='https://t.me/+4AjbWvlSJJcwOTMy'>
                            <Image src={strela_small_logo_black} alt='Логотип стрела' className={styles.social_logo} />
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className={styles.map_block}>
                <Suspense fallback={null}>
                    
                    <YMaps>
                        <Map defaultState={{ center: [ 59.879510, 30.397140 ], zoom: 15 }} instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }} width={'100%'} height={'100%'} className={styles.map}>
                            <Placemark defaultGeometry={[ 59.879510, 30.397140 ]} />
                            <ZoomControl />
                        </Map>
                    </YMaps>
                    
                </Suspense>
            </div>

            <div className={styles.circle}>
                <div className={styles.inner_circle}></div>
            </div>
        </section>
    )
}

export default ContactsScreen; 