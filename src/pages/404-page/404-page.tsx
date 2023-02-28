import React from "react";
import { Link } from "react-router-dom";
import styles from './404-page.module.css';






const Page404: React.FC = () => {
    return(
        <section className={styles.page}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>Этой страницы не существует</p>
            <Link to='/' className={styles.link}>На главную</Link>
        </section>
    )
}

export default Page404;