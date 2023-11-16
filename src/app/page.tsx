import React from 'react';
import styles from './page.module.css';
import { Metadata } from 'next';
import MainContainer from '@/components/container/main-container';
import FirstScreen from '@/components/main-page-components/first-screen/first-screen';
import FeaturesScreen from '@/components/main-page-components/features-screen/features-screen';
import SliderScreen from '@/components/main-page-components/slider-screen/slider-screen';
import StagesScreen from '@/components/main-page-components/stages-screen/stages-screen';
import AboutScreen from '@/components/main-page-components/about-screen/about-screen';
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import OptionsScreen from '@/components/main-page-components/options-screen/options-screen';
import BlogScreen from '@/components/main-page-components/blog-screen/blog-screen';
import FormScreen from '@/components/main-page-components/form-screen/form-screen';
import ContactsScreen from '@/components/main-page-components/contacts-screen/contacts-screen';
import main from '../../public/og/main.jpg';


export const metadata: Metadata = {
    title: 'Перевозка грузов от логистической компании в Санкт-Петербурге цены в outlook-logistics',
    description: 'Перевозка грузов цена услуг в транспортной компании в Санкт-Петербурге Outlook. Оформить заявку на перевозку груза и рассчитать стоимость вы можете на сайте частной логистической компании.',
    keywords: 'Логистическая компания, перевозка грузов, санкт-петербург, оформить заявку, заказать, цены, стоимость, рассчитать, частная, сайт, услуга',
    openGraph: {
        images: [ 'https://i.ytimg.com/vi/maExxof-fYY/maxresdefault.jpg' ],
        title: 'OUTLOOK LOGISTICS | Главная'
        
    }
}

const MainPage: React.FC = () => {
    

    return (
        <main className={styles.page}>
      
            <MainContainer>
                <FirstScreen />
                <FeaturesScreen />  
                <SliderScreen />
                <StagesScreen />
                <AboutScreen />
                <ClientsScreen />
                <OptionsScreen />
                <BlogScreen />
                <FormScreen />
                <ContactsScreen />
            </MainContainer>
  
        </main>
    )
}

export default MainPage;