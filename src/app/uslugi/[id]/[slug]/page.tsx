'use server'
import React from 'react';
import styles from './page.module.css';
import MainContainer from '@/components/container/main-container';
import { features } from '@/service/features';
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
import auto_cover from "../../../../public/auto_cover.jpg";
import zd_cover from "../../../../public/zd_cover.jpg";
import mixed_cover from "../../../../../public/mixed_cover.jpg";
import icon_logo_white from "../../../../public/icon_logo_white.svg";
import full_logo440px_whiteW from "../../../../../public/full_logo440px_whiteW.svg";
import Image from 'next/image';
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import ContactsScreen from '@/components/main-page-components/contacts-screen/contacts-screen';
import FormScreen from '@/components/main-page-components/form-screen/form-screen';

type Props = {
    params: { slug: string }
  }
   
  export async function generateMetadata(    
    { params }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
  
    const slug = params.slug;
    const feature = features.filter((item) => item?.slug === slug)[0];

  
    return {
      title: feature?.metaTitle,
      description: feature?.metaDescription,
      keywords: feature?.metaKeywords
    }
  }

const Page: React.FC<any> = ({ params }: { params: { slug: string } }) => {

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

    return (
     
        <MainContainer>
           <main className={styles.page}>
            <section className={styles.main_screen}>
              <Image
                src={cardCover}
                alt="фоновое изображение"
                className={styles.bg_image}
              />
              <div className={styles.title_wrapper}>
                <Image
                  src={full_logo440px_whiteW}
                  alt="логотип"
                  className={styles.title_logo}
                />
                  <div className={styles.line}></div>
                  <h1 className={styles.title}>{feature?.name}</h1>
              </div>
            </section>
            <section className={styles.text_screen}>
              <h2 className={styles.text_screen_title}>{feature?.name}</h2>
              {feature?.description && Array.isArray(feature.description) ?
                (feature.description.map((item, index) => (
                  <p className={styles.paragraph} key={index}>
                    {item}
                  </p>
              ))) : (
                //@ts-ignore
                <div className="" dangerouslySetInnerHTML={feature?.description}></div>
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
 

