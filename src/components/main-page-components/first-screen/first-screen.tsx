import React from "react";
import styles from './first-screen.module.css';
import { Link } from "react-router-dom";
import full_logo440px_white from '../../../images/full_logo440px_white.svg';
import icon_logo from '../../../images/icon_logo.svg';
import cont from '../../../images/cont.jpg';
import cont4 from '../../../images/cont4.png';
import { useLocation } from "react-router";
import Calc from "../../calc/calc";






const FirstScreen: React.FC = () => {

    const { pathname } = useLocation();
   

    const activeBgImage = pathname === '/' ? cont :
        pathname === '/features' ? cont4 : cont;



    return (
        <section className={styles.screen} id='calc'>
           
           
            
            <div className={styles.main_text_block}>
                <Link to='/' className={styles.logo_link}>
                    <img src={full_logo440px_white} alt='outlook_logo' className={styles.logo}></img>
                </Link>
                <Link to='/' className={styles.logo_link}>
                    <img src={icon_logo} alt='outlook_icon_logo' className={styles.icon_logo}></img>
                </Link>
                <div className={styles.text_wrapper}>
                    <a href='tel:+78002010073' className={styles.caption}>8 <i>(800)</i> 201-00-73</a>
                   
                </div>
                <div className={styles.text_wrapper} id='calc'>
                    
                    <p className={styles.caption}>info@<i>outlook</i>-logistics.ru</p>
                </div>
            </div>

            
               <Calc />
           



           

           
            <div className={styles.bg_circle}>
                <div className={styles.bg_inner_circle}></div>
            </div>
            <img src={activeBgImage} alt='container' className={styles.bg_image}></img>
        </section>
    )
}

export default FirstScreen;