'use server'
import React from "react";
import MainContainer from "@/components/container/main-container";
import UslugiScreen from "@/components/uslugi-page-components/uslugiScreen";
import ClientsScreen from "@/components/main-page-components/clients-screen/clients-screen";
import FormScreen from "@/components/main-page-components/form-screen/form-screen";
import ContactsScreen from "@/components/main-page-components/contacts-screen/contacts-screen";
import styles from './page.module.css';






const Page: React.FC = () => {

    return (
        
        <MainContainer>
            <UslugiScreen />
            <ClientsScreen />
            <FormScreen />
            <ContactsScreen />
        </MainContainer>
       
    );
}

export default Page;