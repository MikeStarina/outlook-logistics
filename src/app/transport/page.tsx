import React from 'react'
import styles from './page.module.scss'
import classNames from 'classnames/bind'
import TransportFeatures from '@/components/transport-page-components/transport-features/transport-features'
import FirstScreen from '@/components/main-page-components/first-screen/first-screen'
import FormScreen from '@/components/main-page-components/form-screen/form-screen'
import SliderScreen from '@/components/main-page-components/slider-screen/slider-screen'
import BreadcrumbsComponent from '@/components/breadcrumbs/breadcrumbs'
import { Metadata } from 'next/types'
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen'
import FeedbackScreen from '@/components/feedback/feedback-screen'
const cx = classNames.bind(styles)

export const metadata: Metadata = {
    title: "Транспортный парк логистической компании OUTLOOK LOGISTICS | Современные решения для бизнеса",
    description: "OUTLOOK LOGISTICS предлагает широкий транспортный парк для эффективной доставки грузов. Оперативность, надежность и безопасность на каждом этапе логистики.",
    keywords: "транспортный парк, логистика, OUTLOOK LOGISTICS, грузоперевозки, транспортные услуги, доставка, логистические решения",
    metadataBase: new URL('https://outlook-logistics.ru/transport'),
    openGraph: {
        type: 'website',
        url: 'https://outlook-logistics.ru/transport',
        description: 'Транспортно-логистическая компания OUTLOOK-LOGISTICS. Перевозки для бизнеса по России',
        siteName: 'OUTLOOK LOGISTICS',
        title: 'OUTLOOK LOGISTICS - Логистические услуги. Грузоперевозки для бизнеса',
    }
}

const Page: React.FC = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'Транспортно-логистическая компания OUTLOOK LOGISTICS',
            telephone: '8 (800) 201-00-73',
            address: [{
              '@type': 'PostalAddress',
              streetAddress: 'Софийская ул., 14, офис 309',
              addressLocality: 'Санкт-Петербург'
            }]
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
                { 
                  "@type": "ListItem",
                  position: 1,      
                  item: {
                    "@id": "https://outlook-logistics.ru",
                    "name": "Главная"
                  }
                },
                { 
                  "@type": "ListItem",
                  position: 2,      
                  item: {
                    "@id": "https://outlook-logistics.ru/transport",
                    "name": "Транспортный парк"
                  }
                },
            ]
          },
          {
            '@type': 'Website',
            url: 'https://outlook-logistics.ru',
          },
        ]
      }
    return (
        <main className={cx('page')}>
            <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    async
                />
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
            <FeedbackScreen />
            <ClientsScreen />
            <FormScreen />
        </main>
    )
}

export default Page;