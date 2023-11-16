import React from 'react';
import styles from './page.module.css';
import { Metadata } from 'next';
import MainContainer from '@/components/container/main-container';
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import ContactsScreen from '@/components/main-page-components/contacts-screen/contacts-screen';

export const metadata: Metadata = {
    title: 'OUTLOOK LOGISTICS | КОНТАКТЫ',
    description: 'Ваш надежный логистический партнер',
}

const ContactsPage: React.FC = () => {

    
    return (
        <MainContainer>
            <section className={styles.page}>    
                <section className={styles.screen}>
                    <p className={styles.contacts_item}>ООО "ПЕРСПЕКТИВА"</p>
                    <p className={styles.contacts_item}>ИНН / КПП: 4706053435 / 781601001</p>
                    <p className={styles.contacts_item}>ОГРН: 1224700019114</p>
                    <p className={styles.contacts_item}>АДРЕС: 192236, РОССИЯ СЗФО, Г САНКТ-ПЕТЕРБУРГ, УЛ СОФИЙСКАЯ 14, ОФИС 903</p>
                    <p className={styles.contacts_item}>ТЕЛЕФОН: 8(800)201-00-73</p>
                    <p className={styles.contacts_item}>РЕЖИМ РАБОТЫ: ПН-ПТ, 9—18</p>
                </section>
                
                <ClientsScreen />
                <ContactsScreen />
            </section>
        </MainContainer>
        
    );
}

export default ContactsPage;