import React from "react";
import styles from './feature-layout-page.module.css'
import { useSelector } from "../..";
import { Navigate, useParams } from "react-router";
import FeatureTitleScreen from "../../components/feature-layout-page-components/first-screen/feature-title-screen";
import OptionsScreen from "../../components/main-page-components/options-screen/options-screen";
import ContactsScreen from "../../components/main-page-components/contacts-screen/contacts-screen";
import FormScreen from "../../components/main-page-components/form-screen/form-screen";
import ClientsScreen from "../../components/main-page-components/clients-screen/clients-screen";
import { Helmet } from "react-helmet";







const FeatureLayoutPage: React.FC = () => {

    const features = useSelector(store => store.features);
    const { slug } = useParams();


    const item = features.filter(elem => elem!.slug === slug)[0];




    return (
        <>
        { item ? (<main className={styles.page}>
            
           
            
            <Helmet>
                <title>{item?.metaTitle}</title>
                <meta name="description" content={item?.metaDescription} />
                <meta name="keywords" content={item?.metaKeywords} />
            </Helmet> 
            {item && <FeatureTitleScreen item={item} />}
            <OptionsScreen />
            {item?.description && item?.title && <section className={styles.screen}>

                <h1 className={styles.screen_title}>{item?.title}</h1>
                {item?.description && item.description.map((elem, index) => (
                    <p className={styles.paragraph} key={index}>{elem}</p>
                ))}

            </section>}
            
            <FormScreen />
            <ClientsScreen />
            <ContactsScreen />

        </main>): (<Navigate to='/404' />)}
        </>
    )
}


export default FeatureLayoutPage;