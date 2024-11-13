import React from "react";
import MainContainer from "@/components/container/main-container";
import ClientsScreen from "@/components/main-page-components/clients-screen/clients-screen";
import FormScreen from "@/components/main-page-components/form-screen/form-screen";
import ContactsScreen from "@/components/main-page-components/contacts-screen/contacts-screen";
import { getServices, getFeatures } from "@/utils/constants";
import Link from "next/link";
import auto_cover from "../../../../public/auto_cover.jpg";
import zd_cover from "../../../../public/zd_cover.jpg";
import mixed_cover from "../../../../public/mixed_cover.jpg";
import Image from "next/image";
import styles from "./page.module.scss";
// import gazelle from "../../../../public/features_covers/gazelle.jpg";
// import fivetonn from "../../../../public/features_covers/fivetonn.jpg";
// import fura from "../../../../public/features_covers/fura.jpg";
// import trall from "../../../../public/features_covers/trall.jpg";
// import ref from "../../../../public/features_covers/ref.jpg";
// import danger from "../../../../public/features_covers/danger.jpg";
// import teu from "../../../../public/features_covers/teu.webp";
// import trall2 from "../../../../public/features_covers/trall2.jpg";
// import zd_cont from "../../../../public/features_covers/zd_cont.jpg";
// import zd_ww from "../../../../public/features_covers/zd_ww.jpg";
// import zd_sng from "../../../../public/features_covers/zd_sng.jpg";
// import zd_rf from "../../../../public/features_covers/zd_rf.jpg";
import FirstScreen from "@/components/main-page-components/first-screen/first-screen";
import BreadcrumbsComponent from "@/components/breadcrumbs/breadcrumbs";
import Calc from "@/components/calc/calc";
import StagesScreen from "@/components/main-page-components/stages-screen/stages-screen";
import SliderScreen from "@/components/main-page-components/slider-screen/slider-screen";
import { Metadata } from 'next'

type Props = {
  params: { id: string }
}
 
export async function generateMetadata(
  
  { params }: Props,
): Promise<Metadata> {
  const services = await getServices();
  const id = params.id;
  const filteredService = services.filter((item) => item.url === id)[0];
  const { metadata } = filteredService;

  return {
    title: metadata?.title,
    description: metadata?.description,
    keywords: metadata?.keywords,
    metadataBase: new URL('https://outlook-logistics.ru'),
    openGraph: {
      title: metadata?.title,
      description: metadata?.description,
      siteName: 'OUTLOOK LOGISTICS',
      url: `https://outlook-logistics.ru/uslugi/${id}`
    }
    
  }
}


const Page: React.FC<{ params: { id: string } }> = async ({ params }) => {

  
  const services = await getServices()
  const features = await getFeatures();
  const filteredFeatures = features.filter(
    (item) => item!.serviceType === params.id
  );
  const filteredService = services.filter((item) => item.url === params.id)[0];
  let cover = mixed_cover;
  if (params.id === "avtomobilnye-perevozki") cover = auto_cover;
  if (params.id === "zheleznodorozhnye-perevozki") cover = zd_cover;

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
                "@id": `https://outlook-logistics.ru/uslugi/${filteredService.url}`,
                "name": filteredService.name
              }
            },
        ]
      },
      {
        '@type': 'Website',
        url: `https://outlook-logistics.ru`,
      },
      {
        '@type': 'Product',
        description: filteredService.description,
        name: filteredService.name,
        offers: [
          {
            '@type': 'Offer',
            url: `https://outlook-logistics.ru/uslugi/${filteredService.url}`,
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
          filteredFeatures.map(i => ({
            '@type': 'ListItem',
            name: i.name,
            description: `Услуга ${i.name} Заказать`
          }))
        ]
      }
    ]
  }


  return (
    
    <MainContainer>
      <main className={styles.page}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    async
                />
        <div className={styles.breadcrumbs_wrapper}>
            <BreadcrumbsComponent
              params={[{title: 'Главная', href: '/'}, {title: 'Услуги', href: '/uslugi'}, {title: filteredService?.name}]}
            />
        </div>
      <section className={styles.main_screen}>
        <FirstScreen
          mainText={`OUTLOOK — ${filteredService?.name}`}
          links={[{text: 'Услуги', href: '/uslugi'}, {text: 'О нас', href: '/about'}]}
          cover={false}
        />
      </section>
      <section className={filteredFeatures.length !== 0 ? styles.features_screen : styles.features_screen_disabled}>
        {filteredFeatures && filteredFeatures.length > 0 &&
          filteredFeatures.map((item, index) => {
            // let cardCover = auto_cover;
            // if (item!.name === "АВТОПЕРЕВОЗКИ 1,5 ТОНН") cardCover = gazelle;
            // if (item!.name === "АВТОПЕРЕВОЗКИ 5 ТОНН") cardCover = fivetonn;
            // if (item!.name === "АВТОПЕРЕВОЗКИ 20 ТОНН") cardCover = fura;
            // if (item!.name === "НЕГАБАРИТНЫЕ ПЕРЕВОЗКИ") cardCover = trall;
            // if (item!.name === "РЕФРИЖЕРАТОРНЫЕ ПЕРЕВОЗКИ") cardCover = ref;
            // if (item!.name === "ПЕРЕВОЗКА ОПАСНЫХ ГРУЗОВ") cardCover = danger;
            // if (item!.name === "Автомобильные контейнерные перевозки")
            //   cardCover = teu;
            // if (item!.name === "Перевозки тралом") cardCover = trall2;
            // if (item!.name === "КОНТЕЙНЕРНЫЕ ПЕРЕВОЗКИ") cardCover = zd_cont;
            // if (item!.name === "Международные ЖД перевозки") cardCover = zd_ww;
            // if (item!.name === "Международные перевозки грузов СНГ") cardCover = zd_sng;
            // if (item!.name === "ЖД перевозки по России") cardCover = zd_rf;

            return (
              item!.pagePosition === "primary" && (
                <Link href={`/uslugi/${params.id}/${item!.slug}`} className={styles.feature_card}>
                  <p className={styles.card_number}>0{index + 1}</p>
                  <Image src={cover} alt='обложка услуги' className={styles.card_cover}></Image>                       
                  <div className={styles.card_title_wrapper}>
                      <p className={styles.card_title}>{item.cardTitle}</p>
                      <p className={styles.card_title}><i>{item.cardSubtitle}</i></p>
                  </div>
                </Link>
              )
            );
          })}
      </section>
      <section className={filteredFeatures.length !== 0 ? styles.secondary_services : styles.features_screen_disabled}>
        {filteredFeatures &&
          filteredFeatures.map((item, index) => {
            return (
              item!.pagePosition === "secondary" && (
                <Link
                  href={`/uslugi/${params.id}/${item!.slug}`}
                  className={styles.secondary_link}
                  key={index}
                >
                  <button className={styles.secondary}>
                    {item!.cardTitle}&nbsp;<i>{item!.cardSubtitle}</i>
                  </button>
                </Link>
              )
            );
          })}
      </section>
      <div className={styles.calc_wrapper}>
        <Calc />
      </div>
      <StagesScreen />
      <SliderScreen />
      <section className={styles.text_screen}>
        <h2 className={styles.text_screen_title}>{filteredService.name}</h2>
        {filteredService.description && '__html' in filteredService.description ?
          (<div className={styles.html_text} dangerouslySetInnerHTML={filteredService.description}></div>) : 
          filteredService?.description && Array.isArray(filteredService?.description) &&
          (filteredService.description.map((item, index) => (
            <p className={styles.paragraph} key={index}>
              {item}
            </p>
          )))
        }
      </section>
      
      <ClientsScreen />
      <FormScreen />
      <ContactsScreen />
      </main>
    </MainContainer>
    
  );
};

export default Page;
