'use client'
import React from 'react';
import styles from './main-text-screen.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Autoplay from "swiper";
import Pagination from "swiper";
import aboutSlideOne from '../../../../public/aboutSlideOne.jpg';
import aboutSlideSix from '../../../../public/aboutSlideSix.jpg';
import aboutSlideFour from '../../../../public/aboutSlideFour.jpg';
import aboutSlideThree from '../../../../public/aboutSlideThree.jpg';
import aboutSlideFive from '../../../../public/aboutSlideFive.jpg';
import Image from 'next/image';
import 'swiper/css';
import "swiper/css/pagination";






const MainTextScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.column_one}>
               
                    <p className={styles.text}>
                        Главное преимущество и ценность нашей компании – высокий уровень сервиса, опыт и профессионализм логистов и менеджеров.
                    </p>
                    <p className={styles.text}>
                        Опыт позволяет нам учитывать все нюансы, которые клиент может не предусмотреть, и предлагать наиболее качественный сервис по приемлемым ценам.
                    </p>
                    <p className={styles.text}>
                        Наши менеджеры подберут оптимальный транспорт под ваш груз, обеспечат своевременную и безопасную перевозку и ежедневно будут информировать Вас о местоположении груза на всем пути следования.
                    </p>
                
            </div>
            
            <Swiper className={styles.swiper}  autoplay={{ delay: 1, disableOnInteraction: true  }} pagination={{ clickable: true }} loop={true}>
                    <SwiperSlide className={styles.slide}>
                        <h2 className={styles.slide_title}>100+ МАШИН</h2>
                        <p className={styles.index}>01</p>
                        <Image src={aboutSlideSix} alt='slide 1' className={styles.slide_img} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <h2 className={styles.slide_title}>50+ СОТРУДНИКОВ</h2>
                        <p className={styles.index}>02</p>
                        <Image src={aboutSlideFour} alt='slide 2' className={styles.slide_img} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <h2 className={styles.slide_title}>2000+ КЛИЕНТОВ</h2>
                        <p className={styles.index}>03</p>
                        <Image src={aboutSlideThree} alt='slide 3' className={styles.slide_img} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <h2 className={styles.slide_title}>5 ЛЕТ ОПЫТА</h2>
                        <p className={styles.index}>04</p>
                        <Image src={aboutSlideFive} alt='slide 4' className={styles.slide_img} />
                    </SwiperSlide>
           
                    <SwiperSlide className={styles.slide}>
                        <h2 className={styles.slide_title}>1300+ ГОРОДОВ</h2>
                        <p className={styles.index}>05</p>
                        <Image src={aboutSlideOne} alt='slide 5' className={styles.slide_img} />
                    </SwiperSlide>
            </Swiper>
           
        </section>
    )
}

export default MainTextScreen;