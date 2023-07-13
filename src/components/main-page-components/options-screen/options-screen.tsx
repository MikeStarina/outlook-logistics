import React, { useRef } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useScrollData from "../../../utils/useScrollData";
import cont3 from '../../../images/cont3.webp';
import styles from './options-screen.module.css';


const optionsInitData = [
    {title: '5 ЛЕТ', caption: 'Экспертизы в логистике. Мы знаем что делать с вашим грузом'},
    {title: 'СТРАХОВАНИЕ', caption: 'Базовое страхование перевозки уже включено в стоимость'},
    {title: 'ЦЕНООБРАЗОВАНИЕ', caption: 'Персональный подход к ценообразованию для постоянных клиентов'},
    {title: 'SMART КОНТРОЛЬ', caption: 'Удобно видеть состояние и статус перевозки'},
    {title: 'ДОКУМЕНТЫ', caption: 'Не волнуйтесь за документы перевозки. Всегда отправим вам их'},
    {title: 'МАРШРУТЫ', caption: 'Работаем со сложными и непопулярными маршрутами перевозок'},
]


const featuresInitialData = [
    {title: 'АВТОМОБИЛЬНЫЕ ПЕРЕВОЗКИ', caption: 'ДО 1,5 ТОНН'},
    {title: 'АВТОМОБИЛЬНЫЕ ПЕРЕВОЗКИ', caption: 'ДО 5 ТОНН'},
    {title: 'ТЕНТОВЫЕ ПЕРЕВОЗКИ', caption: '82 куб.м.'},
    {title: 'ТЕНТОВЫЕ ПЕРЕВОЗКИ', caption: '82 куб.м.'},
    {title: 'ТЕНТОВЫЕ ПЕРЕВОЗКИ', caption: '82 куб.м.'},
    {title: 'ТЕНТОВЫЕ ПЕРЕВОЗКИ', caption: '82 куб.м.'},
    {title: 'НЕГАБАРИТНЫЕ ГРУЗЫ', caption: '<>'},
    {title: 'НЕГАБАРИТНЫЕ ГРУЗЫ', caption: '<>'},
    {title: 'НЕГАБАРИТНЫЕ ГРУЗЫ', caption: '<>'},
]


const OptionsScreen: React.FC<any> = ({ features }) => {
    //console.log(features);
    const { pathname } = useLocation();

    const ref = useRef(null);


    useScrollData((scrollData) => {
        const node: HTMLDivElement | null = ref?.current;
        node!.style.transform = `translateY(${scrollData.difference * -1 / 20}px) skewY(-11deg)`;
    })


    const initialData = pathname === '/uslugi' && features ? features : optionsInitData;
 

    return (
        <section className={styles.screen}>
             <div className={styles.cards_block}>
                {initialData.map((item: any, index: number) => {
                    return !features ? (<div className={styles.card} key={index}>
                   
                        <h4 className={styles.card_title}>{item.title}</h4>
                        <p className={styles.card_subtitle}>{item?.caption}</p>
              
                        <div className={styles.line}></div>
                    </div>) : (
                        <Link to={`/uslugi/${item.url}`} className={styles.link}>
                            <div className={styles.card} key={index}>
                                
                                    <h4 className={styles.card_title}>{item.name}</h4>
                                
                                <p className={styles.card_subtitle}>{`<>`}</p>
                                
                                <div className={styles.line}></div>
                            </div>
                        </Link>
                    )
                })}
                
                
            </div>


            {/*pathname != '/features' && pathname != '/uslugi' ? (<div className={styles.geolabel} ref={ref}>
                
            </div>) : (<></>)*/}
            <img className={styles.options_bg} src={cont3} alt='container'></img>
        </section>

    )
}

export default OptionsScreen;