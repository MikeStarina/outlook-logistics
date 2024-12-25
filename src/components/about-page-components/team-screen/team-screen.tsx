'use client'
import React from "react";
import styles from './team-screen.module.scss'
import classNames from "classnames/bind";
import Image from "next/image";
import nikitaM from '../../../../public/team/nikitaM.jpg'
import irinaI from '../../../../public/team/irinaI.png'
import artemS from '../../../../public/team/artemS.jpg'
import maksimS from '../../../../public/team/maksimS.jpg'
const cx = classNames.bind(styles);

const data = [
    {
        id: 1,
        photo: nikitaM,
        name: 'Мальцев Никита',
        position: 'Ведущий менеджер ОП'
    },
    {
        id: 2,
        photo: irinaI,
        name: 'Иванова Ирина',
        position: 'Ведущий логист'
    },
    {
        id: 3,
        photo: artemS,
        name: 'Самусенко Артем',
        position: 'Генеральный директор'
    },
    {
        id: 4,
        photo: maksimS,
        name: 'Шелепенок Максим',
        position: 'Учредитель'
    },
]


const TeamScreen: React.FC = () => {

    return (
        <section className={cx('screen')}>
                <div className={cx('screen__title-wrapper')}>
                    <h2 className={cx('screen__title')}>OUTLOOK - <i>КОМАНДА</i></h2>
                    <p className={cx('screen__subtitle')}>Делаем больше других, чтобы перевозки были удобными и безопасными, а бизнес - честным и предсказуемым!</p>
                </div>
                <div className={cx('screen__team-block')}>
                    {data && data.map(i =>
                    <div className={cx('screen__team-card')} key={i.id}>
                        <div className={cx('screen__img-wrapper')}>
                            <Image src={i.photo} alt={i.name}></Image>
                        </div>
                        <div className={cx('screen__text-wrapper')}>
                            <p className={cx('screen__card-text')}>{i.name}</p>
                            <p className={cx('screen__card-text')}>{i.position}</p>
                        </div>
                    </div>
                    )}
                </div>
        </section>
    )
}

export default TeamScreen;