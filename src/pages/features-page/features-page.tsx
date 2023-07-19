import React from 'react';
import styles from './features-page.module.css';
import { Navigate, useParams } from 'react-router';
import { useSelector } from '../..';
import FirstScreen from '../../components/main-page-components/first-screen/first-screen';
import FeaturesList from '../../components/feature-page-components/options-screen/features-list';
import ContactsScreen from '../../components/main-page-components/contacts-screen/contacts-screen';
import FormScreen from '../../components/main-page-components/form-screen/form-screen';
import ClientsScreen from '../../components/main-page-components/clients-screen/clients-screen';
import { Helmet } from 'react-helmet';





const FeaturesPage: React.FC = () => {


    const data = useSelector(store => store.services);
    const { id } = useParams();

    const filteredData = data.filter(item => item.url === id)[0];

    
    return (
        <>
        {filteredData ? (
        <main className={styles.page}>
            <Helmet>
                <title>{filteredData.metadata?.title}</title>
                <meta name="description" content={filteredData.metadata?.description} />
                <meta name="keywords" content={filteredData.metadata?.keywords} />
            </Helmet> 
            <FirstScreen />
            <FeaturesList />
            <section className={styles.screen}>

                <h1 className={styles.screen_title}>{filteredData.name}</h1>
                {filteredData?.description && filteredData.description.map((item, index) => (
                <p className={styles.paragraph} key={index}>
                    {item}
                </p>
                ))}
            </section>
            <ClientsScreen />
            <FormScreen />
            <ContactsScreen />

        </main>) : (<Navigate to='/404' replace/>)}
        </>
    )
}

export default FeaturesPage;