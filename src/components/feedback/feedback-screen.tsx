import React from "react";
import styles from './feedback-screen.module.scss'
import classNames from "classnames/bind";
import Link from "next/link";
const cx = classNames.bind(styles)




export default function FeedbackScreen () {

    return (
        <section className={cx('screen')}>
             <div className={cx('screen__title-wrapper')}>
                <h2 className={cx('screen__title')}>OUTLOOK - <i>ОБРАТНАЯ</i> СВЯЗЬ</h2>
                <p className={cx('screen__subtitle')}>Отзывы партнеров и клиентов о нашей работе</p>
            </div>
            <div className={cx('screen__cards')}>
                <Link href='/feedback/energo.pdf' target='blank' className={cx('screen__card')}>
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
                </Link>
                <Link href='/feedback/ass.pdf' target='blank' className={cx('screen__card')}>
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
                </Link>
                <Link href='https://yandex.ru/profile/62228686418' target='blank' className={cx('screen__card')}>
                    <p className={cx('screen__card-text')}>
                    Выражаю большую благодарность ребятам.
                    Всё сделали чётко и качественно! Без задержек и кормления завтраками.
                    Рекомендую!!!
                    </p>
                    <div className={cx('screen__card-sign-wrapper')}>
                        <div className={cx('screen__card-signs')}>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                Денис З.
                            </p>
                            <p className={cx('screen__card-text', 'screen__card-text--sign')}>
                                &mdash;
                            </p>
                        </div>
                        <p className={cx('screen__arrow')}>&rarr;</p>
                    </div>
                </Link>
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