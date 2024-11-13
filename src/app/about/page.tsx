import React from 'react';
import styles from './page.module.scss';
import { Metadata } from 'next';
import MainContainer from '@/components/container/main-container';
import FeedBackScreen from '@/components/about-page-components/feedback-screen/feedback-screen';
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import ContactsScreen from '@/components/main-page-components/contacts-screen/contacts-screen';
import BreadcrumbsComponent from '@/components/breadcrumbs/breadcrumbs';
import FirstScreen from '@/components/main-page-components/first-screen/first-screen';
import ValuesScreen from '@/components/about-page-components/values/values-screen';
import FeaturesScreen from '@/components/main-page-components/features-screen/features-screen';
import FormScreen from '@/components/main-page-components/form-screen/form-screen';


export const metadata: Metadata = {
    title: "О компании OUTLOOK LOGISTICS | Логистические решения для вашего бизнеса",
    description: "OUTLOOK LOGISTICS – надежный партнер в сфере логистики и грузоперевозок. Узнайте больше о нашей истории, миссии и принципах работы.",
    keywords: "о компании OUTLOOK LOGISTICS, логистика, грузоперевозки, транспортные решения, миссия компании, история компании",
    metadataBase: new URL('https://outlook-logistics.ru/about'),
    openGraph: {
        type: 'website',
        url: 'https://outlook-logistics.ru/about',
        description: 'Транспортно-логистическая компания OUTLOOK-LOGISTICS. Перевозки для бизнеса по России',
        siteName: 'OUTLOOK LOGISTICS',
        title: 'OUTLOOK LOGISTICS - Логистические услуги. Грузоперевозки для бизнеса',
    }
}

const AboutPage = () => {

    return (
        <MainContainer>
            <main className={styles.page}>
                <div className= {styles.breadcrumbs_wrapper}>
                    <BreadcrumbsComponent
                        params={
                        [
                            {title: 'Главная', href: '/'},
                            {title: 'О нас', href: '/about'},
                        ]
                    }
                    />
                </div>
                <FirstScreen
                    mainText='OUTLOOK — О нас'
                    subtitle='Делаем больше других, чтобы перевозки были удобными и безопасными, а бизнес - честным и предсказуемым!'
                    cover={false}
                    links={[
                        {text: 'Контакты', href: '/contacts'},
                        {text: 'Услуги', href: '/uslugi'},
                    ]}
                />
                <FeedBackScreen />  
                <ValuesScreen />
                <FeaturesScreen />
                <ClientsScreen />
                <FormScreen />
                <ContactsScreen />
            </main>
        </MainContainer>
    );
}

export default AboutPage;