'use client'
import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ReactDOM from 'react-dom/client'
import { EmblaOptionsType } from 'embla-carousel-react'
//import { Swiper } from 'swiper/react';
//import { SwiperSlide } from 'swiper/react';
import slideOne from '../../../../public/slideOne.webp';
import slideTwo from '../../../../public/slideTwo.webp';
import slideFour from '../../../../public/slideFour.webp';
import slideThree from '../../../../public/slideThree.webp';
import styles from './slider-screen.module.css';
//import 'swiper/css';
//import "swiper/css/pagination";
import Image from 'next/image';

const SliderScreen: React.FC = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000})]);
    
    useEffect(() => {
      }, [emblaApi])
    
    
    return (
        <section className={styles.screen}>
            
            
            <div className={styles.slider} ref={emblaRef}>
                
                <div className={styles.slide_container}>
                    <div className={styles.slide}>                    
                            <h2 className={styles.left_title}>ВИДЫ <i>ПЕРЕВОЗОК</i></h2>
                            <h2 className={styles.right_title}>OUTLOOK</h2>
                            <h2 className={styles.index}>01</h2>  
                            <div className={styles.text_box}>
                                <h2 className={styles.desc_title}>АВТОМОБИЛЬНЫЕ FTL/LTL</h2>
                                <p className={styles.description}>Перевозим сборные и генеральные грузы с различными опциями: температурный режим, вооруженная охрана, различные обьемы кузова и т.д. Федеральное покрытие, а также СНГ и Европа.</p>
                            </div>
                            <Image src={slideTwo} alt='slide two' className={styles.slide_img} loading='lazy' decoding="async" />  
                                        
                    </div>
                    <div className={styles.slide}>  
                            <h2 className={styles.left_title}>ВИДЫ <i>ПЕРЕВОЗОК</i></h2>
                            <h2 className={styles.right_title}>OUTLOOK</h2>
                            <h2 className={styles.index}>02</h2>  
                            <div className={styles.text_box}>
                                <h2 className={styles.desc_title}>МОРСКИЕ</h2>
                                <p className={styles.description}>Все основные направления морских in/out перевозок. Быстрое оформление и отправка груза, индивидуальный расчет, таможенное оформление</p>
                            </div>
                            <Image src={slideOne} alt='slide one' className={styles.slide_img} loading='lazy' decoding="async" />                 
                    </div>
                    <div className={styles.slide}>  
                            <h2 className={styles.left_title}>ВИДЫ <i>ПЕРЕВОЗОК</i></h2>
                            <h2 className={styles.right_title}>OUTLOOK</h2>
                            <h2 className={styles.index}>03</h2>  
                            <div className={styles.text_box}>
                                <h2 className={styles.desc_title}>АВИА</h2>
                                <p className={styles.description}>Для срочных перевозок или труднодоступных регионов. Индивидуальный расчет, возможность отправки груза в день обращения</p>
                            </div>
                            <Image src={slideFour} alt='slide four' className={styles.slide_img} loading='lazy' decoding="async" />                  
                    </div>
                    <div className={styles.slide}>  
                            <h2 className={styles.left_title}>ВИДЫ <i>ПЕРЕВОЗОК</i></h2>
                            <h2 className={styles.right_title}>OUTLOOK</h2>
                            <h2 className={styles.index}>04</h2>  
                            <div className={styles.text_box}>
                                <h2 className={styles.desc_title}>МУЛЬТМОДАЛЬНЫЕ</h2>
                                <p className={styles.description}>Более 5 лет проектируем сложные логистические цепочки или оптимизируем имеющиеся. Научный подход, анализ big data, собственная it-based архитектура</p>
                            </div>
                            <Image src={slideThree} alt='slide Three' className={styles.slide_img} loading='lazy' decoding="async" />                  
                    </div>
                </div>
             
            </div>
             
            <div className={styles.circle}>
                <div className={styles.inner_circle}></div>
            </div>
            
        </section>
   
    );
}

export default SliderScreen;