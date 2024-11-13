import React from "react";
import styles from './page.module.css';
import ContactsScreen from "@/components/main-page-components/contacts-screen/contacts-screen";
import FeaturesScreen from "@/components/main-page-components/features-screen/features-screen";
import FormScreen from "@/components/main-page-components/form-screen/form-screen";
import Calc from "@/components/calc/calc";
import BreadcrumbsComponent from "@/components/breadcrumbs/breadcrumbs";
import StagesScreen from "@/components/main-page-components/stages-screen/stages-screen";
import SliderScreen from "@/components/main-page-components/slider-screen/slider-screen";
import ClientsScreen from "@/components/main-page-components/clients-screen/clients-screen";




const Page: React.FC = () => {

    return (
        <main className={styles.calcPage}>
            <div className={styles.breadcrumbs_wrapper}>
                <BreadcrumbsComponent
                    params={
                        [
                            {title: 'Главная', href: '/'},
                            {title: 'Калькулятор', href: '/calculator'},
                        ]
                    }
                />
            </div>
            <section className={styles.calcScreen}>
                <Calc />
            </section>            
            <FeaturesScreen />
            <StagesScreen />
            <SliderScreen />
            <ClientsScreen />
            <FormScreen />
            <ContactsScreen />
        </main>
    )
}

export default Page;