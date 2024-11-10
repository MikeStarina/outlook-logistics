import React from "react";
import styles from './values-screen.module.scss';
import Image from 'next/image';
import classNames from "classnames/bind";
import slideOne from '../../../../public/aboutSlideOne.jpg';
import slideTwo from '../../../../public/aboutSlideTwo.jpg';
import slideFour from '../../../../public/aboutSlideThree.jpg';
import slideThree from '../../../../public/aboutSlideFour.jpg';
const cx = classNames.bind(styles);



const arr = [
    {
        title: 'ОПЫТ',
        description: 'Высокий уровень сервиса, профессионализм и ответственность логистов и менеджеров - наша ключевая ценность для обеспечения стабильных и надежных перевозок.',
        image: slideOne
    },
    {
        title: 'ДЕТАЛИ',
        description: 'Даже простые логистические задачи могу стать невыполнимыми без внимания к деталям перевозки. Выяснение задач и потребностей одна из наших лучших компетенций',
        image: slideTwo
    },
    {
        title: 'ДОВЕРИЕ',
        description: 'Всегда честно говорим о своих успехах и неудачах. Честность - основа доверительных и долгосрочных отношений',
        image: slideThree
    },
    {
        title: 'РАЗВИТИЕ',
        description: 'Устойчивое развитие больше не модный тренд, а данность развития бизнеса. Много и честно вкладываем в людей и инфраструктуру чтобы всегда предлагать больше чем другие.',
        image: slideFour
    },
]




const ValuesScreen: React.FC = () => {
    
    
    return (
        <section className={cx('screen')}>
            <div className={cx('screen__wrapper')}>
                <div className={cx('screen__title-wrapper')}>
                    <h2 className={cx('screen__title')}>OUTLOOK — ЦЕННОСТИ</h2>
                    <p className={cx('screen__subtitle')}>
                        Наши ценности - это основа нашей работы. Мы верим в честность, профессионализм и индивидуальный подход к каждому клиенту. 
                        Постоянное развитие и внедрение инноваций позволяет нам оставаться надежным партнером в сфере логистики.
                    </p>
                </div>
                <div className={cx('screen__title-block')}>
                    {/* <p className={cx('screen__index')}>
                       &rarr;
                    </p> */}
                </div>
            </div>
           

            <div className={cx('screen__cards-block')}>
                
                {arr.map((a, i) =>
                    <div className={cx('screen__card')} key={i}>
                        <div className={cx('screen__column', 'screen__column--text')}>
                            <p className={cx('screen__card-title')}>{a.title}</p>
                            <p className={cx('screen__card-text')}>{a.description}</p>
                        </div>
                        <div className={cx('screen__column', 'screen__column--image')}>
                            <div className={cx('screen__card-img-wrapper')}>
                                <Image src={a.image} alt='slide two' loading='lazy' decoding="async" />                            
                            </div>
                            <p className={cx('screen__index')}>0{i + 1}</p>
                        </div>
                    </div>
                )}


            </div>
            
          
            
        </section>
   
    );
}

export default ValuesScreen;