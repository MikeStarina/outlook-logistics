'use client'
import React, { useState } from "react";
import styles from './feedback-screen.module.scss'
import classNames from "classnames/bind";
import Link from "next/link";
import ImageModal from "../image-modal/image-modal";
import { StaticImageData } from "next/image";
import energo from '../../../public/feedback/energo.png'
import ass from '../../../public/feedback/ass.png'
import hot from '../../../public/feedback/hot.png'
const cx = classNames.bind(styles)




export default function FeedbackScreen () {
    const [ isModalActive, setIsModalActive ] = useState<boolean>(true)
    const [ image, setImage ] = useState<StaticImageData | null>(null)
    return (
        <section className={cx('screen')}>
            {isModalActive && image &&  <ImageModal image={image} setModal={setIsModalActive} setImage={setImage} />}
             <div className={cx('screen__title-wrapper')}>
                <h2 className={cx('screen__title')}>OUTLOOK - <i>ОБРАТНАЯ</i> СВЯЗЬ</h2>
                <p className={cx('screen__subtitle')}>Отзывы партнеров и клиентов о нашей работе</p>
            </div>
            <div className={cx('screen__cards')}>
                <div 
                    className={cx('screen__card')}
                    onClick={() => {
                        setIsModalActive(true);
                        setImage(energo)
                    }}
                >
                    <p className={cx('screen__card-text')}>
                        Компания ООО ТК «Энергокомплекс» выражает благодарность компании
                        ООО "ПЕРСПЕКТИВА" за организацию логистики и высокий уровень компетенции в перевозках различной сложности. Компания не раз показала свой уровень профессионализма идоказала что является надёжным партнёром. Уверены в дальнейшем сотрудничестве на взаимовыгодных условиях !
                    </p>
                    <div className={cx('screen__card-sign-wrapper')}>
                        <div className={cx('screen__card-signs')}>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                Гавришенков Д.А.
                            </p>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                ООО "Энергокоплекс"
                            </p>
                        </div>
                        <p className={cx('screen__arrow')}>&rarr;</p>
                    </div>
                </div>
                <div 
                    className={cx('screen__card')}
                    onClick={() => {
                        setIsModalActive(true);
                        setImage(ass)
                    }}
                >
                    <p className={cx('screen__card-text')}>
                        Выражаем благодарность ООО Перспектива за грамотную организацию перевозок нашего оборудования. За время сотрудничества мы неоднократно убеждались в
                        высочайших профессиональных и деловых качествах сотрудников компании.
                        Уверены в сохранении сложившихся партнерских отношений и дальнейшем взаимовыгодном сотрудничестве.
                    </p>
                    <div className={cx('screen__card-sign-wrapper')}>
                        <div className={cx('screen__card-signs')}>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                Колесниченко С.К.
                            </p>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                ООО "АСС НГТЭК"
                            </p>
                        </div>
                        <p className={cx('screen__arrow')}>&rarr;</p>
                    </div>
                </div>
                <div 
                    className={cx('screen__card')}
                    onClick={() => {
                        setIsModalActive(true);
                        setImage(hot)
                    }}
                >
                    <p className={cx('screen__card-text')}>
                        Комбинат питания ХОТ ХИТ, ООО «Найс Айс» выражает благодарность всему коллективу компании ООО «Перспектива» за сотрудничество. Высокое качество услуг по доставке, а так же профессионализм Ваших специалистов позволяют нашей компании четко и в срок выполнять свои обязательства перед заказчиками.
                    </p>
                    <div className={cx('screen__card-sign-wrapper')}>
                        <div className={cx('screen__card-signs')}>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                Свистов А.А.
                            </p>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                ООО "НАЙС АЙС"
                            </p>
                        </div>
                        <p className={cx('screen__arrow')}>&rarr;</p>
                    </div>
                </div>
               
                <Link href='https://yandex.ru/profile/62228686418' target='blank' className={cx('screen__card')}>
                    <p className={cx('screen__card-text')}>
                        Отличная компания, менеджеры быстро подобрали необходимый транспорт! Доставили без задержек! Водитель и менеджер очень приятные люди! В следующий раз обязательно обратимся в данную компанию!
                    </p>
                    <div className={cx('screen__card-sign-wrapper')}>
                        <div className={cx('screen__card-signs')}>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                Сергей К.
                            </p>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                &mdash;
                            </p>
                        </div>
                        <p className={cx('screen__arrow')}>&rarr;</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}