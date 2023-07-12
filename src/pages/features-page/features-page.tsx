import React from 'react';
import styles from './features-page.module.css';
import { useParams } from 'react-router';
import { useSelector } from '../..';
import FirstScreen from '../../components/main-page-components/first-screen/first-screen';
import FeaturesList from '../../components/feature-page-components/options-screen/features-list';
import ContactsScreen from '../../components/main-page-components/contacts-screen/contacts-screen';
import FormScreen from '../../components/main-page-components/form-screen/form-screen';
import ClientsScreen from '../../components/main-page-components/clients-screen/clients-screen';
import { Helmet } from 'react-helmet';





const FeaturesPage: React.FC = () => {


    const data = useSelector(store => store.services);
    const { id } = useParams();

    const filteredData = data.filter(item => item.url === id)[0];


    return (
        <main className={styles.page}>
            <Helmet>
                <title>{filteredData.metadata?.title}</title>
                <meta name="description" content={filteredData.metadata?.description} />
                <meta name="keywords" content={filteredData.metadata?.keywords} />
            </Helmet> 
            <FirstScreen />
            <FeaturesList />
            <section className={styles.screen}>

                <h1 className={styles.screen_title}>Автоперевозки — рассчитать стоимость</h1>
                <p className={styles.paragraph}>
                    Компания Outlook Logistics ежедневно организовывает автоперевозки 20 тонн грузовым транспортом,  перевозки фурой по области, России и ближайшему зарубежью - одно из ключевых направлений нашей компании, благодаря чему мы рады можем стать универсальным подрядчиком под ваши объемы.

                    Будем рады предоставить предоставить лучший сервис,  обеспечивая вас круглосуточной связью с менеджером, страхование груза на любую сумму, отсутствие перегона транспорта, из-за его наличия в каждом регионе, что позволяет нам устанавливать цену ниже конкурентов.
                    
                    На сайте вы можете рассчитать доставку грузов 20 тонн и более, достаточно указать пункты отправления и назначения, характеристики груза

                    Мы понимаем, что наши клиенты ценят время, а потому берем на себя все документальное оформление  перевозки
                    
                    Мы уже сотрудничали с такими компаниями как: Gazprom, Kamaz, РЖД, TATNEFT и др., и смогли завоевать их доверие, бесперебойной работой под ключ любой сложности.

                    Главной целью компании является доставка в срок, а также сохранность перевозимого груза на протяжении всей транспортировки. 

                    Остались вопросы — свяжитесь с нами по почте info@outlook-logistics.ru и мы проконсультируем вас.

                </p>

            </section>
            <ClientsScreen />
            <FormScreen />
            <ContactsScreen />

        </main>
    )
}

export default FeaturesPage;