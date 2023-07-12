import React from 'react';
import styles from './main-page.module.css';
import Helmet from 'react-helmet';


import FirstScreen from '../../components/main-page-components/first-screen/first-screen';
import FeaturesScreen from '../../components/main-page-components/features-screen/features-screen';
import CalcScreen from '../../components/main-page-components/calc-screen/calc-screen';
import StagesScreen from '../../components/main-page-components/stages-screen/stages-screen';
import AboutScreen from '../../components/main-page-components/about-screen/about-screen';
import ClientsScreen from '../../components/main-page-components/clients-screen/clients-screen';
import OptionsScreen from '../../components/main-page-components/options-screen/options-screen';
import BlogScreen from '../../components/main-page-components/blog-screen/blog-screen';
import FormScreen from '../../components/main-page-components/form-screen/form-screen';
import ContactsScreen from '../../components/main-page-components/contacts-screen/contacts-screen';


const MainPage: React.FC = () => {




    return (
        <main className={styles.page}>
            <Helmet>
                <title>Перевозка грузов от логистической компании в Санкт-Петербурге цены в outlook-logistics</title>
                <meta name='description' content='Перевозка грузов цена услуг в транспортной компании в Санкт-Петербурге Outlook. Оформить заявку на перевозку груза и рассчитать стоимость вы можете на сайте частной логистической компании.' />
                <meta name='keywords' content='Логистическая компания, перевозка грузов, санкт-петербург, оформить заявку, заказать, цены, стоимость, рассчитать, частная, сайт, услуга' />
            </Helmet>


            <FirstScreen />
            <FeaturesScreen />
            <CalcScreen />
            <StagesScreen />
            <AboutScreen />
            <ClientsScreen />
            <OptionsScreen />
            <BlogScreen />
            <FormScreen />
            <ContactsScreen />
        </main>
    )
}

export default MainPage;