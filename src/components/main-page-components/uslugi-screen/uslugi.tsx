import styles from './uslugi.module.scss';
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import autoCover from '../../../../public/auto_cover.jpg';
import zdCover from '../../../../public/zd_cover.jpg';
import seaCover from '../../../../public/sea_cover.jpg';
import aviaCover from '../../../../public/slideFour.webp';
import fivetonns from '../../../../public/features_covers/fivetonn.jpg'
import refCover from '../../../../public/features_covers/ref.jpg'
import ngCover from '../../../../public/ng_cover.jpg'
const cx = classNames.bind(styles);





const Uslusgi = () => {


    return (
        <section className={cx('screen')}>
                <div className={cx('screen__title-wrapper')}>
                    <h2 className={cx('screen__title')}>OUTLOOK — логистические <i>услуги</i></h2>
                    <p className={cx('screen__subtitle')}>
                        Трудно охватить весь спектр услуг в логистике. Вот список наших топ-компетенций - то, что у нас получается лучше всего.
                        По этим услугам мы накопили огромную экспертизу и можем предложить лучший сервис и условия, но мы открыты для нового и готовы сделать предложение на любой запрос!
                    </p>
                </div>


                <div className={cx('screen__carousel')}>
                            <Link href='/uslugi' className={cx('screen__card-link')}>
                                <p className={cx('screen__index')}>&rarr;</p>
                                <div className={cx('screen__card-link-wrapper')}>
                                    <p className={cx('screen__card-title')}>типы <i>перевозок</i></p>
                                    <p className={cx('screen__card-subtitle')}>/ смотреть все /</p>
                                </div>
                            </Link>
                            <Link href='/uslugi/avtomobilnye-perevozki' className={cx('screen__card')} >
                                <div className={cx('screen__card-bg')}>
                                    <Image src={autoCover} alt='' />
                                </div>
                                <p className={cx('screen__index')}>01</p>
                                <p className={cx('screen__card-title')}>Автомобильные <i>перевозки</i></p>
                            </Link>
                            <Link href='/uslugi/zheleznodorozhnye-perevozki' className={cx('screen__card')} >
                                <div className={cx('screen__card-bg')}>
                                    <Image src={zdCover} alt='' />
                                </div>
                                <p className={cx('screen__index')}>02</p>
                                <p className={cx('screen__card-title')}>Ж/Д <i>перевозки</i></p>
                            </Link>
                            <Link href='/uslugi/morskie-perevozki' className={cx('screen__card')} >
                                <div className={cx('screen__card-bg')}>
                                    <Image src={seaCover} alt='' />
                                </div>
                                <p className={cx('screen__index')}>03</p>
                                <p className={cx('screen__card-title')}>морские <i>перевозки</i></p>
                            </Link>
                            <Link href='/uslugi/aviaperevozki' className={cx('screen__card')} >
                                <div className={cx('screen__card-bg')}>
                                    <Image src={aviaCover} alt='' />
                                </div>
                                <p className={cx('screen__index')}>04</p>
                                <p className={cx('screen__card-title')}>авиа <i>перевозки</i></p>
                            </Link>
                           
                </div>







                <div className={cx('screen__carousel', 'screen__carousel--next')}>


                <Link href='/uslugi/avtomobilnye-perevozki' className={cx('screen__card-link')}>
                                <p className={cx('screen__index')}>&rarr;</p>
                                <div className={cx('screen__card-link-wrapper')}>
                                    <p className={cx('screen__card-title')}>Популярные <i>перевозки</i></p>
                                    <p className={cx('screen__card-subtitle')}>/ смотреть все /</p>
                                </div>
                            </Link>
                            
                            <Link href='/uslugi/avtomobilnye-perevozki/5-tonn' className={cx('screen__card')} >
                                <div className={cx('screen__card-bg')}>
                                    <Image src={fivetonns} alt='' />
                                </div>
                                <p className={cx('screen__index')}>01</p>
                                <p className={cx('screen__card-title')}>Автоперевозки <i>5&nbsp;тонн</i></p>
                            </Link>
                            <Link href='/uslugi/avtomobilnye-perevozki/5-tonn' className={cx('screen__card')} >
                                <div className={cx('screen__card-bg')}>
                                    <Image src={autoCover} alt='' />
                                </div>
                                <p className={cx('screen__index')}>02</p>
                                <p className={cx('screen__card-title')}>Автоперевозки <i>20&nbsp;тонн</i></p>
                            </Link>
                            <Link href='/uslugi/avtomobilnye-perevozki/negabaritnye' className={cx('screen__card')} >
                                <div className={cx('screen__card-bg')}>
                                    <Image src={ngCover} alt='' />
                                </div>
                                <p className={cx('screen__index')}>03</p>
                                <p className={cx('screen__card-title')}>негабаритные <i>перевозки</i></p>
                            </Link>
                            <Link href='/uslugi/avtomobilnye-perevozki/refrizheratornye' className={cx('screen__card')} >
                                <div className={cx('screen__card-bg')}>
                                    <Image src={refCover} alt='' />
                                </div>
                                <p className={cx('screen__index')}>04</p>
                                <p className={cx('screen__card-title')}>рефрижераторные <i>перевозки</i></p>
                            </Link>

                            
                           
                </div>
            
        </section>
    )
}

export default Uslusgi;

