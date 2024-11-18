import styles from './page.module.scss';
import classNames from 'classnames/bind';
import { getDirections } from '@/utils/constants';
import { Metadata } from 'next/types';
import FirstScreen from '@/components/main-page-components/first-screen/first-screen';
import Calc from '@/components/calc/calc';
import Uslusgi from '@/components/main-page-components/uslugi-screen/uslugi';
import FormScreen from '@/components/main-page-components/form-screen/form-screen';
import StagesScreen from '@/components/main-page-components/stages-screen/stages-screen';
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import DirectionsListing from '@/components/directions-components/directions-listing/directions-listing';
const cx = classNames.bind(styles);


export async function generateMetadata(
  
    { params }: { params: { type: string }},
  ): Promise<Metadata> {

    const { type } = params;
    if (type === 'city') {
        return {
            title: 'Автоперевозки и ЖД перевозки по городам – OUTLOOK LOGISTICS',
            description: 'OUTLOOK LOGISTICS предлагает надежные автоперевозки и ЖД перевозки по городам России и мира. Мы обеспечиваем доставку грузов в крупнейшие города с использованием современных транспортных решений. Гарантируем безопасность, своевременность и оптимальные цены на услуги по транспортировке.',
            keywords: 'автоперевозки по городам, ЖД перевозки, транспортировка грузов, логистика по городам, грузовые перевозки по городам, железнодорожные перевозки, доставка по городам, международные автоперевозки, грузоперевозки по России, доставка товаров автотранспортом, логистика городов, транспортные услуги по городам',
            metadataBase: new URL('https://outlook-logistics.ru'),
            openGraph: {
              title: 'Автоперевозки и ЖД перевозки по городам – OUTLOOK LOGISTICS',
              description: 'OUTLOOK LOGISTICS предлагает надежные автоперевозки и ЖД перевозки по городам России и мира. Мы обеспечиваем доставку грузов в крупнейшие города с использованием современных транспортных решений. Гарантируем безопасность, своевременность и оптимальные цены на услуги по транспортировке.',
              siteName: 'OUTLOOK LOGISTICS',
              url: `https://outlook-logistics.ru/directions/city`
            }
            
        }
    }

    return {
        description: 'OUTLOOK LOGISTICS предлагает надежные автоперевозки и ЖД перевозки по городам России и мира. Мы обеспечиваем доставку грузов в крупнейшие города с использованием современных транспортных решений. Гарантируем безопасность, своевременность и оптимальные цены на услуги по транспортировке.',
            keywords: 'автоперевозки по городам, ЖД перевозки, транспортировка грузов, логистика по городам, грузовые перевозки по городам, железнодорожные перевозки, доставка по городам, международные автоперевозки, грузоперевозки по России, доставка товаров автотранспортом, логистика городов, транспортные услуги по городам',
            metadataBase: new URL('https://outlook-logistics.ru'),
            openGraph: {
              title: 'Автоперевозки и ЖД перевозки по городам – OUTLOOK LOGISTICS',
              description: 'OUTLOOK LOGISTICS предлагает надежные автоперевозки и ЖД перевозки по городам России и мира. Мы обеспечиваем доставку грузов в крупнейшие города с использованием современных транспортных решений. Гарантируем безопасность, своевременность и оптимальные цены на услуги по транспортировке.',
              siteName: 'OUTLOOK LOGISTICS',
              url: `https://outlook-logistics.ru/directions/city`
            }
    }

  }



export default async function Page ({ params }: { params: { type: string }}) {

    const directions = await getDirections()
    const filteredArr = directions.filter(i => i.type === params.type);

    return (
        <main className={cx('page')}>
            <FirstScreen
                cover={false}
                mainText='OUTLOOK — ГОРОДА ПЕРЕВОЗОК'
                links={[
                    { text: 'О нас', href: '/about' },
                    { text: 'Услуги', href: '/uslugi' },
                    { text: 'Транспортный парк', href: '/transport' },
                ]}
            />
            {filteredArr && <DirectionsListing data={filteredArr} />}
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