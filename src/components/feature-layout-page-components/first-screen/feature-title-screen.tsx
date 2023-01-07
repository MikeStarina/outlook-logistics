import React from "react";
import styles from './feature-title-screen.module.css';
import full_logo440px_white from '../../../images/full_logo440px_white.svg';
import icon_logo from '../../../images/icon_logo.svg';
import cont from '../../../images/cont.jpg';
import cont1 from '../../../images/cont1.png';
import cont2 from '../../../images/cont2.png';
import cont3 from '../../../images/cont3.png';
import cont4 from '../../../images/cont4.png';
import { useLocation } from "react-router";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";







const FeatureTitleScreen: React.FC = () => {

    const { pathname } = useLocation();
   

    const activeBgImage = pathname === '/' ? cont :
        pathname === '/features' ? cont4 : cont;



    return (
        <section className={styles.screen}>
           
           

            <div className={styles.main_text_block}>
                <img src={full_logo440px_white} alt='outlook_logo' className={styles.logo}></img>
                <img src={icon_logo} alt='outlook_icon_logo' className={styles.icon_logo}></img>
                <div className={styles.text_wrapper}>
                    <p className={styles.caption}>8<i>(800)</i>888-99-00</p>
                   
                </div>
                <div className={styles.text_wrapper}>
                    
                    <p className={styles.caption}>info@<i>outlook</i>-logistics.ru</p>
                </div>
            </div>

            <div className={styles.main_card}>
                <div className={styles.card_title_column}>
                    <h1 className={styles.page_title}>ТЕНТОВЫЕ ПЕРЕВОЗКИ 110м<sup>3</sup></h1>
                </div>
                <div className={styles.card_description_column}>
                    <p className={styles.params}>ГАБАРИТЫ КУЗОВА (ДхШхВ) М. : 16,5 х 2,48 х 2,68</p>
                    <p className={styles.params}>ГРУЗОПОДЬЕМНОСТЬ: 20 ТОНН</p>
                    <p className={styles.params}>ОБЪЕМ: 110 м<sup>3</sup></p>
                    <p className={styles.params}>ВМЕСТИМОСТЬ: 40 ЕВРОПАЛЛЕТ</p>
                </div>
            </div>
            
            
               
            



           

           
          
           
        </section>
    )
}

export default FeatureTitleScreen;