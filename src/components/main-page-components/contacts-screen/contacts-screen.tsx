import React, { useRef, lazy, Suspense } from "react";
import useScrollData from "../../../utils/useScrollData";
import styles from './contacts-screen.module.css';
const YMaps = lazy(() => import('@pbe/react-yandex-maps').then(({ YMaps }) => ({ default: YMaps })));
const Map = lazy(() => import('@pbe/react-yandex-maps').then(({ Map }) => ({ default: Map })));
const Placemark = lazy(() => import('@pbe/react-yandex-maps').then(({ Placemark }) => ({ default: Placemark })));
const ZoomControl = lazy(() => import('@pbe/react-yandex-maps').then(({ ZoomControl }) => ({ default: ZoomControl })));
//import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';







const ContactsScreen: React.FC = () => {
    const circleRef = useRef(null);


    useScrollData((scrollData) => {
        const node: HTMLDivElement | null = circleRef?.current;
        //console.log(node);
        node!.style.transform = `translateY(${scrollData.difference * -1 / 20}px)`;
    })

    return (
        <section className={styles.screen}>
            <div className={styles.contacts_block}>
                <h3 className={styles.contacts_title}>КОНТАКТЫ</h3>
                <div className={styles.wrapper}>
                    <a href='tel:+78002010073' className={styles.contacts_text}>8 (800) 201-00-73</a>
                    <p className={styles.contacts_text}>info@outlook-logistics.ru</p>
                    <p className={styles.contacts_text}>г. Санкт-Петербург, Софийская ул. 14, офис 903</p>
                    <p className={styles.contacts_text}>По будням с 9 до 18</p>
                </div>
            </div>
            <div className={styles.map_block}>
                <Suspense fallback={<div>Loading...</div>}>
                <YMaps>
                    <Map defaultState={{ center: [ 59.879510, 30.397140 ], zoom: 15 }} instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }} width={'100%'} height={'100%'} className={styles.map}>
                        <Placemark defaultGeometry={[ 59.879510, 30.397140 ]} />
                        <ZoomControl />
                    </Map>
                </YMaps>
                </Suspense>
            </div>

            <div className={styles.circle} ref={circleRef}>
                <div className={styles.inner_circle}></div>
            </div>
        </section>
    )
}

export default ContactsScreen; 