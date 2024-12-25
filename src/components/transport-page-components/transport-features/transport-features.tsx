import React from 'react'
import styles from './transport-features.module.scss'
import classNames from 'classnames/bind'
import { transportCards } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import car1 from '../../../../public/cars/1.jpg';
import car2 from '../../../../public/cars/2.jpg';
import car3 from '../../../../public/cars/3.jpg';
import car4 from '../../../../public/cars/4.jpg';
const cx = classNames.bind(styles)

const TransportFeatures: React.FC = () => {
    return (
        <section className={cx('screen')}>

            <div className={cx('screen__head')}>
                <h1 className={cx('screen__title')}>
                    OUTLOOK — Транспортный <i>парк</i>
                </h1>
                <p className={cx('screen__subtitle')}>
                Наша инвестпрограмма подразумевает пополнения автопарка раз в 3 месяца и регулярно пересматривается в зависимости от текущих контрактов и динамики рынка. Большинство популярных услуг мы оказываем силами собственных мощностей, но мы также гибко оперируем парком исходя из пожеланий наших клиентов.
                </p>
            </div>

            <div className={cx('screen__content')}>
                {transportCards && transportCards.map((card, index) => (
                    <div key={index} className={cx('screen__feature-card')}>

                        <div className={cx('screen__info-block')}>
                            <h3 className={cx('screen__info-title')}>0{index + 1} — {card.name}</h3>
                            <p className={cx('screen__info-description')}>{card.description}</p>
                            <ul className={cx('screen__features-list')}>
                            {card.features && card.features.map((feature, index) => (
                                <li key={index} className={cx('screen__feature-item')}>{feature}</li>
                            ))}
                            </ul>
                        </div>

                        <div className={cx('screen__img-block')}>
                            <Image src={card.cover} alt={card.name} />
                            <div className={cx('screen__img-bg')}></div>
                            {card.quantity ? <p className={cx('screen__index')}>x 0{card.quantity}</p> : <p className={cx('screen__index')}>x 0XX</p>}
                        </div>
                    </div>
                ))}
            </div>

            <div className={cx('screen__gallery')}>
                <div className={cx('screen__gallery-card')}>
                    <Image src={car1} alt=''></Image>
                </div>
                <div className={cx('screen__gallery-card')}>
                    <Image src={car2} alt=''></Image>
                </div>
                <div className={cx('screen__gallery-card')}>
                    <Image src={car3} alt=''></Image>
                </div>
                <div className={cx('screen__gallery-card')}>
                    <Image src={car4} alt=''></Image>
                </div>
            </div>

            <div className={cx('screen__lead-block')}>
                <div className={cx('screen__lead-block-wrapper')}>

                    <p className={cx('screen__info-title', 'screen__info-title--white')}>НЕТ <i>НУЖНОГО?</i></p>
                    <p className={cx('screen__subtitle', 'screen__subtitle--white')}>
                    Мы готовы приобрести транспорт под ваши индивидуальные потребности. Наша компания имеет богатый опыт в подборе и закупке специализированной техники. Мы тщательно изучим ваши требования и подберем оптимальное решение, которое будет соответствовать вашим задачам и бюджету. Свяжитесь с нами для обсуждения деталей.
                    </p>

                    <Link href={{pathname: '/transport', hash: '#callback'}} className={cx('screen__link')}>Оставить заявку &rarr;</Link>
                </div>
            </div>

        </section>
    )
}

export default TransportFeatures;