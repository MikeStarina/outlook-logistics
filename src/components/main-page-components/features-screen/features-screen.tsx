import React from "react";
import Link from "next/link";
import styles from './features-screen.module.css';
import cont2 from '../../../../public/cont2.webp';
import cargo_cover from '../../../../public/cargo_cover.webp';
import sea_cover from '../../../../public/sea_cover.jpg';
import auto_cover from '../../../../public/auto_cover.jpg';
import zd_cover from '../../../../public/zd_cover.jpg';
import ng_cover from '../../../../public/ng_cover.jpg';
import icon_logo_white from '../../../../public/icon_logo_white.svg';
//import { services } from "@/service/services";
import { getServices } from "@/utils/constants";
import Image from "next/image";





const FeaturesScreen: React.FC = async () => {

    const services = await getServices();


    return (
        <section className={styles.screen}>
           
                
                            <h2 className={styles.title}><i>ЛОГИСТИЧЕСИЕ</i> УСЛУГИ</h2>
                            <p className={styles.subtitle}></p>
                        
                            <div className={styles.cards_block}>

                                {services && services.map((item, index) => {
                                    
                                    let cover = cargo_cover;
                                    if (item!.name === 'Автомобильные перевозки') cover = auto_cover;
                                    if (item!.name === 'Морские перевозки') cover = sea_cover;
                                    if (item!.name === 'Железнодорожные перевозки') cover = zd_cover;
                                    if (item!.name === 'Негабаритные перевозки') cover = ng_cover;
                                    

                                    return index < 4 && (
                                   
                                        <Link href={`/uslugi/${item.url}`} className={styles.link} key={index}>
                                            <div className={styles.card}>
                                                <Image className={styles.cover} src={cover} alt='обложка карточки' />
                                                <p className={styles.card_number}>0{index + 1}</p>
                                                <Image className={styles.logo} alt='логотип' src={icon_logo_white} />
                                                <div className={styles.card_title_wrapper}>
                                                
                                                        <h4 className={styles.card_title}>{item.cardTtitle}</h4>
                                                        <h4 className={styles.card_title}><i>{item.cardSubtitle}</i></h4>
                                                
                                                </div>
                                                
                                               
                                            
                                            </div>
                                        </Link>
                                    
                                    )
                                })}

                                
                                
                                
                            </div>
                            
                            <Link href='/uslugi' className={styles.link_button_wrapper}>
                                <button type='button' className={styles.button}>Смотреть все</button>
                            </Link>
                                
                                                       
                               
                                {/* <Image src={cont2} alt='container' className={styles.bgimage} /> */}
                            
            
        </section>
    )
}

export default FeaturesScreen;