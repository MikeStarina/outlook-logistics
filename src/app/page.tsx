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
import FeedbackScreen from '@/components/feedback/feedback-screen';
const cx = classNames.bind(styles)



export const metadata: Metadata = {
    title: 'Перевозка грузов от логистической компании в Санкт-Петербурге цены в outlook-logistics',
    description: 'Перевозка грузов цена услуг в транспортной компании в Санкт-Петербурге Outlook. Оформить заявку на перевозку груза и рассчитать стоимость вы можете на сайте частной логистической компании.',
    keywords: 'Логистическая компания, перевозка грузов, санкт-петербург, оформить заявку, заказать, цены, стоимость, рассчитать, частная, сайт, услуга',
    metadataBase: new URL('https://outlook-logistics.ru'),
    openGraph: {
        type: 'website',
        url: 'https://outlook-logistics.ru',
        description: 'Транспортно-логистическая компания OUTLOOK-LOGISTICS. Перевозки для бизнеса по России',
        siteName: 'OUTLOOK LOGISTICS',
        title: 'OUTLOOK LOGISTICS - Логистические услуги. Грузоперевозки для бизнеса',
        images: '/opengraph-image.png'
    }
}

const MainPage: React.FC = () => {


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
        //   {
        //     "@type": "BreadcrumbList",
        //     itemListElement: [
        //         { 
        //           "@type": "ListItem",
        //           position: 1,      
        //           item: {
        //             "@id": "https://www.repinskiy24.ru/",
        //             "name": "Главная"
        //           }
        //         },
        //         { 
        //           "@type": "ListItem",
        //           position: 2,      
        //           item: {
        //             "@id": "https://www.repinskiy24.ru/cookery",
        //             "name": "Кулинария Шаляпин"
        //           }
        //         },
        //         { 
        //           "@type": "ListItem",
        //           position: 3,      
        //           item: {
        //             "@id": `https://www.repinskiy24.ru/catalog/${parentCategory.slug}`,
        //             "name": parentCategory.name
        //           }
        //         },
        //     ]
        //   },
          {
            '@type': 'Website',
            url: 'https://outlook-logistics.ru',
          },
        //   {
        //     '@type': 'Product',
        //     sku: product.sku,
        //     description: product.description,
        //     image: `${API_URL}${product.extra_properties.photo_file_path}`,
        //     category: parentCategory.name,
        //     name: product.name,
        //     priceCurrency: 'RUB',
        //     model: `Код товара: ${product.sku}`,
        //     offers: [
        //       {
        //         '@type': 'Offer',
        //         url: `https://repinskiy24.ru/cookery/${parentCategory.slug}/${product.slug}`,
        //         price: product.price,
        //         priceCurrency: 'RUB',
        //         availability: 'http://schema.org/InStock',
        //         areaServed: 'Курортный район Санкт-Петербурга',
        //         acceptedPaymentMethod: [
        //           {
        //             '@type': 'PaymentMethod',
        //             url: 'http://purl.org/goodrelations/v1#VISA'
        //           },
        //           {
        //             '@type': 'PaymentMethod',
        //             url: 'http://purl.org/goodrelations/v1#MasterCard'
        //           },
        //           {
        //             '@type': 'PaymentMethod',
        //             url: 'http://purl.org/goodrelations/v1#Cash'
        //           },
        //         ],
        //         brand: [
        //           {
        //             '@type': 'Brand',
        //             name: 'Страна: Россия.'
        //           }
        //         ]
        //       }
        //     ]
        //   },
        //   {
        //     '@type': 'OfferCatalog',
        //     itemListElement: [
        //       similarProducts.map(i => ({
        //         '@type': 'ListItem',
        //         name: i.name,
        //         image: `${API_URL}${i.extra_properties.photo_file_path}`,
        //         description: `Код товара: ${i.sku}, ${i.name} ${i.price} Заказать`
        //       }))
        //     ]
        //   }
        ]
      }

    return (
            <main className={cx('page')}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    async
                />
                    <Suspense fallback={null}>
                        <FirstScreen
                            mainText='OUTLOOK — надёжная логистика для бизнеса'
                            links={[{text: 'Услуги', href: '/uslugi'}, {text: 'Транспортный парк', href: '/transport'}, {text: 'О нас', href: '/about'}]}
                            cover={true}
                            subtitle='Cпециализируемся на авто и жд перевозках по России и СНГ'
                        />
                    </Suspense>
                    <Uslugi />
                    <SliderScreen />
                    <FeaturesScreen />  
                    <StagesScreen />
                    <FeedbackScreen />
                    <ClientsScreen />
                    <Suspense fallback={null}>
                        <FormScreen />
                    </Suspense>
            </main>
    )
}

export default MainPage;


/**
 * Мне нужно создать кое-какие вещи. Я делаю страницы про направления перевозок для сайта логистической компании OUTLOOK LOGISTICS и мне нужно помочь с сео продвижением. Я пришлю список направлений. для каждого из них нужно будет создать: 1. - метатеги title, description, keywords по всем правилам поисковых систем. 2. Заголовок и текст для каждой страницы. Текст должен быть от 600 до 1000 символов с пробелами. пожалуйста используй ключевые слова "перевозки", "автоперевозки", "грузоперевозки", "...для бизнеса" а также другие, которые сочтешь уместными (мы продвигаем в основном авто и жд перевозки). Результат выведи ввиде json с массивом объектов как этот: {
"from": "", //Город отправления
"to": "", // Город назначения
"meta_title": "", //здесь метатег title
"meta_keywords": "", //здесь метатег keywords
"meta_description": "", //здесь метатег description
"content": "", //сюда помести созданный текст и заголовок причем оберни из сразу в html. Заголовок в h1, а текст в p
"type": "city", //это не меняется
"slug": "" //Сюда придумай читаемый урл
}
 */