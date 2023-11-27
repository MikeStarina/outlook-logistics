import React from 'react';
import Link from 'next/link';
import styles from './socials-screen.module.css';
import strela_full_logo_white from '../../../../public/strela_full_logo_white.png';
import vk_logo from '../../../../public/vk_logo.png';
import instagram_logo from '../../../../public/instagram_logo.png';
import Image from 'next/image';




const SocialsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.main_column}>
                <Image src={strela_full_logo_white} alt='Стрела логотип' className={styles.strela_logo} />
                <p className={styles.title}>—</p>
                <p className={styles.title}>НАШ КАНАЛ ПРО <i>ЛОГИСТИКУ</i></p>
            </div>
            <div className={styles.description_column}>
                <p className={styles.description}>                    
                    Стрела – наше небольшое медиа для специалистов в сфере транспорта и логистики. Пишем про историю логистики, обсуждаем и анализируем текущие новости и события прямо или косвенно влияющие на одну из главных отраслей мировой экономики в формате телеграм канала.
                </p>
                <p className={styles.description}>
                    Стрела – это новости, аналитика, смешные и не очень картинки – все то, чем не стыдно поделиться с коллегами и друзьями.
                </p>
                <p className={styles.description}>
                    Как плохая логистика сгубила империю? Кто придумал контейнер? Сколько стоит доставить груз на Марс? Узнать ответы на все это и поддержать нас:
                </p>
                <Link href='https://t.me/+4AjbWvlSJJcwOTMy' target='blank'>
                    <button type='button' className={styles.subscride_button}>Подписаться</button>
                </Link>
            </div>
            <div className={styles.socials_column}>
                <p className={styles.description}>
                    Другие наши социальные сети: 
                </p>
                <div className={styles.socials_wrapper}>
                    <Link href='https://vk.com/outlook_logistics' target='blank'>
                        <Image src={vk_logo} alt='Логотип Вконтакте' className={styles.social_logo} />
                    </Link>
                    {/*
                    <Link href='https://instagram.com' target='blank'>
                        <Image src={instagram_logo} alt='Логотип Инстаграм' className={styles.social_logo} />
                    </Link>
                    */}
                </div>
            </div>
        </section>
    );
}

export default SocialsScreen;