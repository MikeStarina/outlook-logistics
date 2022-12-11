import React from "react";
import styles from './clients-screen.module.css';
import Microsoft from '../../../images/Microsoft.png';






const ClientsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <img src={Microsoft} alt='Microsoft' className={styles.client_logo}></img>
            <img src={Microsoft} alt='Microsoft' className={styles.client_logo}></img>
            <img src={Microsoft} alt='Microsoft' className={styles.client_logo}></img>
            <img src={Microsoft} alt='Microsoft' className={styles.client_logo}></img>

            <div className={styles.trapezoid}></div>
        </section>
    )
}

export default ClientsScreen;