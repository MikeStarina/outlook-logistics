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
import { notFound } from 'next/navigation';
const cx = classNames.bind(styles);


export async function generateMetadata(
  
    { params }: { params: { type: string, slug: string }},
  ): Promise<Metadata> {

    const { slug } = params;
    const data = await getDirections();
    const filteredData = data.find(i => i.slug === slug);

    if (!filteredData) notFound();

    return {
            title: filteredData.meta_title,
            description: filteredData.meta_description,
            keywords: filteredData.meta_keywords,
            metadataBase: new URL('https://outlook-logistics.ru'),
            openGraph: {
              title: filteredData.meta_title,
              description: filteredData.meta_description,
              siteName: 'OUTLOOK LOGISTICS',
              url: `https://outlook-logistics.ru/directions/${filteredData.slug}`
            }
    }

}

export async function generateStaticParams() {
    const data = await getDirections();
    return data.map(i => ({ slug: i.slug }))
}




export default async function Page ({ params }: { params: { type: string, slug: string }}) {

    const directions = await getDirections()
    const item = directions.find(i => i.slug === params.slug);

    return (
        <main className={cx('page')}>
            <FirstScreen
                cover={false}
                mainText={`OUTLOOK — ${item?.from} - ${item?.to}`}
                links={[
                    { text: 'О нас', href: '/about' },
                    { text: 'Услуги', href: '/uslugi' },
                    { text: 'Транспортный парк', href: '/transport' },
                ]}
                titleType='p'
            />
            {item && <div className={cx('page__content')} dangerouslySetInnerHTML={{ __html: item?.content}}></div>}
            
            <Uslusgi />
            <div className={cx('page__wrapper')}>
                <Calc />
            </div>
            <StagesScreen />
            <ClientsScreen />
            <FormScreen />
        </main>
    )
}