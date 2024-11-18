import styles from './page.module.scss'
import classNames from 'classnames/bind'
import FirstScreen from '@/components/main-page-components/first-screen/first-screen'
import DirectionsMain from '@/components/directions-components/directions-main/directions-main'
import Calc from '@/components/calc/calc'
import FormScreen from '@/components/main-page-components/form-screen/form-screen'
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen'
import Uslusgi from '@/components/main-page-components/uslugi-screen/uslugi'
import StagesScreen from '@/components/main-page-components/stages-screen/stages-screen'
import { Metadata } from 'next/types'
const cx = classNames.bind(styles)


export const metadata: Metadata = {
    title: 'Перевозки и логистика по всему миру – OUTLOOK LOGISTICS',
    description: 'Компания OUTLOOK LOGISTICS предлагает широкий спектр услуг по перевозке товаров по всему миру. Мы организуем международные и межрегиональные перевозки, включая автомобильные, морские и воздушные транспортировки. Высокое качество обслуживания, надежность и точность – гарантии успешной доставки.',
    keywords: 'перевозки, международная логистика, грузоперевозки, доставка товаров, транспортировка, логистические услуги, OUTLOOK LOGISTICS, логистика по направлениям, грузовые перевозки, автомобильные перевозки, морские перевозки, воздушные перевозки',
    metadataBase: new URL('https://outlook-logistics.ru'),
    openGraph: {
        type: 'website',
        url: 'https://outlook-logistics.ru/directions',
        description: '',
        siteName: 'OUTLOOK LOGISTICS',
        title: 'OUTLOOK LOGISTICS - Направления перевозок',
    }
}



const Page = () => {

    return (
        <main className={cx('page')}>
            <FirstScreen
                cover={false}
                mainText='OUTLOOK — НАПРАВЛЕНИЯ ПЕРЕВОЗОК'
                links={[
                    { text: 'О нас', href: '/about' },
                    { text: 'Услуги', href: '/uslugi' },
                    { text: 'Транспортный парк', href: '/transport' },
                ]}
            />
            <DirectionsMain />
            <div className={cx('page__wrapper')}>
                <Calc />
            </div>
            <Uslusgi />
            <StagesScreen />
            <ClientsScreen />
            <FormScreen />
        </main>
    )
}

export default Page;