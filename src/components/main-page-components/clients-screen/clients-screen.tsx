import styles from './clients-screen.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
import gazprom from '../../../../public/clients/gazprom.png';
import magnit from '../../../../public/clients/magnit.png';
import rzd from '../../../../public/clients/rzd.png';
import hotHeat from '../../../../public/clients/hot-heat.png'
import rostech from '../../../../public/clients/rostech.png'
import x5 from '../../../../public/clients/x5.png'
import forum from '../../../../public/clients/forum.svg'
import lenta from '../../../../public/clients/lenta.svg'
import koleso from '../../../../public/clients/koleso.png'
import shvabe from '../../../../public/clients/shvabe.png'
import energok from '../../../../public/clients/energokompleks.png'
import vertex from '../../../../public/clients/vertex.png'
import pridex from '../../../../public/clients/pridex.svg'
import ozon from '../../../../public/clients/ozon.png'
import lavka from '../../../../public/clients/lavka.png'
import gardens from '../../../../public/clients/gardens.png'
import bristol from '../../../../public/clients/bristol.svg'
import am from '../../../../public/clients/am.png'
import algo from '../../../../public/clients/algo.png'
import Image from "next/image";


/**
 * 
Колеса ру
швабе
Энергокомплекс
ароматный мир




группа компаний алгоритм
 */




const ClientsScreen = () => {

    return (
        <section className={cx('screen')}>
            <Image src={gazprom} alt='газпром логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={rzd} alt='ржд логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={hotHeat} alt='хот хит логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={magnit} alt='магнит логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={rostech} alt='ростех логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={x5} alt='x5 логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={forum} alt='Форум электро логотип' className={cx('screen__client-logo', 'screen__client-logo--small')} loading='lazy' decoding="async" />
            <Image src={lenta} alt='Лента логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={koleso} alt='Колесо.ру логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={shvabe} alt='Швабе логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={energok} alt='Энергокомплекс логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={vertex} alt='Вертекс логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={pridex} alt='Прайдекс логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={ozon} alt='Озон логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={lavka} alt='Яндекс лавка логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={gardens} alt='Сады придонья логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={bristol} alt='Бристоль логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={am} alt='Ароматный мир логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            <Image src={algo} alt='Алгоритм логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" />
            {/* <Image src={kamaz} alt='камаз логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" /> */}
            {/* <Image src={knauf} alt='кнауф логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" /> */}      
            {/* <Image src={etm} alt='ЭТМ ЛОГОТИП' className={cx('screen__client-logo')} loading='lazy' decoding="async" /> */}
            {/* <Image src={segezha} alt='сегежа логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" /> */}
            {/* <Image src={tat} alt='татнефть логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" /> */}
            {/* <Image src={technonikol} alt='технониколь логотип' className={cx('screen__client-logo')} loading='lazy' decoding="async" /> */}
        </section>
    )
}

export default ClientsScreen;