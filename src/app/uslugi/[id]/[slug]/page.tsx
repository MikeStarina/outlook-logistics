import React from 'react';
import styles from './page.module.scss';
import MainContainer from '@/components/container/main-container';
import { getFeatures, getServices } from '@/utils/constants';
import { Metadata, ResolvingMetadata } from 'next'
import gazelle from "../../../../../public/features_covers/gazelle.jpg";
import fivetonn from "../../../../../public/features_covers/fivetonn.jpg";
import fura from "../../../../../public/features_covers/fura.jpg";
import trall from "../../../../../public/features_covers/trall.jpg";
import ref from "../../../../../public/features_covers/ref.jpg";
import danger from "../../../../../public/features_covers/danger.jpg";
import teu from "../../../../../public/features_covers/teu.webp";
import trall2 from "../../../../../public/features_covers/trall2.jpg";
import zd_cont from "../../../../../public/features_covers/zd_cont.jpg";
import zd_ww from "../../../../../public/features_covers/zd_ww.jpg";
import zd_sng from "../../../../../public/features_covers/zd_sng.jpg";
import zd_rf from "../../../../../public/features_covers/zd_rf.jpg";
import mixed_cover from "../../../../../public/mixed_cover.jpg";
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import ContactsScreen from '@/components/main-page-components/contacts-screen/contacts-screen';
import FormScreen from '@/components/main-page-components/form-screen/form-screen';
import BreadcrumbsComponent from '@/components/breadcrumbs/breadcrumbs';
import StagesScreen from '@/components/main-page-components/stages-screen/stages-screen';
import SliderScreen from '@/components/main-page-components/slider-screen/slider-screen';
import FirstScreen from '@/components/main-page-components/first-screen/first-screen';


type Props = {
    params: { slug: string }
  }

  export const dynamicParams = false;
  export const generateStaticParams = async ({ params }: { params: { id: string }}) => {
    const features = await getFeatures();
    const data = features.filter((item) => item?.serviceType === params.id);
    return data.map((item) => ({slug: item?.slug}))
}
   
  export async function generateMetadata(    
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const features = await getFeatures();
    const slug = params.slug;
    const feature = features.filter((item) => item?.slug === slug)[0];

  
    return {
      title: feature?.metaTitle,
      description: feature?.metaDescription,
      keywords: feature?.metaKeywords,
      openGraph: {
        title: feature?.metaTitle,
        description: feature?.metaDescription,
        siteName: 'OUTLOOK LOGISTICS'
      }
    }
  }

const Page: React.FC<any> = async ({ params }: { params: { slug: string, id: string } }) => {
  const features = await getFeatures();
  const services = await getServices();
  const service = services.filter((item) => item?.url === params.id)[0];
  const feature = features.filter((item) => item?.slug === params.slug)[0];
  let cardCover = mixed_cover;
  if (feature!.name === "АВТОПЕРЕВОЗКИ 1,5 ТОНН") cardCover = gazelle;
  if (feature!.name === "АВТОПЕРЕВОЗКИ 5 ТОНН") cardCover = fivetonn;
  if (feature!.name === "АВТОПЕРЕВОЗКИ 20 ТОНН") cardCover = fura;
  if (feature!.name === "НЕГАБАРИТНЫЕ ПЕРЕВОЗКИ") cardCover = trall;
  if (feature!.name === "РЕФРИЖЕРАТОРНЫЕ ПЕРЕВОЗКИ") cardCover = ref;
  if (feature!.name === "ПЕРЕВОЗКА ОПАСНЫХ ГРУЗОВ") cardCover = danger;
  if (feature!.name === "Автомобильные контейнерные перевозки")
    cardCover = teu;
  if (feature!.name === "Перевозки тралом") cardCover = trall2;
  if (feature!.name === "КОНТЕЙНЕРНЫЕ ПЕРЕВОЗКИ") cardCover = zd_cont;
  if (feature!.name === "Международные ЖД перевозки") cardCover = zd_ww;
  if (feature!.name === "Международные перевозки грузов СНГ") cardCover = zd_sng;
  if (feature!.name === "ЖД перевозки по России") cardCover = zd_rf;

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
                "@id": "https://outlook-logistics.ru/uslugi",
                "name": "Услуги"
              }
            },
            { 
              "@type": "ListItem",
              position: 3,      
              item: {
                "@id": `https://outlook-logistics.ru/uslugi/${service.url}`,
                "name": service.name
              }
            },
            { 
              "@type": "ListItem",
              position: 4,      
              item: {
                "@id": `https://outlook-logistics.ru/uslugi/${service.url}/${feature.slug}`,
                "name": feature.name
              }
            },
        ]
      },
      {
        '@type': 'Website',
        url: 'https://outlook-logistics.ru',
      },
      {
        '@type': 'Product',
        description: feature.description,
        name: feature.name,
        offers: [
          {
            '@type': 'Offer',
            url: `https://outlook-logistics.ru/uslugi/${service.url}/${feature.slug}`,
            availability: 'http://schema.org/InStock',
            areaServed: 'Россия',
            acceptedPaymentMethod: [
              {
                '@type': 'PaymentMethod',
                url: 'http://purl.org/goodrelations/v1#VISA'
              },
              {
                '@type': 'PaymentMethod',
                url: 'http://purl.org/goodrelations/v1#MasterCard'
              },
              {
                '@type': 'PaymentMethod',
                url: 'http://purl.org/goodrelations/v1#Cash'
              },
            ],
            brand: [
              {
                '@type': 'Brand',
                name: 'Страна: Россия.'
              }
            ]
          }
        ]
      },
      {
        '@type': 'OfferCatalog',
        itemListElement: [
          features.map(i => {

            return i.name !== feature.name && {
            '@type': 'ListItem',
            name: i.name,
            description: `Услуга ${i.name} Заказать`
          }
          })
        ]
      }
    ]
  }

    return (
     
        <MainContainer>
          <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    async
                />
           <main className={styles.page}>
            <div className={styles.breadcrumbs_wrapper}>
            <BreadcrumbsComponent
              params={[
                {title: 'Главная', href: '/'},
                {title: 'Услуги', href: '/uslugi'},
                {title: service?.name, href: `/uslugi/${params.id}`},
                {title: feature?.name}
                ]}
            />
            </div>
            <section className={styles.main_screen}>
                <FirstScreen
                  mainText={feature?.name}
                  links={[
                    {text: 'Услуги', href: '/uslugi'},
                    {text: 'О нас', href: '/about'},
                    {text: 'Контакты', href: '/contacts'},
                  ]}
                  cover={false}
                />
            </section>
           
            <SliderScreen />
            <StagesScreen />
            <section className={styles.text_screen}>
              <h2 className={styles.text_screen_title}>{feature?.name}</h2>
              {feature?.description && Array.isArray(feature.description) ?
                (feature.description.map((item, index) => (
                  <p className={styles.paragraph} key={index}>
                    {item}
                  </p>
              ))) : (
                //@ts-ignore
                <div className={styles.html_text} dangerouslySetInnerHTML={feature?.description}></div>
              )}
            </section>
            <ClientsScreen />
           
            <FormScreen />            
            <ContactsScreen />
            
            </main>
        </MainContainer>
        
    );
}

export default Page;
 

