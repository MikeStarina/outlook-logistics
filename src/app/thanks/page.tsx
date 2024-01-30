import React from "react";
import styles from './page.module.css';
import Link from "next/link";




const ThanksPage = () => {


    return (
        <section className={styles.page}>
            <div className={styles.wrapper}>
                <p className={styles.text}>Ваша заявка отправлена!</p>
                <p className={styles.text}>Наши менеджеры свяжутся с вами в ближайшее время.</p>
                <Link href='/' className={styles.link}>Вернуться на главную</Link>
            </div>
        </section>
    )
}

export default ThanksPage;