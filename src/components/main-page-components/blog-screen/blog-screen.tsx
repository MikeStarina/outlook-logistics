import React from "react";
import styles from './blog-screen.module.css';
import post1 from '../../../images/post1.jpg';
import post2 from '../../../images/post2.jpg';
import post3 from '../../../images/post3.jpg';
import post4 from '../../../images/post4.jpg';






const BlogScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>OUTLOOK</i> БЛОГ</h2>

            <p className={styles.description}>Наш неформальный блог про историю Русской и Мировой Логистики.
                По статистике особенно популярен по пятницам после 16:00
            </p>

            <div className={styles.cards_block}>
               
                <div className={styles.card}>
                    <img src={post1} alt='post cover' className={styles.post_cover}></img>
                    <p className={styles.card_title}>С ЧЕГО НАЧИНАЛАСЬ <i>ЛОГИСТИКА</i></p>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <img src={post2} alt='post cover' className={styles.post_cover}></img>
                    <p className={styles.card_title}>ОТ САНЕЙ ДО ПОЕЗДОВ — ИСТОРИЯ РУССКОЙ <i>ЛОГИСТИКИ</i></p>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <img src={post3} alt='post cover' className={styles.post_cover}></img>
                    <p className={styles.card_title}>СКОРОСТЬ И МЕТАЛЛ. КТО И КАК ИЗОБРЕЛ <i>КОНТЕЙНЕР</i></p>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.card}>
                    <img src={post4} alt='post cover' className={styles.post_cover}></img>
                    <p className={styles.card_title}>БАМ, ТРАНССИБ, <i>ВОЛГОБАЛТ</i></p>
                    <div className={styles.line}></div>
                </div>
                
            </div>

            <button type='button' className={styles.button}>Смотреть все</button>

            <div className={styles.geolabel}>
                <div className={styles.inner}></div>
            </div>
        </section>
    )
}


export default BlogScreen;