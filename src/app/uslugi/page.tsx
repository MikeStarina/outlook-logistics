import React from "react";
import MainContainer from "@/components/container/main-container";
import UslugiScreen from "@/components/uslugi-page-components/uslugiScreen";
import ClientsScreen from "@/components/main-page-components/clients-screen/clients-screen";
import FormScreen from "@/components/main-page-components/form-screen/form-screen";
import ContactsScreen from "@/components/main-page-components/contacts-screen/contacts-screen";
import BreadcrumbsComponent from "@/components/breadcrumbs/breadcrumbs";
import SliderScreen from "@/components/main-page-components/slider-screen/slider-screen";
import StagesScreen from "@/components/main-page-components/stages-screen/stages-screen";
import styles from './page.module.scss';
import Calc from "@/components/calc/calc";






const Page: React.FC = () => {

    return (
        
            <MainContainer>
                <main className={styles.page}>
                    <div className={styles.wrapper}>
                        <BreadcrumbsComponent params={[{title: 'Главная', href: '/'}, {title: 'Услуги'}]} />
                    </div>                    
                    <UslugiScreen />
                    <div className={styles.calc_wrapper}>
                        <Calc />
                    </div>
                    <SliderScreen />
                    <StagesScreen />
                    <ClientsScreen />
                    <FormScreen />
                    <ContactsScreen />
                </main>
            </MainContainer>
        
       
    );
}

export default Page;