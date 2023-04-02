import React from "react";
import styles from './feature-layout-page.module.css'
import { useSelector } from "../..";
import { useParams } from "react-router";
import FeatureTitleScreen from "../../components/feature-layout-page-components/first-screen/feature-title-screen";
import OptionsScreen from "../../components/main-page-components/options-screen/options-screen";
import ContactsScreen from "../../components/main-page-components/contacts-screen/contacts-screen";
import FormScreen from "../../components/main-page-components/form-screen/form-screen";
import ClientsScreen from "../../components/main-page-components/clients-screen/clients-screen";
import { Helmet } from "react-helmet";







const FeatureLayoutPage: React.FC = () => {

    const features = useSelector(store => store.features);
    const { id } = useParams();

    const item = features.filter(elem => String(elem?.id) === id)[0];

    

    return (
        <main className={styles.page}>
            <Helmet
                title={item?.htmlTitle}
                meta={[
                    {"name": "description", "content": `${item?.htmlDescription}`},
                ]}
            />
            {item && <FeatureTitleScreen item={item} />}
            <OptionsScreen />
            {item?.description && item?.textTitle && <section className={styles.screen}>

                <h1 className={styles.screen_title}>{item?.textTitle}</h1>
                <p className={styles.paragraph}>{item?.description}</p>

            </section>}
            <FormScreen />
            <ClientsScreen />
            <ContactsScreen />

        </main>
    )
}


export default FeatureLayoutPage;