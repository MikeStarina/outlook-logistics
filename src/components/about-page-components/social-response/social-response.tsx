import React from "react"
import styles from  './social-response.module.scss'
import classNames from "classnames/bind"
import Image from "next/image"
import bars from '../../../../public/bars.jpg'
import Link from "next/link"
const cx = classNames.bind(styles)





const SocialResponse: React.FC = () => {

    return (
        <section className={cx('screen')}>
             <div className={cx('screen__title-wrapper')}>
                <h2 className={cx('screen__title')}>OUTLOOK - <i>СОЦИАЛЬНАЯ</i> ОТВЕТСТВЕННОСТЬ</h2>
                <p className={cx('screen__subtitle')}>Мы поддерживаем некомерческие организации и фонды, совместно работая над улучшением городской среды и качества жизни муниципальных и городских сообществ </p>
            </div>

            <div className={cx('screen__table')}>
                <div className={cx('screen__table-column', 'screen__table-column--left')}>
                    <p className={cx('screen__text')}>
                        Исторически сложившаяся связь со спортом нашла отражение в нашей поддержке различных спортивных инициатив.
                        Мы прошли через много различных партнерств, предложений, фондов, но именно с федерацией регби у нас сложилось. Более того, мы и сами втянулись.
                        В данный момент мы активно поддерживаем регбийный клуб Барс, а также одноименные детскую и взрослую школы регби.
                        Клуб существует с 2010 года и активно выступает в первенстве Санкт-Петербурга. За это время клуб занял множетсво призовых мест в государственных и частных соревнованиях,
                        а также заработал определенную репутацию благодаря принципиальной позиции по множеству вопросов. Подробнее: <Link href='https://vk.com/rugbybars' className={cx('screen__link')} target='blank'>БАРС VK</Link>
                    </p>
                    
                </div>
                <div className={cx('screen__table-column', 'screen__table-column--right')}>
                        <Image src={bars} alt ='' ></Image>
                </div>
            </div>

        </section>
    )
}

export default SocialResponse