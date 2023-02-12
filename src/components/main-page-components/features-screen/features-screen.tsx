import React, { useRef } from "react";
import { useSelector } from "../../..";
import { Link } from "react-router-dom";
import styles from './features-screen.module.css';
import Tilt from "react-parallax-tilt";
import useScrollData from "../../../utils/useScrollData";





const FeaturesScreen: React.FC = () => {

    
    const features = useSelector(store => store.features);
    const ref = useRef(null);


    useScrollData((scrollData) => {
        const node: HTMLDivElement | null = ref?.current;
        node!.style.transform = `translateY(${scrollData.difference * -1 / 20}px) skewY(-11deg)`;
    })

    

    return (
        <section className={styles.screen}>
           
                
                            <h2 className={styles.title}><i>OUTLOOK</i> УСЛУГИ</h2>
                            <p className={styles.subtitle}></p>
                        
                            <div className={styles.cards_block}>

                                {features && features.map((item, index) => {

                                    return index < 4 && (
                                   
                                        <Link to={`/features/${item!.id}`} className={styles.link} key={index}>
                                        <Tilt className={styles.card} tiltEnable={false} glareEnable={true} glareMaxOpacity={.25} glareColor="black" glarePosition="bottom" gyroscope={false}>
                                        
                                            <div className={styles.card_title_wrapper}>
                                            
                                                    <h4 className={styles.card_title}>{item!.title}</h4>
                                            
                                            </div>
                                            <div className={styles.line}></div>
                                        
                                        </Tilt>
                                        </Link>
                                    
                                    )
                                })}

                                
                                
                                
                            </div>
                            
                            <Link to='/features' className={styles.link_button_wrapper}>
                                <button type='button' className={styles.button}>Смотреть все</button>
                            </Link>
                                
                                                       
                                <div className={styles.trapezoid} ref={ref}></div>
                            
            
        </section>
    )
}

export default FeaturesScreen;