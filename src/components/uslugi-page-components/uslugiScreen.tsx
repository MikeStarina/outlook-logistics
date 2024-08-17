import React from "react";
import Link from "next/dist/client/link";
import Image from 'next/image';
import styles from './uslugiScreen.module.css';
import icon_logo_white from '../../../public/icon_logo_white.svg'
import { services } from "@/service/services";
import { getServices } from "@/utils/constants";
import cargo_cover from '../../../public/cargo_cover.webp';
import sea_cover from '../../../public/sea_cover.jpg';
import auto_cover from '../../../public/auto_cover.jpg';
import zd_cover from '../../../public/zd_cover.jpg';
import ng_cover from '../../../public/ng_cover.jpg';
import modal_cover from '../../../public/modal_cover.jpg';
import sec_cover from '../../../public/sec_cover.jpg';
import dang_cover from '../../../public/dang_cover.jpg';
import mixed_cover from '../../../public/mixed_cover.jpg';
import ref_cover from '../../../public/ref_cover.jpg';


const UslugiScreen: React.FC = async () => {

    const services = await getServices();

    return (
        <>
        <section className={styles.screen}>
            { services && services.map((item, index) => {
                let cover = cargo_cover;
                if (item!.name === 'Автомобильные перевозки') cover = auto_cover;
                if (item!.name === 'Морские перевозки') cover = sea_cover;
                if (item!.name === 'Железнодорожные перевозки') cover = zd_cover;
                if (item!.name === 'Негабаритные перевозки') cover = ng_cover;
                if (item!.name === 'Мультимодальные перевозки') cover = modal_cover;
                if (item!.name === 'Перевозки с охраной') cover = sec_cover;
                if (item!.name === 'Опасные грузы') cover = dang_cover;
                if (item!.name === 'Перевозка сборных грузов') cover = mixed_cover;
                if (item!.name === 'Перевозки с температурным режимом') cover = ref_cover;

            return item.pagePosition === 'primary' && (<div className={styles.services_block}>
                <div className={styles.feature_card} key={index}>
                    <Link href={`/uslugi/${item.url}`} className={styles.feature_link}>
                        <Image src={icon_logo_white} alt='логотип' className={styles.logo} />
                        <p className={styles.card_number}>0{index + 1}</p>
                        <Image src={cover} alt='обложка услуги' className={styles.card_cover}></Image>                       
                        <div className={styles.card_title_wrapper}>
                            <p className={styles.card_title}>{item.cardTtitle}</p>
                            <p className={styles.card_title}><i>{item.cardSubtitle}</i></p>
                        </div>
                    </Link>
                </div>
            </div>
            )})}

        </section>
        <section className={styles.secondary_services}>
        {services && services.map((item, index) => {
            return item.pagePosition === 'secondary' && (
                <Link href={`/uslugi/${item.url}`} className={styles.secondary_link} key={index}>
                    <button className={styles.secondary}>
                        {item.cardTtitle}&nbsp;<i>{item.cardSubtitle}</i>
                    </button>
                </Link>
            )
        })}
        
      </section>          
    </>
    )
}

export default UslugiScreen;