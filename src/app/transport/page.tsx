import React from 'react'
import styles from './page.module.scss'
import classNames from 'classnames/bind'
import TransportFeatures from '@/components/transport-page-components/transport-features/transport-features'
import FirstScreen from '@/components/main-page-components/first-screen/first-screen'
import FormScreen from '@/components/main-page-components/form-screen/form-screen'
import SliderScreen from '@/components/main-page-components/slider-screen/slider-screen'
import BreadcrumbsComponent from '@/components/breadcrumbs/breadcrumbs'
const cx = classNames.bind(styles)

const Page: React.FC = () => {
    return (
        <main className={cx('page')}>
            <div className={cx('page__breadcrumbs')}>
                <BreadcrumbsComponent
                    params={[
                        {title: 'Главная', href: '/'},
                        {title: 'Транспорт'},
                    ]}
                />
            </div>
            <FirstScreen 
                mainText='OUTLOOK — Транспорт' 
                links={[
                    {text: 'Услуги', href: '/uslugi'},
                    {text: 'О нас', href: '/about'},
                    {text: 'Контакты', href: '/contacts'},
                ]} 
                cover={false} 
                subtitle='' 
            />
            <TransportFeatures />
            <SliderScreen />
            <FormScreen />
        </main>
    )
}

export default Page;