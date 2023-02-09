import React from "react";
import { useSelector } from "../../..";
import { Link } from "react-router-dom";
import styles from './features-screen.module.css';
import Tilt from "react-parallax-tilt";
import Trapezoid from "./trapezoid";
import { ScrollContainer, ScrollPage, Animator, Move } from "react-scroll-motion";




const FeaturesScreen: React.FC = () => {

    
    const features = useSelector(store => store.features);
    

    

    return (
        <section className={styles.screen}>
           
                
                            <h2 className={styles.title}><i>OUTLOOK</i> УСЛУГИ</h2>
                            <p className={styles.subtitle}></p>
                        
                            <div className={styles.cards_block}>

                                {features && features.map((item, index) => {

                                    return index < 4 && (
                                    <Tilt tiltMaxAngleX={5} tiltMaxAngleY={10} gyroscope={true} key={index} tiltReverse={true}>
                                        <Link to={`/features/${item!.id}`} className={styles.link} key={index}>
                                        <div className={styles.card}>
                                        
                                            <div className={styles.card_title_wrapper}>
                                            
                                                    <h4 className={styles.card_title}>{item!.title}</h4>
                                            
                                            </div>
                                            <div className={styles.line}></div>
                                        
                                        </div>
                                        </Link>
                                    </Tilt>
                                    )
                                })}

                                
                                
                                
                            </div>
                            
                            <Link to='/features' className={styles.link_button_wrapper}>
                                <button type='button' className={styles.button}>Смотреть все</button>
                            </Link>
                                
                                                       
                                <div className={styles.trapezoid}></div>
                            
            
        </section>
    )
}

export default FeaturesScreen;