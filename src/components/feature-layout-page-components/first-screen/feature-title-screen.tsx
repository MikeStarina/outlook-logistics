import React from "react";
import styles from './feature-title-screen.module.css';
import full_logo440px_white from '../../../images/full_logo440px_white.svg';
import icon_logo from '../../../images/icon_logo.svg';
import cont from '../../../images/cont.webp';
import cont4 from '../../../images/cont4.png';
import { useLocation } from "react-router";








const FeatureTitleScreen: React.FC<any> = ({ item }) => {

    const { pathname } = useLocation();
   



    return (
        <section className={styles.screen}>
           
           
            {item && item.image && <img className={styles.bg_image} src={item.image} alt='фоновое изображение'></img>}
            <div className={styles.main_text_block}>
                <img src={full_logo440px_white} alt='outlook_logo' className={styles.logo}></img>
                <img src={icon_logo} alt='outlook_icon_logo' className={styles.icon_logo}></img>
                <div className={styles.text_wrapper}>
                    <a href="tel:+78002010073" className={styles.caption}>8<i>(800)</i>201-00-73</a>
                   
                </div>
                <div className={styles.text_wrapper}>
                    
                    <p className={styles.caption}>info@<i>outlook</i>-logistics.ru</p>
                </div>
            </div>

            <div className={styles.main_card}>
                <div className={styles.card_title_column}>
                    <h1 className={styles.page_title}>{item.title}</h1>
                </div>
                <div className={styles.card_description_column}>
                    <p className={styles.params}>{item.truck_params.size}</p>
                    <p className={styles.params}>{item.truck_params.weight}</p>
                    <p className={styles.params}>{item.truck_params.volume}</p>
                    <p className={styles.params}>{item.truck_params.capacity}</p>
                </div>
            </div>
            
            
               
            



           

           
          
           
        </section>
    )
}

export default FeatureTitleScreen;