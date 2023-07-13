import React, { useRef } from "react";
import styles from './blog-screen.module.css';
import { Link } from "react-router-dom";
import useScrollData from "../../../utils/useScrollData";
import post1 from '../../../images/post1.webp';
import post2 from '../../../images/post2.webp';
import post3 from '../../../images/post3.webp';
import post4 from '../../../images/post4.webp';
import cont1 from '../../../images/cont1.webp';







const BlogScreen: React.FC = () => {
    const ref = useRef(null);


    useScrollData((scrollData) => {
        const node: HTMLDivElement | null = ref?.current;
        node!.style.transform = `translateY(${scrollData.difference * -1 / 10}px) translateX(-500px) rotate(30deg)`;
    })


    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>OUTLOOK</i> БЛОГ</h2>

            <p className={styles.description}>Наш неформальный блог про историю Русской и Мировой Логистики.
                По статистике особенно популярен по пятницам после 16:00
            </p>

            <div className={styles.cards_block}>
               
                <Link to='/blog' className={styles.link}>
                    <div className={styles.card}>
                        <img src={post1} alt='post cover' className={styles.post_cover} loading='lazy' decoding="async"></img>
                        <p className={styles.card_title}>С ЧЕГО НАЧИНАЛАСЬ <i>ЛОГИСТИКА</i></p>
                        <div className={styles.line}></div>
                    </div>
                </Link>
                <Link to='/blog' className={styles.link}>
                <div className={styles.card}>
                    <img src={post2} alt='post cover' className={styles.post_cover} loading='lazy' decoding="async"></img>
                    <p className={styles.card_title}>ОТ САНЕЙ ДО ПОЕЗДОВ — ИСТОРИЯ РУССКОЙ <i>ЛОГИСТИКИ</i></p>
                    <div className={styles.line}></div>
                </div>
                </Link>
                <Link to='/blog' className={styles.link}>
                <div className={styles.card}>
                    <img src={post3} alt='post cover' className={styles.post_cover} loading='lazy' decoding="async"></img>
                    <p className={styles.card_title}>СКОРОСТЬ И МЕТАЛЛ. КТО И КАК ИЗОБРЕЛ <i>КОНТЕЙНЕР</i></p>
                    <div className={styles.line}></div>
                </div>
                </Link>
                <Link to='/blog' className={styles.link}>
                <div className={styles.card}>
                    <img src={post4} alt='post cover' className={styles.post_cover} loading='lazy' decoding="async"></img>
                    <p className={styles.card_title}>БАМ, ТРАНССИБ, <i>ВОЛГОБАЛТ</i></p>
                    <div className={styles.line}></div>
                </div>
                </Link>
                
            </div>
            <Link to='/blog' className={styles.link}>
                <button type='button' className={styles.button}>Смотреть все</button>
            </Link>


            <img src={cont1} alt='container' className={styles.blog_bg}></img>

            {/*<div className={styles.geolabel} ref={ref}>
                <div className={styles.inner}></div>
            </div>*/}
        </section>
    )
}


export default BlogScreen;