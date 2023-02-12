import React, { useRef } from "react";
import styles from './clients-screen.module.css';
import etm from '../../../images/etm.png';
import gazprom from '../../../images/gazprom.png';
import kamaz from '../../../images/kamaz.png';
import knauf from '../../../images/knauf.png';
import magnit from '../../../images/magnit.png';
import rzd from '../../../images/rzd.png';
import segezha from '../../../images/segezha.png';
import tat from '../../../images/tat.png';
import technonikol from '../../../images/technonikol.png';
import useScrollData from "../../../utils/useScrollData";







const ClientsScreen: React.FC = () => {

    const ref = useRef(null);


    useScrollData((scrollData) => {
        const node: HTMLDivElement | null = ref?.current;
        node!.style.transform = `translateY(${scrollData.difference * -1 / 20}px) skewY(-11deg)`;
    })

    return (
        <section className={styles.screen}>
            <img src={etm} alt='ЭТМ ЛОГОТИП' className={styles.client_logo}></img>
            <img src={gazprom} alt='газпром логотип' className={styles.client_logo}></img>
            <img src={kamaz} alt='камаз логотип' className={styles.client_logo}></img>
            <img src={knauf} alt='кнауф логотип' className={styles.client_logo}></img>
            <img src={magnit} alt='магнит логотип' className={styles.client_logo}></img>
            <img src={rzd} alt='ржд логотип' className={styles.client_logo}></img>
            <img src={segezha} alt='сегежа логотип' className={styles.client_logo}></img>
            <img src={tat} alt='татнефть логотип' className={styles.client_logo}></img>
            <img src={technonikol} alt='технониколь логотип' className={styles.client_logo}></img>

            <div className={styles.trapezoid} ref={ref}></div>
        </section>
    )
}

export default ClientsScreen;