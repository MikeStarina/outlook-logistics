import React from "react";
import styles from './about-page.module.css';
import AboutFirstScreen from "../../components/about-page-components/first-screen/about-first-screen";
import MainTextScreen from "../../components/about-page-components/main-text-screen/main-text-screen";
import TeamScreen from "../../components/about-page-components/team-screen/team-screen";
import FeedBackScreen from "../../components/about-page-components/feedback-screen/feedback-screen";
import ClientsScreen from "../../components/main-page-components/clients-screen/clients-screen";
import ContactsScreen from "../../components/main-page-components/contacts-screen/contacts-screen";
import OptionsScreen from "../../components/main-page-components/options-screen/options-screen";




const AboutPage: React.FC = () => {



    return (
        <main className={styles.page}>
           <AboutFirstScreen />
           <MainTextScreen />
           <TeamScreen />
           
           <OptionsScreen />
           <FeedBackScreen />
           <ClientsScreen />
           {/** lead */}
           <ContactsScreen />
           
        </main>
    )
}

export default AboutPage;