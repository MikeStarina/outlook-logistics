import React from "react";
import styles from './clients-screen.module.css';
import etm from '../../../../public/clients/etm.png';
import gazprom from '../../../../public/clients/gazprom.png';
import kamaz from '../../../../public/clients/kamaz.png';
import knauf from '../../../../public/clients/knauf.png';
import magnit from '../../../../public/clients/magnit.png';
import rzd from '../../../../public/clients/rzd.png';
import segezha from '../../../../public/clients/segezha.png';
import tat from '../../../../public/clients/tat.png';
import technonikol from '../../../../public/clients/technonikol.png';
import Image from "next/image";







const ClientsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <Image src={etm} alt='ЭТМ ЛОГОТИП' className={styles.client_logo} loading='lazy' decoding="async" />
            <Image src={gazprom} alt='газпром логотип' className={styles.client_logo} loading='lazy' decoding="async" />
            <Image src={kamaz} alt='камаз логотип' className={styles.client_logo} loading='lazy' decoding="async" />
            <Image src={knauf} alt='кнауф логотип' className={styles.client_logo} loading='lazy' decoding="async" />
            <Image src={magnit} alt='магнит логотип' className={styles.client_logo} loading='lazy' decoding="async" />
            <Image src={rzd} alt='ржд логотип' className={styles.client_logo} loading='lazy' decoding="async" />
            <Image src={segezha} alt='сегежа логотип' className={styles.client_logo} loading='lazy' decoding="async" />
            <Image src={tat} alt='татнефть логотип' className={styles.client_logo} loading='lazy' decoding="async" />
            <Image src={technonikol} alt='технониколь логотип' className={styles.client_logo} loading='lazy' decoding="async" />

            <div className={styles.trapezoid}></div>
        </section>
    )
}

export default ClientsScreen;