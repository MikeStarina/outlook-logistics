import React from "react";
import styles from './page.module.css';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ContactsScreen from "@/components/main-page-components/contacts-screen/contacts-screen";
import FeaturesScreen from "@/components/main-page-components/features-screen/features-screen";
import FormScreen from "@/components/main-page-components/form-screen/form-screen";
import Calc from "@/components/calc/calc";




const Page: React.FC = () => {

    return (
        <main className={styles.calcPage}>
            <Header />
            <section className={styles.calcScreen}>
                <Calc />
            </section>            
            <FeaturesScreen />
            <FormScreen />
            <ContactsScreen />
            <Footer />
        </main>
    )
}

export default Page;