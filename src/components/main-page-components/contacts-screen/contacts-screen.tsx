import React from "react";
import styles from './contacts-screen.module.css';
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';







const ContactsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.contacts_block}>
                <h3 className={styles.contacts_title}>КОНТАКТЫ</h3>
                <div className={styles.wrapper}>
                    <p className={styles.contacts_text}>8 (800) 999 88 00</p>
                    <p className={styles.contacts_text}>info@outlook-logistics.ru</p>
                    <p className={styles.contacts_text}>г. Санкт-Петербург, Софийская ул. 14, офис 915</p>
                    <p className={styles.contacts_text}>По будням с 10 до 18</p>
                </div>
            </div>
            <div className={styles.map_block}>
                <YMaps>
                    <Map defaultState={{ center: [ 59.879510, 30.397140 ], zoom: 15 }} instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }} width={'100%'} height={'100%'} className={styles.map}>
                        <Placemark defaultGeometry={[ 59.879510, 30.397140 ]} />
                        <ZoomControl />
                    </Map>
                </YMaps>
            </div>

            <div className={styles.circle}>
                <div className={styles.inner_circle}></div>
            </div>
        </section>
    )
}

export default ContactsScreen; 