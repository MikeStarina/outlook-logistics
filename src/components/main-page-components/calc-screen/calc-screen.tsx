import React, { useRef } from "react";
//import bgvideo from '../../../images/bgvideo.mp4';
import { Swiper, SwiperSlide } from 'swiper/react';
import slideOne from '../../../images/slideOne.jpg';
import slideTwo from '../../../images/slideTwo.jpg';
import slideFour from '../../../images/slideFour.jpg';
import slideThree from '../../../images/slideThree.jpg';
import useScrollData from "../../../utils/useScrollData";
import styles from './calc-screen.module.css';
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";





const CalcScreen: React.FC = () => {
    const ref = useRef(null);


    useScrollData((scrollData) => {
        const node: HTMLDivElement | null = ref?.current;
        node!.style.transform = `translateY(${scrollData.difference * -1 / 20}px)`;
    })

    return (
        <section className={styles.screen}>
           

            <Swiper className={styles.swiper}  autoplay={{ delay: 4500, disableOnInteraction: true  }} pagination={{ clickable: true }} loop={true} modules={[Autoplay, Pagination]}>
                <h2 className={styles.left_title}>ВИДЫ <i>ПЕРЕВОЗОК</i></h2>
                <h2 className={styles.right_title}>OUTLOOK</h2>
                <SwiperSlide className={styles.slide}>                    
                        
                        <h2 className={styles.index}>01</h2>  
                        <div className={styles.text_box}>
                            <h2 className={styles.desc_title}>АВТОМОБИЛЬНЫЕ FTL/LTL</h2>
                            <p className={styles.description}>Перевозим сборные и генеральные грузы с различными опциями: температурный режим, вооруженная охрана, различные обьемы кузова и т.д. Федеральное покрытие, а также СНГ и Европа.</p>
                        </div>
                        <img src={slideTwo} alt='slide two' className={styles.slide_img}></img>   
                                     
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>  
                        <h2 className={styles.index}>02</h2>  
                        <div className={styles.text_box}>
                            <h2 className={styles.desc_title}>МОРСКИЕ</h2>
                            <p className={styles.description}>Все основные направления морских in/out перевозок. Быстрое оформление и отправка груза, индивидуальный расчет, таможенное оформление</p>
                        </div>
                        <img src={slideOne} alt='slide one' className={styles.slide_img}></img>                  
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>  
                        <h2 className={styles.index}>03</h2>  
                        <div className={styles.text_box}>
                            <h2 className={styles.desc_title}>АВИА</h2>
                            <p className={styles.description}>Для срочных перевозок или труднодоступных регионов. Индивидуальный расчет, возможность отправки груза в день обращения</p>
                        </div>
                        <img src={slideFour} alt='slide four' className={styles.slide_img}></img>                  
                </SwiperSlide>
                <SwiperSlide className={styles.slide}>  
                        <h2 className={styles.index}>04</h2>  
                        <div className={styles.text_box}>
                            <h2 className={styles.desc_title}>МУЛЬТМОДАЛЬНЫЕ</h2>
                            <p className={styles.description}>Более 5 лет проектируем сложные логистические цепочки или оптимизируем имеющиеся. Научный подход, анализ big data, собственная it-based архитектура</p>
                        </div>
                        <img src={slideThree} alt='slide Three' className={styles.slide_img}></img>                  
                </SwiperSlide>
             
            </Swiper>

            <div className={styles.circle} ref={ref}>
                <div className={styles.inner_circle}></div>
            </div>
        </section>
    );
}

export default CalcScreen;