import React from 'react';
import styles from './features-page.module.css';
import { useSelector } from '../..';
import FirstScreen from '../../components/main-page-components/first-screen/first-screen';
import OptionsScreen from '../../components/main-page-components/options-screen/options-screen';
import ContactsScreen from '../../components/main-page-components/contacts-screen/contacts-screen';
import FormScreen from '../../components/main-page-components/form-screen/form-screen';
import ClientsScreen from '../../components/main-page-components/clients-screen/clients-screen';





const FeaturesPage: React.FC = () => {

    const features = useSelector(store => store.features);

    return (
        <main className={styles.page}>
            <FirstScreen />
            <OptionsScreen features={features} />
            <ClientsScreen />
            <FormScreen />
            <ContactsScreen />

        </main>
    )
}

export default FeaturesPage;