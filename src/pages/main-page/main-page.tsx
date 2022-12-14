import React, { useRef, useState } from 'react';
import styles from './main-page.module.css';


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