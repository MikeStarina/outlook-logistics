import React from "react";
import styles from './not-found.module.css';
import Link from 'next/link';

const Error: React.FC = () => {

    return (
        <section className={styles.page}>
            <h1 className={styles.title}>404</h1>
            <p className={styles.subtitle}>Этой страницы не существует</p>
            <Link href='/' className={styles.link}>На главную</Link>
        </section>
    );
}

export default Error;