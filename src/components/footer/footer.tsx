import React from "react";
import styles from './footer.module.css';
import Link from "next/link";
import Image from 'next/image';
import full_logo440px_whiteW from '../../../public/full_logo440px_whiteW.svg'
//import { Link } from "react-router-dom";









const Footer: React.FC = () => {

    return (
        <footer className={styles.footer}>

            <div className={styles.left_column}>
                <Link href='/about' className={styles.link}>О КОМПАНИИ</Link>
                <Link href='/features' className={styles.link}>УСЛУГИ</Link>
                {/*<Link href='/blog' className={styles.link}>БЛОГ</Link>*/}
                <Link href='/contacts' className={styles.link}>КОНТАКТЫ</Link>
                <Link href='/' className={styles.link}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</Link>
            </div>
            <div className={styles.right_column}>
                <Image src={full_logo440px_whiteW} alt='логотип' className={styles.logo} />
                <p className={styles.paragraph}>ООО "ПЕРСПЕКТИВА"</p>
                <p className={styles.paragraph}>ИНН: 4706053435</p>
                <p className={styles.paragraph}>КПП: 781601001</p>
                <p className={styles.paragraph}>© 2023</p>
            </div>

            
        </footer>
    )
}

export default Footer;