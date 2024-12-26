import React from "react"
import styles from  './social-response.module.scss'
import classNames from "classnames/bind"
import Image from "next/image"
import bars1 from '../../../../public/social/bars1.jpg'
import bars2 from '../../../../public/social/bars2.jpg'
import bars3 from '../../../../public/social/bars3.jpg'
import bars4 from '../../../../public/social/bars4.jpg'
import jiu1 from '../../../../public/social/jiu1.jpg'
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
                    <div className={cx('screen__social-img-wrapper')}>
                        <Image src={bars1} alt ='' ></Image>
                    </div>
                    <div className={cx('screen__social-img-wrapper')}>
                        <Image src={bars2} alt ='' ></Image>
                    </div>
                    <div className={cx('screen__social-img-wrapper')}>
                        <Image src={bars3} alt ='' ></Image>
                    </div>
                    <div className={cx('screen__social-img-wrapper')}>
                        <Image src={bars4} alt ='' ></Image>
                    </div>
                </div>
            </div>



            <div className={cx('screen__table', 'screen__table--last')}>
                <div className={cx('screen__table-column', 'screen__table-column--left')}>
                    <p className={cx('screen__text')}>
                        Другое направление нашей социальной поддержки, которое мы открыли недавно - поддержка спортивных клубов по всей стране.
                        Первым стал зал бразильского джиу джитсу в Мурманске. 
                         Подробнее: <Link href='https://vk.com/bjjmurmansk' className={cx('screen__link')} target='blank'>BJJMURMANSK VK</Link>
                    </p>
                    
                </div>
                <div className={cx('screen__table-column', 'screen__table-column--right-no-grid')}>
                    <div className={cx('screen__social-img-wrapper')}>
                        <Image src={jiu1} alt ='' ></Image>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SocialResponse