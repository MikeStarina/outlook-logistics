import React from "react";
import styles from './blog-screen.module.css';






const BlogScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>OUTLOOK</i> БЛОГ</h2>

            <p className={styles.description}>Наш неформальный блог про историю Русской и Мировой Логистики.
                По статистике особенно популярен по пятницам после 16:00
            </p>

            <div className={styles.cards_block}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>

            <button type='button' className={styles.button}>Смотреть все</button>

            <div className={styles.geolabel}>
                <div className={styles.inner}></div>
            </div>
        </section>
    )
}


export default BlogScreen;