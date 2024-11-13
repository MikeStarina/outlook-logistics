import React from 'react';
import styles from './page.module.css';
import { Metadata } from 'next';
import MainContainer from '@/components/container/main-container';
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import ContactsScreen from '@/components/main-page-components/contacts-screen/contacts-screen';



  
export const metadata: Metadata = {
    title: "Контакты OUTLOOK LOGISTICS | Свяжитесь с нами для решения логистических задач",
    description: "Контактная информация компании OUTLOOK LOGISTICS. Узнайте, как связаться с нами для получения консультаций и организации перевозок.",
    keywords: "контакты OUTLOOK LOGISTICS, логистика, транспортные услуги, грузоперевозки, обратная связь, контактная информация",
    metadataBase: new URL('https://outlook-logistics.ru/contacts'),
    openGraph: {
        type: 'website',
        url: 'https://outlook-logistics.ru/contacts',
        description: 'Транспортно-логистическая компания OUTLOOK-LOGISTICS. Перевозки для бизнеса по России',
        siteName: 'OUTLOOK LOGISTICS',
        title: 'OUTLOOK LOGISTICS - Логистические услуги. Грузоперевозки для бизнеса',
    }
}

const ContactsPage: React.FC = () => {

    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'Транспортно-логистическая компания OUTLOOK LOGISTICS',
            telephone: '8 (800) 201-00-73',
            address: [{
              '@type': 'PostalAddress',
              streetAddress: 'Софийская ул., 14, офис 309',
              addressLocality: 'Санкт-Петербург'
            }]
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
                { 
                  "@type": "ListItem",
                  position: 1,      
                  item: {
                    "@id": "https://outlook-logistics.ru",
                    "name": "Главная"
                  }
                },
                { 
                  "@type": "ListItem",
                  position: 2,      
                  item: {
                    "@id": "https://outlook-logistics.ru/contacts",
                    "name": "Контакты"
                  }
                },
            ]
          },
          {
            '@type': 'Website',
            url: 'https://outlook-logistics.ru',
          },
        ]
      }
    return (
        <MainContainer>
            <main className={styles.page}>
            <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                    async
                />
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
            </main>
        </MainContainer>
        
    );
}

export default ContactsPage;