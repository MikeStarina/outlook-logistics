import Link from 'next/link';
import styles from './directions-main.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);






const DirectionsMain = () => {

    return (
        <section className={cx('screen')}>
            <div className={cx('screen__head')}>
                <h1 className={cx('screen__title')}>OUTLOOK — ВЫБЕРИТЕ <i>НАПРАВЛЕНИЕ</i></h1>
                <p className={cx('screen__subtitle')}>
                    Для вашего удобства собрали популярные направления перевозок на нашем сайте. Выберите нужное и оставьте заявку - это ускорит нашу работу - вы быстрее получите ответ, а мы сможем предложить вам лучшую цену.
                    Или воспользуйтесь калькулятором ниже для того чтобы сразу получить цену.
                </p>
            </div>
            <div className={cx('screen__cards-wrapper')}>
                <Link href='/directions/city' className={cx('screen__card')}>
                    <p className={cx('screen__card-index')}>A &rarr; B</p>
                    <h3 className={cx('screen__card-title')}>город &rarr; город</h3>
                </Link>
                <Link href='/directions/region' className={cx('screen__card')}>
                    <p className={cx('screen__card-index')}>A &rarr; B</p>
                    <h3 className={cx('screen__card-title')}>регион &rarr; регион</h3>
                </Link>
                <Link href='/directions/country' className={cx('screen__card')}>
                    <p className={cx('screen__card-index')}>A &rarr; B</p>
                    <h3 className={cx('screen__card-title')}>страна &rarr; страна</h3>
                </Link>
                
            </div>
        </section>
    )
}

export default DirectionsMain;