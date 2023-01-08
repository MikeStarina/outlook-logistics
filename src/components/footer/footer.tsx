import React from "react";
import styles from './footer.module.css';
import { Link } from "react-router-dom";









const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>

            <h3>(c) 2022 OUTLOOK <i>LOGISTICS</i></h3>
            <Link to='/about' className={styles.link}>О КОМПАНИИ</Link>
            <Link to='/features' className={styles.link}>УСЛУГИ</Link>
            <Link to='/blog' className={styles.link}>БЛОГ</Link>
            <Link to='/contacts' className={styles.link}>КОНТАКТЫ</Link>
            <Link to='/' className={styles.link}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>

            
        </footer>
    )
}

export default Footer;