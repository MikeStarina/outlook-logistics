'use client'
import React, { useEffect } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
// import ReactDOM from 'react-dom/client'
// import { EmblaOptionsType } from 'embla-carousel-react'
//import { Swiper } from 'swiper/react';
//import { SwiperSlide } from 'swiper/react';
import slideOne from '../../../../public/aboutSlideOne.jpg';
import slideTwo from '../../../../public/aboutSlideTwo.jpg';
import slideFour from '../../../../public/aboutSlideThree.jpg';
import slideThree from '../../../../public/aboutSlideFour.jpg';
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
                            <h2 className={styles.index}>01</h2>  
                            <div className={styles.text_box}>
                                <h2 className={styles.desc_title}>ЦЕННОСТИ: ОПЫТ</h2>
                                <p className={styles.description}>Высокий уровень сервиса, профессионализм и ответственность логистов и менеджеров - наша ключевая ценность для обеспечения стабильных и надежных перевозок.</p>
                            </div>
                            <Image src={slideTwo} alt='slide two' className={styles.slide_img} loading='lazy' decoding="async" />  
                                        
                    </div>
                    <div className={styles.slide}>  
                            <h2 className={styles.index}>02</h2>  
                            <div className={styles.text_box}>
                                <h2 className={styles.desc_title}>ЦЕННОСТИ: ДЕТАЛИ</h2>
                                <p className={styles.description}>Даже простые логистические задачи могу стать невыполнимыми без внимания к деталям перевозки. Выяснение задач и потребностей одна из наших лучших компетенций</p>
                            </div>
                            <Image src={slideOne} alt='slide one' className={styles.slide_img} loading='lazy' decoding="async" />                 
                    </div>
                    <div className={styles.slide}>  
                           
                            <h2 className={styles.index}>03</h2>  
                            <div className={styles.text_box}>
                                <h2 className={styles.desc_title}>ЦЕННОСТИ: ДОВЕРИЕ</h2>
                                <p className={styles.description}>Всегда честно говорим о своих успехах и неудачах. Честность - основа доверительных и долгосрочных отношений</p>
                            </div>
                            <Image src={slideFour} alt='slide four' className={styles.slide_img} loading='lazy' decoding="async" />                  
                    </div>
                    <div className={styles.slide}>  
                          
                            <h2 className={styles.index}>04</h2>  
                            <div className={styles.text_box}>
                                <h2 className={styles.desc_title}>ЦЕННОСТИ: РАЗВИТИЕ</h2>
                                <p className={styles.description}>Устойчивое развитие больше не модный тренд, а данность развития бизнеса. Много и честно вкладываем в людей и инфраструктуру чтобы всегда предлагать больше чем другие.</p>
                            </div>
                            <Image src={slideThree} alt='slide Three' className={styles.slide_img} loading='lazy' decoding="async" />                  
                    </div>
                </div>
             
            </div>
             
         
            
        </section>
   
    );
}

export default SliderScreen;