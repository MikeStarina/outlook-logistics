import React from 'react';
import styles from './features-page.module.css';

import FirstScreen from '../../components/main-page-components/first-screen/first-screen';
import OptionsScreen from '../../components/main-page-components/options-screen/options-screen';
import ContactsScreen from '../../components/main-page-components/contacts-screen/contacts-screen';
import FormScreen from '../../components/main-page-components/form-screen/form-screen';
import ClientsScreen from '../../components/main-page-components/clients-screen/clients-screen';





const FeaturesPage: React.FC = () => {

    return (
        <main className={styles.page}>
            <FirstScreen />
            <OptionsScreen />
            <ClientsScreen />
            <FormScreen />
            <ContactsScreen />

        </main>
    )
}

export default FeaturesPage;