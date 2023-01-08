import React from "react";
import cont1 from '../../../images/cont1.png';
import { useSelector } from "../../..";
import { Link } from "react-router-dom";
import styles from './features-screen.module.css';





const FeaturesScreen: React.FC = () => {

    
    const features = useSelector(store => store.features);
    

    

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>OUTLOOK</i> УСЛУГИ</h2>
            <p className={styles.subtitle}></p>
            <div className={styles.cards_block}>

                {features && features.map((item, index) => {

                    return index < 4 && (
                    <Link to={`/features/${item!.id}`} className={styles.link} key={index}>
                     <div className={styles.card}>
                    
                        <div className={styles.card_title_wrapper}>
                            <h4 className={styles.card_title}>{item!.title}</h4>
                            {/*<p className={styles.card_subtitle}>ДО 1,5 ТОНН</p>
                            <p className={styles.card_subtitle}>(ГАЗЕЛЬ)</p>*/}
                        </div>
                        <div className={styles.line}></div>
                     
                    </div>
                    </Link>
                    )
                })}

                
                
                
            </div>
            <Link to='/features'>
                <button type='button' className={styles.button}>Смотреть все</button>
            </Link>
            <div className={styles.trapezoid}></div>
        </section>
    )
}

export default FeaturesScreen;