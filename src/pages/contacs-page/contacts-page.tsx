import React from "react";
import styles from './contacts-page.module.css';
import ClientsScreen from "../../components/main-page-components/clients-screen/clients-screen";
import ContactsScreen from "../../components/main-page-components/contacts-screen/contacts-screen";






const ContactsPage: React.FC = () => {

    return (
         
        <main className={styles.page}>    
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
        </main>
        

    )
}

export default ContactsPage;