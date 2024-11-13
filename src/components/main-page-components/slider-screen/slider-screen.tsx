
import styles from './slider-screen.module.scss';
import Image from 'next/image';
import classNames from "classnames/bind";
import slideOne from '../../../../public/slideTwo.webp';
import slideTwo from '../../../../public/slideOne.webp';
import slideThree from '../../../../public/slideFour.webp';
import slideFour from '../../../../public/slideThree.webp';
const cx = classNames.bind(styles);



const arr = [
    {
        title: 'АВТОМОБИЛЬНЫЕ FTL/LTL',
        description: 'Перевозим сборные и генеральные грузы с различными опциями: температурный режим, вооруженная охрана, различные обьемы кузова и т.д. Федеральное покрытие, а также СНГ и Европа.',
        image: slideOne
    },
    {
        title: 'МОРСКИЕ',
        description: 'Все основные направления морских in/out перевозок. Быстрое оформление и отправка груза, индивидуальный расчет, таможенное оформление',
        image: slideTwo
    },
    {
        title: 'АВИА',
        description: 'Для срочных перевозок или труднодоступных регионов. Индивидуальный расчет, возможность отправки груза в день обращения',
        image: slideThree
    },
    {
        title: 'МУЛЬТМОДАЛЬНЫЕ',
        description: 'Более 5 лет проектируем сложные логистические цепочки или оптимизируем имеющиеся. Научный подход, анализ big data, собственная it-based архитектура',
        image: slideFour
    },
]




const SliderScreen: React.FC = () => {
    
    
    return (
        <section className={cx('screen')}>
            <div className={cx('screen__wrapper')}>
                <div className={cx('screen__title-wrapper')}>
                    <h2 className={cx('screen__title')}>OUTLOOK — топ-<i>компетенции</i></h2>
                    <p className={cx('screen__subtitle')}>
                        Трудно охватить весь спектр услуг в логистике. Вот список наших топ-компетенций - то, что у нас получается лучше всего.
                        По этим услугам мы накопили огромную экспертизу и можем предложить лучший сервис и условия, но мы открыты для нового и готовы сделать предложение на любой запрос!
                    </p>
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

export default SliderScreen;