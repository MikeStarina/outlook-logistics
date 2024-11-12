import React, { Suspense } from 'react';
import styles from './page.module.scss';
import { Metadata } from 'next';
import FirstScreen from '@/components/main-page-components/first-screen/first-screen';
import FeaturesScreen from '@/components/main-page-components/features-screen/features-screen';
import SliderScreen from '@/components/main-page-components/slider-screen/slider-screen';
import StagesScreen from '@/components/main-page-components/stages-screen/stages-screen';
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import FormScreen from '@/components/main-page-components/form-screen/form-screen';
import Uslugi from '@/components/main-page-components/uslugi-screen/uslugi'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles)



export const metadata: Metadata = {
    title: 'Перевозка грузов от логистической компании в Санкт-Петербурге цены в outlook-logistics',
    description: 'Перевозка грузов цена услуг в транспортной компании в Санкт-Петербурге Outlook. Оформить заявку на перевозку груза и рассчитать стоимость вы можете на сайте частной логистической компании.',
    keywords: 'Логистическая компания, перевозка грузов, санкт-петербург, оформить заявку, заказать, цены, стоимость, рассчитать, частная, сайт, услуга',
    openGraph: {
        type: 'website',
        url: 'https://outlook-logistics.ru',
        description: 'Ваш надежный логистический партнер',
        siteName: 'OUTLOOK LOGISTICS',
        title: 'OUTLOOK LOGISTICS | Главная',
    }
}

const MainPage: React.FC = () => {

    return (
            <main className={cx('page')}>
                    <Suspense fallback={null}>
                        <FirstScreen
                            mainText='OUTLOOK — надёжная логистика для бизнеса'
                            links={[{text: 'Услуги', href: '/uslugi'}, {text: 'Транспортный парк', href: '/transport'}, {text: 'О нас', href: '/about'}]}
                            cover={true}
                            subtitle='Cпециализируемся на авто и жд перевозках по России и СНГ'
                        />
                    </Suspense>
                    <FeaturesScreen />  
                    <SliderScreen />
                    <Uslugi />
                    <StagesScreen />
                    <ClientsScreen />
                    <Suspense fallback={null}>
                        <FormScreen />
                    </Suspense>
            </main>
    )
}

export default MainPage;