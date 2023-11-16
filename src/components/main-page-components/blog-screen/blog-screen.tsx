import React from "react";
import styles from './blog-screen.module.css';
import Link from "next/link";
import post1 from '../../../../public/post1.webp';
import post2 from '../../../../public/post2.webp';
import post3 from '../../../../public/post3.webp';
import post4 from '../../../../public/post4.webp';
import cont1 from '../../../../public/cont1.webp';
import Image from "next/image";







const BlogScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>OUTLOOK</i> БЛОГ</h2>

            {/*<p className={styles.description}>Наш неформальный блог про историю Русской и Мировой Логистики.
                По статистике особенно популярен по пятницам после 16:00
            </p>*/}

            <div className={styles.cards_block}>
               
                <Link href='/blog' className={styles.link}>
                    <div className={styles.card}>
                        <Image src={post1} alt='post cover' className={styles.post_cover} loading='lazy' decoding="async" />
                        <p className={styles.card_title}>С ЧЕГО НАЧИНАЛАСЬ <i>ЛОГИСТИКА</i></p>
                        <div className={styles.line}></div>
                    </div>
                </Link>
                <Link href='/blog' className={styles.link}>
                <div className={styles.card}>
                    <Image src={post2} alt='post cover' className={styles.post_cover} loading='lazy' decoding="async" />
                    <p className={styles.card_title}>ОТ САНЕЙ ДО ПОЕЗДОВ — ИСТОРИЯ РУССКОЙ <i>ЛОГИСТИКИ</i></p>
                    <div className={styles.line}></div>
                </div>
                </Link>
                <Link href='/blog' className={styles.link}>
                <div className={styles.card}>
                    <Image src={post3} alt='post cover' className={styles.post_cover} loading='lazy' decoding="async" />
                    <p className={styles.card_title}>СКОРОСТЬ И МЕТАЛЛ. КТО И КАК ИЗОБРЕЛ <i>КОНТЕЙНЕР</i></p>
                    <div className={styles.line}></div>
                </div>
                </Link>
                <Link href='/blog' className={styles.link}>
                <div className={styles.card}>
                    <Image src={post4} alt='post cover' className={styles.post_cover} loading='lazy' decoding="async" />
                    <p className={styles.card_title}>БАМ, ТРАНССИБ, <i>ВОЛГОБАЛТ</i></p>
                    <div className={styles.line}></div>
                </div>
                </Link>
                
            </div>
            <Link href='/blog' className={styles.link}>
                <button type='button' className={styles.button}>Смотреть все</button>
            </Link>


            <Image src={cont1} alt='container' className={styles.blog_bg} />

            {/*<div className={styles.geolabel} ref={ref}>
                <div className={styles.inner}></div>
            </div>*/}
        </section>
    )
}


export default BlogScreen;