'use server'
import React from "react";
import MainContainer from "@/components/container/main-container";
import ClientsScreen from "@/components/main-page-components/clients-screen/clients-screen";
import FormScreen from "@/components/main-page-components/form-screen/form-screen";
import ContactsScreen from "@/components/main-page-components/contacts-screen/contacts-screen";
import { features } from "@/service/features";
import { services } from "@/service/services";
import Link from "next/link";
import auto_cover from "../../../../public/auto_cover.jpg";
import zd_cover from "../../../../public/zd_cover.jpg";
import mixed_cover from "../../../../public/mixed_cover.jpg";
import icon_logo_white from "../../../../public/icon_logo_white.svg";
import full_logo440px_whiteW from "../../../../public/full_logo440px_whiteW.svg";
import Image from "next/image";
import styles from "./page.module.css";
import gazelle from "../../../../public/features_covers/gazelle.jpg";
import fivetonn from "../../../../public/features_covers/fivetonn.jpg";
import fura from "../../../../public/features_covers/fura.jpg";
import trall from "../../../../public/features_covers/trall.jpg";
import ref from "../../../../public/features_covers/ref.jpg";
import danger from "../../../../public/features_covers/danger.jpg";
import teu from "../../../../public/features_covers/teu.webp";
import trall2 from "../../../../public/features_covers/trall2.jpg";
import zd_cont from "../../../../public/features_covers/zd_cont.jpg";
import zd_ww from "../../../../public/features_covers/zd_ww.jpg";
import zd_sng from "../../../../public/features_covers/zd_sng.jpg";
import zd_rf from "../../../../public/features_covers/zd_rf.jpg";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  //searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

  const id = params.id;
  const filteredService = services.filter((item) => item.url === id)[0];
  const { metadata } = filteredService;

  return {
    title: metadata?.title,
    description: metadata?.description,
    keywords: metadata?.keywords
  }
}


const Page: React.FC<any> = ({ params }: { params: { id: string } }) => {
  const filteredFeatures = features.filter(
    (item) => item!.serviceType === params.id
  );
  const filteredService = services.filter((item) => item.url === params.id)[0];
  const { metadata } = filteredService;
  let cover = mixed_cover;
  if (params.id === "avtomobilnye-perevozki") cover = auto_cover;
  if (params.id === "zheleznodorozhnye-perevozki") cover = zd_cover;

  return (
    
    <MainContainer>
      <main className={styles.page}>
      <section className={styles.main_screen}>
        <Image
          src={cover}
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
          <h1 className={styles.title}>{filteredService?.name}</h1>
        </div>
      </section>
      <section className={filteredFeatures.length !== 0 ? styles.features_screen : styles.features_screen_disabled}>
        {filteredFeatures &&
          filteredFeatures.map((item, index) => {
            let cardCover = auto_cover;
            if (item!.name === "АВТОПЕРЕВОЗКИ 1,5 ТОНН") cardCover = gazelle;
            if (item!.name === "АВТОПЕРЕВОЗКИ 5 ТОНН") cardCover = fivetonn;
            if (item!.name === "АВТОПЕРЕВОЗКИ 20 ТОНН") cardCover = fura;
            if (item!.name === "НЕГАБАРИТНЫЕ ПЕРЕВОЗКИ") cardCover = trall;
            if (item!.name === "РЕФРИЖЕРАТОРНЫЕ ПЕРЕВОЗКИ") cardCover = ref;
            if (item!.name === "ПЕРЕВОЗКА ОПАСНЫХ ГРУЗОВ") cardCover = danger;
            if (item!.name === "Автомобильные контейнерные перевозки")
              cardCover = teu;
            if (item!.name === "Перевозки тралом") cardCover = trall2;
            if (item!.name === "КОНТЕЙНЕРНЫЕ ПЕРЕВОЗКИ") cardCover = zd_cont;
            if (item!.name === "Международные ЖД перевозки") cardCover = zd_ww;
            if (item!.name === "Международные перевозки грузов СНГ") cardCover = zd_sng;
            if (item!.name === "ЖД перевозки по России") cardCover = zd_rf;

            return (
              item!.pagePosition === "primary" && (
                <div className={styles.services_block}>
                  <div className={styles.feature_card} key={index}>
                    <Link
                      href={`/uslugi/${params.id}/${item!.slug}`}
                      className={styles.feature_link}
                    >
                      <Image
                        src={icon_logo_white}
                        alt="логотип"
                        className={styles.logo}
                      />
                      <p className={styles.card_number}>0{index + 1}</p>
                      <Image
                        src={cardCover}
                        alt="обложка услуги"
                        className={styles.card_cover}
                      ></Image>
                      <div className={styles.card_title_wrapper}>
                        <p className={styles.card_title}>{item!.cardTitle}</p>
                        <p className={styles.card_title}>
                          <i>{item!.cardSubtitle}</i>
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
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
      <section className={styles.text_screen}>
        <h2 className={styles.text_screen_title}>{filteredService.name}</h2>
        {filteredService?.description &&
          filteredService.description.map((item, index) => (
            <p className={styles.paragraph} key={index}>
              {item}
            </p>
          ))}
      </section>
      <ClientsScreen />
      <FormScreen />
      <ContactsScreen />
      </main>
    </MainContainer>
    
  );
};

export default Page;
