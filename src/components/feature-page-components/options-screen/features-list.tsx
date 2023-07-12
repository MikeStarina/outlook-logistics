import React from "react";
import { useLocation, useParams } from "react-router";
import { useSelector } from "../../..";
import { Link } from "react-router-dom";
import styles from './features-list.module.css';





const FeaturesList: React.FC<any> = () => {


    const features = useSelector(store => store.features);
    const { id } = useParams();
    const data = features.filter(item => item?.serviceType === id);


     

    return (
        <section className={styles.screen}>
             <div className={styles.cards_block}>
                {data && data.map((item: any, index: number) => {
                    return (
                        <Link to={`/uslugi/${id}/${item.slug}`} className={styles.link} key={index}>
                            <div className={styles.card}>
                                
                                    <h4 className={styles.card_title}>{item.name}</h4>
                                
                                <p className={styles.card_subtitle}>{`<>`}</p>
                                
                                <div className={styles.line}></div>
                            </div>
                        </Link>
                    )
                })}
                
                
            </div>


           
        </section>

    )
}

export default FeaturesList;